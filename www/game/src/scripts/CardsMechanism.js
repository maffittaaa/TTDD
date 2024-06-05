var showHandCards = false;

/* START OF COMPILED CODE */

class CardsMechanism extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	type = "";

	/* START-USER-CODE */

	start() {
		this.parent.on('pointerdown', event => {
			if (this.type == "Deck") {
				this.pickCard();
			} else if (this.type == "ShowCards") {
				this.showHandCards(!showHandCards);
			}
		})
	}

	pickCard() { // player picks a card
		var scene = this;
		$.ajax({
			type: 'POST',
			url: '/cards/pickCard',
			success: function (data) {
				if (data.notWorking) {
					scene.scene.children.list[4].text = data.message;
					setTimeout(function () { scene.scene.children.list[4].text = "" }, 4000);
				} else if (data.cards) {
					scene.addCards(JSON.parse(data.cards));
				}
			},
			error: function (err) {
				console.log(err);
			}
		})
	};

	showHandCards(boolean) {
		var handCards = this.scene.children.list[this.scene.children.list.length - 1];
		setTimeout(function () {
			handCards.visible = boolean;
			showHandCards = boolean;
		}, 200);
	}

	addCards(cards) {
		var handCards = this.scene.children.list[this.scene.children.list.length - 1];
		var slotFound = false;
		var j = 0;
		var cardsImgs = [4, 6, 5, 0, 3, 1, 8, 7, 2, 2];
		var width = 1920
		var height = 1080

		for (let i = 0; i < handCards.list.length; i++) {
			if (handCards.list[i].name == "cards") {
				console.log(handCards.list[i]);

				while (slotFound == false) {
					console.log("finding cardSlot")
					if (handCards.list[i].list[j].name.search("cardSlot") == 0) {
						console.log("found cardSlot")
						console.log("card_id: " + cards[0].card_id)

						if (cards[0].card_id == 4 || cards[0].card_id == 6 || cards[0].card_id == 10) {
							console.log("here NO");
							handCards.list[i].list[j].setTexture("cartas4_Imprimir", cardsImgs[cards[0].card_id - 1]);
							handCards.list[i].list[j].name = "card" + cards[0].card_id;
							handCards.list[i].list[j].visible = true
							slotFound = true;
						} else {
							handCards.list[i].list[j].setTexture("cartas3_Imprimir", cardsImgs[cards[0].card_id - 1]);
							handCards.list[i].list[j].name = "card" + cards[0].card_id;
							handCards.list[i].list[j].visible = true
							slotFound = true;
						}
					} else {
						j++;
					}
				}

				if (j > 4) {
					const initialPosition = width / (((j - 5) + 1) + 1)
					for (let k = 0; k < (j + 1); k++) {
						if (k < 5) {
							handCards.list[i].list[k].y = height / 3 - 50;
						} else {
							handCards.list[i].list[k].y = (height / 3) * 2 + 50;
							handCards.list[i].list[k].x = initialPosition + ((k - 5) * initialPosition);
						}
					}
				} else {
					const initialPosition = width / ((j + 1) + 1)

					for (let k = 0; k < (j + 1); k++) {

						handCards.list[i].list[k].y = height / 2;

						handCards.list[i].list[k].x = initialPosition + (k * initialPosition);
					}
				}
			}
		}
	}

	getCardPositionX(cardNumber, totalCards) {

	}

	getDescription(card_id) { //get the card description
		$.ajax({
			type: 'GET',
			url: '/cards/getTheDescriptions',
			data: {
				"cardPicked": card_id,
			},
			success: function (data) {
				data = JSON.parse(data);
				console.log(data);
				// showDescription(data[0].card_id, data[0].card_description);
			},
			error: function (err) {
				console.log(err);
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
