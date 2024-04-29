const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Acoteias2015!',
    database: 'ttdd_database'
});

module.exports = connection;