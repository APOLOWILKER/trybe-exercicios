import React, { Component } from 'react';
import UserName from './UserName';
import UserOtherInfo from './UserOtherInfo';

class Table extends Component {
  render() {
    const users = [
      {
          id: 102,
          name: "João",
          email: "joao@gmail.com",
          avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
          id: 77,
          name: "Amélia",
          email: "amelia@gmail.com",
          avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      },
      {
        id: 87,
        name: "Manel",
        email: "manel@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    }
  ];

    return ( 
      users.map(user => (
        <div>
          <UserName img={user.avatar} name={user.name}/>
          <UserOtherInfo  email={user.email} id={user.id} />
        </div>
      )))
  }
}

export default Table;