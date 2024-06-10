var attackerSlot = 0;
var attacker = null;
var target = null;
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
				if (this.type == "Player") {
					this.setAttackerSlot(this.slotID);
				} else if (this.type == "Opponent") {
					this.setTargetSlot(this.slotID);
				} else if (this.type == "Cards") {
					this.playCard(this.cardID);
				}
			}
		})
		this.setOpponent(false)
	}

	update() {
		if (this.type == "Cards") {
			if (slotID != 0 && cardID != 0) {
				if (slotID == this.slotID) {
					this.cardID = cardID
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
			this.setOpponent(false);
			attackerSlot = 0;
			attacker = null;
		} else {
			attackerSlot = slot;
			attacker = this.parent;
			this.setGlowOnOff(this.parent, true);
			this.setOpponent(true);
			initialX = this.parent.x;
			initialY = this.parent.y;
			finalX = null;
			finalY = null;

			if (attacker.frame.name > 4) {
				var attackerThrow = this.scene.children.list[7].list
				for (let i = 0; i < attackerThrow.length; i++) {
					if(attackerThrow[i].name == "throwables_p1_slot" + slot){
						item = attackerThrow[i]
						item.setTexture("throwables", attacker.frame.name - 4)
					}
				}
			} else {
				item = this.parent;
			}
		}
		this.parent.name = "player1_slot" + slot;
	}

	setTargetSlot(slot) { // if attacker has a slot, target has a slot
		if (attackerSlot != 0) {
			targetSlot = slot;
			target = this.parent;
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

	setOpponent(boolean) {
		var opponent = this.scene.children.list[6].list

		for (let i = 0; i < opponent.length; i++) {
			if(opponent[i].name.search("player2_slot") == 0){
				opponent[i].input.enabled = boolean
			}			
		}
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
					setTimeout(function () { scene.scene.children.list[5].text = "" }, 4000);
					if (data.attackStatus == 2) {
						if (attacker.preFX.list[0].active == true) {
							scene.setGlowOnOff(scene.parent, false);
						}
					}
				} else {
					attacker.input.enabled = false;
					attacker.setTexture("pawnsAttacked", data.attackerID - 1);
					scene.setGlowOnOff(attacker, false);

					scene.setGlowOnOff(scene.parent, false);
					scene.setOpponent(false);

					console.log(data.attackerID)
					scene.playThrowAnimation(data.attackerID);

					var damageAnimation = new DamageAnimationMechanism(scene.scene, scene.parent.x * 1.5 + 50, scene.parent.y * 1.5 - 50);
					damageAnimation.visible = true;
					damageAnimation.text = "-" + data.attackDamage;
					scene.scene.add.existing(damageAnimation);

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

	playThrowAnimation(charID) {
		startTime = performance.now();
		finalX = this.parent.x
		finalY = this.parent.y

		if (item.visible == false) {
			item.visible = true
			peakHeight = Math.abs(finalY - initialY) + 100
		} else {
			peakHeight = 0
		}

		console.log(charID)
		this.playSound(charID, null)
		
		throwing = true
	}

	playSound(charID, cardID){
		console.log(charID)
		console.log(cardID)

		if(charID != null){
			if(charID == 7 || charID == 8 || charID == 10){
				throwSound.play()
			}else if(charID == 1){
				stabSound.play()
			}else if(charID == 2){
				mafiaZombieSound.play()
			}else if(charID == 3){
				baseballBatSound.play()
			}else if(charID == 4){
				pandaSound.play()
			}else if(charID == 5){
				plasticSwordSound.play()
			}else if(charID == 6){
				velhoLoucoSound.play()
			}else if(charID == 9){
				txukiSound.play()
			}
		}else{
			if(cardID == 1){
				thunderstormSound.play()
			}else if(cardID == 2){
				pukeSound.play()
			}else if(cardID == 3){
				shhhhSound.play()
			}else if(cardID == 5){
				finishHimSound.play()
			}else if(cardID == 6){
				copsSound.play()
			}else if(cardID == 8){
				shityLicorSound.play()
			}else if(cardID == 9){
				fountainOfYouthSound.play()
			}
		}
	}

	playCard(card_id, charChosen = null, secCharChosen = null) { // player picks a card

		console.log(this.cardID, card_id, this.parent.name)

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
					cardOnHold = data.card_id;
				} else if (data.stillAttacking) {
					scene.setOpponent(true)
					stillAttacking = data.stillAttacking;
					cardOnHold = data.card_id;
					if (data.characterOnHold) {
						characterOnHold = data.characterOnHold;
					}

				} else if (data.card_id) {
					stillAttacking = false;
					reviving = false;
					characterOnHold = null;
				}

				if (!data.notWorking && scene.type == "Cards") {
					// var usedImg = [4, 6, 5, 0, 3, 1, 8, 7, 9, 2]
					handCards.visible = !showHandCards
					showHandCards = !showHandCards
					scene.parent.name = "cardUsed" + data.card_id
					scene.parent.input.enabled = false
					scene.parent.setTexture("usedCards", data.card_id - 1)
					scene.playSound(null, data.card_id)
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
