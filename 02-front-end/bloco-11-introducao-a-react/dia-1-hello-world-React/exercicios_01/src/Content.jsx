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

    const LisConteudos = conteudos.map((cont, id) => 
    <li key={`${cont} ${id}`} className="conteudos">  O conteúdo é: {cont.conteudo}
    Status: {cont.status}
    Bloco: {cont.bloco} </li>
    );
    return (
      <div>
      <ul  className="lista-conteudos"> {LisConteudos}  </ul>
      </div>
    )
  }
}


export default Content;