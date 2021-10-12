import React from "react";
import './Form.css'

class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      depoimento: '',
    };
  }


handleChange = (event) => {
  // console.log(event.target.value)
  this.setState({
    depoimento: event.target.value,
  });
}


  render() {
    return(
      <form className="form" action="">
        <h1> Treinamento de Forms </h1>
      <label>
                Abra seu coração!!
                <br />
        <textarea 
          name="depoimento" 
          value={this.state.depoimento}
          onChange={this.handleChange}
          cols="30" 
          rows="10"
          ></textarea>
      </label>
      <br/>
      <label>
        <select name="" id="">
          <option value="estado">Estado</option>
          <option value="evento">Evento</option>
          <option value="props">Props</option>
          <option value="hooks">Hooks</option>
        </select>
      </label>


      </form>
      
    )
  }
}

export default Form;