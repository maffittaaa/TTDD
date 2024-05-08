var attackerSlot = 0
var targetSlot = 0

function setAttackerSlot(slot) { //attacker has a slot 
    attackerSlot = slot;
    console.log(slot);
};

function setTargetSlot(slot) { // if attacker has a slot, target has a slot 
    if (attackerSlot != 0) {
        targetSlot = slot;
        doAttack1();
        attackerSlot = 0;
        targetSlot = 0;
    }
};

function doAttack1() { // passing the attackerslot and the targetslot to the server
    $.ajax({
        type: 'POST',
        url: '/attack/attack',
        data: {
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
};

function endOfTurn() {
    $.ajax({
        type: 'GET',
        url: '/attack/endTurn',

        success: function (data) {
            console.log(data);
            document.getElementById("result").innerHTML = "Turn Switched";
        },
        error: function (err) {
            console.log(err);
        }
    })
};

function resetHPFromCharacters() {
    $.ajax({
        type: 'GET',
        url: '/attack/resetHPCharacters',

        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
};

function resetStatusFromCharacters() {
    $.ajax({
        type: 'GET',
        url: '/attack/resetStatusCharacters',

        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
};

function setsHPTo1FromCharacters() {
    $.ajax({
        type: 'GET',
        url: '/attack/setTo1',

        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
};



