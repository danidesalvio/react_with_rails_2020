import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';

class TodoForm extends Component {
  state = { title: '', complete: false }

  componentDidMount(){
      if(this.props.id) {
          const { title, complete } =this.props
          this.setState({ title, complete })
      }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.id) {
        //update action
        this.props.updateTodo(this.props.id, this.state)
        this.props.toggleForm()
    } else {
        //add action
        this.props.addTodo(this.state)
    }
    this.setState({ title: '', complete: false })
  }


  render() {
      const {title, complete } = this.state
      return(
          <Form onSubmit={this.handleSubmit}>
              <Form.Input
                label='Title:'
                required
                name='title'
                value={title}
                onChange={this.handleChange}
              />
              <Checkbox
                defaultChecked={complete}
                onClick={() => this.setState({ complete: !complete })}
              />
              <Form.Button>
                  Submit
              </Form.Button>
          </Form>
      )
  }

}

export default TodoForm;