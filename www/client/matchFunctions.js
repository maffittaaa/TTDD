var started = onAwake()

setInterval(deltaChanges, 2000)

function onAwake() {
    console.log("start");

    $.ajax({
        type: "GET",
        url: "/match/getMatchData",
        success: function (data) {
            if (data.inMatch) {
                var player1_characters = JSON.parse(data.characters_player1);
                var player2_characters = JSON.parse(data.characters_player2);

                setCharactersValues(data.match_id, data.player_id, data.player1_id, data.player2_id, player1_characters, player2_characters);

                return started = true;
            } else {
                window.location.replace("/login.html");
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function deltaChanges() {
    if (started == true) {
        $.ajax({
            type: "GET",
            url: "/match/deltaChanges",
            success: function (data) {
                if (data.matchFinished == true) {
                    matchFinished();
                } else if (data.logged == false) {
                    window.location.replace("/login.html");
                } else {
                    setCharactersValues(null, data.player, data.player1, data.player2, JSON.parse(data.ch1), JSON.parse(data.ch2), ongoing = true);
                }
            },
            error: function (err) {
                console.log(err);
            }
        })


    }

}

function matchFinished() {
    var order = [1, 4, 2, 5, 3];

    for (var i = 1; i < 3; i++) { //runs 2 times because there are 2 players
        for (let j = 0; j < order.length; j++) { // runs 5 times because it's the size of the order and because of the quantity of the slots available
            document.getElementById('slot_' + order[j] + '_p' + i + '').disabled = true;
        }
    }

    window.location.replace("/choseCharacters.html");
};

function setCharactersValues(match, player, p1, p2, ch1, ch2, ongoing = false) {

    // it's just because of html order of the slots, when we pass to phaser, this stops existing
    var order = [1, 4, 2, 5, 3];

    if (ongoing) {
        if (p1 == player) {
            //player = ch1

            for (let i = 0; i < ch1.length; i++) {
                var character = document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p1").innerHTML;
                character = character.split(":")

                if (character[1] != ch1[i].player_match_character_character_current_HP) {
                    console.log("character toke damage");
                    document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p1").innerHTML = character[0] + ": " + ch1[i].player_match_character_character_current_HP;
                }
            }

            for (let i = 0; i < ch2.length; i++) {
                var character = document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p2").innerHTML;
                character = character.split(":")

                if (character[1] != ch2[i].player_match_character_character_current_HP) {
                    console.log("character toke damage");
                    document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p2").innerHTML = character[0] + ": " + ch2[i].player_match_character_character_current_HP;
                }
            }

        } else {
            //player = ch2
            for (let i = 0; i < ch2.length; i++) {
                var character = document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p1").innerHTML;
                character = character.split(":")

                if (character[1] != ch2[i].player_match_character_character_current_HP) {
                    console.log("character toke damage");
                    document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p1").innerHTML = character[0] + ": " + ch2[i].player_match_character_character_current_HP;
                }
            }

            for (let i = 0; i < ch1.length; i++) {
                var character = document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p2").innerHTML;
                character = character.split(":")

                if (character[1] != ch1[i].player_match_character_character_current_HP) {
                    console.log("character toke damage");
                    document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p2").innerHTML = character[0] + ": " + ch1[i].player_match_character_character_current_HP;
                }
            }
        }
    } else {
        for (var i = 1; i < 3; i++) { //corre 2 vezes por serem dois players
            for (let j = 0; j < order.length; j++) { // 5 vezes por ser o tamanho da order e a quantidade de slots disponiveis
                var placeCh = document.getElementById("characters" + i + "").innerHTML;

                var classe;

                var typeOfAttack; //if its an attacker or a target

                if (order[j] > 3) {
                    classe = "back_p" + i + ""; //characters that are in the back that belongs either to player1 or player2
                } else {
                    classe = "front_p" + i + "";
                }

                if (i == 1) {
                    placeCh = placeCh + ' \
                    <div class='+ classe + '> <button onclick="setAttackerSlot(' + order[j] + ')" id = slot_' + order[j] + '_p' + i + '> Empty Slot </button> </br> </div>';
                } else {
                    placeCh = placeCh + ' \
                    <div class='+ classe + '> <button onclick="setTargetSlot(' + order[j] + ')" id = slot_' + order[j] + '_p' + i + '> Empty Slot </button> </br> </div>';
                }

                document.getElementById("characters" + i + "").innerHTML = placeCh;

                document.getElementById('slot_' + order[j] + '_p' + i + '').disabled = true;
            }
        }


        if (p1 == player) {
            //player = ch1

            for (let i = 0; i < ch1.length; i++) {
                document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p1").disabled = false;
                document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p1").innerHTML = ch1[i].caracter_name + ": " + ch1[i].player_match_character_character_current_HP;
            }

            for (let i = 0; i < ch2.length; i++) {
                document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p2").disabled = false;
                document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p2").innerHTML = ch2[i].caracter_name + ": " + ch2[i].player_match_character_character_current_HP;
            }

        } else {
            //player = ch2

            for (let i = 0; i < ch2.length; i++) {
                document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p1").disabled = false;
                document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p1").innerHTML = ch2[i].caracter_name + ": " + ch2[i].player_match_character_character_current_HP;
            }

            for (let i = 0; i < ch1.length; i++) {
                document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p2").disabled = false;
                document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p2").innerHTML = ch1[i].caracter_name + ": " + ch1[i].player_match_character_character_current_HP;
            }
        }
    }
}