import React, { Component } from 'react'


class UserOtherInfo extends Component {
  render() {
    const {email, id} = this.props
    return ( 
    <span> {email} {id} </span>
    )
  }
}

export default UserOtherInfo