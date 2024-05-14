function pickCard() { // player picks a card
    $.ajax({
        type: 'POST',
        url: '/cards/pickCard',
        success: function (data) {
            console.log(data)
            if (data.notWorking) {
                document.getElementById("result").innerHTML = data.message;
                setInterval(erraseResult, 4000);
            }else if (data.cards) {
                addCards(JSON.parse(data.cards));
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
};~

function erraseResult(){
    document.getElementById("result").innerHTML = ""
}

function getDescription(card_id) { //get the card description
    $.ajax({
        type: 'GET',
        url: '/cards/getTheDescriptions',
        data: {
            "cardPicked": card_id,
        },
        success: function (data) {
            data = JSON.parse(data);
            console.log(data);
            showDescription(data[0].card_id, data[0].card_description);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function addCards(cards) {
    for (let i = 0; i < cards.length; i++) {

        console.log(cards)

        var cardsThere = document.getElementById("cards").innerHTML
        cardsThere = cardsThere + '\
                                    <div class="dontbrake" id="card_id_'+ cards[i].card_id + '"> <button id=button_' + cards[i].card_id + ' onmouseout="hideDescription(' + cards[i].card_id + ')" onmouseover="getDescription(' + cards[i].card_id + ')" onclick="playCard(' + cards[i].card_id + ')" class="hand"> ' + cards[i].card_name + ' </button> </div>';
        document.getElementById("cards").innerHTML = cardsThere;
    }
}

function showDescription(card_id, card_description) {
    var withDescription = document.getElementById("button_" + card_id).innerHTML
    withDescription = withDescription + " <br> " + card_description
    document.getElementById("button_" + card_id).innerHTML = withDescription;
}

function hideDescription(card_id) {
    $.ajax({
        type: 'GET',
        url: '/cards/getTheDescriptions',
        data: {
            "cardPicked": card_id,
        },
        success: function (data) {
            data = JSON.parse(data);
            console.log("card_id: ", card_id);
            console.log(document.getElementById("button_" + card_id).innerHTML);
            document.getElementById("button_" + card_id).innerHTML = data[0].card_name;
        },
        error: function (err) {
            console.log(err);
        }
    })
}