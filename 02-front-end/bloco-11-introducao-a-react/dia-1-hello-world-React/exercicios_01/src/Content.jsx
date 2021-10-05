import React from "react";

class Content extends React.Component{
  
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    const LisConteudos = conteudos.map((cont) => 
    `O conteúdo é: ${cont.conteudo}
    Status: ${cont.status}
    Bloco: ${cont.bloco}`
    );
    return (
      <div>
      <ul key="" className="lista-conteudos"> <li className="conteudos">{LisConteudos} </li> </ul>
      </div>
    )
  }
}


export default Content;