cardsAnimIn = false
cardsAnimOut = false
cardsDist = 135
cardsDistInc = cardsDist * 0.07
cardsInitialX = [892, 916, 937]

charAnimIn = false
charAnimOut = false
charDistY = 80
charDistX = 150
charDistIncY = charDistY * 0.07
charDistIncX = charDistX * 0.07
charInitialX = [405, 385, 425]
pandaInitialY = 262


/* START OF COMPILED CODE */

class Highlights extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	type = "";
	/** @type {boolean} */
	clicked = false;
	/** @type {number} */
	id = 0;

	/* START-USER-CODE */

	start() {
		if (this.type == "DescriptionCards" || this.type == "DescriptionChar") {
			this.parent.parentContainer.postPipelines[0].active = false

			this.parent.on('pointerdown', event => {
				this.parent.parentContainer.postPipelines[0].active = false
				mouseClickSound.play()
			})

			this.parent.on('pointerover', event => {
				this.parent.parentContainer.postPipelines[0].active = true
				if (this.type == "DescriptionCards") {
					cardsAnimIn = true
					cardsAnimOut = false
				} else if (this.type == "DescriptionChar") {
					charAnimIn = true
					charAnimOut = false
				}

				mouseOverSound.play()
			})
			this.parent.on('pointerout', event => {
				this.parent.parentContainer.postPipelines[0].active = false
				if (this.type == "DescriptionCards") {
					cardsAnimOut = true
					cardsAnimIn = false
				} else if (this.type == "DescriptionChar") {
					charAnimOut = true
					charAnimIn = false
				}
			})
		} else if (this.type == "Descriptions") {
			this.parent.on('pointerdown', event => {
				this.clicked = true
				mouseClickSound.play()
			})
			this.parent.on('pointerover', event => {
				if (this.clicked == false) {
					this.parent.preFX.list[0].active = true;
					mouseOverSound.play()
				}
				
			})
			this.parent.on('pointerout', event => {
				if (this.clicked == false) {
					this.parent.preFX.list[0].active = false;
				}
			})
		} else if (this.type == "LobbyChar") {
			this.parent.on('pointerdown', event => {
				var alreadyChosen = false;

				for (let i = 1; i < 6; i++) { //there are 5 slots
					if (slots["slot_" + i + ""] == this.id) {
						alreadyChosen = true;
					}
				}

				if (alreadyChosen == false) {
					this.clicked = true
					mouseClickSound.play()
				}
			})
			this.parent.on('pointerover', event => {
				if (this.clicked == false) {

					var alreadyChosen = false;

					for (let i = 1; i < 6; i++) { //there are 5 slots
						if (slots["slot_" + i + ""] == this.id) {
							alreadyChosen = true;
						}
					}

					if (alreadyChosen == false) {
						this.parent.preFX.list[0].active = true;
						mouseOverSound.play()
					}
				}
			})
			this.parent.on('pointerout', event => {
				if (this.clicked == false) {
					var alreadyChosen = false;

					for (let i = 1; i < 6; i++) { //there are 5 slots
						if (slots["slot_" + i + ""] == this.id) {
							alreadyChosen = true;
						}
					}

					if (alreadyChosen == false) {
						this.parent.preFX.list[0].active = false;
					}
				}
			})
		} else if (this.type == "LobbyLevelXp") {
			this.parent.on('pointerover', event => {
				this.parent.text = xpText;
				mouseOverSound.play()
			})
			this.parent.on('pointerout', event => {
				this.parent.text = levelText;
			})
		} else if (this.type == "LobbySlots") {
			this.parent.on('pointerover', event => {
				if (this.parent.preFX.list[0].active == true) {
					this.parent.preFX.list[0].glcolor[1] = 0;
					this.parent.preFX.list[0].glcolor[2] = 0.498;
					mouseOverSound.play()
				}
			})
			this.parent.on('pointerout', event => {
				if (this.parent.preFX.list[0].active == true) {
					this.parent.preFX.list[0].glcolor[1] = 1;
					this.parent.preFX.list[0].glcolor[2] = 1;
				}
			})
			this.parent.on('pointerdown', event => {
				this.parent.preFX.list[0].glcolor[1] = 1;
				this.parent.preFX.list[0].glcolor[2] = 1;
				mouseClickSound.play()
			})
		} else if (this.type == "Match") {
			this.parent.on('pointerover', event => {
				if (this.clicked == false) {
					this.parent.preFX.list[0].active = true;
					mouseOverSound.play()
				}
			});
			this.parent.on('pointerout', event => {
				if (this.clicked == false) {
					this.parent.preFX.list[0].active = false;
				}
			});
			this.parent.on('pointerdown', event => {
				if (this.clicked == false) {
					this.clicked = true;
				} else {
					this.clicked = false;
				}
				mouseClickSound.play()
			})
		} else if (this.type == "Buttons") {
			this.parent.preFX.list[0].active = false;
			this.parent.on('pointerover', event => {
				this.parent.preFX.list[0].active = true;
				mouseOverSound.play()
			});
			this.parent.on('pointerout', event => {
				this.parent.preFX.list[0].active = false;
			});
			this.parent.on('pointerdown', event => {
				mouseClickSound.play()
			})
		}
	}

	update() {
		if (this.type == "DescriptionCards") {
			if (cardsAnimOut == true) {
				this.moveToLeft(this.parent.parentContainer);
			}
			if (cardsAnimIn == true) {
				this.moveToRight(this.parent.parentContainer);
			}
		} else if (this.type == "DescriptionChar") {
			if (charAnimOut == true) {
				this.moveCharOut(this.parent.parentContainer);
			}
			if (charAnimIn == true) {
				this.moveCharIn(this.parent.parentContainer);
			}
		}

		if (this.type == "Descriptions") {
			if (this.parent.preFX.list[0].active == false) {
				this.clicked = false;
			}
		} else if (this.type == "LobbyChar") {
			if (this.parent.preFX.list[0].active == false) {
				this.clicked = false;
			}
		} else if (this.type == "Match") {
			if (this.parent.preFX.list[0].active == false) {
				this.clicked = false;
			}
		}
	}

	moveToRight(parentContainer) {
		if (parentContainer.list[1].x < cardsInitialX[0] + cardsDist) {
			parentContainer.list[1].x += cardsDistInc
		} else if (parentContainer.list[2].x < cardsInitialX[1] + cardsDist) {
			parentContainer.list[2].x += cardsDistInc
		} else if (parentContainer.list[3].x < cardsInitialX[2] + cardsDist) {
			parentContainer.list[3].x += cardsDistInc
		} else {
			cardsAnimIn = false
		}
	}

	moveToLeft(parentContainer) {
		if (parentContainer.list[3].x > cardsInitialX[2]) {
			parentContainer.list[3].x -= cardsDistInc
		} else if (parentContainer.list[2].x > cardsInitialX[1]) {
			parentContainer.list[2].x -= cardsDistInc
		} else if (parentContainer.list[1].x > cardsInitialX[0]) {
			parentContainer.list[1].x -= cardsDistInc
		} else {
			cardsAnimOut = false
		}
	}

	moveCharIn(parentContainer) {
		if (parentContainer.list[1].y > pandaInitialY - charDistY) {
			parentContainer.list[1].y -= charDistIncY
		}
		if (parentContainer.list[2].x < charInitialX[0] + charDistX) {
			parentContainer.list[2].x += charDistIncX
		}
		if (parentContainer.list[3].x > charInitialX[1] - charDistX) {
			parentContainer.list[3].x -= charDistIncX
		}
		if (parentContainer.list[4].x < charInitialX[2] + charDistX) {
			parentContainer.list[4].x += charDistIncX
		} else {
			charAnimIn = false
		}
	}

	moveCharOut(parentContainer) {

		if (parentContainer.list[1].y < pandaInitialY) {
			parentContainer.list[1].y += charDistIncY
		}
		if (parentContainer.list[2].x > charInitialX[0]) {
			parentContainer.list[2].x -= charDistIncX
		}
		if (parentContainer.list[3].x < charInitialX[1]) {
			parentContainer.list[3].x += charDistIncX
		}
		if (parentContainer.list[4].x > charInitialX[2]) {
			parentContainer.list[4].x -= charDistIncX
		} else {
			charAnimOut = false
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
