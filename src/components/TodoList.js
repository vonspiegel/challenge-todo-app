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
        <div className="cv-list-container">
          <div className="cv-list-title">
            <h3><a href={`/edit/${todo._id}`}>{todo.name}</a></h3>
          </div>
          <div className="cv-list-btns">
            <button className="cv-list-btn edit-btn" onClick={() => { editCv(index) }}><i className="fas fa-edit"></i></button>
            <button className="cv-list-btn delete-btn" onClick={this.handleDeleteCV}><i className="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </li>
    );
  };
};


export default TodoList;