const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const connectionOptions = {
    host: 'localhost',
    user: 'root',
    password: 'Acoteias2015!',
    database: 'ttdd_database'
};

app.use(bodyParser.urlencoded({ extended: true })); // use body-parser as a middleware of our app
app.use(express.static("www")); //provide static files on the www folder

app.get('/getMatch', (req, res) => {
    // console.log(req);
    // console.log("ola");
    var match_id = req.query.match_id;
    var connection = mysql.createConnection(connectionOptions); //connect to mysql
    connection.connect();

    connection.query("SELECT * FROM matche WHERE matche_id = " + match_id,
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                res.send(rows);
                // console.log(rows);
            }
        });
    connection.end();

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});