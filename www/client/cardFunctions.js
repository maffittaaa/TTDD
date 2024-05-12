function pickCard() { // player picks a card
    $.ajax({
        type: 'POST',
        url: '/cards/pickCard',
        success: function (data) {
            console.log(data)
            if(data.cards){
                addCards(JSON.parse(data.cards));
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
};

function addCards(cards){
    for (let i = 0; i < cards.length; i++) {
        var cardsThere = document.getElementById("cards").innerHTML
        cardsThere =  cardsThere + '\
                                    <div class="dontbrake" id="card_id_'+ cards[i].card_id +'"> <button onclick="playCard('+ cards[i].card_id +')" class="hand"> '+ cards[i].card_name +' </button> </div>';
        document.getElementById("cards").innerHTML = cardsThere;
    }
}