import React, { Component } from 'react';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    static defaultProps = {
        onAdd: () => null
    }

    getInitialState = () => ({
        id: '',
        name: '',
        description: '',
        priority: 0,
        status: ''
    });

    handleChange = (field, event) => {
        const { target: { value }} = event;
console.log(field, value);
        this.setState({
            [field]: value
        });
    }

    Save = (e) => {
        e.preventDefault();

        const { id, name, description, priority, status } = this.state;

        this.setState(this.getInitialState(), () => {
            this.props.onAdd({ id, name, description, priority, status });
        });
    }

    render() {
        return (
            <fieldset >
                <legend>Add new Todo</legend>
                <div>
                    <label>ID</label>
                    <input type="text" name="id" value={this.state.id} onChange={this.handleChange.bind(this, 'id')} />
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea rows="10" cols="20" name="description" value={this.state.description} onChange={this.handleChange.bind(this, 'description')} />
                </div>
                <div>
                    <label>Priority</label>
                    <input type="text" name="priority" value={this.state.priority} onChange={this.handleChange.bind(this, 'priority')} />
                </div>
                <div>
                    <label>Status</label>
                    <input type="text" name="status" value={this.state.status} onChange={this.handleChange.bind(this, 'status')} />
                </div>
                <input type="button" onClick={this.Save.bind(this)} value="Save" />
            </fieldset>
        );
    }
}
