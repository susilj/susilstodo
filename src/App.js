import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { graphql, ApolloProvider, compose } from 'react-apollo';
import awsconfig from './aws-exports';
import AllTodosQuery from './queries/getAllTodos';
import NewTodoMutation from './queries/newTodoMutation';
import NewTodoSubscription from './queries/newTodoSubscription';
import ListTodo from './Components/ListTodo';
import AddTodo from './Components/AddTodo';

const client = new AWSAppSyncClient({
  url: awsconfig.ENDPOINT,
  region: awsconfig.region,
  auth: {
    type: awsconfig.authenticationType,
    apiKey: awsconfig.apiKey
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
            <TodoWithData />
            {/* <AddTodo /> */}
            <NewTodoWithData />
        </div>

      </div>
    );
  }
}

const TodoWithData = compose(
  graphql(AllTodosQuery, {
    // options: (props) => {
    //   fetchPolicy: 'cache-and-network'
    // },
    props: (props) => ({
      todos: props.data.getAllTodos,
      subscribeToNewTodos: params => {
        props.data.subscribeToMore({
          document: NewTodoSubscription,
          updateQuery: (prev, { subscriptionData: { data: { addedTodo } } }) => ({
            ...prev,
            getAllTodos: [addedTodo, ...prev.getAllTodos.filter(todo => todo.id !== addedTodo.id)]
          })
        })
      }
    })
  })
)(ListTodo)

const NewTodoWithData = graphql(NewTodoMutation, {
  props: (props) => ({
    onAdd: todo => props.mutate({
      variables: todo,
      optimisticResponse: () => ({ addTodo: { ...todo, __typename: 'Todo', version: 1 } }),
    })
  }),
  options: {
    refetchQueries: [{ query: AllTodosQuery }],
    update: (dataProxy, { data: { addTodo } }) => {
      const query = AllTodosQuery;
      const data = dataProxy.readQuery({ query });

      data.getAllTodos.push(addTodo);

      dataProxy.writeQuery({ query, data });
    }
  }
})(AddTodo);

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);

export default WithProvider;
// export default App;
