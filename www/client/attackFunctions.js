var attackerSlot = 0;
var targetSlot = 0;
var stillAttacking = false;
var cardOnHold;
var charOnHold = null;

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
    } else if (stillAttacking = true){
        if(charOnHold != null){
            playCard(cardOnHold, charOnHold, slot);
        }else{
            playCard(cardOnHold, slot);
        }
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
        },
        error: function (err) {
            console.log(err);
        }
    })
};

function playCard(card_id, charChosen = null, secCharChosen = null) { // player picks a card
    $.ajax({
        type: 'POST',
        url: '/cards/playCard',
        data: {
            "cardPicked": card_id,
            "charChosen": charChosen,
            "secCharChosen": secCharChosen
        },
        success: function (data) {
            if(data.stillAttacking){
                stillAttacking = data.stillAttacking
                cardOnHold = data.card
                if(data.charOnHold){
                    charOnHold = data.charOnHold
                }
            }else if(data.card_id){
                console.log(data)
                document.getElementById("card_id_"+ data.card_id ).innerHTML = '<button class="graveyard" id="card_dead_id_'+ data.card_id +'"> '+ data.card_name +' </button>';
                document.getElementById("card_dead_id_"+ data.card_id).disabled = true;
                stillAttacking = false;
                charOnHold = null;
            }
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



