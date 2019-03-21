import React, { Component } from 'react'
import todo from '../lib/todo-service';

class Edit extends Component {
  state = {
    title: this.props.title,
    body: this.props.body,
    index: this.props.index,
  }

  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleBody = (event) => {
    this.setState({
      body: event.target.value
    })
  }

  handleClick = () => {
    const { title, body, index } = this.state
    this.props.toSave(title, body, index)
  }

  render() {
    // console.log('state', this.state.title)
    return (
      <div>
        <input onChange={this.handleTitle} value={this.state.title} type="text"/>
        <input onChange={this.handleBody} value={this.state.body} type="text"/>
        <button onClick={this.handleClick}>Save</button>
      </div>
    )
  }
}

export default Edit;