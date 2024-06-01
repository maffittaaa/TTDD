const express = require('express');
const connection = require('../database');
const router = express.Router();

router.get("/getLevel", (req, res) => {

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

})

module.exports = router;