
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
		const board_imprimir = this.add.image(641, 566.6006695988915, "board_imprimir");
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
		const bar2 = this.add.image(1029, 324, "Bar2");
		bar2.scaleX = 1.4;
		bar2.scaleY = 1.3;

		// CharacterSlotsPlayer1
		const characterSlotsPlayer1 = this.add.container(0, 0);

		// player1_slot1
		const player1_slot1 = this.add.image(380, 486, "base", 0);
		player1_slot1.scaleX = 0.2981159453364421;
		player1_slot1.scaleY = 0.2981159453364421;
		characterSlotsPlayer1.add(player1_slot1);

		// matchMechanism
		new MatchMechanism(player1_slot1);

		// player1_slot2
		const player1_slot2 = this.add.image(288, 573, "base", 0);
		player1_slot2.scaleX = 0.2981159453364421;
		player1_slot2.scaleY = 0.2981159453364421;
		characterSlotsPlayer1.add(player1_slot2);

		// matchMechanism_1
		new MatchMechanism(player1_slot2);

		// player1_slot3
		const player1_slot3 = this.add.image(381, 650, "base", 0);
		player1_slot3.scaleX = 0.2981159453364421;
		player1_slot3.scaleY = 0.2981159453364421;
		characterSlotsPlayer1.add(player1_slot3);

		// matchMechanism_2
		new MatchMechanism(player1_slot3);

		// player1_slot4
		const player1_slot4 = this.add.image(160, 486, "base", 0);
		player1_slot4.scaleX = 0.2981159453364421;
		player1_slot4.scaleY = 0.2981159453364421;
		characterSlotsPlayer1.add(player1_slot4);

		// matchMechanism_3
		new MatchMechanism(player1_slot4);

		// player1_slot5
		const player1_slot5 = this.add.image(161, 650, "base", 0);
		player1_slot5.scaleX = 0.2981159453364421;
		player1_slot5.scaleY = 0.2981159453364421;
		characterSlotsPlayer1.add(player1_slot5);

		// matchMechanism_4
		new MatchMechanism(player1_slot5);

		// player1_deck1
		const player1_deck1 = this.add.image(515, 381, "cartas4_Imprimir", 3);
		player1_deck1.scaleX = 0.28128232019065635;
		player1_deck1.scaleY = 0.28128232019065635;
		player1_deck1.angle = 90;
		characterSlotsPlayer1.add(player1_deck1);

		// CharacterSlotsPlayer2
		const characterSlotsPlayer2 = this.add.container(0, 0);

		// player2_slot6
		const player2_slot6 = this.add.image(908, 486, "base", 0);
		player2_slot6.scaleX = 0.2981159453364421;
		player2_slot6.scaleY = 0.2981159453364421;
		characterSlotsPlayer2.add(player2_slot6);

		// matchMechanism_5
		new MatchMechanism(player2_slot6);

		// player2_slot7
		const player2_slot7 = this.add.image(1000, 573, "base", 0);
		player2_slot7.scaleX = 0.2981159453364421;
		player2_slot7.scaleY = 0.2981159453364421;
		characterSlotsPlayer2.add(player2_slot7);

		// matchMechanism_6
		new MatchMechanism(player2_slot7);

		// player2_slot8
		const player2_slot8 = this.add.image(908, 650, "base", 0);
		player2_slot8.scaleX = 0.2981159453364421;
		player2_slot8.scaleY = 0.2981159453364421;
		characterSlotsPlayer2.add(player2_slot8);

		// matchMechanism_7
		new MatchMechanism(player2_slot8);

		// player2_slot9
		const player2_slot9 = this.add.image(1128, 486, "base", 0);
		player2_slot9.scaleX = 0.2981159453364421;
		player2_slot9.scaleY = 0.2981159453364421;
		characterSlotsPlayer2.add(player2_slot9);

		// matchMechanism_8
		new MatchMechanism(player2_slot9);

		// player2_slot10
		const player2_slot10 = this.add.image(1128, 650, "base", 0);
		player2_slot10.scaleX = 0.2981159453364421;
		player2_slot10.scaleY = 0.2981159453364421;
		characterSlotsPlayer2.add(player2_slot10);

		// matchMechanism_9
		new MatchMechanism(player2_slot10);

		// player2_deck
		const player2_deck = this.add.image(789, 381, "cartas4_Imprimir", 3);
		player2_deck.scaleX = 0.28128232019065635;
		player2_deck.scaleY = 0.28128232019065635;
		player2_deck.angle = -90;
		characterSlotsPlayer2.add(player2_deck);

		this.player1_slot1 = player1_slot1;
		this.player1_slot2 = player1_slot2;
		this.player1_slot3 = player1_slot3;
		this.player1_slot4 = player1_slot4;
		this.player1_slot5 = player1_slot5;
		this.characterSlotsPlayer1 = characterSlotsPlayer1;
		this.player2_slot6 = player2_slot6;
		this.player2_slot7 = player2_slot7;
		this.player2_slot8 = player2_slot8;
		this.player2_slot9 = player2_slot9;
		this.player2_slot10 = player2_slot10;
		this.characterSlotsPlayer2 = characterSlotsPlayer2;

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
	player2_slot6;
	/** @type {Phaser.GameObjects.Image} */
	player2_slot7;
	/** @type {Phaser.GameObjects.Image} */
	player2_slot8;
	/** @type {Phaser.GameObjects.Image} */
	player2_slot9;
	/** @type {Phaser.GameObjects.Image} */
	player2_slot10;
	/** @type {Phaser.GameObjects.Container} */
	characterSlotsPlayer2;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
