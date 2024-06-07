
// You can write more code here
var rounds;
var odd;
var even;

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
				console.log(data);
				rounds = data.rounds;
				if (rounds % 2 == 0) {
					even = true;
					odd = false;
					console.log(scene.scene.children.list);
				} else {
					even = false;
					odd = true;
				}
			},
			error: function (err) {
				console.log(err);
			}
		})
	};

	setGlowOnOffCards(object, boolean) {
		console.log("what here??: ", object.preFX.list[0]);
		object.preFX.list[0].active = boolean;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
