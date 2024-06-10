
// You can write more code here
/* START OF COMPILED CODE */

class EndTurnMechanism extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	type = "";

	/* START-USER-CODE */

	start() {
		this.parent.on('pointerdown', event => {
			if (this.type == "endTurn") {
				this.endOfTurn();
			}
		});
	}

	endOfTurn() {
		var scene = this;
		$.ajax({
			type: 'GET',
			url: '/attack/endTurn',

			success: function (data) {
				showedCard = false

				scene.setGlowOnOff(scene.scene.children.list[7].list[0], false);
				scene.setGlowOnOff(scene.scene.children.list[7].list[1], false);
				scene.setGlowOnOff(scene.scene.children.list[7].list[2], false);
				scene.setGlowOnOff(scene.scene.children.list[7].list[3], false);
				scene.setGlowOnOff(scene.scene.children.list[7].list[4], false);
				scene.scene.children.list[7].list[0].setTexture("peawns", scene.scene.children.list[7].list[0].frame.name);
				scene.scene.children.list[7].list[1].setTexture("peawns", scene.scene.children.list[7].list[1].frame.name);
				scene.scene.children.list[7].list[2].setTexture("peawns", scene.scene.children.list[7].list[2].frame.name);
				scene.scene.children.list[7].list[3].setTexture("peawns", scene.scene.children.list[7].list[3].frame.name);
				scene.scene.children.list[7].list[4].setTexture("peawns", scene.scene.children.list[7].list[4].frame.name);
			},
			error: function (err) {
				console.log(err);
			}
		})
	};

	setGlowOnOff(object, boolean) {
		object.preFX.list[0].active = boolean;
		object.input.enabled = true;
		object.preFX.list[0].glcolor[0] = 1;
		object.preFX.list[0].glcolor[1] = 1;
		object.preFX.list[0].glcolor[2] = 1;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here