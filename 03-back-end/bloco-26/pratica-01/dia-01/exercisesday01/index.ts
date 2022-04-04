const readline = require('readline-sync');

const scripts = [

  { name: 'converter metragem', script: './length' },
  { name: 'conversão de massa', script: './mass' },
  { name: 'converter a capacidade', script: './capacity' },
  { name: 'converter a área', script: './area' },
  { name: 'converter o volume', script: './volume' }
];

const scriptNames = scripts.map(item => item.name);

const choice = readline.keyInSelect(scriptNames, 'Escolha um número para executar o script de conversão de unidade', { cancel: 'SAIR'});

if(choice === -1) console.log('Saindo!');
else require(scripts[choice].script);