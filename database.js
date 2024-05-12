const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'wyr.h.filess.io',
    database: 'TTDD2_sanghopedo',
    port: '3307',
    user: 'TTDD2_sanghopedo',
    password: 'Acoteias2015!' ,
});

module.exports = connection;