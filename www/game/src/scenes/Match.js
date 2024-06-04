
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
		const board_imprimir = this.add.image(960, 855, "board_imprimir");
		board_imprimir.scaleX = 0.68;
		board_imprimir.scaleY = 0.68;

		// city
		const city = this.add.image(960, 239, "city");
		city.scaleX = 1.5;
		city.scaleY = 1.5;

		// bar1
		const bar1 = this.add.image(377, 452, "Bar1");
		bar1.scaleX = 2.775537681726914;
		bar1.scaleY = 2.775537681726914;

		// bar2
		const bar2 = this.add.image(1587, 449, "Bar2");
		bar2.scaleX = 2.452926912380252;
		bar2.scaleY = 2.452926912380252;

		// result
		const result = this.add.text(960, 806, "", {});
		result.name = "result";
		result.scaleX = 2;
		result.scaleY = 2;
		result.setOrigin(0.5, 0.5);
		result.visible = false;
		result.text = "ola\n";
		result.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "20px", "stroke": "#000000ff" });

		// CharacterSlotsPlayer1
		const characterSlotsPlayer1 = this.add.container(0, 0);
		characterSlotsPlayer1.name = "CharacterSlotsPlayer1";
		characterSlotsPlayer1.scaleX = 1.5;
		characterSlotsPlayer1.scaleY = 1.5;

		// player1_slot1
		const player1_slot1 = this.add.image(381, 438.99999955296516, "base", 0);
		player1_slot1.name = "player1_slot1";
		player1_slot1.scaleX = 0.4;
		player1_slot1.scaleY = 0.4;
		player1_slot1.setOrigin(0.5, 0);
		player1_slot1.visible = false;
		characterSlotsPlayer1.add(player1_slot1);

		// matchMechanism
		const matchMechanism = new MatchMechanism(player1_slot1);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(player1_slot1);

		// pushActionScript_1
		new PushActionScript(onPointerDownScript_1);

		// attackMechanism
		const attackMechanism = new AttackMechanism(player1_slot1);

		// player1_slot2
		const player1_slot2 = this.add.image(283, 522.9999995529652, "base", 0);
		player1_slot2.name = "player1_slot2";
		player1_slot2.scaleX = 0.4;
		player1_slot2.scaleY = 0.4;
		player1_slot2.setOrigin(0.5, 0);
		player1_slot2.visible = false;
		characterSlotsPlayer1.add(player1_slot2);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(player1_slot2);

		// pushActionScript_2
		new PushActionScript(onPointerDownScript_2);

		// attackMechanism_1
		const attackMechanism_1 = new AttackMechanism(player1_slot2);

		// player1_slot3
		const player1_slot3 = this.add.image(382, 601.9999995529652, "base", 0);
		player1_slot3.name = "player1_slot3";
		player1_slot3.scaleX = 0.4;
		player1_slot3.scaleY = 0.4;
		player1_slot3.setOrigin(0.5, 0);
		player1_slot3.visible = false;
		characterSlotsPlayer1.add(player1_slot3);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(player1_slot3);

		// pushActionScript
		new PushActionScript(onPointerDownScript);

		// attackMechanism_2
		const attackMechanism_2 = new AttackMechanism(player1_slot3);

		// player1_slot4
		const player1_slot4 = this.add.image(161, 437.99999955296516, "base", 0);
		player1_slot4.name = "player1_slot4";
		player1_slot4.scaleX = 0.4;
		player1_slot4.scaleY = 0.4;
		player1_slot4.setOrigin(0.5, 0);
		player1_slot4.visible = false;
		characterSlotsPlayer1.add(player1_slot4);

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(player1_slot4);

		// pushActionScript_3
		new PushActionScript(onPointerDownScript_3);

		// attackMechanism_3
		const attackMechanism_3 = new AttackMechanism(player1_slot4);

		// player1_slot5
		const player1_slot5 = this.add.image(164, 598.9999995529652, "base", 0);
		player1_slot5.name = "player1_slot5";
		player1_slot5.scaleX = 0.4;
		player1_slot5.scaleY = 0.4;
		player1_slot5.setOrigin(0.5, 0);
		player1_slot5.visible = false;
		characterSlotsPlayer1.add(player1_slot5);

		// onPointerDownScript_4
		const onPointerDownScript_4 = new OnPointerDownScript(player1_slot5);

		// pushActionScript_4
		new PushActionScript(onPointerDownScript_4);

		// attackMechanism_4
		const attackMechanism_4 = new AttackMechanism(player1_slot5);

		// player1_deck1
		const player1_deck1 = this.add.image(514, 381, "cartas4_Imprimir", 3);
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
		characterSlotsPlayer2.scaleX = 1.5;
		characterSlotsPlayer2.scaleY = 1.5;

		// player2_slot1
		const player2_slot1 = this.add.image(909, 438.99999955296516, "base", 0);
		player2_slot1.name = "player2_slot1";
		player2_slot1.scaleX = 0.4;
		player2_slot1.scaleY = 0.4;
		player2_slot1.setOrigin(0.5, 0);
		player2_slot1.visible = false;
		characterSlotsPlayer2.add(player2_slot1);

		// onPointerDownScript_6
		const onPointerDownScript_6 = new OnPointerDownScript(player2_slot1);

		// pushActionScript_6
		new PushActionScript(onPointerDownScript_6);

		// attackMechanism_5
		const attackMechanism_5 = new AttackMechanism(player2_slot1);

		// player2_slot2
		const player2_slot2 = this.add.image(1007, 520.9999995529652, "base", 0);
		player2_slot2.name = "player2_slot2";
		player2_slot2.scaleX = 0.4;
		player2_slot2.scaleY = 0.4;
		player2_slot2.setOrigin(0.5, 0);
		player2_slot2.visible = false;
		characterSlotsPlayer2.add(player2_slot2);

		// onPointerDownScript_7
		const onPointerDownScript_7 = new OnPointerDownScript(player2_slot2);

		// pushActionScript_7
		new PushActionScript(onPointerDownScript_7);

		// attackMechanism_6
		const attackMechanism_6 = new AttackMechanism(player2_slot2);

		// player2_slot3
		const player2_slot3 = this.add.image(909, 599.9999995529652, "base", 0);
		player2_slot3.name = "player2_slot3";
		player2_slot3.scaleX = 0.4;
		player2_slot3.scaleY = 0.4;
		player2_slot3.setOrigin(0.5, 0);
		player2_slot3.visible = false;
		characterSlotsPlayer2.add(player2_slot3);

		// onPointerDownScript_8
		const onPointerDownScript_8 = new OnPointerDownScript(player2_slot3);

		// pushActionScript_8
		new PushActionScript(onPointerDownScript_8);

		// attackMechanism_7
		const attackMechanism_7 = new AttackMechanism(player2_slot3);

		// player2_slot4
		const player2_slot4 = this.add.image(1132, 437.99999955296516, "base", 0);
		player2_slot4.name = "player2_slot4";
		player2_slot4.scaleX = 0.4;
		player2_slot4.scaleY = 0.4;
		player2_slot4.setOrigin(0.5, 0);
		player2_slot4.visible = false;
		characterSlotsPlayer2.add(player2_slot4);

		// onPointerDownScript_9
		const onPointerDownScript_9 = new OnPointerDownScript(player2_slot4);

		// pushActionScript_9
		new PushActionScript(onPointerDownScript_9);

		// attackMechanism_8
		const attackMechanism_8 = new AttackMechanism(player2_slot4);

		// player2_slot5
		const player2_slot5 = this.add.image(1130, 600.9999995529652, "base", 0);
		player2_slot5.name = "player2_slot5";
		player2_slot5.scaleX = 0.4;
		player2_slot5.scaleY = 0.4;
		player2_slot5.setOrigin(0.5, 0);
		player2_slot5.visible = false;
		characterSlotsPlayer2.add(player2_slot5);

		// onPointerDownScript_10
		const onPointerDownScript_10 = new OnPointerDownScript(player2_slot5);

		// pushActionScript_10
		new PushActionScript(onPointerDownScript_10);

		// attackMechanism_9
		const attackMechanism_9 = new AttackMechanism(player2_slot5);

		// player2_deck
		const player2_deck = this.add.image(778, 384, "cartas4_Imprimir", 3);
		player2_deck.scaleX = 0.28;
		player2_deck.scaleY = 0.28;
		player2_deck.angle = -90;
		characterSlotsPlayer2.add(player2_deck);

		// onPointerDownScript_11
		const onPointerDownScript_11 = new OnPointerDownScript(player2_deck);

		// pushActionScript_11
		new PushActionScript(onPointerDownScript_11);

		// HealthBarsPlayer1
		const healthBarsPlayer1 = this.add.container(0, 0);
		healthBarsPlayer1.name = "HealthBarsPlayer1";
		healthBarsPlayer1.scaleX = 1.5;
		healthBarsPlayer1.scaleY = 1.5;

		// healthbar_p1_slot1
		const healthbar_p1_slot1 = this.add.image(381, 432, "spritesheet", 0);
		healthbar_p1_slot1.name = "healthbar_p1_slot1";
		healthbar_p1_slot1.scaleX = 1.5;
		healthbar_p1_slot1.scaleY = 1.5;
		healthbar_p1_slot1.visible = false;
		healthBarsPlayer1.add(healthbar_p1_slot1);

		// healthBarMechanism
		const healthBarMechanism = new HealthBarMechanism(healthbar_p1_slot1);

		// healthbar_p1_slot2
		const healthbar_p1_slot2 = this.add.image(283, 514, "spritesheet", 0);
		healthbar_p1_slot2.name = "healthbar_p1_slot2";
		healthbar_p1_slot2.scaleX = 1.5;
		healthbar_p1_slot2.scaleY = 1.5;
		healthbar_p1_slot2.visible = false;
		healthBarsPlayer1.add(healthbar_p1_slot2);

		// healthbar_p1_slot3
		const healthbar_p1_slot3 = this.add.image(383, 593, "spritesheet", 0);
		healthbar_p1_slot3.name = "healthbar_p1_slot3";
		healthbar_p1_slot3.scaleX = 1.5;
		healthbar_p1_slot3.scaleY = 1.5;
		healthbar_p1_slot3.visible = false;
		healthBarsPlayer1.add(healthbar_p1_slot3);

		// healthbar_p1_slot4
		const healthbar_p1_slot4 = this.add.image(161, 432, "spritesheet", 0);
		healthbar_p1_slot4.name = "healthbar_p1_slot4";
		healthbar_p1_slot4.scaleX = 1.5;
		healthbar_p1_slot4.scaleY = 1.5;
		healthbar_p1_slot4.visible = false;
		healthBarsPlayer1.add(healthbar_p1_slot4);

		// healthbar_p1_slot5
		const healthbar_p1_slot5 = this.add.image(164, 593, "spritesheet", 0);
		healthbar_p1_slot5.name = "healthbar_p1_slot5";
		healthbar_p1_slot5.scaleX = 1.5;
		healthbar_p1_slot5.scaleY = 1.5;
		healthbar_p1_slot5.visible = false;
		healthBarsPlayer1.add(healthbar_p1_slot5);

		// hp_p1_slot5
		const hp_p1_slot5 = this.add.text(163, 587, "", {});
		hp_p1_slot5.name = "hp_p1_slot5";
		hp_p1_slot5.setOrigin(0.5, 0);
		hp_p1_slot5.visible = false;
		hp_p1_slot5.text = "New text";
		hp_p1_slot5.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "12px" });
		healthBarsPlayer1.add(hp_p1_slot5);

		// hp_p1_slot2
		const hp_p1_slot2 = this.add.text(284, 508, "", {});
		hp_p1_slot2.name = "hp_p1_slot2";
		hp_p1_slot2.setOrigin(0.5, 0);
		hp_p1_slot2.visible = false;
		hp_p1_slot2.text = "New text";
		hp_p1_slot2.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "12px" });
		healthBarsPlayer1.add(hp_p1_slot2);

		// hp_p1_slot3
		const hp_p1_slot3 = this.add.text(382, 587, "", {});
		hp_p1_slot3.name = "hp_p1_slot3";
		hp_p1_slot3.setOrigin(0.5, 0);
		hp_p1_slot3.visible = false;
		hp_p1_slot3.text = "New text";
		hp_p1_slot3.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "12px" });
		healthBarsPlayer1.add(hp_p1_slot3);

		// hp_p1_slot1
		const hp_p1_slot1 = this.add.text(380, 426, "", {});
		hp_p1_slot1.name = "hp_p1_slot1";
		hp_p1_slot1.setOrigin(0.5, 0);
		hp_p1_slot1.visible = false;
		hp_p1_slot1.text = "New text";
		hp_p1_slot1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "12px" });
		healthBarsPlayer1.add(hp_p1_slot1);

		// hp_p1_slot4
		const hp_p1_slot4 = this.add.text(162, 426, "", {});
		hp_p1_slot4.name = "hp_p1_slot4";
		hp_p1_slot4.setOrigin(0.5, 0);
		hp_p1_slot4.visible = false;
		hp_p1_slot4.text = "New text";
		hp_p1_slot4.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "12px" });
		healthBarsPlayer1.add(hp_p1_slot4);

		// HealthBarsPlayer2
		const healthBarsPlayer2 = this.add.container(0, 0);
		healthBarsPlayer2.name = "HealthBarsPlayer2";
		healthBarsPlayer2.scaleX = 1.5;
		healthBarsPlayer2.scaleY = 1.5;

		// healthbar_p2_slot1
		const healthbar_p2_slot1 = this.add.image(909, 432, "spritesheet", 0);
		healthbar_p2_slot1.name = "healthbar_p2_slot1";
		healthbar_p2_slot1.scaleX = 1.5;
		healthbar_p2_slot1.scaleY = 1.5;
		healthbar_p2_slot1.visible = false;
		healthBarsPlayer2.add(healthbar_p2_slot1);

		// healthbar_p2_slot2
		const healthbar_p2_slot2 = this.add.image(1006, 514, "spritesheet", 0);
		healthbar_p2_slot2.name = "healthbar_p2_slot2";
		healthbar_p2_slot2.scaleX = 1.5;
		healthbar_p2_slot2.scaleY = 1.5;
		healthbar_p2_slot2.visible = false;
		healthBarsPlayer2.add(healthbar_p2_slot2);

		// healthbar_p2_slot3
		const healthbar_p2_slot3 = this.add.image(908, 593, "spritesheet", 0);
		healthbar_p2_slot3.name = "healthbar_p2_slot3";
		healthbar_p2_slot3.scaleX = 1.5;
		healthbar_p2_slot3.scaleY = 1.5;
		healthbar_p2_slot3.visible = false;
		healthBarsPlayer2.add(healthbar_p2_slot3);

		// healthbar_p2_slot4
		const healthbar_p2_slot4 = this.add.image(1131, 431, "spritesheet", 0);
		healthbar_p2_slot4.name = "healthbar_p2_slot4";
		healthbar_p2_slot4.scaleX = 1.5;
		healthbar_p2_slot4.scaleY = 1.5;
		healthbar_p2_slot4.visible = false;
		healthBarsPlayer2.add(healthbar_p2_slot4);

		// healthbar_p2_slot5
		const healthbar_p2_slot5 = this.add.image(1129, 593, "spritesheet", 0);
		healthbar_p2_slot5.name = "healthbar_p2_slot5";
		healthbar_p2_slot5.scaleX = 1.5;
		healthbar_p2_slot5.scaleY = 1.5;
		healthbar_p2_slot5.visible = false;
		healthBarsPlayer2.add(healthbar_p2_slot5);

		// hp_p2_slot2
		const hp_p2_slot2 = this.add.text(1006, 508, "", {});
		hp_p2_slot2.name = "hp_p2_slot2";
		hp_p2_slot2.setOrigin(0.5, 0);
		hp_p2_slot2.visible = false;
		hp_p2_slot2.text = "New text";
		hp_p2_slot2.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "12px" });
		healthBarsPlayer2.add(hp_p2_slot2);

		// hp_p2_slot1
		const hp_p2_slot1 = this.add.text(908, 426, "", {});
		hp_p2_slot1.name = "hp_p2_slot1";
		hp_p2_slot1.setOrigin(0.5, 0);
		hp_p2_slot1.visible = false;
		hp_p2_slot1.text = "New text";
		hp_p2_slot1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "12px" });
		healthBarsPlayer2.add(hp_p2_slot1);

		// hp_p2_slot3
		const hp_p2_slot3 = this.add.text(908, 587, "", {});
		hp_p2_slot3.name = "hp_p2_slot3";
		hp_p2_slot3.setOrigin(0.5, 0);
		hp_p2_slot3.visible = false;
		hp_p2_slot3.text = "New text";
		hp_p2_slot3.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "12px" });
		healthBarsPlayer2.add(hp_p2_slot3);

		// hp_p2_slot5
		const hp_p2_slot5 = this.add.text(1129, 587, "", {});
		hp_p2_slot5.name = "hp_p2_slot5";
		hp_p2_slot5.setOrigin(0.5, 0);
		hp_p2_slot5.visible = false;
		hp_p2_slot5.text = "New text";
		hp_p2_slot5.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "12px" });
		healthBarsPlayer2.add(hp_p2_slot5);

		// hp_p2_slot4
		const hp_p2_slot4 = this.add.text(1132, 425, "", {});
		hp_p2_slot4.name = "hp_p2_slot4";
		hp_p2_slot4.setOrigin(0.5, 0);
		hp_p2_slot4.visible = false;
		hp_p2_slot4.text = "New text";
		hp_p2_slot4.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "12px" });
		healthBarsPlayer2.add(hp_p2_slot4);

		// endTurnButton
		const endTurnButton = this.add.rectangle(953, 1049, 128, 128);
		endTurnButton.scaleX = 2.3;
		endTurnButton.scaleY = 0.36;
		endTurnButton.isFilled = true;

		// endTurnText
		const endTurnText = this.add.text(960, 1052, "", {});
		endTurnText.scaleX = 2;
		endTurnText.scaleY = 2;
		endTurnText.setOrigin(0.5, 0.5);
		endTurnText.text = "End turn";
		endTurnText.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "25px" });

		// onPointerDownScript_12
		const onPointerDownScript_12 = new OnPointerDownScript(endTurnText);

		// pushActionScript_12
		new PushActionScript(onPointerDownScript_12);

		// endTurnMechanism
		const endTurnMechanism = new EndTurnMechanism(endTurnText);

		// resetHPButton
		const resetHPButton = this.add.rectangle(151, 27, 128, 128);
		resetHPButton.scaleX = 2.2;
		resetHPButton.scaleY = 0.3;
		resetHPButton.isFilled = true;

		// onPointerDownScript_13
		const onPointerDownScript_13 = new OnPointerDownScript(resetHPButton);

		// pushActionScript_13
		new PushActionScript(onPointerDownScript_13);

		// cheatsMechanism
		const cheatsMechanism = new CheatsMechanism(resetHPButton);

		// resetAttackStatusButton
		const resetAttackStatusButton = this.add.rectangle(151, 131, 128, 128);
		resetAttackStatusButton.scaleX = 2.2;
		resetAttackStatusButton.scaleY = 0.3;
		resetAttackStatusButton.isFilled = true;

		// onPointerDownScript_14
		const onPointerDownScript_14 = new OnPointerDownScript(resetAttackStatusButton);

		// pushActionScript_14
		new PushActionScript(onPointerDownScript_14);

		// cheatsMechanism_1
		const cheatsMechanism_1 = new CheatsMechanism(resetAttackStatusButton);

		// setHPTo1Button
		const setHPTo1Button = this.add.rectangle(151, 82, 128, 128);
		setHPTo1Button.scaleX = 2.2;
		setHPTo1Button.scaleY = 0.3;
		setHPTo1Button.isFilled = true;

		// onPointerDownScript_15
		const onPointerDownScript_15 = new OnPointerDownScript(setHPTo1Button);

		// pushActionScript_15
		new PushActionScript(onPointerDownScript_15);

		// cheatsMechanism_2
		const cheatsMechanism_2 = new CheatsMechanism(setHPTo1Button);

		// setHPTo1Text
		const setHPTo1Text = this.add.text(45, 119, "", {});
		setHPTo1Text.scaleX = 1.5;
		setHPTo1Text.scaleY = 1.5;
		setHPTo1Text.text = "Everyone to 1HP";
		setHPTo1Text.setStyle({ "color": "#000000ff" });

		// resetAttackStatusText
		const resetAttackStatusText = this.add.text(15, 71, "", {});
		resetAttackStatusText.scaleX = 1.5;
		resetAttackStatusText.scaleY = 1.5;
		resetAttackStatusText.text = "Reset Attack Status";
		resetAttackStatusText.setStyle({ "color": "#000000ff" });

		// resetHPText
		const resetHPText = this.add.text(98, 16, "", {});
		resetHPText.scaleX = 1.5;
		resetHPText.scaleY = 1.5;
		resetHPText.text = "Reset HP";
		resetHPText.setStyle({ "color": "#000000ff" });

		// turn
		const turn = this.add.text(458, 497, "", {});
		turn.scaleX = 1.5;
		turn.scaleY = 1.5;
		turn.setOrigin(0.5, 0.5);
		turn.visible = false;
		turn.text = "something";
		turn.setStyle({ "color": "#fd6464ff", "fontFamily": "Minecraft", "fontSize": "18px" });

		// winnerText
		const winnerText = this.add.text(369, 373.5, "", {});
		winnerText.scaleX = 1.5;
		winnerText.scaleY = 1.5;
		winnerText.visible = false;
		winnerText.text = "WINNER";
		winnerText.setStyle({ "fontFamily": "Minecraft", "fontSize": "200px" });

		// matchMechanism (prefab fields)
		matchMechanism.turnText = turn;
		matchMechanism.winnerText = winnerText;
		matchMechanism.health = healthBarMechanism;

		// attackMechanism (prefab fields)
		attackMechanism.type = "player";
		attackMechanism.slotID = 1;

		// attackMechanism_1 (prefab fields)
		attackMechanism_1.type = "player";
		attackMechanism_1.slotID = 2;

		// attackMechanism_2 (prefab fields)
		attackMechanism_2.type = "player";
		attackMechanism_2.slotID = 3;

		// attackMechanism_3 (prefab fields)
		attackMechanism_3.type = "player";
		attackMechanism_3.slotID = 4;

		// attackMechanism_4 (prefab fields)
		attackMechanism_4.type = "player";
		attackMechanism_4.slotID = 5;

		// attackMechanism_5 (prefab fields)
		attackMechanism_5.type = "opponent";
		attackMechanism_5.slotID = 1;

		// attackMechanism_6 (prefab fields)
		attackMechanism_6.type = "opponent";
		attackMechanism_6.slotID = 2;

		// attackMechanism_7 (prefab fields)
		attackMechanism_7.type = "opponent";
		attackMechanism_7.slotID = 3;

		// attackMechanism_8 (prefab fields)
		attackMechanism_8.type = "opponent";
		attackMechanism_8.slotID = 4;

		// attackMechanism_9 (prefab fields)
		attackMechanism_9.type = "opponent";
		attackMechanism_9.slotID = 5;

		// endTurnMechanism (prefab fields)
		endTurnMechanism.type = "endTurn";

		// cheatsMechanism (prefab fields)
		cheatsMechanism.type = "resetHP";

		// cheatsMechanism_1 (prefab fields)
		cheatsMechanism_1.type = "hpTo1";

		// cheatsMechanism_2 (prefab fields)
		cheatsMechanism_2.type = "resetAttackStatus";

		this.result = result;
		this.matchMechanism = matchMechanism;
		this.attackMechanism = attackMechanism;
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
		this.healthBarMechanism = healthBarMechanism;
		this.healthbar_p1_slot1 = healthbar_p1_slot1;
		this.healthbar_p1_slot2 = healthbar_p1_slot2;
		this.healthbar_p1_slot3 = healthbar_p1_slot3;
		this.healthbar_p1_slot4 = healthbar_p1_slot4;
		this.healthbar_p1_slot5 = healthbar_p1_slot5;
		this.healthBarsPlayer1 = healthBarsPlayer1;
		this.healthbar_p2_slot1 = healthbar_p2_slot1;
		this.healthbar_p2_slot2 = healthbar_p2_slot2;
		this.healthbar_p2_slot3 = healthbar_p2_slot3;
		this.healthbar_p2_slot4 = healthbar_p2_slot4;
		this.healthbar_p2_slot5 = healthbar_p2_slot5;
		this.healthBarsPlayer2 = healthBarsPlayer2;
		this.endTurnButton = endTurnButton;
		this.endTurnText = endTurnText;
		this.resetHPButton = resetHPButton;
		this.resetAttackStatusButton = resetAttackStatusButton;
		this.setHPTo1Button = setHPTo1Button;
		this.turn = turn;
		this.winnerText = winnerText;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	result;
	/** @type {MatchMechanism} */
	matchMechanism;
	/** @type {AttackMechanism} */
	attackMechanism;
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
	/** @type {HealthBarMechanism} */
	healthBarMechanism;
	/** @type {Phaser.GameObjects.Image} */
	healthbar_p1_slot1;
	/** @type {Phaser.GameObjects.Image} */
	healthbar_p1_slot2;
	/** @type {Phaser.GameObjects.Image} */
	healthbar_p1_slot3;
	/** @type {Phaser.GameObjects.Image} */
	healthbar_p1_slot4;
	/** @type {Phaser.GameObjects.Image} */
	healthbar_p1_slot5;
	/** @type {Phaser.GameObjects.Container} */
	healthBarsPlayer1;
	/** @type {Phaser.GameObjects.Image} */
	healthbar_p2_slot1;
	/** @type {Phaser.GameObjects.Image} */
	healthbar_p2_slot2;
	/** @type {Phaser.GameObjects.Image} */
	healthbar_p2_slot3;
	/** @type {Phaser.GameObjects.Image} */
	healthbar_p2_slot4;
	/** @type {Phaser.GameObjects.Image} */
	healthbar_p2_slot5;
	/** @type {Phaser.GameObjects.Container} */
	healthBarsPlayer2;
	/** @type {Phaser.GameObjects.Rectangle} */
	endTurnButton;
	/** @type {Phaser.GameObjects.Text} */
	endTurnText;
	/** @type {Phaser.GameObjects.Rectangle} */
	resetHPButton;
	/** @type {Phaser.GameObjects.Rectangle} */
	resetAttackStatusButton;
	/** @type {Phaser.GameObjects.Rectangle} */
	setHPTo1Button;
	/** @type {Phaser.GameObjects.Text} */
	turn;
	/** @type {Phaser.GameObjects.Text} */
	winnerText;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
