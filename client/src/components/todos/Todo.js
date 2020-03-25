import React, { Component} from 'react';
import TodoForm from './TodoForm';
import { Button } from 'semantic-ui-react';

class Todo extends Component {
    state = { showForm: false }

    toggleForm = () => this.setState({ showForm: !this.state.showForm })

    render() {
        const { title, complete, id } = this.props
        const { showForm } = this.state
        return(
            <>
            <Button onClick={this.toggleForm}>
                Edit
            </Button>
            <Button onClick={() => this.props.deleteTodo(id)}>
                Delete
            </Button>
            {
               showForm ?
                <TodoForm {...this.props} toggleForm={this.toggleForm} />
               :
               <>
                <h1>Title: {title}</h1>
                <p>Complete: {`${complete}`}</p>
               </>
            }
            
            </>
        )
    }
}
export default Todo;