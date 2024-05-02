const express = require('express');
const connection = require('../database');
const router = express.Router();

var alreadyAttacked = false; //variable to check if a character has already attacked or not

router.post('/attack', (req, res) => { // attack from player 1 to opponent // attack from player 2 to opponent
    checkPlayerTurn(req, res, doAttack);
});

function doAttack(req, res, isPlayerTurn) { //attack after checking if it's the player's turn
    var attackerSlot = req.body.attackerSlot;
    var targetSlot = req.body.targetSlot;
    var playerID = req.body.player_id;
    var match_id = req.body.match_id;
    if (!isPlayerTurn) {
        res.send("Not your turn yet..");
        return;
    } else {
        if (alreadyAttacked == true) {
            res.send("This character already attacked");
            return;
        } else {
            connection.execute("SELECT caracter_id, caracter_attack FROM playermatchcharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id WHERE player_match_character_player_id = " + playerID + " AND player_match_character_match_id = " + match_id + " AND player_match_character_tile_id = " + attackerSlot, //select a character from player to attack
                function (error, rows, fields) {
                    if (error) {
                        res.send(error);
                    } else {
                        if (attackerSlot == 1 || attackerSlot == 2 || attackerSlot == 3) {
                            if (targetSlot == 4 || targetSlot == 5) {
                                console.log("Can't attack that target");
                                return;
                            }
                        }
                        var attackDamage = rows[0].caracter_attack;
                        console.log("It's: ", alreadyAttacked);
                        connection.execute("UPDATE playermatchcharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id SET player_match_character_character_current_HP = player_match_character_character_current_HP - " + attackDamage + " WHERE player_match_character_match_id = " + match_id + " AND player_match_character_player_id <> " + playerID + " AND player_match_character_tile_id = " + targetSlot, //if all goes well, after that we select a character from the opponent to be attacked and give him damage
                            function (error, rows, fields) {
                                if (error) {
                                    res.send(error);
                                } else {
                                    res.send(rows);
                                }
                            })
                        alreadyAttacked = true;
                    }
                })
            console.log("Now: ", alreadyAttacked);
        }
    }
}

router.get('/endTurn', (req, res) => { //ends the turn and passes to the other player
    var match_id = req.query.match_id;
    var playerID = req.query.player_id;

    connection.execute("SELECT matche_player1_id, matche_player2_id FROM matche WHERE matche_id = " + match_id,
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                var nextPlayer;
                if (playerID == rows[0].matche_player1_id) {
                    nextPlayer = rows[0].matche_player2_id;
                    console.log("Turn Switched!");
                } else if (playerID == rows[0].matche_player2_id) {
                    nextPlayer = rows[0].matche_player1_id;
                    console.log("Turn Switched!");
                }
                connection.execute("UPDATE matche SET matche_turn_player_id = " + nextPlayer + " WHERE matche_id = " + match_id,
                    function (error, rows, fields) {
                        if (error) {
                            console.error("Error executing UPDATE query:", error);
                            res.send(error);
                        } else {
                            res.send(rows);
                            alreadyAttacked = false;
                        };
                    })
            }
        });
});


function checkPlayerTurn(req, res, callback) { //is it the player's turn?
    var player_id = req.body.player_id;
    var match_id = req.body.match_id;
    connection.execute("SELECT COUNT(*) as count FROM matche where matche_id = ? AND matche_turn_player_id = ? ", [match_id, player_id],
        function (error, rows, fields) {
            if (error || rows[0].count == 0) {
                callback(req, res, false);
            } else {
                callback(req, res, true);
            }
        });
};

router.get('/resetHPCharacters', (req, res) => { //reset HP of characters from each match
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

module.exports = router;

