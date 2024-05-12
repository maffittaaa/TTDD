var attackerSlot = 0
var targetSlot = 0
var stillAttacking = false
var cardOnHold

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
        playCard(cardOnHold, slot)
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

function playCard(card_id, charChosen = null) { // player picks a card
    $.ajax({
        type: 'POST',
        url: '/cards/playCard',
        data: {
            "cardPicked": card_id,
            "charChosen": charChosen
        },
        success: function (data) {
            if(data.stillAttacking){
                stillAttacking = data.stillAttacking
                cardOnHold = data.card
            }else if(data.card_id){
                console.log(data)
                document.getElementById("card_id_"+ data.card_id ).innerHTML = '<button class="graveyard" id="card_dead_id_'+ data.card_id +'"> '+ data.card_name +' </button>';
                document.getElementById("card_dead_id_"+ data.card_id).disabled = true;
                stillAttacking = false
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



