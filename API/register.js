const express = require('express');
const connection = require('../database');
const router = express.Router();

router.post("/register", (req, res) => {
    if (req.body.login_password === req.body.login_check_password) {
        var user = []

        user[0] = req.body.login_name;
        user[1] = req.body.login_password;
        user[2] = req.body.login_email;

        connection.execute("SELECT * FROM player WHERE player_username = '" + user[0] + "'",
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
                            "message": "The user already exists, please try another one"
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
                                    res.send({
                                        "registered": true,
                                        "username": user[0],
                                        "email": user[2]
                                    })
                                }
                            })
                    }
                }
            })
    }
})

module.exports = router;