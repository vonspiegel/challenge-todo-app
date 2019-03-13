import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import './Home.css';
import todo from '../lib/todo-service';
import EditTodoList from '../components/EditTodoList';


class Home extends Component {
  state = {
    todoList: [],
    editIndex: '',
  };

  handleCreateTodo = (props) => {
    console.log('create', props)
    todo.createTodo({ user: this.props.user})
      .then((newTodo) => {
        let newTodoList = [...this.state.todoList,newTodo];
        this.setState({
         TodoList: newTodoList,
       });
    });
  };

  handleDeleteTodo = (todoItem) => {
    todo.deleteCv(todoItem._id)
    .then(() => {
      this.fetchTodos()
    });
  };

  fetchTodos = () => {
    const { user } = this.props;
    todo.getTodos(user)
      .then((todos) => {
        this.setState({
          todoList: todos,
      });
    });
  };

  componentDidMount(){
    this.fetchTodos();
  };

  handleEditTodo = (index) => {
    this.setState({
      editIndex: index,
    });
  };

  handleUpdateTodo = (index, editInput) => {
    const { todoList } = this.state;
    todoList[index].name = editInput
    todo.updateCv(todoList[index])
    .then(() => {
      this.fetchTodos()
      this.setState({
        editIndex: '',
      });
    });
  };

  listTodos = () => {
    const { todoList, editIndex } = this.state;
    return (
      <div>
      <ul>
        {
          todoList.map((todo,index) => {
            if(editIndex !== index) {
              return <TodoList
                key={index}
                todo={todo}
                index={index}
                deleteTodo={this.handleDeleteTodo}
                editTodo={this.handleEditTodo}
              />
              
              
            } 
            else {
              return <EditTodoList
                key={index}
                todo={todo}
                index={index}
                updateCv={this.handleUpdateTodo}
              />
            }
          })
        }
      </ul>
    </div>
    );
  };

  render() {
    return (
      <div>
      
        <button onClick={this.handleCreateTodo}>Add Todo</button>
        { this.listTodos() }
      </div>
    );
  };
};

export default Home;