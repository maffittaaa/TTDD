const express = require('express');
const connection = require('../database');
const router = express.Router();

function createMatch(req, res, charactersFond, charactersId, charactersHp, tile) {
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
                            "charactersChosen": charactersFond,
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
                                                            addCharacter(req, res, charactersId, charactersHp, tile);
                                                            res.send(
                                                                {
                                                                    "success": true,
                                                                    "player_id": req.session.playerID,
                                                                    "charactersChosen": charactersFond,
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
                                                addCharacter(req, res, charactersId, charactersHp, tile);
                                                res.send(
                                                    {
                                                        "success": true,
                                                        "player_id": req.session.playerID,
                                                        "charactersChosen": charactersFond,
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
                    console.log("No match found yet");
                    res.send("No match found yet");
                }
            }
        },
    )
});

router.get("/getMatchData", (req, res) => {
    connection.execute("SELECT matche_player2_id, player_match_character_character_id, caracter_name, player_match_character_tile_id, player_match_character_character_current_HP FROM playermatchcharacter, matche, caracter WHERE player_match_character_player_id = matche_player2_id and matche_player2_id is not null and matche_id = " + req.session.match + " and player_match_character_match_id = matche_id and player_match_character_character_id = caracter_id",
        function (err, rows, fields) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                if (rows.length > 0) {

                    connection.execute("SELECT matche_player1_id, player_match_character_character_id, caracter_name, player_match_character_tile_id, player_match_character_character_current_HP FROM playermatchcharacter, matche, caracter WHERE player_match_character_player_id = matche_player1_id and matche_id = " + req.session.match + " and player_match_character_match_id = matche_id and player_match_character_character_id = caracter_id",
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
                                            player2_id: rows[0].matche_player2_id,
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

router.post("/choseCharacters", (req, res) => {
    var charactersChosen = req.body.slots;
    charactersChosen = JSON.parse(charactersChosen);

    connection.execute("SELECT caracter_id, caracter_name, caracter_HP FROM player, playercharacter, caracter WHERE player_id = " + req.session.playerID + " and player_id = player_character_player_id and player_character_character_id = caracter_id",
        function (err, rows, fields) {
            if (err) {
                res.send(err);
            }
            else {
                if (rows.length > 0) {

                    var charactersNameFond = [];
                    var charactersIdFond = [];
                    var charactersHpFond = [];
                    var chaSentLength = 0;

                    for (var i = 1; i < 6; i++) {
                        for (var j = 0; j < rows.length; j++) {
                            if (charactersChosen["slot_" + i + ""] != 0) {
                                if (rows[j].caracter_id == charactersChosen["slot_" + i + ""]) {
                                    charactersNameFond.push(" " + rows[j].caracter_name)
                                    charactersIdFond.push(rows[j].caracter_id);
                                    charactersHpFond.push(rows[j].caracter_HP);
                                }
                            }
                        }
                        if (charactersChosen["slot_" + i + ""] != 0) {
                            chaSentLength++;
                        }
                    }
                    if (charactersNameFond.length == chaSentLength) {
                        createMatch(req, res, charactersNameFond, charactersIdFond, charactersHpFond, charactersChosen);
                    } else {
                        res.send(
                            {
                                "success": false,
                                "message": "Invalid character chosen. Only fond this: ",
                                "charactersFond": JSON.stringify(charactersIdFond)
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

function addCharacter(req, res, characters, hp, tile) {

    //acabar de por os slots/tiles inseridos na base de dados quando os characters sao inseridos. fazer check a se o player é o player 1 ou o 2. falar com a mafaldo sobr os tiles pq se os dois jogadores vao ver-se a si mesmos do lado direit

    connection.execute("INSERT INTO playermatch (player_match_player_id, player_match_match_id) VALUES ('" + req.session.playerID + "', '" + req.session.match + "')",
        function (err, rows, fields) {
            if (err) {
                console.log("player match: " + err);
                res.send(err);
            } else {
                console.log("success");
                // res.send("Player added to playermatch")

                for (let i = 0; i < characters.length; i++) {
                    for (let j = 1; j < 6; j++) {
                        if (tile["slot_" + j] == characters[i]) {

                            connection.execute("INSERT INTO playermatchcharacter (player_match_character_player_id, player_match_character_match_id, player_match_character_character_id, player_match_character_character_current_HP, player_match_character_tile_id) VALUES ('" + req.session.playerID + "', '" + req.session.match + "', '" + characters[i] + "', '" + hp[i] + "', '" + j + "')",
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

router.get("/deltaChanges", (req, res) => {
    if (req.session.playerID && req.session.match) {
        connection.execute("SELECT matche_player1_id, matche_player2_id FROM matche WHERE (matche_player1_id = " + req.session.playerID + " or matche_player2_id = " + req.session.playerID + " ) and matche_id = " + req.session.match + "",
            function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
                else {
                    if (rows.length > 0) {

                        var ch1 = [];
                        var ch2 = [];

                        connection.execute("SELECT player_match_character_character_id, player_match_character_character_current_HP, player_match_character_tile_id, player_match_character_player_id FROM playermatchcharacter, matche WHERE (player_match_character_player_id = " + rows[0].matche_player1_id + " OR player_match_character_player_id = " + rows[0].matche_player2_id + ") AND matche_id = " + req.session.match + " AND player_match_character_match_id = matche_id ",
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

                                        didEverybodyDied(req, res, rows[0].matche_player1_id, rows[0].matche_player2_id, JSON.stringify(ch1), JSON.stringify(ch2));

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

function didEverybodyDied(req, res, player1, player2, ch1, ch2) {
    var player_id = req.session.playerID;
    var match_id = req.session.match;

    connection.execute("SELECT player_match_character_character_current_HP FROM playermatchcharacter WHERE player_match_character_match_id = ? AND player_match_character_player_id <> ? AND player_match_character_character_current_HP > 0 ", [match_id, player_id],
        function (error, rows, fields) {
            if (error) {
                res.send(error);
            } else {
                if (rows.length > 0) {
                    connection.execute("SELECT player_match_character_character_current_HP FROM playermatchcharacter WHERE player_match_character_match_id = ? AND player_match_character_player_id = ? AND player_match_character_character_current_HP > 0 ", [match_id, player_id],
                        function (error, rows, fields) {
                            if (error) {
                                res.send(error);
                            } else {
                                if (rows.length > 0) {
                                    res.send(
                                        {
                                            matchFinished: false,
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
                                                res.send(
                                                    {
                                                        matchFinished: true,
                                                        player: req.session.playerID,
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

                        }
                    )

                } else {
                    connection.execute("UPDATE matche SET matche_state_id = 2 WHERE matche_id = ?", [match_id],
                        function (error, rows, fields) {
                            if (error) {
                                res.send(error);
                            } else {
                                req.session.match = null;

                                res.send(
                                    {
                                        matchFinished: true,
                                        player: req.session.playerID,
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
        })
};

module.exports = router;