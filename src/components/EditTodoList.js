import React, { Component } from 'react'

class EditTodoList extends Component {
  state = {
    editInput: this.props.todo.name,
  };

  handleInput = (event) => {
    this.setState({
      editInput:event.target.value,
    });
  };

  render() {
    const { editInput } = this.state;
    const { updateTodo,index } = this.props;
    return (
      <li>
        <div>
          <div>
            <input type="text" value={editInput} onChange={this.handleInput}/>
          </div>
          <div>
            <button onClick={() => { updateTodo(index, editInput) }}>Save</button>
          </div>
        </div>
      </li>
    );
  };
};

export default EditTodoList;