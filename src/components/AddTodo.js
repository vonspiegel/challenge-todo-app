import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    todoInput: '',
  }

  handleInput = (event) => {
    this.setState({
      todoInput: event.target.value
    })
  }

  handleCLick = () => {
    const { addToList } = this.props;
    const { todoInput } = this.state;
    addToList(todoInput);
    this.setState({
      todoInput: '',
    })
  }
  
  render() {
    console.log('objectAdd', this.props)
    return (
      <div>
        <input type="text" onChange={this.handleInput}></input>
        <button onClick={this.handleCLick}>Add ToDo</button>
      </div>
    )
  }
}

export default AddTodo;
