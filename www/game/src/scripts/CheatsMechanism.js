
// You can write more code here

/* START OF COMPILED CODE */

class CheatsMechanism extends ScriptNode {

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
			if (this.type == "resetHP") {
				this.resetHPFromCharacters();
			} else if (this.type == "resetAttackStatus") {
				this.resetStatusFromCharacters();
			} else if (this.type == "hpTo1") {
				this.setsHPTo1FromCharacters();
			}
		});
	}

	resetHPFromCharacters() {
		$.ajax({
			type: 'GET',
			url: '/attack/resetHPCharacters',

			success: function (data) {
				console.log(data);
			},
			error: function (err) {
				console.log(err);
			}
		})
	};

	resetStatusFromCharacters() {
		$.ajax({
			type: 'GET',
			url: '/attack/resetStatusCharacters',

			success: function (data) {
				console.log(data);
			},
			error: function (err) {
				console.log(err);
			}
		})
	};

	setsHPTo1FromCharacters() {
		$.ajax({
			type: 'GET',
			url: '/attack/setTo1',

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
