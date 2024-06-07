
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

		// cal_ada
		const cal_ada = this.add.image(960, 540, "calçada");
		cal_ada.scaleX = 0.68;
		cal_ada.scaleY = 0.68;

		// street
		const street = this.add.image(960, 855, "street");
		street.scaleX = 0.68;
		street.scaleY = 0.68;

		// city
		const city = this.add.image(960, 239, "city");
		city.scaleX = 1.5;
		city.scaleY = 1.5;

		// bar1
		const bar1 = this.add.image(376, 385, "Bar1");
		bar1.scaleX = 2.754494288270423;
		bar1.scaleY = 2.754494288270423;

		// bar2
		const bar2 = this.add.image(1587, 385, "Bar2");
		bar2.scaleX = 2.3663060242524527;
		bar2.scaleY = 2.3663060242524527;

		// result
		const result = this.add.text(957, 787, "", {});
		result.name = "result";
		result.scaleX = 0.4;
		result.scaleY = 0.4;
		result.setOrigin(0.5, 0.5);
		result.visible = false;
		result.text = "result";
		result.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#000000ff" });

		// CharacterSlotsPlayer1
		const characterSlotsPlayer1 = this.add.container(0, 0);
		characterSlotsPlayer1.name = "CharacterSlotsPlayer1";
		characterSlotsPlayer1.scaleX = 1.5;
		characterSlotsPlayer1.scaleY = 1.5;

		// player1_slot1
		const player1_slot1 = this.add.image(455, 439, "base", 0);
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
		const throwables = new Throwables(player1_slot1);

		// player1_slot2
		const player1_slot2 = this.add.image(357, 523, "base", 0);
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
		const player1_slot3 = this.add.image(456, 602, "base", 0);
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
		const player1_slot4 = this.add.image(235, 438, "base", 0);
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
		const player1_slot5 = this.add.image(238, 599, "base", 0);
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
		const player1_deck1 = this.add.image(74, 582, "cartas4_Imprimir", 3);
		player1_deck1.name = "player1_deck1";
		player1_deck1.scaleX = 0.28;
		player1_deck1.scaleY = 0.28;
		characterSlotsPlayer1.add(player1_deck1);

		// onPointerDownScript_5
		const onPointerDownScript_5 = new OnPointerDownScript(player1_deck1);

		// pushActionScript_5
		new PushActionScript(onPointerDownScript_5);

		// cardsMechanism
		const cardsMechanism = new CardsMechanism(player1_deck1);

		// glowFx_10
		const glowFx_10 = player1_deck1.preFX.addGlow(16777215, 10, 0, false);

		// damageAnimationMechanism
		const damageAnimationMechanism = new DamageAnimationMechanism(this, 347, 415);
		characterSlotsPlayer1.add(damageAnimationMechanism);

		// cardTook
		const cardTook = this.add.image(640, 388, "cartas4_Imprimir", 3);
		cardTook.name = "cardTook";
		cardTook.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardTook.scaleX = 0.5;
		cardTook.scaleY = 0.5;
		cardTook.visible = false;
		characterSlotsPlayer1.add(cardTook);

		// throwables_1
		const throwables_1 = new Throwables(cardTook);

		// CharacterSlotsPlayer2
		const characterSlotsPlayer2 = this.add.container(0, 0);
		characterSlotsPlayer2.name = "CharacterSlotsPlayer2";
		characterSlotsPlayer2.scaleX = 1.5;
		characterSlotsPlayer2.scaleY = 1.5;

		// player2_slot1
		const player2_slot1 = this.add.image(827, 439, "base", 0);
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
		const player2_slot2 = this.add.image(925, 521, "base", 0);
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
		const player2_slot3 = this.add.image(827, 600, "base", 0);
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
		const player2_slot4 = this.add.image(1050, 438, "base", 0);
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
		const player2_slot5 = this.add.image(1048, 601, "base", 0);
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
		const player2_deck = this.add.image(1206, 582, "cartas4_Imprimir", 3);
		player2_deck.scaleX = 0.28;
		player2_deck.scaleY = 0.28;
		characterSlotsPlayer2.add(player2_deck);

		// HealthBarsPlayer1
		const healthBarsPlayer1 = this.add.container(0, 0);
		healthBarsPlayer1.name = "HealthBarsPlayer1";
		healthBarsPlayer1.scaleX = 1.5;
		healthBarsPlayer1.scaleY = 1.5;

		// healthbar_p1_slot1
		const healthbar_p1_slot1 = this.add.image(455, 432, "spritesheet", 0);
		healthbar_p1_slot1.name = "healthbar_p1_slot1";
		healthbar_p1_slot1.scaleX = 1.5;
		healthbar_p1_slot1.scaleY = 1.5;
		healthbar_p1_slot1.visible = false;
		healthBarsPlayer1.add(healthbar_p1_slot1);

		// healthBarMechanism
		const healthBarMechanism = new HealthBarMechanism(healthbar_p1_slot1);

		// healthbar_p1_slot2
		const healthbar_p1_slot2 = this.add.image(355, 514, "spritesheet", 0);
		healthbar_p1_slot2.name = "healthbar_p1_slot2";
		healthbar_p1_slot2.scaleX = 1.5;
		healthbar_p1_slot2.scaleY = 1.5;
		healthbar_p1_slot2.visible = false;
		healthBarsPlayer1.add(healthbar_p1_slot2);

		// healthbar_p1_slot3
		const healthbar_p1_slot3 = this.add.image(455, 593, "spritesheet", 0);
		healthbar_p1_slot3.name = "healthbar_p1_slot3";
		healthbar_p1_slot3.scaleX = 1.5;
		healthbar_p1_slot3.scaleY = 1.5;
		healthbar_p1_slot3.visible = false;
		healthBarsPlayer1.add(healthbar_p1_slot3);

		// healthbar_p1_slot4
		const healthbar_p1_slot4 = this.add.image(234, 432, "spritesheet", 0);
		healthbar_p1_slot4.name = "healthbar_p1_slot4";
		healthbar_p1_slot4.scaleX = 1.5;
		healthbar_p1_slot4.scaleY = 1.5;
		healthbar_p1_slot4.visible = false;
		healthBarsPlayer1.add(healthbar_p1_slot4);

		// healthbar_p1_slot5
		const healthbar_p1_slot5 = this.add.image(234, 593, "spritesheet", 0);
		healthbar_p1_slot5.name = "healthbar_p1_slot5";
		healthbar_p1_slot5.scaleX = 1.5;
		healthbar_p1_slot5.scaleY = 1.5;
		healthbar_p1_slot5.visible = false;
		healthBarsPlayer1.add(healthbar_p1_slot5);

		// hp_p1_slot5
		const hp_p1_slot5 = this.add.text(235, 594, "", {});
		hp_p1_slot5.name = "hp_p1_slot5";
		hp_p1_slot5.scaleX = 0.12;
		hp_p1_slot5.scaleY = 0.12;
		hp_p1_slot5.setOrigin(0.5, 0.5);
		hp_p1_slot5.visible = false;
		hp_p1_slot5.text = "New text";
		hp_p1_slot5.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#ffffffff" });
		healthBarsPlayer1.add(hp_p1_slot5);

		// hp_p1_slot2
		const hp_p1_slot2 = this.add.text(356, 515, "", {});
		hp_p1_slot2.name = "hp_p1_slot2";
		hp_p1_slot2.scaleX = 0.12;
		hp_p1_slot2.scaleY = 0.12;
		hp_p1_slot2.setOrigin(0.5, 0.5);
		hp_p1_slot2.visible = false;
		hp_p1_slot2.text = "New text";
		hp_p1_slot2.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#ffffffff" });
		healthBarsPlayer1.add(hp_p1_slot2);

		// hp_p1_slot3
		const hp_p1_slot3 = this.add.text(456, 594, "", {});
		hp_p1_slot3.name = "hp_p1_slot3";
		hp_p1_slot3.scaleX = 0.12;
		hp_p1_slot3.scaleY = 0.12;
		hp_p1_slot3.setOrigin(0.5, 0.5);
		hp_p1_slot3.visible = false;
		hp_p1_slot3.text = "New text";
		hp_p1_slot3.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#ffffffff" });
		healthBarsPlayer1.add(hp_p1_slot3);

		// hp_p1_slot1
		const hp_p1_slot1 = this.add.text(456, 433, "", {});
		hp_p1_slot1.name = "hp_p1_slot1";
		hp_p1_slot1.scaleX = 0.12;
		hp_p1_slot1.scaleY = 0.12;
		hp_p1_slot1.setOrigin(0.5, 0.5);
		hp_p1_slot1.visible = false;
		hp_p1_slot1.text = "New text";
		hp_p1_slot1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#ffffffff" });
		healthBarsPlayer1.add(hp_p1_slot1);

		// hp_p1_slot4
		const hp_p1_slot4 = this.add.text(235, 433, "", {});
		hp_p1_slot4.name = "hp_p1_slot4";
		hp_p1_slot4.scaleX = 0.12;
		hp_p1_slot4.scaleY = 0.12;
		hp_p1_slot4.setOrigin(0.5, 0.5);
		hp_p1_slot4.visible = false;
		hp_p1_slot4.text = "New text";
		hp_p1_slot4.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#ffffffff" });
		healthBarsPlayer1.add(hp_p1_slot4);

		// HealthBarsPlayer2
		const healthBarsPlayer2 = this.add.container(0, 0);
		healthBarsPlayer2.name = "HealthBarsPlayer2";
		healthBarsPlayer2.scaleX = 1.5;
		healthBarsPlayer2.scaleY = 1.5;

		// healthbar_p2_slot1
		const healthbar_p2_slot1 = this.add.image(828, 432, "spritesheet", 0);
		healthbar_p2_slot1.name = "healthbar_p2_slot1";
		healthbar_p2_slot1.scaleX = 1.5;
		healthbar_p2_slot1.scaleY = 1.5;
		healthbar_p2_slot1.visible = false;
		healthBarsPlayer2.add(healthbar_p2_slot1);

		// healthbar_p2_slot2
		const healthbar_p2_slot2 = this.add.image(925, 514, "spritesheet", 0);
		healthbar_p2_slot2.name = "healthbar_p2_slot2";
		healthbar_p2_slot2.scaleX = 1.5;
		healthbar_p2_slot2.scaleY = 1.5;
		healthbar_p2_slot2.visible = false;
		healthBarsPlayer2.add(healthbar_p2_slot2);

		// healthbar_p2_slot3
		const healthbar_p2_slot3 = this.add.image(828, 593, "spritesheet", 0);
		healthbar_p2_slot3.name = "healthbar_p2_slot3";
		healthbar_p2_slot3.scaleX = 1.5;
		healthbar_p2_slot3.scaleY = 1.5;
		healthbar_p2_slot3.visible = false;
		healthBarsPlayer2.add(healthbar_p2_slot3);

		// healthbar_p2_slot4
		const healthbar_p2_slot4 = this.add.image(1048, 431, "spritesheet", 0);
		healthbar_p2_slot4.name = "healthbar_p2_slot4";
		healthbar_p2_slot4.scaleX = 1.5;
		healthbar_p2_slot4.scaleY = 1.5;
		healthbar_p2_slot4.visible = false;
		healthBarsPlayer2.add(healthbar_p2_slot4);

		// healthbar_p2_slot5
		const healthbar_p2_slot5 = this.add.image(1048, 593, "spritesheet", 0);
		healthbar_p2_slot5.name = "healthbar_p2_slot5";
		healthbar_p2_slot5.scaleX = 1.5;
		healthbar_p2_slot5.scaleY = 1.5;
		healthbar_p2_slot5.visible = false;
		healthBarsPlayer2.add(healthbar_p2_slot5);

		// hp_p2_slot2
		const hp_p2_slot2 = this.add.text(926, 515, "", {});
		hp_p2_slot2.name = "hp_p2_slot2";
		hp_p2_slot2.scaleX = 0.12;
		hp_p2_slot2.scaleY = 0.12;
		hp_p2_slot2.setOrigin(0.5, 0.5);
		hp_p2_slot2.visible = false;
		hp_p2_slot2.text = "New text";
		hp_p2_slot2.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#ffffffff" });
		healthBarsPlayer2.add(hp_p2_slot2);

		// hp_p2_slot1
		const hp_p2_slot1 = this.add.text(829, 433, "", {});
		hp_p2_slot1.name = "hp_p2_slot1";
		hp_p2_slot1.scaleX = 0.12;
		hp_p2_slot1.scaleY = 0.12;
		hp_p2_slot1.setOrigin(0.5, 0.5);
		hp_p2_slot1.visible = false;
		hp_p2_slot1.text = "New text";
		hp_p2_slot1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#ffffffff" });
		healthBarsPlayer2.add(hp_p2_slot1);

		// hp_p2_slot3
		const hp_p2_slot3 = this.add.text(829, 594, "", {});
		hp_p2_slot3.name = "hp_p2_slot3";
		hp_p2_slot3.scaleX = 0.12;
		hp_p2_slot3.scaleY = 0.12;
		hp_p2_slot3.setOrigin(0.5, 0.5);
		hp_p2_slot3.visible = false;
		hp_p2_slot3.text = "New text";
		hp_p2_slot3.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#ffffffff" });
		healthBarsPlayer2.add(hp_p2_slot3);

		// hp_p2_slot5
		const hp_p2_slot5 = this.add.text(1049, 594, "", {});
		hp_p2_slot5.name = "hp_p2_slot5";
		hp_p2_slot5.scaleX = 0.12;
		hp_p2_slot5.scaleY = 0.12;
		hp_p2_slot5.setOrigin(0.5, 0.5);
		hp_p2_slot5.visible = false;
		hp_p2_slot5.text = "New text";
		hp_p2_slot5.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#ffffffff" });
		healthBarsPlayer2.add(hp_p2_slot5);

		// hp_p2_slot4
		const hp_p2_slot4 = this.add.text(1049, 432, "", {});
		hp_p2_slot4.name = "hp_p2_slot4";
		hp_p2_slot4.scaleX = 0.12;
		hp_p2_slot4.scaleY = 0.12;
		hp_p2_slot4.setOrigin(0.5, 0.5);
		hp_p2_slot4.visible = false;
		hp_p2_slot4.text = "New text";
		hp_p2_slot4.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#ffffffff" });
		healthBarsPlayer2.add(hp_p2_slot4);

		// endTurnText
		const endTurnText = this.add.text(960, 1052.25, "", {});
		endTurnText.scaleX = 0.25;
		endTurnText.scaleY = 0.25;
		endTurnText.setOrigin(0.5, 0.5);
		endTurnText.text = "End turn";
		endTurnText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Minecraft", "fontSize": "200px" });

		// onPointerDownScript_12
		const onPointerDownScript_12 = new OnPointerDownScript(endTurnText);

		// pushActionScript_12
		new PushActionScript(onPointerDownScript_12);

		// endTurnMechanism
		const endTurnMechanism = new EndTurnMechanism(endTurnText);

		// setHPTo1Button
		const setHPTo1Button = this.add.image(960, 383, "buttons");
		setHPTo1Button.scaleX = 4.2;
		setHPTo1Button.scaleY = 3;
		setHPTo1Button.visible = false;

		// cheatsMechanism
		const cheatsMechanism = new CheatsMechanism(setHPTo1Button);

		// onPointerDownScript_15
		const onPointerDownScript_15 = new OnPointerDownScript(setHPTo1Button);

		// pushActionScript_15
		new PushActionScript(onPointerDownScript_15);

		// resetAttackStatusButton
		const resetAttackStatusButton = this.add.image(960, 318, "buttons");
		resetAttackStatusButton.scaleX = 4.2;
		resetAttackStatusButton.scaleY = 3;
		resetAttackStatusButton.visible = false;

		// cheatsMechanism_1
		const cheatsMechanism_1 = new CheatsMechanism(resetAttackStatusButton);

		// onPointerDownScript_14
		const onPointerDownScript_14 = new OnPointerDownScript(resetAttackStatusButton);

		// pushActionScript_14
		new PushActionScript(onPointerDownScript_14);

		// resetHpButton
		const resetHpButton = this.add.image(960, 253, "buttons");
		resetHpButton.scaleX = 4.2;
		resetHpButton.scaleY = 3;
		resetHpButton.visible = false;

		// cheatsMechanism_2
		const cheatsMechanism_2 = new CheatsMechanism(resetHpButton);

		// onPointerDownScript_13
		const onPointerDownScript_13 = new OnPointerDownScript(resetHpButton);

		// pushActionScript_13
		new PushActionScript(onPointerDownScript_13);

		// setHPTo1Text
		const setHPTo1Text = this.add.text(960, 383, "", {});
		setHPTo1Text.scaleX = 0.25;
		setHPTo1Text.scaleY = 0.25;
		setHPTo1Text.setOrigin(0.5, 0.5);
		setHPTo1Text.visible = false;
		setHPTo1Text.text = "Everyone to 1HP";
		setHPTo1Text.setStyle({ "color": "#ffffffff", "fontFamily": "Minecraft", "fontSize": "100px" });

		// resetAttackStatusText
		const resetAttackStatusText = this.add.text(960, 318, "", {});
		resetAttackStatusText.scaleX = 0.25;
		resetAttackStatusText.scaleY = 0.25;
		resetAttackStatusText.setOrigin(0.5, 0.5);
		resetAttackStatusText.visible = false;
		resetAttackStatusText.text = "Reset Attack Status";
		resetAttackStatusText.setStyle({ "color": "#ffffffff", "fontFamily": "Minecraft", "fontSize": "100px" });

		// resetHPText
		const resetHPText = this.add.text(960, 253, "", {});
		resetHPText.scaleX = 0.25;
		resetHPText.scaleY = 0.25;
		resetHPText.setOrigin(0.5, 0.5);
		resetHPText.visible = false;
		resetHPText.text = "Reset HP";
		resetHPText.setStyle({ "color": "#ffffffff", "fontFamily": "Minecraft", "fontSize": "100px" });

		// turn
		const turn = this.add.text(458, 429, "", {});
		turn.scaleX = 0.22;
		turn.scaleY = 0.22;
		turn.setOrigin(0.5, 0.5);
		turn.visible = false;
		turn.text = "something";
		turn.setStyle({ "align": "center", "color": "#fd6464ff", "fontFamily": "Minecraft", "fontSize": "100px" });

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

		// player1NameShape
		const player1NameShape = this.add.image(339, 65, "buttons");
		player1NameShape.scaleX = 5;
		player1NameShape.scaleY = 3.5;
		namesAndLevelsPlayers.add(player1NameShape);

		// player2NameShape
		const player2NameShape = this.add.image(1572, 63, "buttons");
		player2NameShape.scaleX = 5;
		player2NameShape.scaleY = 3.5;
		namesAndLevelsPlayers.add(player2NameShape);

		// levelPlayer1Shape
		const levelPlayer1Shape = this.add.image(339, 121, "buttons");
		levelPlayer1Shape.scaleX = 3;
		levelPlayer1Shape.scaleY = 1.5;
		namesAndLevelsPlayers.add(levelPlayer1Shape);

		// levelPlayer2Shape
		const levelPlayer2Shape = this.add.image(1572, 121, "buttons");
		levelPlayer2Shape.scaleX = 3;
		levelPlayer2Shape.scaleY = 1.5;
		namesAndLevelsPlayers.add(levelPlayer2Shape);

		// namePlayer1Text
		const namePlayer1Text = this.add.text(339, 65, "", {});
		namePlayer1Text.name = "namePlayer1Text";
		namePlayer1Text.scaleX = 0.18;
		namePlayer1Text.scaleY = 0.18;
		namePlayer1Text.setOrigin(0.5, 0.5);
		namePlayer1Text.text = "Player 1";
		namePlayer1Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "200px" });
		namesAndLevelsPlayers.add(namePlayer1Text);

		// namePlayer2Text
		const namePlayer2Text = this.add.text(1572, 63, "", {});
		namePlayer2Text.name = "namePlayer2Text";
		namePlayer2Text.scaleX = 0.18;
		namePlayer2Text.scaleY = 0.18;
		namePlayer2Text.setOrigin(0.5, 0.5);
		namePlayer2Text.text = "Player 2";
		namePlayer2Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "200px" });
		namesAndLevelsPlayers.add(namePlayer2Text);

		// levelPlayer1Text
		const levelPlayer1Text = this.add.text(339, 121, "", {});
		levelPlayer1Text.name = "levelPlayer1Text";
		levelPlayer1Text.scaleX = 0.2;
		levelPlayer1Text.scaleY = 0.2;
		levelPlayer1Text.setOrigin(0.5, 0.5);
		levelPlayer1Text.text = "Level: ";
		levelPlayer1Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "100px" });
		namesAndLevelsPlayers.add(levelPlayer1Text);

		// levelPlayer2Text
		const levelPlayer2Text = this.add.text(1572, 121, "", {});
		levelPlayer2Text.name = "levelPlayer2Text";
		levelPlayer2Text.scaleX = 0.2;
		levelPlayer2Text.scaleY = 0.2;
		levelPlayer2Text.setOrigin(0.5, 0.5);
		levelPlayer2Text.text = "Level: ";
		levelPlayer2Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "100px" });
		namesAndLevelsPlayers.add(levelPlayer2Text);

		// showCardsImage
		const showCardsImage = this.add.image(287, 404, "showCardsImage");
		showCardsImage.scaleX = 2.16;
		showCardsImage.scaleY = 1.14;

		// showCards
		const showCards = this.add.text(288, 405, "", {});
		showCards.name = "showCards";
		showCards.setInteractive(new Phaser.Geom.Rectangle(-38, -140, 652.3814994495934, 910.5149565734912), Phaser.Geom.Rectangle.Contains);
		showCards.scaleX = 0.2;
		showCards.scaleY = 0.2;
		showCards.setOrigin(0.5, 0.5);
		showCards.text = "SHOW CARDS";
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

		// onPointerDownScript_28
		new OnPointerDownScript(shadow);

		// cards
		const cards = this.add.container(0, 0);
		cards.name = "cards";
		handCards.add(cards);

		// cardSlot1
		const cardSlot1 = this.add.image(180, 245, "cartas4_Imprimir", 3);
		cardSlot1.name = "cardSlot1";
		cardSlot1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardSlot1.visible = false;
		cards.add(cardSlot1);

		// attackMechanism_10
		const attackMechanism_10 = new AttackMechanism(cardSlot1);

		// onPointerDownScript_26
		const onPointerDownScript_26 = new OnPointerDownScript(cardSlot1);

		// pushActionScript_26
		new PushActionScript(onPointerDownScript_26);

		// cardSlot2
		const cardSlot2 = this.add.image(510, 245, "cartas4_Imprimir", 3);
		cardSlot2.name = "cardSlot2";
		cardSlot2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardSlot2.visible = false;
		cards.add(cardSlot2);

		// attackMechanism_11
		const attackMechanism_11 = new AttackMechanism(cardSlot2);

		// onPointerDownScript_25
		const onPointerDownScript_25 = new OnPointerDownScript(cardSlot2);

		// pushActionScript_25
		new PushActionScript(onPointerDownScript_25);

		// cardSlot3
		const cardSlot3 = this.add.image(830, 245, "cartas4_Imprimir", 3);
		cardSlot3.name = "cardSlot3";
		cardSlot3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardSlot3.visible = false;
		cards.add(cardSlot3);

		// attackMechanism_12
		const attackMechanism_12 = new AttackMechanism(cardSlot3);

		// onPointerDownScript_24
		const onPointerDownScript_24 = new OnPointerDownScript(cardSlot3);

		// pushActionScript_24
		new PushActionScript(onPointerDownScript_24);

		// cardSlot4
		const cardSlot4 = this.add.image(1157, 245, "cartas4_Imprimir", 3);
		cardSlot4.name = "cardSlot4";
		cardSlot4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardSlot4.visible = false;
		cards.add(cardSlot4);

		// attackMechanism_13
		const attackMechanism_13 = new AttackMechanism(cardSlot4);

		// onPointerDownScript_23
		const onPointerDownScript_23 = new OnPointerDownScript(cardSlot4);

		// pushActionScript_23
		new PushActionScript(onPointerDownScript_23);

		// cardSlot5
		const cardSlot5 = this.add.image(1491, 245, "cartas4_Imprimir", 3);
		cardSlot5.name = "cardSlot5";
		cardSlot5.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardSlot5.visible = false;
		cards.add(cardSlot5);

		// attackMechanism_14
		const attackMechanism_14 = new AttackMechanism(cardSlot5);

		// onPointerDownScript_22
		const onPointerDownScript_22 = new OnPointerDownScript(cardSlot5);

		// pushActionScript_22
		new PushActionScript(onPointerDownScript_22);

		// cardSlot6
		const cardSlot6 = this.add.image(180, 707, "cartas4_Imprimir", 3);
		cardSlot6.name = "cardSlot6";
		cardSlot6.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardSlot6.visible = false;
		cards.add(cardSlot6);

		// attackMechanism_15
		const attackMechanism_15 = new AttackMechanism(cardSlot6);

		// onPointerDownScript_21
		const onPointerDownScript_21 = new OnPointerDownScript(cardSlot6);

		// pushActionScript_21
		new PushActionScript(onPointerDownScript_21);

		// cardSlot7
		const cardSlot7 = this.add.image(510, 715, "cartas4_Imprimir", 3);
		cardSlot7.name = "cardSlot7";
		cardSlot7.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardSlot7.visible = false;
		cards.add(cardSlot7);

		// attackMechanism_16
		const attackMechanism_16 = new AttackMechanism(cardSlot7);

		// onPointerDownScript_20
		const onPointerDownScript_20 = new OnPointerDownScript(cardSlot7);

		// pushActionScript_20
		new PushActionScript(onPointerDownScript_20);

		// cardSlot8
		const cardSlot8 = this.add.image(834, 718, "cartas4_Imprimir", 3);
		cardSlot8.name = "cardSlot8";
		cardSlot8.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardSlot8.visible = false;
		cards.add(cardSlot8);

		// attackMechanism_17
		const attackMechanism_17 = new AttackMechanism(cardSlot8);

		// onPointerDownScript_19
		const onPointerDownScript_19 = new OnPointerDownScript(cardSlot8);

		// pushActionScript_19
		new PushActionScript(onPointerDownScript_19);

		// cardSlot9
		const cardSlot9 = this.add.image(1167, 718, "cartas4_Imprimir", 3);
		cardSlot9.name = "cardSlot9";
		cardSlot9.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardSlot9.visible = false;
		cards.add(cardSlot9);

		// attackMechanism_18
		const attackMechanism_18 = new AttackMechanism(cardSlot9);

		// onPointerDownScript_18
		const onPointerDownScript_18 = new OnPointerDownScript(cardSlot9);

		// pushActionScript_18
		new PushActionScript(onPointerDownScript_18);

		// cardSlot10
		const cardSlot10 = this.add.image(1511, 718, "cartas4_Imprimir", 3);
		cardSlot10.name = "cardSlot10";
		cardSlot10.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardSlot10.visible = false;
		cards.add(cardSlot10);

		// attackMechanism_19
		const attackMechanism_19 = new AttackMechanism(cardSlot10);

		// onPointerDownScript_17
		const onPointerDownScript_17 = new OnPointerDownScript(cardSlot10);

		// pushActionScript_17
		new PushActionScript(onPointerDownScript_17);

		// goBackButton
		const goBackButton = this.add.image(111, 1026, "goBackButton");
		goBackButton.name = "goBackButton";
		goBackButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 28, 20), Phaser.Geom.Rectangle.Contains);
		goBackButton.scaleX = 4;
		goBackButton.scaleY = 4;
		handCards.add(goBackButton);

		// onPointerDownScript_27
		const onPointerDownScript_27 = new OnPointerDownScript(goBackButton);

		// pushActionScript_27
		new PushActionScript(onPointerDownScript_27);

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

		// throwables (prefab fields)
		throwables.type = "Throwables";

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

		// throwables_1 (prefab fields)
		throwables_1.type = "CardTook";

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
		cheatsMechanism.type = "hpTo1";

		// cheatsMechanism_1 (prefab fields)
		cheatsMechanism_1.type = "resetAttackStatus";

		// cheatsMechanism_2 (prefab fields)
		cheatsMechanism_2.type = "resetHP";

		// cardsMechanism_1 (prefab fields)
		cardsMechanism_1.type = "ShowCards";

		// attackMechanism_10 (prefab fields)
		attackMechanism_10.type = "Cards";
		attackMechanism_10.slotID = 1;
		attackMechanism_10.cardID = 0;

		// attackMechanism_11 (prefab fields)
		attackMechanism_11.type = "Cards";
		attackMechanism_11.slotID = 2;
		attackMechanism_11.cardID = 0;

		// attackMechanism_12 (prefab fields)
		attackMechanism_12.type = "Cards";
		attackMechanism_12.slotID = 3;
		attackMechanism_12.cardID = 0;

		// attackMechanism_13 (prefab fields)
		attackMechanism_13.type = "Cards";
		attackMechanism_13.slotID = 4;
		attackMechanism_13.cardID = 0;

		// attackMechanism_14 (prefab fields)
		attackMechanism_14.type = "Cards";
		attackMechanism_14.slotID = 5;
		attackMechanism_14.cardID = 0;

		// attackMechanism_15 (prefab fields)
		attackMechanism_15.type = "Cards";
		attackMechanism_15.slotID = 6;
		attackMechanism_15.cardID = 0;

		// attackMechanism_16 (prefab fields)
		attackMechanism_16.type = "Cards";
		attackMechanism_16.slotID = 7;
		attackMechanism_16.cardID = 0;

		// attackMechanism_17 (prefab fields)
		attackMechanism_17.type = "Cards";
		attackMechanism_17.slotID = 8;
		attackMechanism_17.cardID = 0;

		// attackMechanism_18 (prefab fields)
		attackMechanism_18.type = "Cards";
		attackMechanism_18.slotID = 9;
		attackMechanism_18.cardID = 0;

		// attackMechanism_19 (prefab fields)
		attackMechanism_19.type = "Cards";
		attackMechanism_19.slotID = 10;
		attackMechanism_19.cardID = 0;

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
		this.glowFx_10 = glowFx_10;
		this.player1_deck1 = player1_deck1;
		this.damageAnimationMechanism = damageAnimationMechanism;
		this.cardTook = cardTook;
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
		this.setHPTo1Button = setHPTo1Button;
		this.resetAttackStatusButton = resetAttackStatusButton;
		this.resetHpButton = resetHpButton;
		this.turn = turn;
		this.winnerText = winnerText;
		this.player2NameShape = player2NameShape;
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
	/** @type {Phaser.FX.Glow} */
	glowFx_10;
	/** @type {Phaser.GameObjects.Image} */
	player1_deck1;
	/** @type {DamageAnimationMechanism} */
	damageAnimationMechanism;
	/** @type {Phaser.GameObjects.Image} */
	cardTook;
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
	/** @type {Phaser.GameObjects.Image} */
	setHPTo1Button;
	/** @type {Phaser.GameObjects.Image} */
	resetAttackStatusButton;
	/** @type {Phaser.GameObjects.Image} */
	resetHpButton;
	/** @type {Phaser.GameObjects.Text} */
	turn;
	/** @type {Phaser.GameObjects.Text} */
	winnerText;
	/** @type {Phaser.GameObjects.Image} */
	player2NameShape;
	/** @type {Phaser.GameObjects.Image} */
	levelPlayer1Shape;
	/** @type {Phaser.GameObjects.Image} */
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
