const express = require('express');
const connection = require('../database');
const router = express.Router();

router.post('/pickCard', (req, res) => { //player picks a card if it's on deck (deck_card_state_id = 1)
    var playerID = req.session.playerID;
    var matchID = req.session.match;
    var cardID;
    var chosenID;

    connection.execute("SELECT deck_card_id FROM deck WHERE deck_card_state_id = 1 AND deck_match_id = ? AND deck_player_id = ?", [matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                if (rows.length > 0) {
                    //if there is any card available, lets randomize which one cames out
                    cardID = rows;
                    var chosenCard = false;

                    while (chosenCard == false) {
                        chosenID = Math.floor(Math.random() * 10);
                        if (chosenID <= cardID.length - 1) {
                            chosenCard = true;
                        }
                    }

                    cardID = cardID[chosenID].deck_card_id;

                    connection.execute("SELECT deck_card_id FROM deck WHERE deck_card_id = ? AND deck_card_state_id = 1 AND deck_match_id = ? AND deck_player_id = ?", [cardID, matchID, playerID],
                        function (error, rows, fields) {
                            if (error) {
                                res.send(error);
                            } else {
                                if (rows.length > 0) { //updates the deck_card_state_id to 2 which means that the player already picked up the card from the deck and it's on the player's hand
                                    connection.execute("UPDATE deck SET deck_card_state_id = 2 WHERE deck_card_id = ? AND deck_player_id = ? AND deck_match_id = ?", [cardID, playerID, matchID],
                                        function (error, rows, fields) {
                                            if (error) {
                                                res.send(error);
                                            } else {
                                                connection.execute("SELECT card_name, card_id FROM deck INNER JOIN card ON deck_card_id = card_id WHERE deck_card_state_id = 2 AND deck_card_id = ? AND deck_player_id = ? AND deck_match_id = ?", [cardID, playerID, matchID],
                                                    // selects the card from the player's hand that he receives
                                                    function (error, rows, fields) {
                                                        if (error) {
                                                            res.send(error);
                                                        } else {
                                                            res.send({
                                                                cards: JSON.stringify(rows)
                                                            });
                                                        }
                                                    });
                                            }
                                        });
                                } else {
                                    res.send("Card already picked");
                                }
                            }
                        });
                } else {
                    //if there is no card available, deck out of cards
                    res.send("Deck out of cards");
                }
            }
        }
    )
});

router.post('/playCard', (req, res) => { //player plays the card and updates the state of the card to the graveyard (deck_card_state_id = 3)
    var playerID = req.session.playerID;
    var matchID = req.session.match;
    var cardID = req.body.cardPicked;

    console.log(cardID);

    //thunderstorm card, does 10 damage to every character
    if (cardID == 1) {
        takeImediateDamage(req, res, playerID, matchID, cardID);
    
    // skip turns, make a general function to skip turns
    } else if (cardID == 2 || cardID == 3 || cardID == 6) {
    
    //Glass on the floor
    } else if (cardID == 4) {
    
    // Finish him
    } else if (cardID == 5) {
        var charID = req.body.charChosen;
        console.log("characterChosen: ", charID);

        if (charID) {
            console.log("Going to finish him");
            finishHim(req, res, playerID, matchID, cardID, charID);
        } else {
            res.send({
                stillAttacking: true,
                card: cardID
            });
        }
    
    //counter card to finish him and sleaping beauty
    } else if (cardID == 7) {
        
    //sleeping beauty 
    } else if (cardID == 8) { 
        var firstCharacterID = req.body.charChosen;
        var secondCharacterID = req.body.secCharChosen;
        console.log("characterChosen: ", req.body)

        if (firstCharacterID && secondCharacterID) {
            console.log("Going to finish him");
            sleepingBeauty(req, res, playerID, matchID, cardID, firstCharacterID, secondCharacterID);
        } else {
            if(firstCharacterID){
                res.send({
                    stillAttacking: true,
                    card: cardID,
                    charOnHold: firstCharacterID 
                });
            }else{
                res.send({
                    stillAttacking: true,
                    card: cardID
                });
            }
        }
    } else if (cardID == 9) {
        
    // drunken power, one character attacks two at the same time
    } else if (cardID == 10) {
        // drunken power, one character attacks two at the same time
    }
});

function sleepingBeauty(req, res, playerID, matchID, cardID, fistCharID, secondCharID) {
    connection.execute("SELECT deck_card_id, card_damage, card_name, deck_card_state_id FROM deck INNER JOIN card ON deck_card_id = card_id WHERE deck_card_id = ? AND deck_card_state_id = 2 AND deck_match_id = ? AND deck_player_id = ?", [cardID, matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                if (rows.length > 0) {
                    var cardDamage = rows[0].card_damage;
                    var cardName = rows[0].card_name;
                    console.log("card_id: ", cardID);

                    connection.execute("SELECT player_match_character_character_id FROM playerMatchCharacter WHERE player_match_character_player_id != ? AND player_match_character_match_id = ? and player_match_character_tile_id = ?", [playerID, matchID, fistCharID],
                        function (err, rows, fields) {
                            if (err) {
                                res.send(err);
                            }
                            else {
                                if (rows.length > 0) {
                                    fistCharID = rows[0].player_match_character_character_id;
                                    console.log("character_id: ", rows[0].player_match_character_character_id, " Damage: ", cardDamage);

                                    connection.execute("SELECT player_match_character_character_id FROM playerMatchCharacter WHERE player_match_character_player_id != ? AND player_match_character_match_id = ? and player_match_character_tile_id = ?", [playerID, matchID, secondCharID],
                                        function (err, rows, fields) {
                                            if (err) {
                                                res.send(err);
                                            }
                                            else {
                                                if (rows.length > 0) {
                                                    secondCharID = rows[0].player_match_character_character_id;
                                                    
                                                    console.log("character_id: ", rows[0].player_match_character_character_id, " Damage: ", cardDamage);
                                    
                                                    connection.execute("UPDATE playerMatchCharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id SET player_match_character_character_current_HP = player_match_character_character_current_HP - " + cardDamage + " WHERE player_match_character_character_id = ? AND player_match_character_match_id = ? AND player_match_character_player_id <> ? ", [fistCharID, matchID, playerID],
                                                        function (error, rows, fields) {
                                                            if (error) {
                                                                res.send(error);
                                                            } else {
                                                                console.log("almost all updated");

                                                                connection.execute("UPDATE playerMatchCharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id SET player_match_character_character_current_HP = player_match_character_character_current_HP - " + cardDamage + " WHERE player_match_character_character_id = ? AND player_match_character_match_id = ? AND player_match_character_player_id <> ? ", [secondCharID, matchID, playerID],
                                                                    function (error, rows, fields) {
                                                                        if (error) {
                                                                            res.send(error);
                                                                        } else {
                                                                            console.log("almost all msm updated");
                                                                            connection.execute("UPDATE deck SET deck_card_state_id = 3 WHERE deck_match_id = ? AND deck_player_id = ? AND deck_card_id = ?", [matchID, playerID, cardID],
                                                                                function (error, rows, fields) {
                                                                                    if (error) {
                                                                                        res.send(error);
                                                                                    } else {
                                                                                        console.log("all updated");
                                                                                        res.send({
                                                                                            card_id: cardID,
                                                                                            card_name: cardName
                                                                                        });
                                                                                    }
                                                                                }
                                                                            );
                                                                        }
                                                                    }
                                                                )
                                                            }
                                                        }
                                                    );
                                                }
                                            }
                                        }
                                    )
                                } else {
                                    res.send("Something not right in here, character: ")
                                }
                            }
                        }
                    )
                } else {
                    res.send("You can't play that card anymore");
                }
            }
        });
}

function finishHim(req, res, playerID, matchID, cardID, charID) {
    connection.execute("SELECT deck_card_id, card_damage, card_name, deck_card_state_id FROM deck INNER JOIN card ON deck_card_id = card_id WHERE deck_card_id = ? AND deck_card_state_id = 2 AND deck_match_id = ? AND deck_player_id = ?", [cardID, matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                if (rows.length > 0) {
                    var cardDamage = rows[0].card_damage;
                    var cardName = rows[0].card_name;

                    connection.execute("SELECT player_match_character_character_id FROM playerMatchCharacter WHERE player_match_character_player_id != ? AND player_match_character_match_id = ? and player_match_character_tile_id = ?", [playerID, matchID, charID],
                        function (err, rows, fields) {
                            if (err) {
                                res.send(err);
                            }
                            else {
                                if (rows.length == 1) {
                                    charID = rows[0].player_match_character_character_id;
                                    
                                    connection.execute("UPDATE playerMatchCharacter SET player_match_character_character_current_HP = player_match_character_character_current_HP - " + cardDamage + " WHERE player_match_character_character_id = ? AND player_match_character_match_id = ? AND player_match_character_player_id <> ? ", [charID, matchID, playerID],
                                        function (error, rows, fields) {
                                            if (error) {
                                                res.send(error);
                                            } else {
                                                console.log("almost all updated");
                                                connection.execute("UPDATE deck SET deck_card_state_id = 3 WHERE deck_match_id = ? AND deck_player_id = ? AND deck_card_id = ?", [matchID, playerID, cardID],
                                                    function (error, rows, fields) {
                                                        if (error) {
                                                            res.send(error);
                                                        } else {
                                                            console.log("all updated");
                                                            res.send({
                                                                card_id: cardID,
                                                                card_name: cardName
                                                            });
                                                        }
                                                    }
                                                );
                                            }
                                        }
                                    );
                                } else {
                                    res.send("Something not right in here, character: ")
                                }
                            }
                        }
                    )
                } else {
                    res.send("You can't play that card anymore");
                }
            }
        });
}

function takeImediateDamage(req, res, playerID, matchID, cardID) {
    connection.execute("SELECT deck_card_id, card_damage, card_name, deck_card_state_id FROM deck INNER JOIN card ON deck_card_id = card_id WHERE deck_card_id = ? AND deck_card_state_id = 2 AND deck_match_id = ? AND deck_player_id = ?", [cardID, matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                if (rows.length > 0) {
                    var cardDamage = rows[0].card_damage;
                    var cardName = rows[0].card_name;
                    console.log(cardID);

                    connection.execute("UPDATE playerMatchCharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id SET player_match_character_character_current_HP = player_match_character_character_current_HP - " + cardDamage + " WHERE player_match_character_match_id = ? AND player_match_character_player_id <> ? ", [matchID, playerID],
                        function (error, rows, fields) {
                            if (error) {
                                res.send(error);
                            } else {
                                connection.execute("UPDATE deck SET deck_card_state_id = 3 WHERE deck_match_id = ? AND deck_player_id = ? AND deck_card_id = ?", [matchID, playerID, cardID],
                                    function (error, rows, fields) {
                                        if (error) {
                                            res.send(error);
                                        } else {
                                            res.send({
                                                card_id: cardID,
                                                card_name: cardName
                                            });
                                        }
                                    });
                            }
                        });
                } else {
                    res.send("You can't play that card anymore");
                }
            }
        });
}

module.exports = router;