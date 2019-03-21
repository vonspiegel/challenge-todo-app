import React, { Component } from 'react'

class Item extends Component {
  render() {
    // console.log('objectItem', this.props)
    const { title, body, index, toDelete, toEdit } = this.props
    return (
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
        <button onClick={() => {
          toDelete(index);
        }}>Delete</button>
        <button onClick={() => {
          toEdit(index);
        }}>Edit</button>
      </div>
    )
  }
}

export default Item;
