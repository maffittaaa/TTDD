const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'v7l.h.filess.io:3307',
    user: 'TTDD2_hungrymay',
    password: '23e62e80afc71206623187f11eade29fd4c80ecd!' ,
    database: 'TTDD2_hungrymay'
});

module.exports = connection;