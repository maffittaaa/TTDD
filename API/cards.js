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
                                        var deckLength = cardID.length - 3
                                        var chosenCard = false;

                                        if(deckLength > 0){
                                            while (chosenCard == false) {
                                                chosenID = Math.floor(Math.random() * 10);
                                                if (chosenID <= cardID.length - 1 && cardID[chosenID].deck_card_id != 4 && cardID[chosenID].deck_card_id != 7 && cardID[chosenID].deck_card_id != 10) {
                                                    chosenCard = true;
                                                }
                                            }
                                        }else{
                                            console.log("Deck out of cards")
                                            res.send({
                                                notWorking: true,
                                                message: "Deck out of cards",
                                            })
                                            return
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
                                                                                    cards: JSON.stringify(rows),
                                                                                    deckLength: deckLength - 1,
                                                                                });
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                                            });
                                                    } else {
                                                        res.send({
                                                            notWorking: true,
                                                            message: "Card already picked!",
                                                        })
                                                    }
                                                }
                                            });
                                    } else {
                                        //if there is no card available, deck out of cards
                                        res.send({
                                            notWorking: true,
                                            message: "Deck out of cards",
                                        })
                                    }
                                }
                            }
                        )
                    } else {
                        console.log("Not your turn, sorry");
                        res.send({
                            notWorking: true,
                            message: "Not your turn, sorry",
                        })
                    }
                }
            }
        )
    } else {
        console.log("You can't take a card from the deck this turn");
        res.send({
            notWorking: true,
            message: "Not the turn to take a card.",
        })
    }

});

router.post('/playCard', (req, res) => {
    var cardID = req.body.cardPicked;

    checkPlayerTurn(req, res, cardID);
})

function checkPlayerTurn(req, res, cardID) { //is it the player's turn?
    var player_id = req.session.playerID;
    var match_id = req.session.match;
    connection.execute("SELECT COUNT(*) as count FROM matche WHERE matche_id = ? AND matche_turn_player_id = ? ", [match_id, player_id],
        function (error, rows, fields) {
            if (error || rows[0].count == 0) {
                checkCardPlayed(req, res, false, cardID);
            } else {
                checkCardPlayed(req, res, true, cardID);
            }
        }
    );
};

function checkCardPlayed(req, res, isPlayerTurn, cardID) {
    var playerID = req.session.playerID;
    var matchID = req.session.match;

    if (isPlayerTurn) {
        connection.execute("SELECT deck_card_id, deck_card_played FROM deck WHERE deck_card_played = true AND deck_match_id = ? AND deck_player_id = ?", [matchID, playerID],
            function (error, rows, fields) {
                if (error) {
                    res.send(error);
                } else {
                    if (rows.length > 0) {
                        checkCharacterAttacked(req, res, true, cardID);
                    } else {
                        checkCharacterAttacked(req, res, false, cardID);
                    }
                }
            }
        )
    } else {
        res.send({
            notWorking: true,
            message: "Not your turn yet.",
        })
    }
}

function checkCharacterAttacked(req, res, cardPlayed, cardID) {
    var playerID = req.session.playerID;
    var matchID = req.session.match;

    if (!cardPlayed) {
        connection.execute("SELECT player_match_character_character_id FROM playerMatchCharacter WHERE player_match_character_character_status_id = 2 AND player_match_character_player_id = ? AND player_match_character_match_id = ?", [playerID, matchID],
            function (error, rows, fields) {
                if (error) {
                    res.send(error);
                } else {
                    if (rows.length > 0) {
                        if (cardID == 1 || cardID == 5 || cardID == 8) {
                            playCard(req, res, false, cardID);
                        } else {
                            playCard(req, res, true, cardID);
                        }
                    } else {
                        playCard(req, res, true, cardID);
                    }
                }
            }
        )
    } else {
        res.send({
            notWorking: true,
            message: "Already played with a card",
        })
    }
}

function playCard(req, res, canPlay, cardID) {
    var playerID = req.session.playerID;
    var matchID = req.session.match;

    if (canPlay == true) {
        //thunderstorm card, does 10 damage to every character
        if (cardID == 1) {
            thunderStorm(req, res, playerID, matchID, cardID);
        } else if (cardID == 2) {
            skipTurns(req, res, cardID, matchID, playerID, 2);
        } else if (cardID == 3) {
            skipTurns(req, res, cardID, matchID, playerID, 1);

            //Glass on the floor, not done yet
        } else if (cardID == 4) {

            // Finish him
        } else if (cardID == 5) {
            var charID = req.body.charChosen;
            if (charID) {
                finishHim(req, res, playerID, matchID, cardID, charID);
            } else {
                res.send({
                    stillAttacking: true,
                    card_id: cardID
                });
            }
        } else if (cardID == 6) {
            skipTurns(req, res, cardID, matchID, playerID, 1);

            //counter card to finish him and sleaping beauty, not done yet
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
                        card_id: cardID,
                        characterOnHold: firstCharacterID
                    });
                } else {
                    res.send({
                        stillAttacking: true,
                        card_id: cardID
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
                    reviving: true,
                    card_id: cardID
                });
            }
            // drunken power, one character attacks two at the same time, not done yet
        } else if (cardID == 10) {
        }
    } else {
        res.send({
            message: "You can't attack with your characters and use a imediate damage card, chose another card or continue attacking with your characters.",
        });
    }

}




//endpoint where if you mouse over a card, it gives the description
router.get('/getTheDescriptions', (req, res) => {
    var playerID = req.session.playerID;
    var matchID = req.session.match;
    var cardID = req.query.cardPicked;

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
                                                connection.execute("UPDATE deck SET deck_card_state_id = 3 WHERE deck_match_id = ? AND deck_player_id = ? AND deck_card_id = ?", [matchID, playerID, cardID],
                                                    function (error, rows, fields) {
                                                        if (error) {
                                                            res.send(error);
                                                        } else {
                                                            connection.execute("UPDATE deck SET deck_card_played = true WHERE deck_match_id = ? AND deck_player_id = ? AND deck_card_id = ?", [matchID, playerID, cardID],
                                                                function (error, rows, fields) {
                                                                    if (error) {
                                                                        res.send(error);
                                                                    } else {
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
                                connection.execute("SELECT player_match_character_character_current_HP, caracter_HP FROM playerMatchCharacter INNER JOIN caracter ON player_match_character_character_id = caracter_id WHERE player_match_character_match_id = ? AND player_match_character_player_id = ? AND player_match_character_character_id = ?", [matchID, playerID, firstCharID], //select the caracter_id together with the hp in general of that caracter and his current hp on the match
                                    function (error, rows, fields) {
                                        if (error) {
                                            res.send(error);
                                        } else {
                                            var characterCurrentHP = rows[0].player_match_character_character_current_HP;
                                            var characterRealHP = rows[0].caracter_HP;
                                            if (characterCurrentHP <= 0) {
                                                connection.execute("UPDATE playerMatchCharacter SET player_match_character_character_current_HP = " + characterRealHP + " / 3 WHERE player_match_character_match_id = ? AND player_match_character_player_id = ? AND player_match_character_character_id = ?", [matchID, playerID, firstCharID],
                                                    function (error, rows, fields) {
                                                        if (error) {
                                                            res.send(error);
                                                        } else {
                                                            connection.execute("UPDATE deck SET deck_card_played = true WHERE deck_match_id = ? AND deck_player_id = ? AND deck_card_id = ?", [matchID, playerID, cardID],
                                                                function (error, rows, fields) {
                                                                    if (error) {
                                                                        res.send(error);
                                                                    } else {
                                                                        res.send({
                                                                            card_id: cardID,
                                                                            card_name: cardName
                                                                        });
                                                                    }
                                                                }
                                                            );
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

                                            connection.execute("UPDATE deck SET deck_card_played = true WHERE deck_match_id = ? AND deck_player_id = ? AND deck_card_id = ?", [matchID, playerID, cardID],
                                                function (error, rows, fields) {
                                                    if (error) {
                                                        res.send(error);
                                                    } else {
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

                    var cardName = rows[0].card_name;

                    connection.execute("UPDATE deck SET deck_card_state_id = 3 WHERE deck_match_id = ? AND deck_player_id = ? AND deck_card_id = ?", [matchID, playerID, cardID],
                        function (error, rows, fields) {
                            if (error) {
                                res.send(error);
                            } else {

                                connection.execute("UPDATE deck SET deck_card_played = true WHERE deck_match_id = ? AND deck_player_id = ? AND deck_card_id = ?", [matchID, playerID, cardID],
                                    function (error, rows, fields) {
                                        if (error) {
                                            res.send(error);
                                        } else {

                                            req.session.turnsToSkip = turnsToSkip

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
                    res.send("You can't play that card anymore!")
                }
            }
        }
    )
}

module.exports = router;