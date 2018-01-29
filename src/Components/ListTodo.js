import React, { Component } from 'react';

export default class ListTodo extends Component {
    componentWillMount() {
        this.props.subscribeToNewTodos();
    }

    render() {
        const { todos } = this.props;

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => {
                            return <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.name}</td>
                                <td>{todo.description}</td>
                                <td>{todo.priority}</td>
                                <td>{todo.status}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        );
    }
}