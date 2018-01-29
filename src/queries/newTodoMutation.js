import gql from 'graphql-tag';

export default gql`
    mutation add($id: ID!, $name: String, $description: String, $priority: Int, $status: TodoStatus) {
        addTodo(
            id: $id
            name: $name
            description: $description
            priority: $priority
            status:$status
        ) {
            __typename
            id
            name
            description
            priority
            status
        }
    }
`;