// function getPlayerID() {
//     var player_id = document.getElementById('player_id').value;

//     $.ajax({
//         type: "GET",
//         url: "/getPlayer",
//         data: {
//             "player_id": player_id // "" name of the property: value of the property
//         },
//         success: function (data) {
//             console.log(data);
//             document.getElementById("result").innerHTML = JSON.stringify(data)
//             // if (data.player) {
//             //     document.getElementById("message").innerHTML = "player found";
//             //     window.location.replace("/");
//             // } else {
//             //     document.getElementById("message").innerHTML = "no player found";
//             // };
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })
// }

// function getMatchID() {
//     var match_id = document.getElementById('match_id').value;

//     $.ajax({
//         type: "GET",
//         url: "/getMatch",
//         data: {
//             "match_id": match_id // "" name of the property: value of the property
//         },
//         success: function (data) {
//             console.log(data);
//             document.getElementById("result2").innerHTML = JSON.stringify(data)
//             // if (data.player) {
//             //     document.getElementById("message").innerHTML = "player found";
//             //     window.location.replace("/");
//             // } else {
//             //     document.getElementById("message").innerHTML = "no player found";
//             // };
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     })
// }

function getPlayerIDInMatch() {
    // var player1_id = document.getElementById('player1_id').value;
    // var player2_id = document.getElementById('player2_id').value;
    var matche_id = document.getElementById('matche_id').value;

    $.ajax({
        type: 'GET',
        url: '/getPlayerIDInM',
        data: {
            "player1_id": player1_id,
            // "player2_id": player2_id,
            "matche_id": matche_id
        },
        success: function (data) {
            console.log(data);
            document.getElementById("result3").innerHTML = JSON.stringify(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function getCharacterID() {
    var character_id = document.getElementById('character_id').value;

    $.ajax({
        type: 'GET',
        url: '/getCharacter',
        data: {
            "character_id": character_id
        },
        success: function (data) {
            console.log(data);
            document.getElementById("result4").innerHTML = JSON.stringify(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function getCharactersFromPlayer() {
    $.ajax({
        type: 'GET',
        url: '/getCharacterFromPlayer',
        data: {
            "caracter_id": data.character_id,
            "player_1_id": data.player1_id
        },
        success: function (data) {
            console.log(data);
            document.getElementById("result4").innerHTML = JSON.stringify(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}