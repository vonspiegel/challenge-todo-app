import axios from 'axios';

class Todo {
  constructor() {
    this.todo = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true
    });
  };

  getAllTodos() {
    return this.todo.get('/todos')
    .then(({ data }) => {
        return data
    });
  };

  getTodo(id) {
    return this.todo.get(`/todos/${id}`)
    .then(({ data }) => {
      return data
    });
  };

  createTodo(todo) {
    const { title, body } = todo;
    return this.todo.post('/todos', { title, body })
    .then(({ data }) => {
      console.log('created data',data)
      return data;
    });
  };

  deleteTodo(id) {
    console.log(id)
    return this.todo.delete(`/todos/${id}`)
    .then(({ data }) => {
      return data;
    });
  };

  updateTodo(todo) {
    console.log('update', todo)
    return this.todo.put(`/todos/${todo._id}`, todo)
    .then(({ data }) => {
      return data;
    });
  };

};

const todo = new Todo();

export default todo;