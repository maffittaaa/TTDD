const mysql = require('mysql2');
const os = require('os');
const connection = mysql.createConnection({
    host: 'v7l.h.filess.io',
    user: 'TTDD2_hungrymay',
    port: 3307,
    password: '23e62e80afc71206623187f11eade29fd4c80ecd!' ,
    database: 'TTDD2_hungrymay'
});

module.exports = connection;