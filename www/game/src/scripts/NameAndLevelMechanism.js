
// You can write more code here

/* START OF COMPILED CODE */

class NameAndLevelMechanism extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.GameObject} */
	nameText;
	/** @type {Phaser.GameObjects.GameObject} */
	levelText;

	/* START-USER-CODE */

	awake() {
		var scene = this;
		$.ajax({
			type: 'GET',
			url: '/match/getPlayerNameAndLevel',
			success: function (data) {
				scene.placeNameandLevel(data, scene);
			},
			error: function (err) {
				console.log(err);
			}
		})
	}

	placeNameandLevel(data, scene) {
		var name = scene.scene.children.list[18].list;
		for (let i = 0; i < name.length; i++) {
			console.log(name[i].name);
			if (name[i].name == "namePlayer1Text") {
				name[i].text = data.playerName;
			} else if (name[i].name == "levelPlayer1Text") {
				name[i].text = "Level: " + data.playerLevel;
			} else if (name[i].name == "namePlayer2Text") {
				name[i].text = data.opponentName;
			} else if (name[i].name == "levelPlayer2Text") {
				name[i].text = "Level: " + data.opponentLevel;
			}
		}
	}

}

/* END OF COMPILED CODE */

// You can write more code here
