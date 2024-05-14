const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '4gy.h.filess.io',
    database: 'TTDD_dreamfeed',
    port: '3307',
    user: 'TTDD_dreamfeed',
    password: 'Acoteias2015!' ,
});

module.exports = connection;