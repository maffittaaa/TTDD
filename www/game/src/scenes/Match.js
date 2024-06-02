
// You can write more code here

/* START OF COMPILED CODE */

class Match extends Phaser.Scene {

	constructor() {
		super("Match");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// board_imprimir
		const board_imprimir = this.add.image(640, 566.6006695988915, "board_imprimir");
		board_imprimir.scaleX = 0.4505119835568532;
		board_imprimir.scaleY = 0.4505119835568532;

		// city
		const city = this.add.image(640, 160, "city");
		city.scaleY = 1.0867736819992728;

		// bar1
		const bar1 = this.add.image(278, 324, "Bar1");
		bar1.scaleX = 1.4;
		bar1.scaleY = 1.5;

		// bar2
		const bar2 = this.add.image(1060, 324, "Bar2");
		bar2.scaleX = 1.4;
		bar2.scaleY = 1.3;

		// CharacterSlotsPlayer1
		const characterSlotsPlayer1 = this.add.container(0, 0);
		characterSlotsPlayer1.name = "CharacterSlotsPlayer1";

		// player1_slot1
		const player1_slot1 = this.add.image(381, 438.99999955296516, "base", 0);
		player1_slot1.name = "player1_slot1";
		player1_slot1.scaleX = 0.4;
		player1_slot1.scaleY = 0.4;
		player1_slot1.setOrigin(0.5, 0);
		characterSlotsPlayer1.add(player1_slot1);

		// matchMechanism
		new MatchMechanism(player1_slot1);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(player1_slot1);

		// pushActionScript_1
		new PushActionScript(onPointerDownScript_1);

		// player1_slot2
		const player1_slot2 = this.add.image(283, 522.9999995529652, "base", 0);
		player1_slot2.name = "player1_slot2";
		player1_slot2.scaleX = 0.4;
		player1_slot2.scaleY = 0.4;
		player1_slot2.setOrigin(0.5, 0);
		characterSlotsPlayer1.add(player1_slot2);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(player1_slot2);

		// pushActionScript_2
		new PushActionScript(onPointerDownScript_2);

		// player1_slot3
		const player1_slot3 = this.add.image(382, 601.9999995529652, "base", 0);
		player1_slot3.name = "player1_slot3";
		player1_slot3.scaleX = 0.4;
		player1_slot3.scaleY = 0.4;
		player1_slot3.setOrigin(0.5, 0);
		characterSlotsPlayer1.add(player1_slot3);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(player1_slot3);

		// pushActionScript
		new PushActionScript(onPointerDownScript);

		// player1_slot4
		const player1_slot4 = this.add.image(161, 437.99999955296516, "base", 0);
		player1_slot4.name = "player1_slot4";
		player1_slot4.scaleX = 0.4;
		player1_slot4.scaleY = 0.4;
		player1_slot4.setOrigin(0.5, 0);
		characterSlotsPlayer1.add(player1_slot4);

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(player1_slot4);

		// pushActionScript_3
		new PushActionScript(onPointerDownScript_3);

		// player1_slot5
		const player1_slot5 = this.add.image(164, 598.9999995529652, "base", 0);
		player1_slot5.name = "player1_slot5";
		player1_slot5.scaleX = 0.4;
		player1_slot5.scaleY = 0.4;
		player1_slot5.setOrigin(0.5, 0);
		characterSlotsPlayer1.add(player1_slot5);

		// onPointerDownScript_4
		const onPointerDownScript_4 = new OnPointerDownScript(player1_slot5);

		// pushActionScript_4
		new PushActionScript(onPointerDownScript_4);

		// player1_deck1
		const player1_deck1 = this.add.image(515, 381, "cartas4_Imprimir", 3);
		player1_deck1.scaleX = 0.28;
		player1_deck1.scaleY = 0.28;
		player1_deck1.angle = 90;
		characterSlotsPlayer1.add(player1_deck1);

		// onPointerDownScript_5
		const onPointerDownScript_5 = new OnPointerDownScript(player1_deck1);

		// pushActionScript_5
		new PushActionScript(onPointerDownScript_5);

		// CharacterSlotsPlayer2
		const characterSlotsPlayer2 = this.add.container(0, 0);
		characterSlotsPlayer2.name = "CharacterSlotsPlayer2";

		// player2_slot1
		const player2_slot1 = this.add.image(909, 438.99999955296516, "base", 0);
		player2_slot1.name = "player2_slot1";
		player2_slot1.scaleX = 0.4;
		player2_slot1.scaleY = 0.4;
		player2_slot1.setOrigin(0.5, 0);
		characterSlotsPlayer2.add(player2_slot1);

		// onPointerDownScript_6
		const onPointerDownScript_6 = new OnPointerDownScript(player2_slot1);

		// pushActionScript_6
		new PushActionScript(onPointerDownScript_6);

		// player2_slot2
		const player2_slot2 = this.add.image(1007, 520.9999995529652, "base", 0);
		player2_slot2.name = "player2_slot2";
		player2_slot2.scaleX = 0.4;
		player2_slot2.scaleY = 0.4;
		player2_slot2.setOrigin(0.5, 0);
		characterSlotsPlayer2.add(player2_slot2);

		// onPointerDownScript_7
		const onPointerDownScript_7 = new OnPointerDownScript(player2_slot2);

		// pushActionScript_7
		new PushActionScript(onPointerDownScript_7);

		// player2_slot3
		const player2_slot3 = this.add.image(909, 599.9999995529652, "base", 0);
		player2_slot3.name = "player2_slot3";
		player2_slot3.scaleX = 0.4;
		player2_slot3.scaleY = 0.4;
		player2_slot3.setOrigin(0.5, 0);
		characterSlotsPlayer2.add(player2_slot3);

		// onPointerDownScript_8
		const onPointerDownScript_8 = new OnPointerDownScript(player2_slot3);

		// pushActionScript_8
		new PushActionScript(onPointerDownScript_8);

		// player2_slot4
		const player2_slot4 = this.add.image(1132, 437.99999955296516, "base", 0);
		player2_slot4.name = "player2_slot4";
		player2_slot4.scaleX = 0.4;
		player2_slot4.scaleY = 0.4;
		player2_slot4.setOrigin(0.5, 0);
		characterSlotsPlayer2.add(player2_slot4);

		// onPointerDownScript_9
		const onPointerDownScript_9 = new OnPointerDownScript(player2_slot4);

		// pushActionScript_9
		new PushActionScript(onPointerDownScript_9);

		// player2_slot5
		const player2_slot5 = this.add.image(1130, 600.9999995529652, "base", 0);
		player2_slot5.name = "player2_slot5";
		player2_slot5.scaleX = 0.4;
		player2_slot5.scaleY = 0.4;
		player2_slot5.setOrigin(0.5, 0);
		characterSlotsPlayer2.add(player2_slot5);

		// onPointerDownScript_10
		const onPointerDownScript_10 = new OnPointerDownScript(player2_slot5);

		// pushActionScript_10
		new PushActionScript(onPointerDownScript_10);

		// player2_deck
		const player2_deck = this.add.image(781, 381, "cartas4_Imprimir", 3);
		player2_deck.scaleX = 0.28;
		player2_deck.scaleY = 0.28;
		player2_deck.angle = -90;
		characterSlotsPlayer2.add(player2_deck);

		// onPointerDownScript_11
		const onPointerDownScript_11 = new OnPointerDownScript(player2_deck);

		// pushActionScript_11
		new PushActionScript(onPointerDownScript_11);

		// Healthbars
		const healthbars = this.add.container(0, 0);

		// spritesheet0
		const spritesheet0 = this.add.image(381, 432, "spritesheet", 0);
		spritesheet0.scaleX = 1.5;
		spritesheet0.scaleY = 1.5;
		healthbars.add(spritesheet0);

		// spritesheet
		const spritesheet = this.add.image(161, 431, "spritesheet", 0);
		spritesheet.scaleX = 1.5;
		spritesheet.scaleY = 1.5;
		healthbars.add(spritesheet);

		// spritesheet_1
		const spritesheet_1 = this.add.image(164, 592, "spritesheet", 0);
		spritesheet_1.scaleX = 1.5;
		spritesheet_1.scaleY = 1.5;
		healthbars.add(spritesheet_1);

		// spritesheet_2
		const spritesheet_2 = this.add.image(282, 516, "spritesheet", 0);
		spritesheet_2.scaleX = 1.5;
		spritesheet_2.scaleY = 1.5;
		healthbars.add(spritesheet_2);

		// spritesheet_3
		const spritesheet_3 = this.add.image(382, 595, "spritesheet", 0);
		spritesheet_3.scaleX = 1.5;
		spritesheet_3.scaleY = 1.5;
		healthbars.add(spritesheet_3);

		// spritesheet_4
		const spritesheet_4 = this.add.image(909, 432, "spritesheet", 0);
		spritesheet_4.scaleX = 1.5;
		spritesheet_4.scaleY = 1.5;
		healthbars.add(spritesheet_4);

		// spritesheet_5
		const spritesheet_5 = this.add.image(1131, 431, "spritesheet", 0);
		spritesheet_5.scaleX = 1.5;
		spritesheet_5.scaleY = 1.5;
		healthbars.add(spritesheet_5);

		// spritesheet_6
		const spritesheet_6 = this.add.image(1129, 594, "spritesheet", 0);
		spritesheet_6.scaleX = 1.5;
		spritesheet_6.scaleY = 1.5;
		healthbars.add(spritesheet_6);

		// spritesheet_7
		const spritesheet_7 = this.add.image(908, 593, "spritesheet", 0);
		spritesheet_7.scaleX = 1.5;
		spritesheet_7.scaleY = 1.5;
		healthbars.add(spritesheet_7);

		// spritesheet_8
		const spritesheet_8 = this.add.image(1006, 514, "spritesheet", 0);
		spritesheet_8.scaleX = 1.5;
		spritesheet_8.scaleY = 1.5;
		healthbars.add(spritesheet_8);

		// text_1
		const text_1 = this.add.text(65, 665, "", {});
		text_1.text = "New text";
		text_1.setStyle({ "color": "#000000ff", "fontSize": "32px", "stroke": "#000000ff" });

		this.player1_slot1 = player1_slot1;
		this.player1_slot2 = player1_slot2;
		this.player1_slot3 = player1_slot3;
		this.player1_slot4 = player1_slot4;
		this.player1_slot5 = player1_slot5;
		this.characterSlotsPlayer1 = characterSlotsPlayer1;
		this.player2_slot1 = player2_slot1;
		this.player2_slot2 = player2_slot2;
		this.player2_slot3 = player2_slot3;
		this.player2_slot4 = player2_slot4;
		this.player2_slot5 = player2_slot5;
		this.characterSlotsPlayer2 = characterSlotsPlayer2;
		this.healthbars = healthbars;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	player1_slot1;
	/** @type {Phaser.GameObjects.Image} */
	player1_slot2;
	/** @type {Phaser.GameObjects.Image} */
	player1_slot3;
	/** @type {Phaser.GameObjects.Image} */
	player1_slot4;
	/** @type {Phaser.GameObjects.Image} */
	player1_slot5;
	/** @type {Phaser.GameObjects.Container} */
	characterSlotsPlayer1;
	/** @type {Phaser.GameObjects.Image} */
	player2_slot1;
	/** @type {Phaser.GameObjects.Image} */
	player2_slot2;
	/** @type {Phaser.GameObjects.Image} */
	player2_slot3;
	/** @type {Phaser.GameObjects.Image} */
	player2_slot4;
	/** @type {Phaser.GameObjects.Image} */
	player2_slot5;
	/** @type {Phaser.GameObjects.Container} */
	characterSlotsPlayer2;
	/** @type {Phaser.GameObjects.Container} */
	healthbars;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
