var attackerSlot = 0
var targetSlot = 0
function setAttackerSlot(slot) { //attacker has a slot 

    attackerSlot = slot;
}

function setTargetSlot(slot) { // if attacker has a slot, target has a slot 
    if (attackerSlot != 0) {
        targetSlot = slot;
        doAttack1();
        attackerSlot = 0;
        targetSlot = 0;
    }
}

function doAttack1() { // passing the attackerslot and the target slot with the player_id and the match_id to the server
    var player_id = document.getElementById("player_id").value;
    var match_id = document.getElementById("match_id").value;
    $.ajax({
        type: 'POST',
        url: '/attack1',
        data: {
            "player_id": player_id,
            "match_id": match_id,
            "attackerSlot": attackerSlot,
            "targetSlot": targetSlot
        },
        success: function (data) {
            console.log(data);
            document.getElementById("result").innerHTML = "Oponent Atacked";
        },
        error: function (err) {
            console.log(err);
        }
    })
}



function resetHPFromCharacters() {
    var match_id = document.getElementById('match_id').value;
    $.ajax({
        type: 'GET',
        url: '/resetHPCharacters',
        data: {
            "match_id": match_id,
        },
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

