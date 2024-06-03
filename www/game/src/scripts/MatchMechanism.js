var time;

/* START OF COMPILED CODE */

class MatchMechanism extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.GameObject} */
	turnText;
	/** @type {Phaser.GameObjects.GameObject} */
	winnerText;

	/* START-USER-CODE */

	awake() {
		var scene = this;
		$.ajax({
			type: "GET",
			url: "/match/getMatchData",
			success: function (data) {
				if (data.inMatch) {
					var player1_characters = JSON.parse(data.characters_player1);
					var player2_characters = JSON.parse(data.characters_player2);

					scene.setCharactersValues(data.match_id, data.player_id, data.player1_id, data.player2_id, data.player1_name, data.player2_name, player1_characters, player2_characters);

				} else {
					window.location.replace("/login.html");
				}
			},
			error: function (err) {
				console.log(err);
			}
		});

	}

	update(dt) {
		time = time + 0.01666;
		if (time > (38 * 2)) {
			this.deltaChanges();
			time = 0;
		}
	};

	deltaChanges() {
		var scene = this;
		$.ajax({
			type: "GET",
			url: "/match/deltaChanges",
			success: function (data) {
				if (data.matchFinished == true) {
					console.log(data);
					scene.matchFinished(data.winner, data.winnerID, data.loserID);
				} else if (data.logged == false) {
					window.location.replace("/login.html");
				} else {
					scene.isItMyTurn(data.turn, data.player);
					scene.setCharactersValues(null, data.player, data.player1, data.player2, null, null, JSON.parse(data.ch1), JSON.parse(data.ch2), ongoing = true);
				}
			},
			error: function (err) {
				console.log(err);
			}
		})
	};

	isItMyTurn(turn_id, player_id) {
		if (turn_id == player_id) {
			this.turnText.text = "It's\nyour\nTurn!";
			this.turnText.setVisible(true);
		} else {
			this.turnText.text = "Please\nwait!";
			this.turnText.setVisible(true);
		}
	}

	matchFinished(winnerName, winID, losID) {
		var order = [1, 4, 2, 5, 3];

		for (var i = 1; i < 3; i++) { //runs 2 times because there are 2 players
			for (let j = 0; j < order.length; j++) { // runs 5 times because it's the size of the order and because of the quantity of the slots available
				document.getElementById('slot_' + order[j] + '_p' + i + '').disabled = true; // desativar todos quando morrem.
			}
		}

		this.winnerText.text = "Match finished, the winner is: " + winnerName;

		if (winnerName != undefined) {
			setTimeout(this.updateLevelXp(winID, losID), 8000);
		}
	};

	updateLevelXp(winID, losID) {
		$.ajax({
			type: "POST",
			url: "/levelUp/upgradeLevel",
			data: {
				"winner": winID,
				"loser": losID
			},
			success: function (data) {
				console.log(data)
				window.location.replace("/game/");
			},
			error: function (err) {
				console.log(err);
			}
		})
	}

	setCharactersValues(match, player, p1, p2, p1_name, p2_name, ch1, ch2, ongoing = false) {

		if (ongoing) {
			if (p1 == player) {
				//player = ch1

				for (let i = 0; i < ch1.length; i++) {

					character = character.split(":")

					if (character[1] != ch1[i].player_match_character_character_current_HP) {
						console.log("character toke damage");
						document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p1").innerHTML = character[0] + ": " + ch1[i].player_match_character_character_current_HP;
						document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p1").disabled = false
					}
				}

				for (let i = 0; i < ch2.length; i++) {
					var character = document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p2").innerHTML;
					character = character.split(":")

					if (character[1] != ch2[i].player_match_character_character_current_HP) {
						console.log("character toke damage");
						document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p2").innerHTML = character[0] + ": " + ch2[i].player_match_character_character_current_HP;
						document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p2").disabled = false

						if (ch2[i].player_match_character_character_current_HP <= 0) {
							document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p2").disabled = true
						}
					}
				}

			} else {
				//player = ch2
				for (let i = 0; i < ch2.length; i++) {
					var character = document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p1").innerHTML;
					character = character.split(":")

					if (character[1] != ch2[i].player_match_character_character_current_HP) {
						console.log("character toke damage");
						document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p1").innerHTML = character[0] + ": " + ch2[i].player_match_character_character_current_HP;
						document.getElementById("slot_" + ch2[i].player_match_character_tile_id + "_p1").disabled = false
					}
				}

				for (let i = 0; i < ch1.length; i++) {
					var character = document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p2").innerHTML;
					character = character.split(":")

					if (character[1] != ch1[i].player_match_character_character_current_HP) {
						console.log("character toke damage");
						document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p2").innerHTML = character[0] + ": " + ch1[i].player_match_character_character_current_HP;
						document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p2").disabled = false

						if (ch1[i].player_match_character_character_current_HP <= 0) {
							document.getElementById("slot_" + ch1[i].player_match_character_tile_id + "_p2").disabled = true
						}
					}
				}
			}
		} else {

			console.log("Match: ", match, "\ Players: ", p1_name + " " + p2_name)

			if (p1 == player) {
				//player = ch1
				var character = this.parent.scene.children.list;
				var orderCharacterPlayer2Images = [8, 7, 6, 0, 4, 9, 3, 1, 2, 5];

				for (let i = 0; i < character.length; i++) {
					if (character[i].name == "CharacterSlotsPlayer1") {
						for (let j = 0; j < character[i].list.length; j++) {
							if (character[i].list[j].name.search("player1_slot") == 0) {
								for (let k = 0; k < ch1.length; k++) {
									if (ch1[k].player_match_character_tile_id == j + 1) {
										character[i].list[j].setTexture("peawns", ch1[k].player_match_character_character_id - 1);
									}
								}
							}
						}
					}
				}

				for (let i = 0; i < character.length; i++) {
					if (character[i].name == "CharacterSlotsPlayer2") {
						for (let j = 0; j < character[i].list.length; j++) {
							if (character[i].list[j].name.search("player2_slot") == 0) {
								for (let k = 0; k < ch2.length; k++) {
									if (ch2[k].player_match_character_tile_id == j + 1) {
										character[i].list[j].setTexture("peawns2", orderCharacterPlayer2Images[ch2[k].player_match_character_character_id - 1]);
									}
								}
							}
						}
					}
				}

			} else {
				//player = ch2

				var character = this.parent.scene.children.list;
				var orderCharacterPlayer2Images = [8, 7, 6, 0, 4, 9, 3, 1, 2, 5];

				for (let i = 0; i < character.length; i++) {
					if (character[i].name == "CharacterSlotsPlayer2") {
						for (let j = 0; j < character[i].list.length; j++) {
							if (character[i].list[j].name.search("player2_slot") == 0) {
								for (let k = 0; k < ch1.length; k++) {
									if (ch1[k].player_match_character_tile_id == j + 1) {
										character[i].list[j].setTexture("peawns2", orderCharacterPlayer2Images[ch1[k].player_match_character_character_id - 1]);
									}
								}
							}
						}
					}
				}

				for (let i = 0; i < character.length; i++) {
					if (character[i].name == "CharacterSlotsPlayer1") {
						for (let j = 0; j < character[i].list.length; j++) {
							if (character[i].list[j].name.search("player1_slot") == 0) {
								for (let k = 0; k < ch2.length; k++) {
									if (ch2[k].player_match_character_tile_id == j + 1) {
										character[i].list[j].setTexture("peawns", ch2[k].player_match_character_character_id - 1);
									}
								}
							}
						}
					}
				}
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
