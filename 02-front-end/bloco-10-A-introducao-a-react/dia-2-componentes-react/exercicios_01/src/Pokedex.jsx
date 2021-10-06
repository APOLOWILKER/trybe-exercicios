import React from "react";
import Data from "./Data";
import Pokemon from "./Pokemon";

import './index.css';

class Pokedex extends React.Component {
  render(){
    //nome do pokemon + tipo do pokemon + peso medio do pokemon + imagem do pokemon.
    return(
      <div className="divPai">
        { Data.map((Element) => 
          <Pokemon key={Element.id} pokeinfo={Element}/>
        )}
      </div>
    )
  }
}

export default Pokedex;