
// You can write more code here

/* START OF COMPILED CODE */

class GoToProfile extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	start(){
		this.parent.on('pointerdown', event => {
			goToProfile = true
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
