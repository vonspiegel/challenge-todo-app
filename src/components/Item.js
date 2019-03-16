import React, { Component } from 'react'

class Item extends Component {
  
  
  render(props) {
    console.log('object', this.props)
    const { title } = this.props
    return (
      <div>
        <h4>{title}</h4>
        <textarea placeholder="Description"></textarea>
        <button>Del</button>
      </div>
    )
  }
}

export default Item;
