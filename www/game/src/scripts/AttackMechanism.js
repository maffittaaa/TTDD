var attackerSlot = 0;
var attacker = null;
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

		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	type = "";
	/** @type {number} */
	slotID = 0;
	/** @type {Phaser.GameObjects.GameObject} */
	damageText;
	/** @type {number} */
	cardID = 0;

	/* START-USER-CODE */

	awake() {
		if (this.type == "Player") {
			this.setGlowOnOff(this.parent, false)
		} else if (this.type == "Opponent") {
			this.setGlowOnOff(this.parent, false)
		}
	}

	start() {
		this.parent.on('pointerdown', event => {
			if (throwing == false) {
				if (this.type == "Player") {
					this.setAttackerSlot(this.slotID);
				} else if (this.type == "Opponent") {
					this.setTargetSlot(this.slotID);
				} else if (this.type == "Cards") {
					this.playCard(this.cardID);
				}
			}
		})
	}

	setAttackerSlot(slot) { //attacker has a slot
		if (reviving == true) {
			this.playCard(cardOnHold, slot);
		} else if (attackerSlot == slot) {
			this.setGlowOnOff(this.parent, false);
			attackerSlot = 0;
			attacker = null;
		} else {
			attackerSlot = slot;
			attacker = this.parent
			this.setGlowOnOff(this.parent, true)
			initialX = this.parent.x;
			initialY = this.parent.y;
			finalX = null;
			finalY = null;
			item = this.parent;
		}
	}

	setTargetSlot(slot) { // if attacker has a slot, target has a slot
		if (attackerSlot != 0) {
			targetSlot = slot;
			this.setGlowOnOff(this.parent, true);
			this.doAttack();
			attackerSlot = 0;
			targetSlot = 0;
		} else if (stillAttacking == true) {
			if (characterOnHold != null) {
				this.playCard(cardOnHold, characterOnHold, slot);
			} else {
				this.playCard(cardOnHold, slot);
			}
		}
	};

	setGlowOnOff(object, boolean) {
		object.preFX.list[0].active = boolean;

	}

	doAttack() { // passing the attackerSlot and the targetslot to the server
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
				if (data.notWorking == true) {
					scene.scene.children.list[4].text = data.message;
					scene.scene.children.list[4].setVisible(true);
					setTimeout(function () { scene.scene.children.list[4].text = "" }, 4000);
				} else {
					scene.playerThrowAnimation();

					var damageAnimation = new DamageAnimationMechanism(scene.scene, scene.parent.x * 1.5 + 50, scene.parent.y * 1.5 - 50);
					damageAnimation.visible = true; //SO PODE DAR DANO DEPOIS DO BONECO LA CHEGAR
					damageAnimation.text = "-" + data.attackDamage;
					scene.scene.add.existing(damageAnimation);
					console.log(damageAnimation);
					scene.setGlowOnOff(scene.parent, false);
					scene.setGlowOnOff(attacker, false);
					attacker = null;
					attackerSlot = 0;
					targetSlot = 0;
				}
			},
			error: function (err) {
				console.log(err);
			}
		})
	};

	playerThrowAnimation() {
		startTime = performance.now();
		finalX = this.parent.x
		finalY = this.parent.y
		peakHeight = Math.abs(finalY - initialY) + 100
		throwing = true
	}

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
