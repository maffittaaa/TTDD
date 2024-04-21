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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));

app.post('/attack', (req, res) => { // character 1 from player attacking the character 1 from player 2
    var attackerSlot = req.body.attackerSlot;
    var targetSlot = req.body.targetSlot;
    var player1_id = req.body.player1_id;
    var match_id = req.body.match_id;
    var connection = mysql.createConnection(connectionOptions);
    console.log(attackerSlot);
    console.log(targetSlot);
    connection.connect();

    connection.query("SELECT caracter_id, caracter_attack FROM playermatchcharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id INNER JOIN matche ON player_match_character_match_id = matche_id WHERE player_match_character_player_id = matche_player1_id OR player_match_character_player_id = matche_player2_id player_match_character_player_id = AND player_match_character_tile_id = " + attackerSlot, //select a character from player to attack
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                var attackDamage = rows[0].caracter_attack;
                connection.query("UPDATE playermatchcharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id SET player_match_character_character_current_HP = player_match_character_character_current_HP - " + attackDamage + " WHERE player_match_character_match_id = " + match_id + " AND player_match_character_tile_id = " + targetSlot, //if all goes well, after that we select a character from the opponent to be attacked
                    function (error, rows, fields) {
                        if (error) {

                            res.send(error);
                        } else {
                            res.send(rows);
                        }
                        connection.end();
                    });
            }
        });

});

app.get('/resetHPCharacters', (req, res) => { //reset HP of character from player 2
    var match_id = req.query.match_id;
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();

    connection.query("UPDATE playermatchcharacter SET player_match_character_character_current_HP = 10 WHERE player_match_character_match_id = " + match_id,
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                res.send(rows);
            }
        });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// app.get('/getCharacterFromPlayer1', (req, res) => { //retrieve characters from player 1
//     var player1_id = req.query.player1_id
//     var connection = mysql.createConnection(connectionOptions);
//     connection.connect();

//     connection.query("SELECT caracter_name, caracter_attack, caracter_id FROM playermatchcharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id WHERE player_match_character_player_id = " + player1_id,
//         function (error, rows, fields) {
//             if (error) {
//                 res.send(error);
//             } else {
//                 res.send(rows);
//             }
//         });
//     connection.end();

// });

// app.get('/getCharacterFromPlayer2', (req, res) => { // retrieve characters from player 2
//     var player2_id = req.query.player2_id;
//     var connection = mysql.createConnection(connectionOptions);
//     connection.connect();

//     connection.query("SELECT caracter_name, caracter_attack, caracter_id FROM playermatchcharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id WHERE player_match_character_player_id = " + player2_id,
//         function (error, rows, fields) {
//             if (error) {
//                 res.send(error);
//             } else {
//                 res.send(rows);
//             }
//         });
//     connection.end();

// });


// app.get('/attackWithCharacter1', (req, res) => {
//     var player1_id = req.query.player1_id;
//     var connection = mysql.createConnection(connectionOptions); //connect to mysql
//     connection.connect();

//     connection.query("UPDATE playermatchcharacter SET player_match_character_character_current_HP = player_match_character_character_current_HP - 8 WHERE player_match_character_player_id = " + player1_id,
//         function (error, rows, fields) {
//             if (error) {
//                 res.send(error);
//             } else {
//                 res.send(rows);
//             }
//         });
// });

// app.get('/attackWithCharacter2', (req, res) => {
//     var player2_id = req.query.player2_id;
//     var connection = mysql.createConnection(connectionOptions); //connect to mysql
//     connection.connect();

//     connection.query("UPDATE playermatchcharacter SET player_match_character_character_current_HP = player_match_character_character_current_HP - 3 WHERE player_match_character_player_id = " + player2_id,
//         function (error, rows, fields) {
//             if (error) {
//                 res.send(error);
//             } else {
//                 res.send(rows);
//             }
//         });
// });


