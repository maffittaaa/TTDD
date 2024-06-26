let slotChosen = null
let charChosen = null

var time = 0
var slots = {
	"slot_1": null,
	"slot_2": null,
	"slot_3": null,
	"slot_4": null,
	"slot_5": null
}

var lookingForMatch = false;
var choosing = false;
var char;

var xpText
var levelText

/* START OF COMPILED CODE */

class HandleChooseMechanism extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	CharacterID = 0;
	/** @type {number} */
	SlotID = 0;
	/** @type {string} */
	type = "Image";

	/* START-USER-CODE */

	awake() {
		if (this.type == "charSelct" || this.type == "LookForMatch" || this.type == "sceneManager") {
			var scene = this
			$.ajax({
				type: "GET",
				url: "/login/CheckLogin",
				success: function (data) {
					if (data.logged == false) {
						window.location.replace("/login.html");
					} else {
						if (scene.type == "sceneManager") {
							if (data.levelChanged) {
								var levelUpScreen = scene.scene.children.list
								for (let i = 0; i < levelUpScreen.length; i++) {
									if (levelUpScreen[i].name == "LevelUpScreen") {
										levelUpScreen[i].visible = true
										leveledUp = true
									}
								}
							}
						} else {
							scene.updateChooseCharMenu(data, scene);
						}
					}
				},
				error: function (err) {
					console.log(err);
				}
			})
		}
	}

	start() {
		this.parent.on('pointerdown', event => {
			if (this.type == "Character" || this.type == "Slot") {
				if (this.SlotID != 0) {
					this.pickCharacters(this.SlotID, null)
				} else {
					this.pickCharacters(null, this.CharacterID)
				}
			} else if (this.type == "LookForMatch") {
				this.chooseCharacters()
			}
		})
		this.setSlots(false);
	}

	updateChooseCharMenu(data, scene) {
		if (scene.type == "charSelct") {
			char = JSON.parse(data.characters);
			var characters = scene.parent.parentContainer.list

			for (let j = 0; j < char.length; j++) {
				for (let i = 0; i < characters.length; i++) {
					if (characters[i].name.search("character_id_") == 0) {
						var splitChar = characters[i].name.split("id_", 2)
						if (splitChar[1] == char[j].player_character_character_id - 1) {
							characters[i].visible = true
						}
					}
				}
			}

			var nameText = scene.parent.parentContainer.list
			for (let i = 0; i < nameText.length; i++) {
				if (nameText[i].name == "Username") {
					nameText[i].text = data.name
				}
			}
		} else if (scene.type == "LookForMatch") {
			if (data.match) {
				var textChange = scene.parent.parentContainer.list
				for (let i = 0; i < textChange.length; i++) {
					if (textChange[i].name == "Message") {
						textChange[i].text = "Looking for a match"
					} else {
						textChange[i].visible = false
					}
				}
				lookingForMatch = true
			}

			var slotsImages = scene.scene.children.list

			for (let i = 0; i < slotsImages.length; i++) {
				if (slotsImages[i].name == "Slots") {
					var list = slotsImages[i].list
					for (let j = 0; j < list.length; j++) {
						for (let k = 1; k < 6; k++) {
							if (list[j].name == "slot_" + k) {
								if (slots["slot_" + k + ""] != null) {
									list[j].setTexture("peawns", slots["slot_" + k + ""])
								}
							}
						}
					}
				}
			}

			var glowChange = scene.scene.children.list
			for (let i = 0; i < glowChange.length; i++) {
				if (glowChange[i].name == "Slots") {
					for (let j = 0; j < glowChange[i].list.length; j++) {
						if (glowChange[i].list[j].name != "MessageServer") {
							glowChange[i].list[j].preFX.list[0].active = false;
						}
					}
				} else if (glowChange[i].name == "Characters") {
					for (let j = 0; j < glowChange[i].list.length; j++) {
						if (glowChange[i].list[j].name != "Username" && glowChange[i].list[j].name != "Level") {
							glowChange[i].list[j].preFX.list[0].active = false
						}
					}
				}
			}

			this.updateXpBar(data.level, data.xp)
		}
	}

	updateXpBar(level, xp) {
		var index = 0;
		var playerXp = xp;
		var finalXp = 50;
		var initialLevelXp = 0;


		while (index < level) {
			index++;
			if (index <= level) {
				initialLevelXp = finalXp;
			}
			finalXp += finalXp / 2;
		}

		
		finalXp -= initialLevelXp;
		playerXp -= initialLevelXp;
		
		levelText = "Level: " + level;
		xpText = Math.floor(playerXp) + " / " +  Math.floor(finalXp) + " XP";
		
		var xpbar = this.scene.children.list

		for (let i = 0; i < xpbar.length; i++) {
			if (xpbar[i].name == "XpBar") {
				xpbar[i].list[1].text = Math.floor((playerXp * 100) / finalXp) + "%";
				for (let j = 0; j < 10; j++) {
					if (playerXp > finalXp * (j * 0.1)) {
						xpbar[i].list[0].setTexture("spritesheet", 10 - j);
						xpbar[i].list[1].text = levelText;
					}
				}
			}
		}

		return finalXp;
	}

	update(dt) {
		time = time + 0.0166
		if (this.type == "Slot"){
			if (charChosen != null && slotChosen != null)  {
				if (this.SlotID == slotChosen) {
					this.parent.setTexture("peawns", charChosen)
					this.setSlots(false);
					slotChosen = null
					charChosen = null
				}
			}

			if (slots["slot_" + this.SlotID] != null) {
				this.parent.input.enabled = true
			}
		}

		if (this.type == "LookForMatch") {
			if (time > (38 * 2)) {
				this.checkMatchFound()
				time = 0
			}
		}
	}

	checkMatchFound() {
		$.ajax({
			type: "GET",
			url: "/login/CheckLogin",
			success: function (data) {
				if (data.logged == false) {
					window.location.replace("/login.html");
					return false;
				}
			},
			error: function (err) {
				console.log(err);
			}
		})

		if (lookingForMatch) {
			$.ajax({
				type: "GET",
				url: "/match/checkMatchFound",
				success: function (data) {
					if (data.matchFound == true) {
						goToMatch = true;
					}
					else {
						console.log(data);
					}
				},
				error: function (err) {
					console.log(err);
				}
			})
		}
	}

	showMessage(message) {
		var textChange = this.scene.children.list
		for (let i = 0; i < textChange.length; i++) {
			if (textChange[i].name == "Slots") {
				for (let j = 0; j < textChange[i].list.length; j++) {
					if (textChange[i].list[j].name == "MessageServer") {
						textChange[i].list[j].text = message
						setTimeout(() => {
							textChange[i].list[j].text = ""
						}, 4000);
					}
				}
			}
		}
	}

	pickCharacters(slot_Id, ch_Id) {
		if (ch_Id != null) {
			var alreadyChosen = false;

			for (let i = 1; i < 6; i++) { //there are 5 slots
				if (slots["slot_" + i + ""] == ch_Id) {
					alreadyChosen = true;
				}
			}

			if (alreadyChosen == false) {
				var glowOnOff = true;

				if (charChosen == ch_Id) {
					glowOnOff = false;
					charChosen = null;
					this.setSlots(false);
				} else {
					charChosen = ch_Id;
					this.setSlots(true);
				}

				var glowChange = this.scene.children.list
				for (let i = 0; i < glowChange.length; i++) {
					if (glowChange[i].name == "Slots") {
						for (let j = 0; j < glowChange[i].list.length; j++) {
							if (glowChange[i].list[j].name != "MessageServer") {
								if (charChosen <= 4) {
									glowChange[i].list[1].preFX.list[0].active = glowOnOff
									glowChange[i].list[2].preFX.list[0].active = glowOnOff
									glowChange[i].list[3].preFX.list[0].active = glowOnOff

									glowChange[i].list[0].preFX.list[0].active = false
									glowChange[i].list[4].preFX.list[0].active = false

								} else if (charChosen > 4) {
									glowChange[i].list[j].preFX.list[0].active = glowOnOff
								}
							}
						}
					} else if (glowChange[i].name == "Characters") {
						for (let j = 0; j < glowChange[i].list.length; j++) {
							if (glowChange[i].list[j].name == "sand") {
								glowChange[i].list[j].preFX.list[0].active = glowOnOff
								glowChange[i].list[j].name = "character_id_" + charChosen
							} else if (glowChange[i].list[j].name != "Username") {
								glowChange[i].list[j].preFX.list[0].active = false
							}
						}
					}
				}
			} else {
				this.showMessage("You can't pick the same character twice");
				var glowChange = this.scene.children.list

				for (let i = 0; i < glowChange.length; i++) {
					if (glowChange[i].name == "Characters") {
						for (let j = 0; j < glowChange[i].list.length; j++) {
							if (glowChange[i].list[j].name == "sand") {
								glowChange[i].list[j].name = "character_id_" + charChosen
							}
						}
					}
				}
			}
		} else {
			if (charChosen != null) {
				this.parent.name = "slot_" + slot_Id
				
				if (slot_Id > 3 && charChosen > 4) { //slot_id > 3 because there are 2 slots in the back --- ch_id > 5 because there are 5 characters long-range
					slots["slot_" + slot_Id + ""] = charChosen
					slotChosen = slot_Id
				} else if (slot_Id > 3 && charChosen <= 4) {
					this.showMessage("Can't place the character there. \n Not a long-range character.")
					return;
				} else {
					slots["slot_" + slot_Id + ""] = charChosen;
					slotChosen = slot_Id;
				}

				var glowChange = this.scene.children.list
				for (let i = 0; i < glowChange.length; i++) {
					if (glowChange[i].name == "Slots") {
						for (let j = 0; j < glowChange[i].list.length; j++) {
							if (glowChange[i].list[j].name != "MessageServer") {
								glowChange[i].list[j].preFX.list[0].active = false;
							}
						}
					} else if (glowChange[i].name == "Characters") {
						for (let j = 0; j < glowChange[i].list.length; j++) {
							if (glowChange[i].list[j].name != "Username") {
								glowChange[i].list[j].preFX.list[0].active = false;
							}
						}
					}
				}

				this.parent.input.enabled = true
			} else {
				if (this.type == "Slot") {
					this.parent.name = "slot_" + slot_Id
					this.parent.setTexture("base", 0)
					this.setSlots(false);

					if (slots["slot_" + slot_Id + ""] != null) {
						slots["slot_" + slot_Id + ""] = null;
					}
					charChosen = null;
				}
			}
		}
	}

	setSlots(boolean){
		var slot = this.scene.children.list[2].list

		for (let i = 0; i < slot.length; i++) {
			if(slot[i].name.search("slot_") == 0){
				slot[i].input.enabled = boolean
			}			
		}
	}

	chooseCharacters() {
		var empty = true;
		var scene = this;

		for (let i = 1; i < 6; i++) {
			if (slots["slot_" + i + ""] != null) {
				slots["slot_" + i + ""] += 1;
				empty = false;
			}
		}

		if (empty == false) {
			slots = JSON.stringify(slots)
			$.ajax({
				type: "POST",
				url: "/match/chooseCharacters",
				data: {
					"slots": slots,
				},
				success: function (data) {
					if (data.success) {
						slots = JSON.parse(slots);

						for (let i = 1; i < 6; i++) {
							if (slots["slot_" + i] != null) {
								slots["slot_" + i] -= 1;
							}
						}

						var textChange = scene.parent.parentContainer.list
						for (let i = 0; i < textChange.length; i++) {
							if (textChange[i].name == "Message") {
								textChange[i].text = "Looking for a match";
							} else {
								textChange[i].visible = false;
							}
						}

						lookingForMatch = true;
					} else {
						scene.showMessage("Choose another character");
					}
				},
				error: function (err) {
					console.log(err);
				}
			})
		}else{
			this.showMessage("Please choose at least one character \n to start the match.")
		}
	}
}
/* END-USER-CODE */



/* END OF COMPILED CODE */

// You can write more code here
