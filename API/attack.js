const express = require('express');
const connection = require('../database');
const router = express.Router();

router.post('/attack', (req, res) => { // attack from player 1 to opponent // attack from player 2 to opponent
    checkPlayerTurn(req, res, doAttack);
});

function doAttack(req, res, isPlayerTurn) { //attack after checking if it's the player's turn
    var attackerSlot = req.body.attackerSlot;
    var targetSlot = req.body.targetSlot;

    var playerID = req.session.playerID;
    var match_id = req.session.match;

    if (!isPlayerTurn) {
        res.send("Not your turn yet..");
        return;
    } else {
        connection.execute("SELECT caracter_id, caracter_HP, caracter_attack, player_match_character_character_status_id FROM playerMatchCharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id WHERE player_match_character_player_id = " + playerID + " AND player_match_character_match_id = " + match_id + " AND player_match_character_tile_id = " + attackerSlot, //select a character from player to attack
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

                    var attackStatus = rows[0].player_match_character_character_status_id;
                    var attackDamage = rows[0].caracter_attack;

                    if (attackStatus == 2) { // check if attack status is 2, meaning if the character already attacked: if it has it can't attack more
                        res.send("This character can't attack anymore!");
                        return;
                    } else { //if attack status = 1, then update the status to 2 and attack, meaning it can attack and then becomes unavailable to attack again
                        connection.execute("UPDATE playerMatchCharacter SET player_match_character_character_status_id = 2 WHERE player_match_character_match_id = ? AND player_match_character_player_id = ? AND player_match_character_tile_id = ? ", [match_id, playerID, attackerSlot],
                            function (error, rows, fields) {
                                if (error) {
                                    res.send(error);
                                } else {
                                    connection.execute("UPDATE playerMatchCharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id SET player_match_character_character_current_HP = player_match_character_character_current_HP - " + attackDamage + " WHERE player_match_character_match_id = " + match_id + " AND player_match_character_player_id <> " + playerID + " AND player_match_character_tile_id = " + targetSlot, //if all goes well, after that we select a character from the opponent to be attacked and give him damage
                                        function (error, rows, fields) {
                                            if (error) {
                                                res.send(error);
                                            } else {
                                                res.send(rows);
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    }
                }
            }
        );
    }
};

router.get('/endTurn', (req, res) => { //ends the turn and passes to the other player
    var match_id = req.session.match;
    var playerID = req.session.playerID;

    connection.execute("SELECT matche_player1_id, matche_player2_id FROM matche WHERE matche_id = " + match_id,
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                var nextPlayer;

                //check if there is any turns to skip
                console.log(req.session.turnsToSkip)

                if (req.session.turnsToSkip == 0) {
                    if (playerID == rows[0].matche_player1_id) {
                        nextPlayer = rows[0].matche_player2_id;
                        checkRound(req, res, match_id, p1 = true);
                    } else if (playerID == rows[0].matche_player2_id) {
                        nextPlayer = rows[0].matche_player1_id;
                        addRound(req, res, match_id);
                    }
                } else {
                    nextPlayer = playerID
                    req.session.turnsToSkip = req.session.turnsToSkip - 1
                }
                connection.execute("UPDATE matche SET matche_turn_player_id = " + nextPlayer + " WHERE matche_id = " + match_id,
                    function (error, rows, fields) {
                        if (error) {
                            console.error("Error executing UPDATE query:", error);
                            res.send(error);
                        } else {
                            connection.execute("UPDATE playerMatchCharacter SET player_match_character_character_status_id = 1 WHERE player_match_character_match_id = ? AND player_match_character_player_id = ?", [match_id, playerID], // updates the status to all the characters to ready, so they can all attack again
                                function (error, rows, fields) {
                                    if (error) {
                                        console.error("Error executing UPDATE query:", error);
                                        res.send(error);
                                    } else {
                                        res.send(rows);
                                    }
                                }
                            )
                        }
                    })
            }
        })
});

function addRound(req, res, match_id) {
    connection.execute("UPDATE matche SET matche_round_count = matche_round_count + 1 WHERE matche_id = ?", [match_id],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                checkRound(req, res, match_id);
            }
        }
    );
}

function checkRound(req, res, match_id, p1 = false){
    connection.execute("SELECT matche_round_count FROM matche WHERE matche_id = ?", [match_id],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                if (rows.length > 0) {
                    var round = rows[0].matche_round_count;

                    if(p1){
                        if (round % 2 !== 0) {
                            req.session.tookCard = false;
                        } else {
                            req.session.tookCard = true;
                        }
                    } else{
                        if (round % 2 == 0) {
                            req.session.tookCard = false;
                        } else {
                            req.session.tookCard = true;
                        }
                    }

                    console.log("req.sess.tokkcard: ", req.session.tookCard)
                } else {
                    console.log("You are dum, fix your code");
                }
            }
        }
    );
}


function checkPlayerTurn(req, res, callback) { //is it the player's turn?
    var player_id = req.session.playerID;
    var match_id = req.session.match;
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
    var match_id = req.session.match;
    connection.execute("UPDATE playerMatchCharacter SET player_match_character_character_current_HP = 100 WHERE player_match_character_match_id = ?", [match_id],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                res.send(rows);
            }
        });
});

router.get('/setTo1', (req, res) => { //sets HP of all characters from the same match to 1 
    var match_id = req.session.match;
    connection.execute("UPDATE playerMatchCharacter SET player_match_character_character_current_HP = 1 WHERE player_match_character_match_id = ?", [match_id],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                res.send(rows);
            }
        });
});



router.get('/resetStatusCharacters', (req, res) => { //reset attack status of all characters from the same match
    var match_id = req.session.match;
    console.log(match_id);
    connection.execute("UPDATE playerMatchCharacter SET player_match_character_character_status_id = 1 WHERE player_match_character_match_id = ?", [match_id],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                res.send(rows);
            }
        });
});


module.exports = router;