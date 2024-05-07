// on start
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
            }else{
                window.location.replace("/login.html");
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function deltaChanges() {
    console.log("Started: " + started);

    if (started == true) {
        console.log("delta changes running");
        $.ajax({
            type: "GET",
            url: "/match/deltaChanges",
            success: function (data) {
                if (data) {
                    // console.log(data)
                    setCharactersValues(null, data.player, data.player1, data.player2, JSON.parse(data.ch1), JSON.parse(data.ch2), ongoing = true);
                }else{
                    window.location.replace("/login.html");
                }
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
}

function setCharactersValues(match, player, p1, p2, ch1, ch2, ongoing = false) {

    // it's just because of html order of the slots, when we pass to phaser, this stops existing
    var order = [1,4,2,5,3];

    if (ongoing) {
        console.log(player, p1, p2, ch1, ch2);
        console.log("P1==player" + (p1==player));
        if(p1 == player){
            //player = ch1
    
            for (let i = 0; i < ch1.length; i++) {
                var character = document.getElementById("slot_"+ ch1[i].player_match_character_tile_id +"_p1").innerHTML;
                character = character.split(":")

                console.log(ch1[i].player_match_character_character_current_HP);
                console.log(character);

                if(character[1] != ch1[i].player_match_character_character_current_HP ){
                    console.log("character toke damage");
                    document.getElementById("slot_"+ ch1[i].player_match_character_tile_id +"_p1").innerHTML = character[0] + ": " + ch1[i].player_match_character_character_current_HP;

                    // document.getElementById("slot_"+ ch1[i].player_match_character_tile_id +"_p1").innerHTML = character[0] + ": " + ch1[i].player_match_character_character_current_HP;
                }
            }
    
            for (let i = 0; i < ch2.length; i++) {
                var character = document.getElementById("slot_"+ ch2[i].player_match_character_tile_id +"_p2").innerHTML;
                character = character.split(":")

                console.log(ch2[i].player_match_character_character_current_HP);
                console.log(character);

                if(character[1] != ch2[i].player_match_character_character_current_HP ){
                    console.log("character toke damage");

                    document.getElementById("slot_"+ ch2[i].player_match_character_tile_id +"_p2").innerHTML = character[0] + ": " + ch2[i].player_match_character_character_current_HP;
                }
            }
    
        }else{
            //player = ch2
            for (let i = 0; i < ch2.length; i++) {
                var character = document.getElementById("slot_"+ ch2[i].player_match_character_tile_id +"_p1").innerHTML;
                character = character.split(":")
                
                console.log(ch2[i].player_match_character_character_current_HP);
                console.log(character);

                if(character[1] != ch2[i].player_match_character_character_current_HP ){
                    console.log("character toke damage");

                    document.getElementById("slot_"+ ch2[i].player_match_character_tile_id +"_p1").innerHTML = character[0] + ": " + ch2[i].player_match_character_character_current_HP;
                }
            }
    
            for (let i = 0; i < ch1.length; i++) {
                var character = document.getElementById("slot_"+ ch1[i].player_match_character_tile_id +"_p2").innerHTML;
                character = character.split(":")

                console.log(ch1[i].player_match_character_character_current_HP);
                console.log(character);

                if(character[1] != ch1[i].player_match_character_character_current_HP ){
                    console.log("character toke damage");

                    document.getElementById("slot_"+ ch1[i].player_match_character_tile_id +"_p2").innerHTML = character[0] + ": " + ch1[i].player_match_character_character_current_HP;
                }
            }
        }
    } else {
        for (var i = 1; i < 3; i++) {
            for (let j = 0; j < order.length; j++) {
                var placeCh = document.getElementById("characters"+ i +"").innerHTML;
    
                var classe;
                var typeOfAttack; //if its an attacker or a target

                if(i == 1){
                    typeOfAttack = setAttackerSlot(); //neste momento requer id do slot
                }else{
                    typeOfAttack = setTargetSlot(); //
                }

                if (order[j] > 3) {
                    classe = "back_p"+ i +""; //characters that are in the back that belongs either to player1 or player2
                } else {
                    classe = "front_p"+ i +"";
                }

                
                
                placeCh = placeCh + ' \
                <div class='+ classe +'> <button onclick="'+ typeOfAttack +'" id = slot_'+ order[j] +'_p'+ i +'> Empty Slot </button> </br> </div>';
            
                document.getElementById("characters"+ i +"").innerHTML = placeCh;
    
                document.getElementById('slot_'+ order[j] +'_p'+ i +'').disabled = true;
            }
        }
    
    
        if(p1 == player){
            //player = ch1
    
            for (let i = 0; i < ch1.length; i++) {
                document.getElementById("slot_"+ ch1[i].player_match_character_tile_id +"_p1").disabled = false;
                document.getElementById("slot_"+ ch1[i].player_match_character_tile_id +"_p1").innerHTML = ch1[i].caracter_name + ": " + ch1[i].player_match_character_character_current_HP;
            }
    
            for (let i = 0; i < ch2.length; i++) {
                document.getElementById("slot_"+ ch2[i].player_match_character_tile_id +"_p2").disabled = false;
                document.getElementById("slot_"+ ch2[i].player_match_character_tile_id +"_p2").innerHTML = ch2[i].caracter_name + ": " + ch2[i].player_match_character_character_current_HP;
            }
    
        }else{
            //player = ch2
        
            for (let i = 0; i < ch2.length; i++) {
                document.getElementById("slot_"+ ch2[i].player_match_character_tile_id +"_p1").disabled = false;
                document.getElementById("slot_"+ ch2[i].player_match_character_tile_id +"_p1").innerHTML = ch2[i].caracter_name + ": " + ch2[i].player_match_character_character_current_HP;
            }
    
            for (let i = 0; i < ch1.length; i++) {
                document.getElementById("slot_"+ ch1[i].player_match_character_tile_id +"_p2").disabled = false;
                document.getElementById("slot_"+ ch1[i].player_match_character_tile_id +"_p2").innerHTML = ch1[i].caracter_name + ": " + ch1[i].player_match_character_character_current_HP;
            }
        }

        console.log(match, p1, p2, ch1, ch2);
    }
}