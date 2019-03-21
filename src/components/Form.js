import React, { Component } from 'react'
import todo from '../lib/todo-service'

class Form extends Component {
  state = {
    title: '',
    body: '',
  }

  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleBody = (event) => {
    this.setState({
      body: event.target.value
    })
  }

  handleClick = () => {
    const { addToList } = this.props;
    const { title, body } = this.state;
    const newTodo = { title, body }
    todo.createTodo(newTodo)
      .then((data) => {
       addToList(data)
      })
    this.setState({
      title: '',
      body: '',
    })
  }
  
  render() {
    // console.log('objectAdd', this.props)
    return (
      <div>
        <input type="text" onChange={this.handleTitle} value={this.state.title}></input>
        <textarea placeholder="Description" onChange={this.handleBody} value={this.state.body}></textarea>
        <button onClick={this.handleClick}>Add ToDo</button>
      </div>
    )
  }
}

export default Form;
