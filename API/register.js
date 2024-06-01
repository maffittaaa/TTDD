const express = require('express');
const connection = require('../database');
const router = express.Router();

router.post("/register", (req, res) => {
    var user = []

    user[0] = req.body.login_name;
    user[1] = req.body.login_password;
    user[2] = req.body.login_email;

    if(user[0] == "" || user[1] == "" || user[2] == ""){
        res.send({
            "registered": false,
            "message": "Please fill all the spaces to complete your registry."
        });
        return
    }

    connection.execute("SELECT * FROM player WHERE player_username = ? OR player_email = ? ", [user[0], user[2]],
        function (err, rows, fields) {
            if (err) {
                res.send({
                    "registered": false,
                    "message": "something went wrong: " + err
                });
            }
            else {
                if (rows.length > 0) {
                    console.log("Already exists");
                    res.send({
                        "registered": false,
                        "message": "The user already exists, \n or the email is already in use, \n please try another one"
                    })
                } else {
                    connection.execute("INSERT INTO player (player_username, player_password, player_email) VALUES ('" + user[0] + "', '" + user[1] + "', '" + user[2] + "')",
                        function (err, rows, fields) {
                            if (err) {
                                res.send({
                                    "registered": false,
                                    "message": "something went wrong: " + err
                                })
                            }
                            else {
                                for (let i = 0; i < 3; i++) {
                                    connection.execute("INSERT INTO playerCharacter(player_character_player_id, player_character_character_id) VALUES ("+ rows.insertId +", "+ (i + 1) +");",
                                        function (err, rows, fields) {
                                            if (err) {
                                                res.send({
                                                    "registered": false,
                                                    "message": "something went wrong: " + err
                                                })
                                            } else {
                                                if(i == 2){
                                                    res.send({
                                                        "registered": true,
                                                        "username": user[0],
                                                        "email": user[2]
                                                    })
                                                }
                                            }
                                        }
                                    )
                                }
                            }
                        })
                }
            }
        })
})

module.exports = router;