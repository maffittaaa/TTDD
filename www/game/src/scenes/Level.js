
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */



		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// guapen
		this.add.image(555, 325, "guapen");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	create(){
		this.editorCreate();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
