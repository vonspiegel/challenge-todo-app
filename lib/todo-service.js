import axios from 'axios';

class Todo {
  constructor() {
    this.todo = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true
    });
  };

  getTodos(user) {
    return this.todo.get('/todos',{user})
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
    const { name, user } = todo;
    return this.todo.post('/todos', {name, user})
    .then(({ data }) => {
      return data;
    });
  };

  deleteTodo(id) {
    return this.todo.delete(`/todos/${id}`)
    .then(({ data }) => {
      return data;
    });
  };

  // updateCv(cv) {
  //   return this.cv.put(`/todos/${todo._id}`, todo)
  //   .then(({ data }) => {
  //     return data;
  //   });
  // };

  me(body) {
    return this.todo.get('/todos')
    .then(response => response.data)
  };
};

const cv = new Cv();

export default cv;