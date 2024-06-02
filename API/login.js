const express = require('express');
const connection = require('../database');
const router = express.Router();

router.get("/CheckLogin", (req, res) => {
    if (!req.session.playerID){
        res.send({logged: false});
        return;
    }

    connection.execute("SELECT player_email, player_level, player_matches, player_victories FROM player WHERE player_id = ?", [req.session.playerID], 
        function(err, rows, fields){
            if(err){
                res.send(err);
            }
            else{
                connection.execute("SELECT player_character_character_id, caracter_range FROM playerCharacter INNER JOIN caracter ON player_character_character_id = caracter_id WHERE player_character_player_id = ?", [req.session.playerID], 
                    function(err, rows1, fields){
                        if(err){
                            res.send(err);
                        }
                        else{
                            var newlevel = updateXp(rows[0].player_level)
                            var oldLevel = req.session.playerLevel
                            var changed = false

                            if(rows1.length < oldLevel + 3){
                                req.session.playerLevel = newlevel

                                if(newlevel <= 7) {
                                    changed = true
                                }

                            }
                            if(rows.length == 0){
                                res.send(
                                    {
                                        id: req.session.playerID,
                                        name: req.session.playerName,
                                        email: rows[0].player_email,
                                        characters: "No characters available",
                                        xp: rows[0].player_level,
                                        level: req.session.playerLevel,
                                        matchesDone: rows[0].player_matches,
                                        victories: rows[0].player_victories,
                                        match: req.session.match,
                                        logged: req.session.logged != undefined,
                                        levelChanged: changed
                                    },
                                );
                            }else{
                                res.send(
                                    {
                                        id: req.session.playerID,
                                        name: req.session.playerName,
                                        email: rows[0].player_email,
                                        characters: JSON.stringify(rows1),
                                        xp: rows[0].player_level,
                                        level: req.session.playerLevel,
                                        matchesDone: rows[0].player_matches,
                                        victories: rows[0].player_victories,
                                        match: req.session.match,
                                        logged: req.session.logged != undefined,
                                        levelChanged: changed
                                    },
                                );
                            }
                        }
                    }
                )
            }
        }
    )
});

function updateXp(xp){
    var i = 0;
    var intialLevel = 50;
    var levelFound = false;

    while (levelFound == false){
        if(xp < intialLevel){
            xp = i;
            levelFound = true;
        }else{
            i += 1;;
            intialLevel += (intialLevel/2);
        }
    }
    return xp;
}

router.post("/login", (req, res) => {
    var login_name = req.body.login_name;
    var login_password = req.body.login_password
    console.log(login_name, login_password)
    
    connection.execute("SELECT * FROM player WHERE player_username = '"+ login_name +"' and player_password = '"+ login_password +"'", 
        function(err, rows, fields){
            if(err){
                res.send(err);
            }
            else{
                if(rows.length == 0){
                    res.send({
                        "loggedIn": false,
                        "message": err
                    })
                }else{
                    req.session.logged = true;
                    req.session.playerID = rows[0].player_id;
                    req.session.playerName = rows[0].player_username;
                    req.session.playerLevel = updateXp(rows[0].player_level);
                    
                    res.send(
                        {
                            "loggedIn": req.session.logged,
                            "username": req.session.playerName,
                            "id": req.session.playerID,
                        }
                    );
                }
            }
        }
    )
})

router.post("/Logout", (req, res) => {
    req.session.logged = false;

    if(req.session.match != null && req.session.match != undefined){
        connection.execute("SELECT * FROM matche WHERE matche_player1_id = ? OR matche_player2_id = ? AND matche_state_id = 1 or matche_state_id = 3 AND matche_id = ?", [req.session.playerID, req.session.playerID, req.session.match],
            function(err, rows, fields){
                if(err){
                    res.send(err);
                }else{
                    var matchWinner = null

                    if(rows.length > 0){
                        
                        if(rows[0].matche_state_id != 1){
                            if(req.session.playerID == rows[0].matche_player1_id){
                                matchWinner = rows[0].matche_player2_id
                            }else{
                                matchWinner = rows[0].matche_player1_id
                            }
                        }

                        connection.execute("UPDATE matche SET matche_state_id = 2 WHERE matche_id = ?", [req.session.match],
                            function(err, rows, fields){
                                if(err){
                                    res.send(err);
                                }else{
                                    connection.execute("UPDATE matche SET matche_winner_id = ? WHERE matche_id = ?", [matchWinner, req.session.match],
                                        function(err, rows, fields){
                                            if(err){
                                                res.send(err);
                                            }else{
                                                req.session.playerID = null;
                                                req.session.playerName = null;
                                                req.session.playerLevel = null;
                                                req.session.match = null;
                                                req.session.turnsToSkip = null;
                                                req.session.tookCard = null;

                                                res.send({
                                                    logged: false
                                                })
                                            }
                                        }
                                    )
                                }
                            }
                        )
                    }else{
                        req.session.playerID = null;
                        req.session.playerName = null;
                        req.session.playerLevel = null;
                        req.session.match = null;
                        req.session.turnsToSkip = null;
                        req.session.tookCard = null;
                        res.send({
                            logged: false
                        })
                    }
                }
            }
        )
    }else{
        req.session.playerID = null;
        req.session.playerName = null;
        req.session.playerLevel = null;
        req.session.match = null;
        req.session.turnsToSkip = null;
        req.session.tookCard = null;
        res.send({
            logged: false
        })
    }
})

module.exports = router;