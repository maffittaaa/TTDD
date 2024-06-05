
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
		const result = this.add.text(957, 787, "", {});
		result.name = "result";
		result.scaleX = 2.5;
		result.scaleY = 1.5;
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

		// glowFx
		player1_slot1.preFX.addGlow(16777215, 4, 0, false);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(player1_slot1);

		// pushActionScript_1
		new PushActionScript(onPointerDownScript_1);

		// attackMechanism
		const attackMechanism = new AttackMechanism(player1_slot1);

		// nameAndLevelMechanism
		const nameAndLevelMechanism = new NameAndLevelMechanism(player1_slot1);

		// matchMechanism
		const matchMechanism = new MatchMechanism(player1_slot1);

		// throwables
		new Throwables(player1_slot1);

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

		// glowFx_1
		player1_slot2.preFX.addGlow(16777215, 4, 0, false);

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

		// glowFx_2
		player1_slot3.preFX.addGlow(16777215, 4, 0, false);

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

		// glowFx_3
		player1_slot4.preFX.addGlow(16777215, 4, 0, false);

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

		// glowFx_4
		player1_slot5.preFX.addGlow(16777215, 4, 0, false);

		// player1_deck1
		const player1_deck1 = this.add.image(514, 381, "cartas4_Imprimir", 3);
		player1_deck1.name = "player1_deck1";
		player1_deck1.scaleX = 0.28;
		player1_deck1.scaleY = 0.28;
		player1_deck1.angle = 90;
		characterSlotsPlayer1.add(player1_deck1);

		// onPointerDownScript_5
		const onPointerDownScript_5 = new OnPointerDownScript(player1_deck1);

		// pushActionScript_5
		new PushActionScript(onPointerDownScript_5);

		// cardsMechanism
		const cardsMechanism = new CardsMechanism(player1_deck1);

		// damageAnimationMechanism
		const damageAnimationMechanism = new DamageAnimationMechanism(this, 285, 415);
		damageAnimationMechanism.name = "damageAnimationMechanism";
		damageAnimationMechanism.visible = false;
		characterSlotsPlayer1.add(damageAnimationMechanism);

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

		// glowFx_5
		player2_slot1.preFX.addGlow(9241090, 4, 0, false);

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

		// glowFx_6
		player2_slot2.preFX.addGlow(9241090, 4, 0, false);

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

		// glowFx_7
		player2_slot3.preFX.addGlow(9241090, 4, 0, false);

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

		// glowFx_8
		player2_slot4.preFX.addGlow(9241090, 4, 0, false);

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

		// glowFx_9
		player2_slot5.preFX.addGlow(9241090, 4, 0, false);

		// player2_deck
		const player2_deck = this.add.image(770, 381, "cartas4_Imprimir", 3);
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
		const resetHPButton = this.add.rectangle(960, 267, 128, 128);
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
		const resetAttackStatusButton = this.add.rectangle(960, 363, 128, 128);
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
		const setHPTo1Button = this.add.rectangle(960, 315, 128, 128);
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
		const setHPTo1Text = this.add.text(960, 364, "", {});
		setHPTo1Text.scaleX = 1.5;
		setHPTo1Text.scaleY = 1.5;
		setHPTo1Text.setOrigin(0.5, 0.5);
		setHPTo1Text.text = "Everyone to 1HP";
		setHPTo1Text.setStyle({ "color": "#000000ff", "fontFamily": "Minecraft" });

		// resetAttackStatusText
		const resetAttackStatusText = this.add.text(960, 315, "", {});
		resetAttackStatusText.scaleX = 1.5;
		resetAttackStatusText.scaleY = 1.5;
		resetAttackStatusText.setOrigin(0.5, 0.5);
		resetAttackStatusText.text = "Reset Attack Status";
		resetAttackStatusText.setStyle({ "color": "#000000ff", "fontFamily": "Minecraft" });

		// resetHPText
		const resetHPText = this.add.text(906, 256, "", {});
		resetHPText.scaleX = 1.5;
		resetHPText.scaleY = 1.5;
		resetHPText.text = "Reset HP";
		resetHPText.setStyle({ "color": "#000000ff", "fontFamily": "Minecraft" });

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

		// namesAndLevelsPlayers
		const namesAndLevelsPlayers = this.add.container(0, 0);
		namesAndLevelsPlayers.name = "namesAndLevelsPlayers";

		// player2NameShape
		const player2NameShape = this.add.rectangle(1561, 66, 128, 128);
		player2NameShape.scaleX = 4;
		player2NameShape.scaleY = 0.5;
		player2NameShape.isStroked = true;
		player2NameShape.strokeColor = 3933083;
		namesAndLevelsPlayers.add(player2NameShape);

		// player1NameShape
		const player1NameShape = this.add.rectangle(359, 66, 128, 128);
		player1NameShape.scaleX = 4;
		player1NameShape.scaleY = 0.5;
		player1NameShape.isStroked = true;
		player1NameShape.strokeColor = 3933083;
		namesAndLevelsPlayers.add(player1NameShape);

		// levelPlayer1Shape
		const levelPlayer1Shape = this.add.rectangle(352, 121, 128, 128);
		levelPlayer1Shape.scaleX = 3;
		levelPlayer1Shape.scaleY = 0.3;
		levelPlayer1Shape.isStroked = true;
		levelPlayer1Shape.strokeColor = 3933108;
		namesAndLevelsPlayers.add(levelPlayer1Shape);

		// levelPlayer2Shape
		const levelPlayer2Shape = this.add.rectangle(1568, 121, 128, 128);
		levelPlayer2Shape.scaleX = 3;
		levelPlayer2Shape.scaleY = 0.3;
		levelPlayer2Shape.isStroked = true;
		levelPlayer2Shape.strokeColor = 3933108;
		namesAndLevelsPlayers.add(levelPlayer2Shape);

		// namePlayer1Text
		const namePlayer1Text = this.add.text(344.5, 67, "", {});
		namePlayer1Text.name = "namePlayer1Text";
		namePlayer1Text.setOrigin(0.5, 0.5);
		namePlayer1Text.text = "Player 1";
		namePlayer1Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "45px" });
		namesAndLevelsPlayers.add(namePlayer1Text);

		// namePlayer2Text
		const namePlayer2Text = this.add.text(1568, 67, "", {});
		namePlayer2Text.name = "namePlayer2Text";
		namePlayer2Text.setOrigin(0.5, 0.5);
		namePlayer2Text.text = "Player 2";
		namePlayer2Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "45px" });
		namesAndLevelsPlayers.add(namePlayer2Text);

		// levelPlayer1Text
		const levelPlayer1Text = this.add.text(333, 123, "", {});
		levelPlayer1Text.name = "levelPlayer1Text";
		levelPlayer1Text.setOrigin(0.5, 0.5);
		levelPlayer1Text.text = "Level: ";
		levelPlayer1Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "20px" });
		namesAndLevelsPlayers.add(levelPlayer1Text);

		// levelPlayer2Text
		const levelPlayer2Text = this.add.text(1565, 123, "", {});
		levelPlayer2Text.name = "levelPlayer2Text";
		levelPlayer2Text.setOrigin(0.5, 0.5);
		levelPlayer2Text.text = "Level: ";
		levelPlayer2Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "20px" });
		namesAndLevelsPlayers.add(levelPlayer2Text);

		// showCards
		const showCards = this.add.text(288, 472, "", {});
		showCards.name = "showCards";
		showCards.setInteractive(new Phaser.Geom.Rectangle(-38, -140, 652.3814994495934, 910.5149565734912), Phaser.Geom.Rectangle.Contains);
		showCards.scaleX = 0.23;
		showCards.scaleY = 0.23;
		showCards.setOrigin(0.5, 0.5);
		showCards.text = "Show Cards";
		showCards.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px" });

		// onPointerDownScript_16
		const onPointerDownScript_16 = new OnPointerDownScript(showCards);

		// pushActionScript_16
		new PushActionScript(onPointerDownScript_16);

		// cardsMechanism_1
		const cardsMechanism_1 = new CardsMechanism(showCards);

		// handCards
		const handCards = this.add.container(0, 0);
		handCards.name = "handCards";
		handCards.visible = false;

		// shadow
		const shadow = this.add.image(960, 540, "Shadow");
		shadow.scaleX = 10.03127832345736;
		shadow.scaleY = 5.743648692660658;
		handCards.add(shadow);

		// cards
		const cards = this.add.container(0, 0);
		cards.name = "cards";
		handCards.add(cards);

		// cardSlot1
		const cardSlot1 = this.add.image(180, 245, "cartas4_Imprimir", 3);
		cardSlot1.name = "cardSlot1";
		cardSlot1.visible = false;
		cards.add(cardSlot1);

		// attackMechanism_10
		const attackMechanism_10 = new AttackMechanism(cardSlot1);

		// cardSlot2
		const cardSlot2 = this.add.image(510, 245, "cartas4_Imprimir", 3);
		cardSlot2.name = "cardSlot2";
		cardSlot2.visible = false;
		cards.add(cardSlot2);

		// attackMechanism_11
		const attackMechanism_11 = new AttackMechanism(cardSlot2);

		// cardSlot3
		const cardSlot3 = this.add.image(830, 245, "cartas4_Imprimir", 3);
		cardSlot3.name = "cardSlot3";
		cardSlot3.visible = false;
		cards.add(cardSlot3);

		// attackMechanism_12
		const attackMechanism_12 = new AttackMechanism(cardSlot3);

		// cardSlot4
		const cardSlot4 = this.add.image(1157, 245, "cartas4_Imprimir", 3);
		cardSlot4.name = "cardSlot4";
		cardSlot4.visible = false;
		cards.add(cardSlot4);

		// attackMechanism_13
		const attackMechanism_13 = new AttackMechanism(cardSlot4);

		// cardSlot5
		const cardSlot5 = this.add.image(1491, 245, "cartas4_Imprimir", 3);
		cardSlot5.name = "cardSlot5";
		cardSlot5.visible = false;
		cards.add(cardSlot5);

		// attackMechanism_14
		const attackMechanism_14 = new AttackMechanism(cardSlot5);

		// cardSlot6
		const cardSlot6 = this.add.image(180, 707, "cartas4_Imprimir", 3);
		cardSlot6.name = "cardSlot6";
		cardSlot6.visible = false;
		cards.add(cardSlot6);

		// attackMechanism_15
		const attackMechanism_15 = new AttackMechanism(cardSlot6);

		// cardSlot7
		const cardSlot7 = this.add.image(510, 715, "cartas4_Imprimir", 3);
		cardSlot7.name = "cardSlot7";
		cardSlot7.visible = false;
		cards.add(cardSlot7);

		// attackMechanism_16
		const attackMechanism_16 = new AttackMechanism(cardSlot7);

		// cardSlot8
		const cardSlot8 = this.add.image(834, 718, "cartas4_Imprimir", 3);
		cardSlot8.name = "cardSlot8";
		cardSlot8.visible = false;
		cards.add(cardSlot8);

		// attackMechanism_17
		const attackMechanism_17 = new AttackMechanism(cardSlot8);

		// cardSlot9
		const cardSlot9 = this.add.image(1167, 718, "cartas4_Imprimir", 3);
		cardSlot9.name = "cardSlot9";
		cardSlot9.visible = false;
		cards.add(cardSlot9);

		// attackMechanism_18
		const attackMechanism_18 = new AttackMechanism(cardSlot9);

		// cardSlot10
		const cardSlot10 = this.add.image(1511, 718, "cartas4_Imprimir", 3);
		cardSlot10.name = "cardSlot10";
		cardSlot10.visible = false;
		cards.add(cardSlot10);

		// attackMechanism_19
		const attackMechanism_19 = new AttackMechanism(cardSlot10);

		// goBackButton
		const goBackButton = this.add.image(111, 1026, "goBackButton");
		goBackButton.name = "goBackButton";
		goBackButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 28, 20), Phaser.Geom.Rectangle.Contains);
		goBackButton.scaleX = 4;
		goBackButton.scaleY = 4;
		handCards.add(goBackButton);

		// onPointerDownScript_17
		const onPointerDownScript_17 = new OnPointerDownScript(goBackButton);

		// pushActionScript_17
		new PushActionScript(onPointerDownScript_17);

		// cardsMechanism_2
		const cardsMechanism_2 = new CardsMechanism(goBackButton);

		// attackMechanism (prefab fields)
		attackMechanism.type = "Player";
		attackMechanism.slotID = 1;
		attackMechanism.damageText = damageAnimationMechanism;

		// nameAndLevelMechanism (prefab fields)
		nameAndLevelMechanism.nameText = namePlayer1Text;
		nameAndLevelMechanism.levelText = levelPlayer1Text;

		// matchMechanism (prefab fields)
		matchMechanism.turnText = turn;
		matchMechanism.winnerText = winnerText;
		matchMechanism.health = healthBarMechanism;

		// attackMechanism_1 (prefab fields)
		attackMechanism_1.type = "Player";
		attackMechanism_1.slotID = 2;

		// attackMechanism_2 (prefab fields)
		attackMechanism_2.type = "Player";
		attackMechanism_2.slotID = 3;

		// attackMechanism_3 (prefab fields)
		attackMechanism_3.type = "Player";
		attackMechanism_3.slotID = 4;

		// attackMechanism_4 (prefab fields)
		attackMechanism_4.type = "Player";
		attackMechanism_4.slotID = 5;

		// cardsMechanism (prefab fields)
		cardsMechanism.type = "Deck";

		// attackMechanism_5 (prefab fields)
		attackMechanism_5.type = "Opponent";
		attackMechanism_5.slotID = 1;

		// attackMechanism_6 (prefab fields)
		attackMechanism_6.type = "Opponent";
		attackMechanism_6.slotID = 2;

		// attackMechanism_7 (prefab fields)
		attackMechanism_7.type = "Opponent";
		attackMechanism_7.slotID = 3;

		// attackMechanism_8 (prefab fields)
		attackMechanism_8.type = "Opponent";
		attackMechanism_8.slotID = 4;

		// attackMechanism_9 (prefab fields)
		attackMechanism_9.type = "Opponent";
		attackMechanism_9.slotID = 5;

		// endTurnMechanism (prefab fields)
		endTurnMechanism.type = "endTurn";

		// cheatsMechanism (prefab fields)
		cheatsMechanism.type = "resetHP";

		// cheatsMechanism_1 (prefab fields)
		cheatsMechanism_1.type = "hpTo1";

		// cheatsMechanism_2 (prefab fields)
		cheatsMechanism_2.type = "resetAttackStatus";

		// cardsMechanism_1 (prefab fields)
		cardsMechanism_1.type = "ShowCards";

		// attackMechanism_10 (prefab fields)
		attackMechanism_10.type = "Cards";

		// attackMechanism_11 (prefab fields)
		attackMechanism_11.type = "Cards";

		// attackMechanism_12 (prefab fields)
		attackMechanism_12.type = "Cards";

		// attackMechanism_13 (prefab fields)
		attackMechanism_13.type = "Cards";

		// attackMechanism_14 (prefab fields)
		attackMechanism_14.type = "Cards";

		// attackMechanism_15 (prefab fields)
		attackMechanism_15.type = "Cards";

		// attackMechanism_16 (prefab fields)
		attackMechanism_16.type = "Cards";

		// attackMechanism_17 (prefab fields)
		attackMechanism_17.type = "Cards";

		// attackMechanism_18 (prefab fields)
		attackMechanism_18.type = "Cards";

		// attackMechanism_19 (prefab fields)
		attackMechanism_19.type = "Cards";

		// cardsMechanism_2 (prefab fields)
		cardsMechanism_2.type = "ShowCards";

		this.result = result;
		this.attackMechanism = attackMechanism;
		this.matchMechanism = matchMechanism;
		this.player1_slot1 = player1_slot1;
		this.player1_slot2 = player1_slot2;
		this.player1_slot3 = player1_slot3;
		this.player1_slot4 = player1_slot4;
		this.player1_slot5 = player1_slot5;
		this.player1_deck1 = player1_deck1;
		this.damageAnimationMechanism = damageAnimationMechanism;
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
		this.endTurnText = endTurnText;
		this.resetHPButton = resetHPButton;
		this.resetAttackStatusButton = resetAttackStatusButton;
		this.setHPTo1Button = setHPTo1Button;
		this.turn = turn;
		this.winnerText = winnerText;
		this.player2NameShape = player2NameShape;
		this.player1NameShape = player1NameShape;
		this.levelPlayer1Shape = levelPlayer1Shape;
		this.levelPlayer2Shape = levelPlayer2Shape;
		this.namePlayer1Text = namePlayer1Text;
		this.namePlayer2Text = namePlayer2Text;
		this.levelPlayer1Text = levelPlayer1Text;
		this.levelPlayer2Text = levelPlayer2Text;
		this.namesAndLevelsPlayers = namesAndLevelsPlayers;
		this.showCards = showCards;
		this.cardSlot1 = cardSlot1;
		this.cardSlot2 = cardSlot2;
		this.cardSlot3 = cardSlot3;
		this.cardSlot4 = cardSlot4;
		this.cardSlot5 = cardSlot5;
		this.cardSlot6 = cardSlot6;
		this.cardSlot7 = cardSlot7;
		this.cardSlot8 = cardSlot8;
		this.cardSlot9 = cardSlot9;
		this.cardSlot10 = cardSlot10;
		this.cards = cards;
		this.cardsMechanism_2 = cardsMechanism_2;
		this.goBackButton = goBackButton;
		this.handCards = handCards;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	result;
	/** @type {AttackMechanism} */
	attackMechanism;
	/** @type {MatchMechanism} */
	matchMechanism;
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
	/** @type {Phaser.GameObjects.Image} */
	player1_deck1;
	/** @type {DamageAnimationMechanism} */
	damageAnimationMechanism;
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
	/** @type {Phaser.GameObjects.Rectangle} */
	player2NameShape;
	/** @type {Phaser.GameObjects.Rectangle} */
	player1NameShape;
	/** @type {Phaser.GameObjects.Rectangle} */
	levelPlayer1Shape;
	/** @type {Phaser.GameObjects.Rectangle} */
	levelPlayer2Shape;
	/** @type {Phaser.GameObjects.Text} */
	namePlayer1Text;
	/** @type {Phaser.GameObjects.Text} */
	namePlayer2Text;
	/** @type {Phaser.GameObjects.Text} */
	levelPlayer1Text;
	/** @type {Phaser.GameObjects.Text} */
	levelPlayer2Text;
	/** @type {Phaser.GameObjects.Container} */
	namesAndLevelsPlayers;
	/** @type {Phaser.GameObjects.Text} */
	showCards;
	/** @type {Phaser.GameObjects.Image} */
	cardSlot1;
	/** @type {Phaser.GameObjects.Image} */
	cardSlot2;
	/** @type {Phaser.GameObjects.Image} */
	cardSlot3;
	/** @type {Phaser.GameObjects.Image} */
	cardSlot4;
	/** @type {Phaser.GameObjects.Image} */
	cardSlot5;
	/** @type {Phaser.GameObjects.Image} */
	cardSlot6;
	/** @type {Phaser.GameObjects.Image} */
	cardSlot7;
	/** @type {Phaser.GameObjects.Image} */
	cardSlot8;
	/** @type {Phaser.GameObjects.Image} */
	cardSlot9;
	/** @type {Phaser.GameObjects.Image} */
	cardSlot10;
	/** @type {Phaser.GameObjects.Container} */
	cards;
	/** @type {CardsMechanism} */
	cardsMechanism_2;
	/** @type {Phaser.GameObjects.Image} */
	goBackButton;
	/** @type {Phaser.GameObjects.Container} */
	handCards;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
