import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {

  handleDeleteTodo = () => {
    this.props.deleteTodo(this.props.todo)
  };

  render() {
    const { index, editCv } = this.props;
    const { todo } = this.props;
    return (
      <li>
        <div>
          <div>
            <h3><a href={`/edit/${todo._id}`}>{todo.name}</a></h3>
          </div>
          <div>
            <button onClick={() => { editCv(index) }}>Edit</button>
            <button onClick={this.handleDeleteCV}>Delete</button>
          </div>
        </div>
      </li>
    );
  };
};


export default TodoList;