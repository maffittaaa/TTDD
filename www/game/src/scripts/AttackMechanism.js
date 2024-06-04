
var attackerSlot = 0;
var targetSlot = 0;
var stillAttacking = false;
var cardOnHold;
var characterOnHold = null;
var reviving = false;

/* START OF COMPILED CODE */

class AttackMechanism extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	type = "";
	/** @type {number} */
	slotID = 0;

	/* START-USER-CODE */

	start() {
		this.parent.on('pointerdown', event => {
			if (this.type == "player") {
				this.setAttackerSlot(this.slotID);
			} else if (this.type == "opponent") {
				this.setTargetSlot(this.slotID);
			}
		})
	}

	setAttackerSlot(slot) { //attacker has a slot
		attackerSlot = slot;
		if (reviving == true) {
			this.playCard(cardOnHold, slot);
		}
	}

	setTargetSlot(slot) { // if attacker has a slot, target has a slot
		if (attackerSlot != 0) {
			targetSlot = slot;
			this.doAttack1();
			attackerSlot = 0;
			targetSlot = 0;
		} else if (stillAttacking = true) {
			if (characterOnHold != null) {
				this.playCard(cardOnHold, characterOnHold, slot);
			} else {
				this.playCard(cardOnHold, slot);
			}
		}
	};

	doAttack1() { // passing the attackerslot and the targetslot to the server
		var scene = this;
		$.ajax({
			type: 'POST',
			url: '/attack/attack',
			data: {
				"attackerSlot": attackerSlot,
				"targetSlot": targetSlot
			},
			success: function (data) {
				console.log(data);
				if (data.notWorking) {
					scene.scene.children.list[4].text = data.message;
					scene.scene.children.list[4].setVisible(true);
					setTimeout(function () { scene.scene.children.list[4].text = "" }, 4000);
				}
			},
			error: function (err) {
				console.log(err);
			}
		})
	};

	playCard(card_id, charChosen = null, secCharChosen = null) { // player picks a card
		var scene = this;
		$.ajax({
			type: 'POST',
			url: '/cards/playCard',
			data: {
				"cardPicked": card_id,
				"charChosen": charChosen,
				"secCharChosen": secCharChosen
			},
			success: function (data) {
				if (data.notWorking) {
					scene.scene.children.list[4].text = data.message;
					setTimeout(function () { scene.scene.children.list[4].text = "" }, 4000);
				} else if (data.reviving) {
					reviving = data.reviving;
					cardOnHold = data.card;
				} else if (data.stillAttacking) {
					stillAttacking = data.stillAttacking;
					cardOnHold = data.card;
					if (data.characterOnHold) {
						characterOnHold = data.characterOnHold;
					}
				} else if (data.card_id) {
					console.log(data);
					document.getElementById("card_id_" + data.card_id).innerHTML = '<button class="graveyard" id="card_dead_id_' + data.card_id + '"> ' + data.card_name + ' </button>';
					document.getElementById("card_dead_id_" + data.card_id).enable = false;//!!
					stillAttacking = false;
					reviving = false;
					characterOnHold = null;
				}
			},
			error: function (err) {
				console.log(err);
			}
		})
	};
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
