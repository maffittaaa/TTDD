const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'nuj.h.filess.io',
    database: 'TTDD_whereants',
    port: '3307',
    user: 'TTDD_whereants',
    password: 'Acoteias2015!' ,
});

module.exports = connection;