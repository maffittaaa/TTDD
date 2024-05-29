const express = require('express');
const connection = require('../database');
const router = express.Router();

router.post("/changeProfile", (req, res) => {
    playerUsername = req.body.new_name;
    playerPassword = req.body.password;
    playerEmail = req.body.new_email;


    connection.execute("SELECT player_username FROM player WHERE player_id = ? AND player_password = ?", [req.session.playerID, playerPassword],
        function (err, rows, fields) {
            if (err) {
                res.send({
                    "changed": false,
                    "message": "something went wrong: " + err
                });
            } else {
                if (rows.length > 0) {
                    if(playerUsername != ""){
                        if(playerEmail.search(" ") >= 0){
                            res.send({
                                "changed": false,
                                "message": "You can't put spaces in your name or email"
                            })
                            return
                        }
                        if(playerUsername.search(" ") >= 0){
                            res.send({
                                "changed": false,
                                "message": "You can't put spaces in your name or email"
                            })
                            return
                        }else{
                            connection.execute("SELECT * FROM player WHERE player_username = ? OR player_email = ? ", [playerUsername, playerEmail],
                                function (err, rows1, fields) {
                                    if (err) {
                                        res.send({
                                            "changed": false,
                                            "message": "something went wrong: " + err
                                        });
                                    } else {
                                        if (rows1.length > 0) {
                                            console.log(rows1);
                                            res.send({
                                                "changed": false,
                                                "message": "The user already exists, \n or the email is already in use, \n please try another one"
                                            })
                                        }else{
                                            connection.execute("UPDATE player SET player_username = ? WHERE player_id = ?", [playerUsername, req.session.playerID],
                                                function (err, rows, fields) {
                                                    if (err) {
                                                        res.send({
                                                            "changed": false,
                                                            "message": "something went wrong: " + err
                                                        })
                                                    }else {
                                                        if(playerEmail == ""){
                                                            res.send({
                                                                "changed": true,
                                                            })
                                                            return
                                                        }
                                                        connection.execute("UPDATE player SET player_email = ? WHERE player_id = ?", [playerEmail, req.session.playerID], 
                                                            function (err, rows, fields) {
                                                                if (err) {
                                                                    res.send({
                                                                        "changed": false,
                                                                        "message": "something went wrong: " + err
                                                                    })
                                                                }else {
                                                                    res.send({
                                                                        "changed": true,
                                                                    })
                                                                }
                                                            }
                                                        )
                                                    }
                                                }
                                            )
                                        }
                                    }
                                }
                            )
                        }
                    }else if(playerEmail != ""){
                        if(playerEmail.search(" ") >= 0){
                            res.send({
                                "changed": false,
                                "message": "You can't put spaces in your name or email"
                            })
                            return
                        }
                        connection.execute("SELECT * FROM player WHERE player_email = ? ", [playerEmail],
                            function (err, rows, fields) {
                                if (err) {
                                    res.send({
                                        "changed": false,
                                        "message": "something went wrong: " + err
                                    });
                                } else {
                                    if (rows.length > 0) {
                                        console.log("Already exists");
                                        res.send({
                                            "changed": false,
                                            "message": "The user already exists, \n or the email is already in use, \n please try another one"
                                        })
                                    }else{
                                        connection.execute("UPDATE player SET player_email = ? WHERE player_id = ?", [playerEmail, req.session.playerID],
                                            function (err, rows, fields) {
                                                if (err) {
                                                    res.send({
                                                        "changed": false,
                                                        "message": "something went wrong: " + err
                                                    })
                                                }else {
                                                    res.send({
                                                        "changed": true,
                                                    })
                                                }
                                            }
                                        )
                                        
                                    }
                                }
                            }
                        )
                    }else{
                        res.send({
                            "changed": false,
                            "message": "To Change the profile please intruduce something on the boxes above.: '"+ playerUsername +"' and '"+ playerEmail +"'" 
                        })
                    }
                } else {
                    res.send({
                        "changed": false,
                        "message": "The password is not correct"
                    })
                }
            }
        }
    )
})

router.post("/choseCharacters", (req, res) => {
    var charactersChosen = req.body.slots;
    charactersChosen = JSON.parse(charactersChosen);

    connection.execute("SELECT caracter_id, caracter_name, caracter_HP FROM player, playerCharacter, caracter WHERE player_id = " + req.session.playerID + " and player_id = player_character_player_id and player_character_character_id = caracter_id",
        function (err, rows, fields) {
            if (err) {
                res.send(err);
            }
            else {
                if (rows.length > 0) {
                    var charactersNameFound = [];
                    var charactersIdFound = [];
                    var charactersHpFound = [];
                    var chaSentLength = 0;

                    for (var i = 1; i < 6; i++) {
                        for (var j = 0; j < rows.length; j++) {
                            if (charactersChosen["slot_" + i] != null) {
                                if (rows[j].caracter_id == charactersChosen["slot_" + i]) {
                                    charactersNameFound.push(" " + rows[j].caracter_name)
                                    charactersIdFound.push(rows[j].caracter_id);
                                    charactersHpFound.push(rows[j].caracter_HP);
                                }
                            }
                        }
                        if (charactersChosen["slot_" + i] != null) {
                            chaSentLength++;
                        }
                    }
                    if (charactersNameFound.length == chaSentLength) {
                        createMatch(req, res, charactersNameFound, charactersIdFound, charactersHpFound, charactersChosen);
                    } else {
                        res.send(
                            {
                                "success": false,
                                "message": "Invalid character chosen. Only found this: ",
                                "charactersFound": JSON.stringify(charactersIdFound)
                            }
                        );
                    }
                } else {
                    res.send(
                        {
                            "success": false,
                            "message": "You don't have any characters yet"
                        }
                    );
                }
            }
        }
    )
});

function createMatch(req, res, charactersFound, charactersId, charactersHp, tile) {
    //check if a player is in a match
    connection.execute("SELECT matche_id FROM matche WHERE (matche_state_id = 3 or matche_state_id = 1) and (matche_player1_id = " + req.session.playerID + " or matche_player2_id = " + req.session.playerID + ")",
        function (err, rows, fields) {
            if (err) {
                res.send(err);
            } else {
                if (rows.length > 0) { //if yes
                    console.log("I am already in a match, entering...");
                    req.session.match = rows[0].matche_id;

                    res.send(
                        {
                            "success": true,
                            "player_id": req.session.playerID,
                            "charactersChosen": charactersFound,
                            "match": req.session.match
                        }
                    );
                } else { //if the player is not in a match
                    console.log("I am not in a match, searching for matches available...");

                    //check if there is an available match
                    connection.execute("SELECT matche_id FROM matche WHERE matche_player1_id is not null and matche_player2_id is null and matche_state_id = 1 and matche_player1_id != " + req.session.playerID + "",
                        function (err1, rows1, fields1) {
                            if (err1) {
                                console.log(err1);
                                res.send(err1);
                            } else {
                                if (rows1.length > 0) { //if there is an available match

                                    req.session.match = rows1[0].matche_id;

                                    //update match: adding player to player 1 
                                    connection.execute("UPDATE matche SET matche_player2_id = " + req.session.playerID + " WHERE matche_id = " + req.session.match + "",
                                        function (err2, rows2, fields2) {
                                            if (err2) {
                                                console.log(err2);
                                                res.send(
                                                    {
                                                        "message": "something went wrong: " + err2
                                                    }
                                                );
                                            } else {
                                                //update match: setting the match state to "on going"
                                                connection.execute("UPDATE matche SET matche_state_id = 3 WHERE matche_id = " + req.session.match + "",
                                                    function (err3, rows3, fields3) {
                                                        if (err3) {
                                                            console.log(err3);
                                                            res.send(err3);
                                                        }
                                                        else {
                                                            req.session.match = rows1[0].matche_id;
                                                            req.session.turnsToSkip = 0
                                                            req.session.tookCard = true

                                                            addCharacter(req, res, charactersId, charactersHp, tile);
                                                            addCards(req, res)
                                                            res.send(
                                                                {
                                                                    "success": true,
                                                                    "player_id": req.session.playerID,
                                                                    "charactersChosen": charactersFound,
                                                                    "match": req.session.match
                                                                }
                                                            );
                                                        }
                                                    }
                                                )
                                            }
                                        }
                                    )
                                } else { //if there isn't a match available
                                    //create a new match where the player is player1
                                    connection.execute("INSERT INTO matche (matche_player1_id, matche_state_id, matche_turn_player_id) VALUES ('" + req.session.playerID + "', 1 , '" + req.session.playerID + "')",
                                        function (err2, rows2, fields2) {
                                            if (err2) {
                                                res.send(
                                                    {
                                                        "message": "2something went wrong: " + err2
                                                    }
                                                );
                                            } else {
                                                req.session.match = rows2.insertId;
                                                req.session.turnsToSkip = 0
                                                req.session.tookCard = true

                                                addCards(req, res)
                                                addCharacter(req, res, charactersId, charactersHp, tile);
                                                res.send(
                                                    {
                                                        "success": true,
                                                        "player_id": req.session.playerID,
                                                        "charactersChosen": charactersFound,
                                                        "match": req.session.match
                                                    }
                                                );
                                            }
                                        }
                                    )
                                }
                            }
                        }
                    )
                }
            }
        }
    )
};

function addCharacter(req, res, characters, hp, tile) {
    console.log(characters.length, hp, tile)
    //acabar de por os slots/tiles inseridos na base de dados quando os characters sao inseridos. fazer check a se o player é o player 1 ou o 2. falar com a mafaldo sobr os tiles pq se os dois jogadores vao ver-se a si mesmos do lado direit

    connection.execute("INSERT INTO playerMatch (player_match_player_id, player_match_match_id) VALUES ('" + req.session.playerID + "', '" + req.session.match + "')",
        function (err, rows, fields) {
            if (err) {
                console.log("player match: " + err);
                res.send(err);
            } else {
                console.log("success");
                // res.send("Player added to playermatch")

                for (let i = 0; i < characters.length; i++) {
                    for (let j = 1; j < 6; j++) {
                        console.log(tile["slot_" + j], characters[i])
                        if (tile["slot_" + j] == characters[i]) {
                            connection.execute("INSERT INTO playerMatchCharacter (player_match_character_player_id, player_match_character_match_id, player_match_character_character_id, player_match_character_character_current_HP, player_match_character_tile_id) VALUES ('" + req.session.playerID + "', '" + req.session.match + "', '" + characters[i] + "', '" + hp[i] + "', '" + j + "')",
                                function (err1, rows, fields) {
                                    if (err1) {
                                        console.log("player match character: " + err1);
                                        res.send(err1);
                                    } else {
                                        
                                        console.log("character " + characters[i] + " added to slot " + j);
                                    }
                                }
                            )
                        }
                    }
                }
            }
        }
    )
}

function addCards(req, res) {
    connection.execute("INSERT INTO deck(deck_match_id, deck_player_id, deck_card_id, deck_card_state_id, deck_card_played) VALUES \
    ("+ req.session.match +", "+ req.session.playerID +",1, 1, false), ("+ req.session.match +", "+ req.session.playerID +", 2, 1, false), ("+ req.session.match +", "+ req.session.playerID +", 3, 1, false), \
    ("+ req.session.match +", "+ req.session.playerID +", 4, 1, false), ("+ req.session.match +", "+ req.session.playerID +", 5, 1, false), ("+ req.session.match +", "+ req.session.playerID +", 6, 1, false), \
    ("+ req.session.match +", "+ req.session.playerID +", 7, 1, false), ("+ req.session.match +", "+ req.session.playerID +", 8, 1, false), ("+ req.session.match +", "+ req.session.playerID +", 9, 1, false), \
    ("+ req.session.match +", "+ req.session.playerID +", 10, 1, false) ",
        function (err, rows, fields) {
            if (err) {
                console.log("Deck, card 1: " + err);
                // res.send(err);
            } else {
                console.log("yuppie, ", rows);
            }
        }
    )
}

router.get("/checkMatchFound", (req, res) => {
    connection.execute("SELECT matche_id FROM matche WHERE (matche_player1_id = ? or matche_player2_id = ?) and matche_player1_id is not null and matche_player2_id is not null and matche_state_id = 3",
        [req.session.playerID, req.session.playerID],
        function (err, rows, fields) {
            if (err) {
                res.send(err);
            } else {
                if (rows.length > 0) {
                    res.send(
                        {
                            matchFound: true,
                            matchID: rows,
                            session: req.session
                        }
                    );
                } else {
                    // console.log("No match found yet");
                    res.send("No match found yet");
                }
            }
        },
    )
});

router.get("/getMatchData", (req, res) => {
    console.log(req.session)
    console.log(req.session.match)
    connection.execute("SELECT player_username, matche_player2_id, player_match_character_character_id, caracter_name, player_match_character_tile_id, player_match_character_character_current_HP FROM player, playerMatchCharacter, matche, caracter WHERE player_match_character_player_id = matche_player2_id and matche_player2_id = player_id and matche_player2_id is not null and matche_id = " + req.session.match + " and player_match_character_match_id = matche_id and player_match_character_character_id = caracter_id",
        function (err, rows, fields) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                if (rows.length > 0) {

                    connection.execute("SELECT player_username, matche_player1_id, player_match_character_character_id, caracter_name, player_match_character_tile_id, player_match_character_character_current_HP FROM player, playerMatchCharacter, matche, caracter WHERE player_match_character_player_id = matche_player1_id and matche_player1_id = player_id and matche_id = " + req.session.match + " and player_match_character_match_id = matche_id and player_match_character_character_id = caracter_id ",
                        function (err1, rows1, fields1) {
                            if (err1) {
                                console.log(err1);
                                res.send(err1);
                            } else {
                                if (rows1.length > 0) {
                                    res.send(
                                        {
                                            inMatch: true,
                                            match_id: req.session.match,
                                            player_id: req.session.playerID,
                                            player1_id: rows1[0].matche_player1_id,
                                            player1_name: rows1[0].player_username,
                                            player2_id: rows[0].matche_player2_id,
                                            player2_name: rows[0].player_username,
                                            characters_player1: JSON.stringify(rows1),
                                            characters_player2: JSON.stringify(rows)
                                        }
                                    );

                                } else {
                                    console.log("One or both players are not in a match");
                                    res.send(
                                        {
                                            message: "One or both players are not in a match",
                                            playerID: req.session.playerID,
                                            matchID: req.session.match
                                        }
                                    );
                                }
                            }
                        }
                    )
                } else {
                    console.log("Player not in a match")
                    res.send({
                        inMatch: false,
                        playerID: req.session.player,
                        message: "Player not in a match"
                    });
                }
            }
        }
    )
});

router.get("/deltaChanges", (req, res) => {
    if (req.session.playerID && req.session.match) {
        connection.execute("SELECT matche_player1_id, matche_player2_id, matche_turn_player_id FROM matche WHERE (matche_player1_id = " + req.session.playerID + " or matche_player2_id = " + req.session.playerID + " ) and matche_id = " + req.session.match + "",
            function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
                else {
                    if (rows.length > 0) {

                        var ch1 = [];
                        var ch2 = [];

                        connection.execute("SELECT player_match_character_character_id, player_match_character_character_current_HP, player_match_character_tile_id, player_match_character_player_id FROM playerMatchCharacter, matche WHERE (player_match_character_player_id = " + rows[0].matche_player1_id + " OR player_match_character_player_id = " + rows[0].matche_player2_id + ") AND matche_id = " + req.session.match + " AND player_match_character_match_id = matche_id ",
                            function (err1, rows1, fields1) {
                                if (err1) {
                                    console.log(err1);
                                    res.send(err1);
                                } else {
                                    if (rows.length > 0) {

                                        for (let i = 0; i < 2; i++) {
                                            var currentPlayer = rows[0].matche_player1_id;

                                            if (i == 1) currentPlayer = rows[0].matche_player2_id;

                                            for (let j = 0; j < rows1.length; j++) {
                                                if (currentPlayer == rows1[j].player_match_character_player_id) {
                                                    if (i == 0) {
                                                        ch1.push(rows1[j]);
                                                    } else if (i == 1) {
                                                        ch2.push(rows1[j]);
                                                    }
                                                }
                                            }
                                        }
                                        didEverybodyDied(req, res, rows[0].matche_player1_id, rows[0].matche_player2_id, JSON.stringify(ch1), JSON.stringify(ch2), rows[0].matche_turn_player_id);

                                    } else {
                                        console.log("No characters associated with the player");
                                        res.send("No characters associated with the player");
                                    }
                                }
                            }
                        )
                    } else {
                        console.log("No match with this id or player id found. Match: " + req.session.match + " Player: " + req.session.playerID);
                        res.send("No match with this id or player id found. Match: " + req.session.match + " Player: " + req.session.playerID);
                    }
                }
            }
        )

    } else {
        res.send(
            {
                logged: false
            }
        );
    }
});

function didEverybodyDied(req, res, player1, player2, ch1, ch2, turn_id) {
    var player_id = req.session.playerID;
    var match_id = req.session.match;


    connection.execute("SELECT player_username, player_match_character_player_id, player_match_character_character_current_HP FROM playerMatchCharacter, player WHERE player_id = player_match_character_player_id AND player_match_character_match_id = ? AND player_match_character_player_id <> ? AND player_match_character_character_current_HP > 0 ", [match_id, player_id],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                if (rows.length > 0) {
                    var otherPlayer_id = rows[0].player_match_character_player_id
                    var otherPlayer_name = rows[0].player_username

                    connection.execute("SELECT player_match_character_character_current_HP FROM playerMatchCharacter WHERE player_match_character_match_id = ? AND player_match_character_player_id = ? AND player_match_character_character_current_HP > 0 ", [match_id, player_id],
                        function (error, rows, fields) {
                            if (error) {
                                res.send(error);
                            } else {
                                if (rows.length > 0) {
                                    res.send(
                                        {
                                            matchFinished: false,
                                            turn: turn_id,
                                            player: req.session.playerID,
                                            player1: player1,
                                            player2: player2,
                                            ch1: ch1,
                                            ch2: ch2
                                        }
                                    );

                                } else {
                                    connection.execute("UPDATE matche SET matche_state_id = 2 WHERE matche_id = ?", [match_id],
                                        function (error, rows, fields) {
                                            if (error) {
                                                res.send(error);
                                            } else {
                                                connection.execute("UPDATE matche SET matche_winner_id = ? WHERE matche_id = ?", [otherPlayer_id, match_id],
                                                    function (error, rows, fields) {
                                                        if (error) {
                                                            res.send(error);
                                                        } else {
                                                            updatePlayerStats(otherPlayer_id, player_id, otherPlayer_name, res, req, player1, player2, ch1, ch2)
                                                        }
                                                    }
                                                )
                                            }
                                        }
                                    )
                                }
                            }

                        }
                    )

                } else {
                    
                    if(player_id == player1) otherPlayer_id = player2
                    else if(player_id == player2) otherPlayer_id = player1
                
                    connection.execute("UPDATE matche SET matche_state_id = 2 WHERE matche_id = ?", [match_id],
                        function (error, rows, fields) {
                            if (error) {
                                res.send(error);
                            } else {

                                connection.execute("UPDATE matche SET matche_winner_id = ? WHERE matche_id = ?", [player_id, match_id],
                                    function (error, rows, fields) {
                                        if (error) {
                                            res.send(error);
                                        } else {
                                            updatePlayerStats(player_id, otherPlayer_id, req.session.playerName, res, req, player1, player2, ch1, ch2)
                                        }
                                    }
                                )
                            }
                        }
                    )
                }
            }
        })
};


function updatePlayerStats(winner, loser, winner_name, res, req, player1, player2, ch1, ch2){ //update player victories
    if(winner == req.session.playerID){
        connection.execute("UPDATE player SET player_victories = player_victories + 1 WHERE player_id = ?", [winner],
            function (error, rows, fields) {
                if (error) {
                    res.send(error);
                } else {
                    console.log("updated the winner victories")
                    connection.execute("UPDATE player SET player_matches = player_matches + 1 WHERE player_id = ?", [winner],
                        function (error, rows, fields) {
                            if (error) {
                                res.send(error);
                            } else {
                                console.log("updated the winner matches, loser: ", loser)
                                connection.execute("UPDATE player SET player_matches = player_matches + 1 WHERE player_id = ?", [loser],
                                    function (error, rows, fields) {
                                        if (error) {
                                            res.send(error);
                                        } else {
                                            console.log("updated the loser matches")
                                            req.session.match = null;   
        
                                            res.send(
                                                {
                                                    matchFinished: true,
                                                    player: req.session.playerID,
                                                    winner: winner_name,
                                                    player1: player1,
                                                    player2: player2,
                                                    ch1: ch1,
                                                    ch2: ch2
                                                }
                                            );
                                        }
                                    }
                                )
                            }
                        }
                    )
                }
            }
        )
    }else{
        req.session.match = null; 
        res.send(
            {
                matchFinished: true,
                player: req.session.playerID,
                winner: winner_name,
                player1: player1,
                player2: player2,
                ch1: ch1,
                ch2: ch2
            }
        );
    }
}

module.exports = router;