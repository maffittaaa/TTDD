const express = require('express');
const connection = require('../database');
const router = express.Router();

//player picks a card if it's on deck (deck_card_state_id = 1)
router.post('/pickCard', (req, res) => {
    var playerID = req.session.playerID;
    var matchID = req.session.match;
    var cardID;
    var chosenID;

    if (req.session.tookCard == false) {

        connection.execute("SELECT matche_id FROM matche WHERE matche_id = ? AND (matche_player1_id = ? or matche_player2_id = ?) AND matche_turn_player_id = ?", [matchID, playerID, playerID, playerID],
            function (error, rows, fields) {
                if (error) {
                    res.send(error);
                } else {
                    if (rows.length > 0) {
                        connection.execute("SELECT deck_card_id FROM deck WHERE deck_card_state_id = 1 AND deck_match_id = ? AND deck_player_id = ?", [matchID, playerID],
                            function (error, rows, fields) {
                                if (error) {
                                    res.send(error);
                                } else {
                                    if (rows.length > 0) {
                                        //if there is any card available, randomize which one leaves the deck
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
                                                                                req.session.tookCard = true;
                                                                                res.send({
                                                                                    cards: JSON.stringify(rows)
                                                                                });
                                                                            }
                                                                        });
                                                                }
                                                            });
                                                    } else {
                                                        res.send("Card already picked!");
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
                    } else {
                        console.log("Not your turn, bitch, sorry");
                        res.send("Not your turn, bitch, sorry")
                    }
                }
            }
        )
    } else {
        console.log("You already took a card this turn, sorry");
        res.send("You already took a card this turn, sorry");
    }

});

//endpoint for when the players play a card
router.post('/playCard', (req, res) => {
    var playerID = req.session.playerID;
    var matchID = req.session.match;
    var cardID = req.body.cardPicked;

    console.log(cardID);

    //thunderstorm card, does 10 damage to every character
    if (cardID == 1) {
        thunderStorm(req, res, playerID, matchID, cardID);
        // skip turns, make a general function to skip turns
    } else if (cardID == 2) {
        skipTurns(req, res, cardID, matchID, playerID, 2)
    } else if (cardID == 3) {
        skipTurns(req, res, cardID, matchID, playerID, 1)
        //Glass on the floor
    } else if (cardID == 4) {

        // Finish him
    } else if (cardID == 5) {
        var charID = req.body.charChosen;
        if (charID) {
            finishHim(req, res, playerID, matchID, cardID, charID);
        } else {
            res.send({
                stillAttacking: true,
                card: cardID
            });
        }
    } else if (cardID == 6) {
        skipTurns(req, res, cardID, matchID, playerID, 1)
        //counter card to finish him and sleaping beauty
    } else if (cardID == 7) {

        //sleeping beauty 
    } else if (cardID == 8) {
        var firstCharacterID = req.body.charChosen;
        var secondCharacterID = req.body.secCharChosen;

        if (firstCharacterID && secondCharacterID) {
            sleepingBeauty(req, res, playerID, matchID, cardID, firstCharacterID, secondCharacterID);
        } else {
            if (firstCharacterID) {
                res.send({
                    stillAttacking: true,
                    card: cardID,
                    characterOnHold: firstCharacterID
                });
            } else {
                res.send({
                    stillAttacking: true,
                    card: cardID
                });
            }
        }
        //fountain of youth, revives character to 1/3 of his health
    } else if (cardID == 9) {
        var characterID = req.body.charChosen;
        if (characterID) {
            fountainOfYouth(req, res, playerID, matchID, cardID, characterID);
        } else {
            res.send({
                stillAttacking: true,
                card: cardID
            });
        }
        // drunken power, one character attacks two at the same time
    } else if (cardID == 10) {
    }
});


//endpoint where if you mouse over a card, it gives the description
router.get('/getTheDescriptions', (req, res) => {
    var playerID = req.session.playerID;
    var matchID = req.session.match;
    var cardID = req.query.cardPicked;

    console.log("match: ", matchID);
    console.log("player: ", playerID);
    console.log("card: ", cardID);
    connection.execute("SELECT card_id, card_description, card_name FROM deck INNER JOIN card ON deck_card_id = card_id WHERE deck_match_id = ? AND deck_player_id = ? AND deck_card_id = ?", [matchID, playerID, cardID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                res.send(JSON.stringify(rows));
            }
        })
})

//function for the Sleeping Beauty card, her behavior
function sleepingBeauty(req, res, playerID, matchID, cardID, firstCharID, secondCharID) {
    connection.execute("SELECT deck_card_id, card_damage, card_name, deck_card_state_id FROM deck INNER JOIN card ON deck_card_id = card_id WHERE deck_card_id = ? AND deck_card_state_id = 2 AND deck_match_id = ? AND deck_player_id = ?", [cardID, matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                if (rows.length > 0) {
                    var cardDamage = rows[0].card_damage;
                    connection.execute("SELECT player_match_character_character_id FROM playerMatchCharacter WHERE player_match_character_player_id != ? AND player_match_character_match_id = ? and player_match_character_tile_id = ?", [playerID, matchID, firstCharID],
                        function (err, rows, fields) {
                            if (err) {
                                res.send(err);
                            }
                            else {
                                if (rows.length > 0) {
                                    firstCharID = rows[0].player_match_character_character_id;
                                    connection.execute("SELECT player_match_character_character_id FROM playerMatchCharacter WHERE player_match_character_player_id != ? AND player_match_character_match_id = ? and player_match_character_tile_id = ?", [playerID, matchID, secondCharID],
                                        function (err, rows, fields) {
                                            if (err) {
                                                res.send(err);
                                            }
                                            else {
                                                if (rows.length > 0) {
                                                    secondCharID = rows[0].player_match_character_character_id;
                                                    connection.execute("UPDATE playerMatchCharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id SET player_match_character_character_current_HP = player_match_character_character_current_HP - " + cardDamage + " WHERE player_match_character_character_id = ? AND player_match_character_match_id = ? AND player_match_character_player_id <> ? ", [firstCharID, matchID, playerID],
                                                        function (error, rows, fields) {
                                                            if (error) {
                                                                res.send(error);
                                                            } else {
                                                                connection.execute("UPDATE playerMatchCharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id SET player_match_character_character_current_HP = player_match_character_character_current_HP - " + cardDamage + " WHERE player_match_character_character_id = ? AND player_match_character_match_id = ? AND player_match_character_player_id <> ? ", [secondCharID, matchID, playerID],
                                                                    function (error, rows, fields) {
                                                                        if (error) {
                                                                            res.send(error);
                                                                        } else {
                                                                            skipTurns(req, res, cardID, matchID, playerID, 1)
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
                                    res.send("ERROR, please fix your code!");
                                }
                            }
                        }
                    )
                } else {
                    res.send("You can't play that card anymore!");
                }
            }
        });
}

//function for the Finish Him card, his behavior
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
                                    res.send("ERROR, please fix your code!");
                                }
                            }
                        }
                    )
                } else {
                    res.send("You can't play that card anymore!");
                }
            }
        });
}

//function for the Fountain Of Youth card, her behavior
function fountainOfYouth(req, res, playerID, matchID, cardID, firstCharID) {
    connection.execute("SELECT deck_card_id, card_name, deck_card_state_id FROM deck INNER JOIN card ON deck_card_id = card_id WHERE deck_card_id = ? AND deck_card_state_id = 2 AND deck_match_id = ? AND deck_player_id = ?", [cardID, matchID, playerID], //select the card acording to the player and match ID
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                if (rows.length > 0) {
                    var cardName = rows[0].card_name;
                    connection.execute("SELECT player_match_character_character_id FROM playerMatchCharacter WHERE player_match_character_player_id = ? AND player_match_character_match_id = ? and player_match_character_tile_id = ?", [playerID, matchID, firstCharID],
                        function (err, rows, fields) {
                            if (err) {
                                res.send(err);
                            }
                            else {
                                firstCharID = rows[0].player_match_character_character_id;
                                console.log("inside the function: ", firstCharID);
                                connection.execute("SELECT player_match_character_character_current_HP, caracter_HP FROM playerMatchCharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id WHERE player_match_character_match_id = ? AND player_match_character_player_id = ? AND player_match_character_character_id = ?", [matchID, playerID, firstCharID], //select the caracter_id together with the hp in general of that caracter and his current hp on the match
                                    function (error, rows, fields) {
                                        if (error) {
                                            res.send(error);
                                        } else {
                                            var characterCurrentHP = rows[0].player_match_character_character_current_HP;
                                            var characterRealHP = rows[0].caracter_HP;
                                            console.log("characterCurrentHP: ", characterCurrentHP);
                                            console.log("characterRealHP: ", characterRealHP);
                                            if (characterCurrentHP <= 0) {
                                                console.log("characterCurrentHP - Part2: ", characterCurrentHP);
                                                connection.execute("UPDATE playerMatchCharacter SET player_match_character_character_current_HP = " + characterRealHP + " / 3 WHERE player_match_character_match_id = ? AND player_match_character_player_id = ? AND player_match_character_character_id = ?", [matchID, playerID, firstCharID],
                                                    function (error, rows, fields) {
                                                        if (error) {
                                                            res.send(error);
                                                        } else {
                                                            console.log("yeeeeeeeeeeeeeeeeeeeeey");
                                                            res.send({
                                                                card_id: cardID,
                                                                card_name: cardName
                                                            });
                                                        }
                                                    });
                                            } else {
                                                res.send("Your character is still alive!");
                                            };
                                        }
                                    })
                            }
                        })
                } else {
                    res.send("Can you please fix your code? I'm tired of saying this..");
                }
            }
        })
}

//function for the Thunderstorm card, his behavior
function thunderStorm(req, res, playerID, matchID, cardID) {
    connection.execute("SELECT deck_card_id, card_damage, card_name, deck_card_state_id FROM deck INNER JOIN card ON deck_card_id = card_id WHERE deck_card_id = ? AND deck_card_state_id = 2 AND deck_match_id = ? AND deck_player_id = ?", [cardID, matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                if (rows.length > 0) {
                    var cardDamage = rows[0].card_damage;
                    var cardName = rows[0].card_name;
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
                    res.send("You can't play that card anymore!");
                }
            }
        });
}

//general functions to the cards that skip turns
function skipTurns(req, res, cardID, matchID, playerID, turnsToSkip) {
    console.log("entered")
    connection.execute("SELECT deck_card_id, card_damage, card_name, deck_card_state_id FROM deck INNER JOIN card ON deck_card_id = card_id WHERE deck_card_id = ? AND deck_card_state_id = 2 AND deck_match_id = ? AND deck_player_id = ?", [cardID, matchID, playerID],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                if (rows.length > 0) {
                    console.log("var name being declared")

                    var cardName = rows[0].card_name;

                    connection.execute("UPDATE deck SET deck_card_state_id = 3 WHERE deck_match_id = ? AND deck_player_id = ? AND deck_card_id = ?", [matchID, playerID, cardID],
                        function (error, rows, fields) {
                            if (error) {
                                res.send(error);
                            } else {
                                console.log("turns", turnsToSkip)

                                req.session.turnsToSkip = turnsToSkip

                                console.log("session turns", req.session.turnsToSkip)


                                console.log("Ended")
                                res.send({
                                    card_id: cardID,
                                    card_name: cardName
                                });
                            }
                        }
                    );

                } else {
                    res.send("You can't play that card anymore!")
                }
            }
        }
    )
}

module.exports = router;