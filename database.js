const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'bik.h.filess.io',
    database: 'TTDD_containhat',
    port: '3307',
    user: 'TTDD_containhat',
    password: 'Acoteias2015!',
});

module.exports = connection;