const slot = ["slot1", "slot2", "slot3", "slot4", "slot5"];
var attackerSlot = 0
var targetSlot = 0
function setAttackerSlot(slot) { //attacker has a slot now

    attackerSlot = slot;
}

function setTargetSlot(slot) { // if attacker has a slot, target has a slot now
    if (attackerSlot != 0) {
        targetSlot = slot;
        doAttack();
        attackerSlot = 0;
        targetSlot = 0;
    }
}

function doAttack() { // passing the attackerslot and the target slot with the player1_id to the server
    var player1_id = document.getElementById("player1_id").value;
    var match_id = document.getElementById("match_id").value;
    $.ajax({
        type: 'POST',
        url: '/attack',
        data: {
            "player1_id": player1_id,
            "match_id": match_id,
            "attackerSlot": attackerSlot,
            "targetSlot": targetSlot
        },
        success: function (data) {
            console.log(data);
            // document.getElementById("result7").innerHTML = "You have selected: " + JSON.stringify(data);
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

// function getCharactersFromPlayer1() {
//     var player1_id = document.getElementById('player1_id').value;
//     $.ajax({
//         type: 'GET',
//         url: '/getCharacterFromPlayer1',
//         data: {
//             "player1_id": player1_id,
//         },
//         success: function (data) {
//             console.log(data);
//             document.getElementById("result5").innerHTML = "Your characters are: " + JSON.stringify(data);
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })
// }

// function getCharactersFromPlayer2() {
//     var player2_id = document.getElementById('player2_id').value;
//     $.ajax({
//         type: 'GET',
//         url: '/getCharacterFromPlayer2',
//         data: {
//             "player2_id": player2_id
//         },
//         success: function (data) {
//             console.log(data);
//             document.getElementById("result6").innerHTML = "Your characters are: " + JSON.stringify(data);
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })
// }


// function character2() {
//     var player1_id = document.getElementById('player1_id').value;
//     $.ajax({
//         type: 'GET',
//         url: '/character2FromPlayer',
//         data: {
//             "player1_id": player1_id
//         },
//         success: function (data) {
//             console.log(data);
//             document.getElementById("result7").innerHTML = "You have selected: " + JSON.stringify(data);
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })
// }

// function character3() {
//     var player1_id = document.getElementById('player1_id').value;
//     $.ajax({
//         type: 'GET',
//         url: '/character3FromPlayer',
//         data: {
//             "player1_id": player1_id
//         },
//         success: function (data) {
//             console.log(data);
//             document.getElementById("result7").innerHTML = "You have selected: " + JSON.stringify(data);
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })
// }

// function character4() {
//     var player1_id = document.getElementById('player1_id').value;
//     $.ajax({
//         type: 'GET',
//         url: '/character4FromPlayer',
//         data: {
//             "player1_id": player1_id
//         },
//         success: function (data) {
//             console.log(data);
//             document.getElementById("result7").innerHTML = "You have selected: " + JSON.stringify(data);
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })
// }

// function character5() {
//     var player1_id = document.getElementById('player1_id').value;
//     $.ajax({
//         type: 'GET',
//         url: '/character5FromPlayer',
//         data: {
//             "player1_id": player1_id
//         },
//         success: function (data) {
//             console.log(data);
//             document.getElementById("result7").innerHTML = "You have selected: " + JSON.stringify(data);
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })
// }


// function attackFromCharacter1() {
//     var player1_id = document.getElementById('player1_id').value;
//     $.ajax({
//         type: 'GET',
//         url: '/attackWithCharacter1',
//         data: {
//             "player1_id": player1_id,
//         },
//         success: function (data) {
//             console.log(data);
//             document.getElementById("result5").innerHTML = JSON.stringify(data);
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })
// }

// function attackFromCharacter2() {
//     var player2_id = document.getElementById('player2_id').value;
//     $.ajax({
//         type: 'GET',
//         url: '/attackWithCharacter2',
//         data: {
//             "player2_id": player2_id,
//         },
//         success: function (data) {
//             console.log(data);
//             document.getElementById("result6").innerHTML = JSON.stringify(data);
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })
// }
