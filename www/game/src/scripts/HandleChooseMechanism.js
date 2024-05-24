let slotChosen = null
let charChosen = null

var time = 0
var started
var slots;
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
		var scene = this
		$.ajax({
			type: "GET",
			url: "/login/CheckLogin",
			success: function (data) {
				if (data.logged == false) {
					window.location.replace("/login.html");
					return false;
				} else {
					char = JSON.parse(data.characters);

					for (let i = 0; i < 10; i++) {
						if(scene.type == "Character"){
							scene.parent.visible = false
						}
					}
			
					for (let i = 0; i < char.length; i++) {
						if(scene.type == "Character"){
							if(scene.CharacterID == char[i].player_character_character_id - 1){
								scene.parent.visible = true
							}
						}
					}
				}
			},
			error: function (err) {
				console.log(err);
			}
		})
	}

	start(){
		this.parent.on('pointerdown', event => {
			console.log(this.type)
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

		slots = {
			"slot_1": null,
			"slot_2": null,
			"slot_3": null,
			"slot_4": null,
			"slot_5": null
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
				console.log(time)
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
						console.log(data);
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
				if (slotChosen > 3  && ch_Id > 5) { //slot_id > 3 because there are 2 slots in the back --- ch_id > 5 because there are 5 characters long-range
					charChosen = ch_Id
				} else if ( slotChosen > 3 && ch_Id <= 5) {
					console.log("Can't place the character there. Not a long-range character.")
					return;
				} else {
					charChosen = ch_Id
				}
				slots["slot_" + slotChosen] = ch_Id
			} else {
				console.log("You can't pick the same character twice");
			}
		} else {
			slotChosen = slot_Id;
		}
	}

	choseCharacters() {
		var empty = true;
		var scene = this

		for (let i = 1; i < 6; i++) {
			if (slots["slot_" + i + ""] != null) {
				empty = false;
			}
		}

		if (empty == false) {
			console.log(slots)
			slots = JSON.stringify(slots)
			$.ajax({
				type: "POST",
				url: "/match/choseCharacters",
				data: {
					"slots": slots,
				},
				success: function (data) {
					console.log(data)
					if (data.success) {
						scene.parent.visible = false
						lookingForMatch = true;
					} else {
						slots = JSON.parse(slots);
						var char = JSON.parse(data.charactersFound);

						document.getElementById("characters").innerHTML = "Chose another character";

						for (let i = 1; i < 6; i++) {
							var notIn = true;

							for (let j = 0; j < char.length; j++) {
								if (slots["slot_" + i + ""] == char[j] && notIn == true) {
									notIn = false;
								}
							}

							if (notIn == true) {
								document.getElementById("slot_" + i + "").innerHTML = "chose slot";
								slots["slot_" + i + ""] = 0;
							}
						}
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
