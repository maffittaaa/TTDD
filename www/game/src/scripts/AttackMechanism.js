var attackerSlot = 0;
var attacker = null;
var targetSlot = 0;
var stillAttacking = false;
var cardOnHold;
var characterOnHold = null;
var reviving = false;
var slotID = 0
var cardID = 0

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
				console.log(this.type)
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

	update() {
		if (this.type == "Cards") {
			if (slotID != 0 && cardID != 0) {
				console.log(cardID, slotID)
				if (slotID == this.slotID) {

					this.cardID = cardID
					console.log(this.cardID, cardID, slotID)
					slotID = 0
					cardID = 0
				}
			}
		}
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
			attacker = this.parent;
			this.setGlowOnOff(this.parent, true);
			initialX = this.parent.x;
			initialY = this.parent.y;
			finalX = null;
			finalY = null;

			if(attacker.frame.name > 5){
				var attackerThrow = this.scene.children.list[7].list

				console.log(slot)

				for (let i = 0; i < attackerThrow.length; i++) {
					console.log(attackerThrow[i])
					if(attackerThrow[i].name == "throwables_slot" + slot){
						item = attackerThrow[i]
						console.log(attacker)
						console.log(attackerThrow[i])
						console.log(slot)
						console.log(attacker.frame.name)
						item.setTexture("throwables", attacker.frame.name - 6)
					}
				}
			}else{
				item = this.parent;
			}
		}
		this.parent.name = "player1_slot" + slot
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
		};
		this.parent.name = "player2_slot" + slot
	}

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
				console.log("hello", data);
				if (data.notWorking == true) {
					scene.scene.children.list[5].text = data.message;
					scene.scene.children.list[5].setVisible(true);
					setTimeout(function () { scene.scene.children.list[5].text = "" }, 4000);
					if (data.attackStatus == 2) {
						if (attacker.preFX.list[0].active == true) {
							scene.setGlowOnOff(scene.parent, false);
						}
					}
				} else {
					attacker.input.enabled = false;
					attacker.setTexture("pawnsAttacked", data.attackerID - 1);
					scene.playThrowAnimation();
					var damageAnimation = new DamageAnimationMechanism(scene.scene, scene.parent.x * 1.5 + 50, scene.parent.y * 1.5 - 50);
					damageAnimation.visible = true;
					damageAnimation.text = "-" + data.attackDamage;
					scene.scene.add.existing(damageAnimation);
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

	playThrowAnimation() {
		startTime = performance.now();
		finalX = this.parent.x
		finalY = this.parent.y

		if(item.visible == false){
			item.visible = true
			peakHeight = Math.abs(finalY - initialY) + 100
		}else{
			peakHeight = 0
		}

		throwing = true
	}

	playCard(card_id, charChosen = null, secCharChosen = null) { // player picks a card

		console.log(this.cardID, card_id, this.parent.name)
		console.log("playing card")

		var scene = this;
		console.log(scene.type)
		$.ajax({
			type: 'POST',
			url: '/cards/playCard',
			data: {
				"cardPicked": card_id,
				"charChosen": charChosen,
				"secCharChosen": secCharChosen
			},
			success: function (data) {
				var handCards = scene.scene.children.list[scene.scene.children.list.length - 1];
				if (data.notWorking) {
					scene.scene.children.list[5].text = data.message;
					setTimeout(function () { scene.scene.children.list[5].text = "" }, 4000);
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
					stillAttacking = false;
					reviving = false;
					characterOnHold = null;
				}

				if (!data.notWorking && scene.type == "Cards") {
					handCards.visible = !showHandCards
					showHandCards = !showHandCards
					scene.parent.visible = false
					scene.parent.name = "cardUsed" + data.card_id
					scene.parent.parentContainer.bringToTop(scene.parent)
					console.log(scene.parent.parentContainer.list)
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
