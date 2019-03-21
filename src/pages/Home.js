import React, { Component } from 'react';
import './Home.css';
import Item from '../components/Item';
import Form from '../components/Form';
import Edit from '../components/Edit';
import todo from '../lib/todo-service';


class Home extends Component {
  state = {
    todoList: [],
    editIndex: '',
  };
  
  listTodos = () => {
    const { todoList } = this.state;
    console.log('todoList', todoList)
    return todoList.map((item, index) => {
      // console.log('object',this.state.editIndex)
      if (index === this.state.editIndex) {
        return <Edit 
          key={`${item.title} - ${index}`}
          title={item.title}
          body={item.body}
          index={index}
          toDelete={this.handleDelete}
          toSave={this.handleSaveClick}
        />
      } else {
        return <Item
          key={`${item.title} - ${index}`}
          title={item.title}
          body={item.body}
          index={index}
          toDelete={this.handleDelete}
          toEdit={this.handleEditClick}
        />
      }
    })
  }

  handleAddClick = (item) => {
    const { todoList } = this.state;
    const newTodo = [...todoList, item];
    console.log('add todoList',newTodo)
    this.setState({
      todoList: newTodo,
    })
  }

  handleEditClick = (index) => {
    this.setState({
      editIndex: index,
    })
  }

  handleSaveClick = (title, body, editIndex) => {
    const { todoList } = this.state;
    let newTodoList = []
    todoList.forEach((item, index) => {
      if (editIndex === index) {
        const newItem = item;
        newItem.title = title;
        newItem.body = body;
        newTodoList = [...newTodoList, newItem]
      } else {
        newTodoList = [...newTodoList, item]
      }
    })
    console.log('title', title,body)
    todo.updateTodo(newTodoList[editIndex]);
    this.setState({
      todoList: newTodoList,
      editIndex: '',
    })
  }

  handleDelete = (index) => {
    const { todoList } = this.state;
    // console.log('delete before todoList',todoList)
    todo.deleteTodo(todoList[index]._id)
    todoList.splice(index, 1);
    // console.log('delete todoList',todoList)
    this.setState({
      todoList: [...todoList],
    })
  }

  componentDidMount() {
    todo.getAllTodos()
    .then((data) => {
      this.setState({
        todoList: data
      });
    });
  };

  render() {
    console.log('render todoList',this.state.todoList)
    return (
      <div>
        {this.listTodos()}
        <Form addToList={this.handleAddClick}/>
      </div>
    )
  }
};

export default Home;