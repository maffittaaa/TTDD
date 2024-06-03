
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
		$.ajax({
			type: 'GET',
			url: '/attack/endTurn',

			success: function (data) {
				console.log(data);
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
