// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   user: 'root',
//   password: '',
//   host: 'localhost',
//   database: 'model_example'
// });

// module.exports = connection;

    // models/connection.js

    const mysql = require('mysql2/promise');

    const connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'senha123',
        database: 'model_example' });

    module.exports = connection;