import React, { Component } from 'react'

class Item extends Component {
  render() {
    console.log('objectItem', this.props)
    const { title, index, toDelete } = this.props
    return (
      <div>
        <h4>{title}</h4>
        <textarea placeholder="Description"></textarea>
        <button onClick={() => {
          toDelete(index);
        }}>Del</button>
      </div>
    )
  }
}

export default Item;
