const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '75e.h.filess.io',
    database: 'TTDD_hidejoydo',
    port: '3307',
    user: 'TTDD_hidejoydo',
    password: 'Acoteias2015!' ,
});

module.exports = connection;