const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'v7l.h.filess.io',
    database: 'TTDD2_hungrymay',
    port: '3307',
    user: 'TTDD2_hungrymay',
    password: 'Acoteias2015!' ,
});

module.exports = connection;