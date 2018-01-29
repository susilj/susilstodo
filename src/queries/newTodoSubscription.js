import gql from 'graphql-tag';

export default gql`
    subscription NewTodoSub {
        addedTodo {
            __typename
            id
            name
            description
            priority
            status
        }
    }
`;