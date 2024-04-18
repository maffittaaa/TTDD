const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

const connectionOptions = {
    host: 'localhost',
    user: 'root',
    password: 'Acoteias2015!',
    database: 'ttdd_database'
};

app.use(bodyParser.urlencoded({ extended: true })); // use body-parser as a middleware of our app
app.use(express.static("www")); //provide static files on the www folder
app.get("/characters", (req, res) => {
    var connection = mysql.createConnection(connectionOptions); //connect to mysql
    connection.connect();
    console.log("hello");
    connection.query("SELECT caracter_name, caracter_HP FROM caracter WHERE caracter_id = 1",
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                res.send(rows);
            }
        });
    connection.end();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});