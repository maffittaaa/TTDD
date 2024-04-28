const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Acoteias2015!',
    database: 'ttdd_database'
});

connection.connect((err) => {
    if (err) {
        console.log("Error connection to DB: " + err);
        return;
    }
    console.log("Connected to database");
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));

app.post('/attack', (req, res) => { // attack from player 1 to opponent // attack from player 2 to opponent
    var attackerSlot = req.body.attackerSlot;
    var targetSlot = req.body.targetSlot;
    var playerID = req.body.player_id;
    var match_id = req.body.match_id;
    const isItPlayersTurn = isPlayerTurn(res, match_id, playerID);
    if (!isItPlayersTurn) {
        return;
    } else {
        connection.execute("SELECT caracter_id, caracter_attack FROM playermatchcharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id WHERE player_match_character_player_id = " + playerID + " AND player_match_character_match_id = " + match_id + " AND player_match_character_tile_id = " + attackerSlot, //select a character from player to attack
            function (error, rows, fields) {
                if (error) {
                    res.send(error);
                } else {
                    var attackDamage = rows[0].caracter_attack;
                    connection.execute("UPDATE playermatchcharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id SET player_match_character_character_current_HP = player_match_character_character_current_HP - " + attackDamage + " WHERE player_match_character_match_id = " + match_id + " AND player_match_character_player_id <> " + playerID + " AND player_match_character_tile_id = " + targetSlot, //if all goes well, after that we select a character from the opponent to be attacked
                        function (error, rows, fields) {
                            if (error) {
                                res.send(error);
                            } else {
                                res.send(rows);
                            }
                        });
                }
            });
    }
});


app.get('/endTurn', (req, res) => { //ends the turn and passes to the other player
    var match_id = req.query.match_id;
    var playerID = req.query.player_id;

    connection.execute("SELECT matche_player1_id as player, matche_player2_id as opponent FROM matche WHERE matche_id = " + match_id,
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                var playerTurn = rows[0].player;
                var opponentTurn = rows[0].opponent;
                var nextPlayer;
                if (playerID == playerTurn) {
                    nextPlayer = opponentTurn;
                    console.log("Turn Switched!");
                } else if (playerID == opponentTurn) {
                    nextPlayer = playerTurn;
                    console.log("Turn Switched!");
                }
                connection.execute("UPDATE matche SET matche_turn_player_id = " + nextPlayer + " WHERE matche_id = " + match_id,
                    function (error, rows, fields) {
                        if (error) {
                            console.error("Error executing UPDATE query:", error);
                            res.send(error);
                        } else {
                            res.send(rows);
                        };
                    })
            }
        });
});


app.get('/resetHPCharacters', (req, res) => { //reset HP of characters from each match
    var match_id = req.query.match_id;
    connection.execute("UPDATE playermatchcharacter SET player_match_character_character_current_HP = 10 WHERE player_match_character_match_id = ?", [match_id],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                res.send(rows);
            }
        });
});

function isPlayerTurn(res, matchID, playerID) { //is it the player's turn?
    if (!matchID || !playerID) {
        console.log("No match or player found");
        return;
    }

    connection.execute("SELECT COUNT(*) as count FROM matche where matche_id = ? AND matche_turn_player_id = ? ", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                return res.send(error);
            }
            var turn = rows[0].count;
            if (rows && turn > 0) {
                res.send(rows);
                console.log("It's your turn!");
            } else {
                console.log("It's not your turn yet...");
            }
        });
};

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


