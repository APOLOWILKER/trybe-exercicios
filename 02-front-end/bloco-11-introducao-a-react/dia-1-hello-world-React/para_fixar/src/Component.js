import React from 'react';
import './App.css';

const name = 'Apolo Wilker';
class DivName extends React.Component {
  render() {
    return(
      <div className="Myname">
      <h1> My name is {name}</h1>
      <p>Gosto de animes, livros e games</p>
      </div>
    )
  }
}

export default DivName;