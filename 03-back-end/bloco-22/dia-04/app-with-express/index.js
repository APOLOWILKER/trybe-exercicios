const express = require('express'); // importa o express

const app = express(); // instanciando o express.



app.get('/', (req, res) => {
  res.send('Hello world');
})

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Olá mundo!');
}
handleHelloWorldRequest();

app.listen(3000, () => console.log("App rodando na porta 3000"));