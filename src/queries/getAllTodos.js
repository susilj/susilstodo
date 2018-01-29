import gql from 'graphql-tag';

export default gql`
query {
    getAllTodos {
      __typename
      id
      name
      description
      priority
      status
    }
  }
`;