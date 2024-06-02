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

	awake(){
		if(this.type == "charSelct" || this.type == "LookForMatch" || this.type == "sceneManager"){
			var scene = this
			$.ajax({
				type: "GET",
				url: "/login/CheckLogin",
				success: function (data) {
					if (data.logged == false) {
						window.location.replace("/login.html");
					} else {
						if(scene.type == "sceneManager"){
							if(data.levelChanged){
								var levelUpScreen = scene.scene.children.list
								for (let i = 0; i < levelUpScreen.length; i++) {
									if(levelUpScreen[i].name == "LevelUpScreen"){
										levelUpScreen[i].visible = true
										leveledUp = true
									}
								}
							}
						}else{
							scene.updateChooseCharMenu(data, scene)
						}
					}
				},
				error: function (err) {
					console.log(err);
				}
			})
		}
	}

	start(){
		this.parent.on('pointerdown', event => {
			if(this.type == "Character" || this.type == "Slot"){
				if(this.SlotID != 0){
					this.pickCharacters(this.SlotID, charChosen)
				}else{
					this.pickCharacters(slotChosen, this.CharacterID)
				}
			}else if(this.type == "LookForMatch"){
				this.choseCharacters()
			}
		})
	}

	updateChooseCharMenu(data, scene){
		if(scene.type == "charSelct"){
			char = JSON.parse(data.characters);
			var characters = scene.parent.parentContainer.list

			for (let j = 0; j < char.length; j++) {
				for (let i = 0; i < characters.length; i++) {
					if(characters[i].name.search("character_id_") == 0){
						var splitChar = characters[i].name.split("id_", 2)
	
						if(splitChar[1] == char[j].player_character_character_id - 1){
							characters[i].visible = true
						}
					}
				}
			}

			var nameText = scene.parent.parentContainer.list
			for (let i = 0; i < nameText.length; i++) {
				if(nameText[i].name.search("Username") == 0){
					nameText[i].text = data.name + "\nLevel: " + data.level
					// scene.updateXp(data.level, data.name, nameText[i])
				}
			}
		}else if(scene.type == "LookForMatch"){
			if (data.match){
				var textChange = scene.parent.parentContainer.list
				for (let i = 0; i < textChange.length; i++) {
					if(textChange[i].name == "Message"){
						textChange[i].text = "Looking for a match"
					}else{
						textChange[i].visible = false
					}
				}
				lookingForMatch = true
			}

			var slotsImages = scene.scene.children.list

			for (let i = 0; i < slotsImages.length; i++) {
				if(slotsImages[i].name == "Slots"){
					var list = slotsImages[i].list
					for (let j = 0; j < list.length; j++) {
						for (let k = 1; k < 6; k++) {
							if(list[j].name == "slot_" + k){
								if(slots["slot_" + k + ""] != null){
									list[j].setTexture("peawns", slots["slot_" + k + ""])
								}
							}
						}
					}
				}
			}
		}
	}

	update(dt){
		time = time + 0.0166
		if(charChosen != null && slotChosen != null){
			if(this.type == "Slot"){
				if(this.SlotID == slotChosen){
					this.parent.setTexture("peawns", charChosen)
					slotChosen = null
					charChosen = null
				}
			}
		}
		
		if(this.type == "LookForMatch"){
			if(time > (38 * 2)){
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
						window.location.replace("/match.html");
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

	showMessage(message){
		var textChange = this.parent.parentContainer.list
		for (let i = 0; i < textChange.length; i++) {
			if(textChange[i].name == "MessageServer"){
				textChange[i].text = message
				setTimeout(() => {
					textChange[i].text = ""
				}, 4000);
			}
		}
	}

	pickCharacters(slot_Id, ch_Id) {
		if (ch_Id != null) {
			if(slotChosen == null){
				return
			}
			var alreadyChosen = false;

			for (let i = 1; i < 6; i++) { //there are 5 slots
				if (slots["slot_" + i + ""] == ch_Id) {
					alreadyChosen = true;
				}
			}

			if (alreadyChosen == false) {
				if (slotChosen > 3  && ch_Id > 4) { //slot_id > 3 because there are 2 slots in the back --- ch_id > 5 because there are 5 characters long-range
					charChosen = ch_Id
				} else if ( slotChosen > 3 && ch_Id <= 4) {
					console.log(slotChosen, ch_Id)
					this.showMessage("Can't place the character there. \n 	Not a long-range character.")
					return;
				} else {
					charChosen = ch_Id
				}
				slots["slot_" + slotChosen] = ch_Id
			} else {
				this.showMessage("You can't pick the same character twice");
			}
		} else {
			if(this.type == "Slot"){
				this.parent.setTexture("base", 0)

				if (slots["slot_" + slot_Id + ""] != null) {
					slots["slot_" + slot_Id + ""] = null
				}

				slotChosen = slot_Id;
				charChosen = null
			}
		}
	}

	choseCharacters() {
		var empty = true;
		var scene = this

		for (let i = 1; i < 6; i++) {
			if (slots["slot_" + i + ""] != null) {
				slots["slot_" + i + ""] += 1
				empty = false;
			}
		}

		if (empty == false) {
			slots = JSON.stringify(slots)
			$.ajax({
				type: "POST",
				url: "/match/choseCharacters",
				data: {
					"slots": slots,
				},
				success: function (data) {
					if (data.success) {
						slots = JSON.parse(slots)

						for (let i = 1; i < 6; i++) {
							if(slots["slot_" + i] != null){
								slots["slot_" + i] -= 1
							}
						}

						var textChange = scene.parent.parentContainer.list
						for (let i = 0; i < textChange.length; i++) {
							if(textChange[i].name == "Message"){
								textChange[i].text = "Looking for a match"
							}else{
								textChange[i].visible = false
							}
						}
						
						lookingForMatch = true;
					} else {
						this.showMessage("Chose another character")
					}
				},
				error: function (err) {
					console.log(err);
				}
			})
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
