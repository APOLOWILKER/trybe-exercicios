import React, { Component } from 'react'
import './userName.css'


class UserName extends Component {
  render() {
    // const name = this.props.name
    const {name, img} = this.props

    return ( 

    <div>  
      <div>
        <img src={img} alt={name} />
      </div>
      <span className='name'>
        {name}: 
      </span>
    </div>
    )
  }
}

export default UserName