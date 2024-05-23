
// You can write more code here

/* START OF COMPILED CODE */

class CharactersAndCards extends Phaser.Scene {

	constructor() {
		super("CharactersAndCards");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// specasdossheets
		const specasdossheets = this.add.image(640, 360, "Specasdossheets");
		specasdossheets.scaleX = 0.66666;
		specasdossheets.scaleY = 0.66666;

		// cartas2_Imprimir0
		const cartas2_Imprimir0 = this.add.image(178, 405, "cartas2_Imprimir", 0);
		cartas2_Imprimir0.scaleX = 0.3;
		cartas2_Imprimir0.scaleY = 0.3;

		// cartas1_Imprimir8
		const cartas1_Imprimir8 = this.add.image(101, 117, "cartas1_Imprimir", 8);
		cartas1_Imprimir8.scaleX = 0.3;
		cartas1_Imprimir8.scaleY = 0.3;

		// cartas1_Imprimir7
		const cartas1_Imprimir7 = this.add.image(209, 119, "cartas1_Imprimir", 7);
		cartas1_Imprimir7.scaleX = 0.3;
		cartas1_Imprimir7.scaleY = 0.3;

		// cartas1_Imprimir6
		const cartas1_Imprimir6 = this.add.image(467, 161, "cartas1_Imprimir", 6);
		cartas1_Imprimir6.scaleX = 0.3;
		cartas1_Imprimir6.scaleY = 0.3;

		// cartas1_Imprimir5
		const cartas1_Imprimir5 = this.add.image(640, 161, "cartas1_Imprimir", 5);
		cartas1_Imprimir5.scaleX = 0.3;
		cartas1_Imprimir5.scaleY = 0.3;

		// cartas1_Imprimir4
		const cartas1_Imprimir4 = this.add.image(815, 161, "cartas1_Imprimir", 4);
		cartas1_Imprimir4.scaleX = 0.3;
		cartas1_Imprimir4.scaleY = 0.3;

		// cartas1_Imprimir3
		const cartas1_Imprimir3 = this.add.image(983, 161, "cartas1_Imprimir", 3);
		cartas1_Imprimir3.scaleX = 0.3;
		cartas1_Imprimir3.scaleY = 0.3;

		// cartas1_Imprimir2
		const cartas1_Imprimir2 = this.add.image(1149, 161, "cartas1_Imprimir", 2);
		cartas1_Imprimir2.scaleX = 0.3;
		cartas1_Imprimir2.scaleY = 0.3;

		// cartas1_Imprimir1
		const cartas1_Imprimir1 = this.add.image(469, 400, "cartas1_Imprimir", 1);
		cartas1_Imprimir1.scaleX = 0.3;
		cartas1_Imprimir1.scaleY = 0.3;

		// cartas1_Imprimir0
		const cartas1_Imprimir0 = this.add.image(815, 400, "cartas1_Imprimir", 0);
		cartas1_Imprimir0.scaleX = 0.3;
		cartas1_Imprimir0.scaleY = 0.3;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
