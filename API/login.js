const express = require('express');
const connection = require('../database');
const router = express.Router();

router.get("/CheckLogin", (req, res) => {
    if (!req.session.playerID){
        res.send({logged: false});
        return
    }

    connection.execute("SELECT player_character_character_id FROM playerCharacter WHERE player_character_player_id = ?", [req.session.playerID], 
        function(err, rows, fields){
            if(err){
                res.send(err);
            }
            else{
                if(rows.length == 0){
                    res.send(
                        {
                            id: req.session.playerID,
                            name: req.session.playerName,
                            characters: "No characters available.",
                            match: req.session.match,
                            logged: req.session.logged != undefined,
                        },
                    );
                }else{
                    res.send(
                        {
                            id: req.session.playerID,
                            name: req.session.playerName,
                            characters: JSON.stringify(rows),
                            match: req.session.match,
                            logged: req.session.logged != undefined,
                        },
                    );
                }
            }
        }
    )


});

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

                    console.log(req.session)

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

module.exports = router;