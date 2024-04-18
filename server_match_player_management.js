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

app.get('/getPlayerIDInM', (req, res) => {
    // var player1_id = req.query.player1_id;
    // var player2_id = req.query.player2_id;
    var matche_id = req.query.matche_id;
    // console.log("player2", player2_id);
    // console.log("player1", player1_id);
    console.log("matche" , matche_id);
    var connection = mysql.createConnection(connectionOptions); //connect to mysql
    connection.connect();

    connection.query("SELECT matche_player1_id, matche_player2_id FROM matche WHERE matche_id = " + matche_id,
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
