import React, { Component } from 'react';
import './Home.css';
import Item from '../components/Item';
import AddTodo from '../components/AddTodo';


class Home extends Component {
  state = {
    todoList: [],
  };
  
  listTodos = () => {
    const { todoList } = this.state;
    return todoList.map((item, index) => {
      return <Item
        key={`${item} - ${index}`}
        title={item}
        index={index}
        toDelete={this.handleDelete}
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

  handleDelete = (item) => {
    const { todoList } = this.state;
    todoList.splice(item, 1);
    this.setState({
      todoList: [...todoList],
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