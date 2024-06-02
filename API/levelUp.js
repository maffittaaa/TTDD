const express = require('express');
const connection = require('../database');
const router = express.Router();

router.get("/getRandomCharacters", (req, res) => {
    connection.execute("SELECT player_character_character_id FROM playerCharacter WHERE player_character_player_id = ?", [req.session.playerID], 
        function(err, rows, fields){
            if(err){
                res.send(err);
            }else{
                if (rows.length > 0){

                    var charactersNotFound = []
                    var totalCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                    var charctersChosen = []
                    var choseChar = false

                    for (let i = 0; i < totalCharacters.length; i++) {
                        for (let j = 0; j < rows.length; j++) {
                            if(rows[j].player_character_character_id == totalCharacters[i]){
                                totalCharacters[i] = null
                            }
                        }
                    }

                    for (let i = 0; i < 10; i++) {
                        if(totalCharacters[i] != null){
                            charactersNotFound.push(totalCharacters[i])
                        }
                    }
                    
                    while (charctersChosen.length < 3){
                        choseChar = false

                        var randomChar = Math.floor(Math.random() * charactersNotFound.length)

                        for (let i = 0; i < charctersChosen.length; i++) {
                            if(charactersNotFound[randomChar] == charctersChosen[i]){
                                choseChar = true
                            }
                        }

                        if(!choseChar){
                            charctersChosen.push(charactersNotFound[randomChar])
                        }
                    }

                    res.send({
                        gotCharacters: true,
                        characters: JSON.stringify(charctersChosen)
                    })

                }else{
                    res.send("Cannot get characters. You don't have any yet.");
                }
            }
        }
    )
})

router.post("/upgradeLevel", (req, res) => {
    console.log(req.body, req.session.playerID)
    var winnerID = req.body.winner 
    var loserID = req.body.loser
    var winXP = 25
    var losXP = 10

    if(winnerID == req.session.playerID){
        connection.execute("UPDATE player SET player_level = player_level + ? WHERE player_id = ?", [winXP, winnerID],
            function (err, rows, fields){
                if(err){
                    res.send(err)
                }else{
                    connection.execute("UPDATE player SET player_level = player_level + ? WHERE player_id = ?", [losXP, loserID],
                        function (err, rows, fields){
                            if(err){
                                res.send(err)
                            }else{
                                res.send({
                                    message: "Both the winner and the loser and gain xp.",
                                })
                            }
                        }
                    )
                }
            }
        )
    }else{
        res.send({
            message: "Winner updating player stats.",
        })
    }

})

router.put("/addCharacters", (req, res) => {
    characterID = req.body.character

    connection.execute("INSERT INTO playerCharacter(player_character_player_id, player_character_character_id) VALUES (?, ?)",[req.session.playerID, characterID],
        function (err, rows, fields) {
            if (err) {
                res.send({
                    "success": false,
                    "message": "something went wrong: " + err
                })
            } else {
                res.send({
                    "success": true,
                    "message": "Everything went ok and a new character was added." 
                })
            }
        }
    )
})

module.exports = router;