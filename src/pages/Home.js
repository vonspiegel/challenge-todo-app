import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import './Home.css';
import todo from '../lib/todo-service';
import EditTodoList from '../components/EditTodoList';
import Item from '../components/Item';
import AddTodo from '../components/AddTodo';


class Home extends Component {
  state = {
    todoList: ['primero', 'segundo'],
  };
  
  listTodos = () => {
    const { todoList } = this.state;
    return todoList.map((item, index) => {
      return <Item
        key={`${item} - ${index}`}
        title={item}
        index={index}
      />
    })
  }

  handleClick = (item) => {
    const { todoList } = this.state;
    const newTodo = [...todoList, item];
    this.setState({
      todoList: newTodo,
    })
  }

  render() {
    return (
      <div>
        {this.listTodos()}
        <AddTodo addToList={this.handleClick}/>
      </div>
    )
  }
};

export default Home;