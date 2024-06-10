
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

		// toggleCheats
		const toggleCheats = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

		// cal_ada
		this.add.image(960, 547, "sidewalk");

		// street
		const street = this.add.image(960, 849, "street");
		street.scaleX = 0.68;
		street.scaleY = 0.68;

		// city
		const city = this.add.image(960, 233, "city");
		city.scaleX = 1.5;
		city.scaleY = 1.5;

		// bar1
		const bar1 = this.add.image(342, 379, "Bar1");
		bar1.scaleX = 2.754494288270423;
		bar1.scaleY = 2.754494288270423;

		// bar2
		const bar2 = this.add.image(1587, 379, "Bar2");
		bar2.scaleX = 2.3663060242524527;
		bar2.scaleY = 2.3663060242524527;

		// result
		const result = this.add.text(964, 527, "", {});
		result.name = "result";
		result.scaleX = 0.5;
		result.scaleY = 0.5;
		result.setOrigin(0.5, 0.5);
		result.visible = false;
		result.text = "result";
		result.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#000000ff" });

		// CharacterSlotsPlayer2
		const characterSlotsPlayer2 = this.add.container(0, -4);
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

		// glowFx
		player2_slot1.preFX.addGlow(9241090, 4, 0, false);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(player2_slot1);

		// pushActionScript_1
		new PushActionScript(onPointerDownScript_1);

		// attackMechanism
		const attackMechanism = new AttackMechanism(player2_slot1);

		// highlights_5
		const highlights_5 = new Highlights(player2_slot1);

		// player2_slot2
		const player2_slot2 = this.add.image(925, 521, "base", 0);
		player2_slot2.name = "player2_slot2";
		player2_slot2.scaleX = 0.4;
		player2_slot2.scaleY = 0.4;
		player2_slot2.setOrigin(0.5, 0);
		player2_slot2.visible = false;
		characterSlotsPlayer2.add(player2_slot2);

		// glowFx_1
		player2_slot2.preFX.addGlow(9241090, 4, 0, false);

		// attackMechanism_1
		const attackMechanism_1 = new AttackMechanism(player2_slot2);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(player2_slot2);

		// pushActionScript_2
		new PushActionScript(onPointerDownScript_2);

		// highlights_6
		const highlights_6 = new Highlights(player2_slot2);

		// player2_slot3
		const player2_slot3 = this.add.image(827, 600, "base", 0);
		player2_slot3.name = "player2_slot3";
		player2_slot3.scaleX = 0.4;
		player2_slot3.scaleY = 0.4;
		player2_slot3.setOrigin(0.5, 0);
		player2_slot3.visible = false;
		characterSlotsPlayer2.add(player2_slot3);

		// glowFx_2
		player2_slot3.preFX.addGlow(9241090, 4, 0, false);

		// attackMechanism_2
		const attackMechanism_2 = new AttackMechanism(player2_slot3);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(player2_slot3);

		// pushActionScript
		new PushActionScript(onPointerDownScript);

		// highlights_7
		const highlights_7 = new Highlights(player2_slot3);

		// player2_slot4
		const player2_slot4 = this.add.image(1050, 438, "base", 0);
		player2_slot4.name = "player2_slot4";
		player2_slot4.scaleX = 0.4;
		player2_slot4.scaleY = 0.4;
		player2_slot4.setOrigin(0.5, 0);
		player2_slot4.visible = false;
		characterSlotsPlayer2.add(player2_slot4);

		// glowFx_3
		player2_slot4.preFX.addGlow(9241090, 4, 0, false);

		// attackMechanism_3
		const attackMechanism_3 = new AttackMechanism(player2_slot4);

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(player2_slot4);

		// pushActionScript_3
		new PushActionScript(onPointerDownScript_3);

		// highlights_8
		const highlights_8 = new Highlights(player2_slot4);

		// player2_slot5
		const player2_slot5 = this.add.image(1048, 601, "base", 0);
		player2_slot5.name = "player2_slot5";
		player2_slot5.scaleX = 0.4;
		player2_slot5.scaleY = 0.4;
		player2_slot5.setOrigin(0.5, 0);
		player2_slot5.visible = false;
		characterSlotsPlayer2.add(player2_slot5);

		// glowFx_4
		player2_slot5.preFX.addGlow(9241090, 4, 0, false);

		// attackMechanism_4
		const attackMechanism_4 = new AttackMechanism(player2_slot5);

		// onPointerDownScript_4
		const onPointerDownScript_4 = new OnPointerDownScript(player2_slot5);

		// pushActionScript_4
		new PushActionScript(onPointerDownScript_4);

		// highlights_9
		const highlights_9 = new Highlights(player2_slot5);

		// throwables_p2_slot1
		const throwables_p2_slot1 = this.add.image(828, 470, "throwables", 1);
		throwables_p2_slot1.name = "throwables_p2_slot1";
		throwables_p2_slot1.scaleX = 0.4;
		throwables_p2_slot1.scaleY = 0.4;
		throwables_p2_slot1.visible = false;
		characterSlotsPlayer2.add(throwables_p2_slot1);

		// throwables_p2_slot2
		const throwables_p2_slot2 = this.add.image(925, 551, "throwables", 1);
		throwables_p2_slot2.name = "throwables_p2_slot2";
		throwables_p2_slot2.scaleX = 0.4;
		throwables_p2_slot2.scaleY = 0.4;
		throwables_p2_slot2.visible = false;
		characterSlotsPlayer2.add(throwables_p2_slot2);

		// throwables_p2_slot3
		const throwables_p2_slot3 = this.add.image(828, 630, "throwables", 1);
		throwables_p2_slot3.name = "throwables_p2_slot3";
		throwables_p2_slot3.scaleX = 0.4;
		throwables_p2_slot3.scaleY = 0.4;
		throwables_p2_slot3.visible = false;
		characterSlotsPlayer2.add(throwables_p2_slot3);

		// throwables_p2_slot4
		const throwables_p2_slot4 = this.add.image(1051, 469, "throwables", 1);
		throwables_p2_slot4.name = "throwables_p2_slot4";
		throwables_p2_slot4.scaleX = 0.4;
		throwables_p2_slot4.scaleY = 0.4;
		throwables_p2_slot4.visible = false;
		characterSlotsPlayer2.add(throwables_p2_slot4);

		// throwables_p2_slot5
		const throwables_p2_slot5 = this.add.image(1047, 631, "throwables", 1);
		throwables_p2_slot5.name = "throwables_p2_slot5";
		throwables_p2_slot5.scaleX = 0.4;
		throwables_p2_slot5.scaleY = 0.4;
		throwables_p2_slot5.visible = false;
		characterSlotsPlayer2.add(throwables_p2_slot5);

		// player2_deck
		const player2_deck = this.add.image(1185, 582, "cardsUnavailable", 3);
		player2_deck.scaleX = 0.4;
		player2_deck.scaleY = 0.4;
		characterSlotsPlayer2.add(player2_deck);

		// cardTookP2
		const cardTookP2 = this.add.image(1185, 582, "cartas4_Imprimir", 3);
		cardTookP2.scaleX = 0.4;
		cardTookP2.scaleY = 0.4;
		cardTookP2.visible = false;
		characterSlotsPlayer2.add(cardTookP2);

		// cardPlayedP2
		const cardPlayedP2 = this.add.image(640, 388, "cartas4_Imprimir", 3);
		cardPlayedP2.name = "cardPlayedP2";
		cardPlayedP2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardPlayedP2.scaleX = 0.4;
		cardPlayedP2.scaleY = 0.4;
		cardPlayedP2.visible = false;
		characterSlotsPlayer2.add(cardPlayedP2);

		// throwables_2
		const throwables_2 = new Throwables(cardPlayedP2);

		// glowFx_16
		cardPlayedP2.preFX.addGlow(9241090, 4, 0, false);

		// CharacterSlotsPlayer1
		const characterSlotsPlayer1 = this.add.container(0, -3);
		characterSlotsPlayer1.name = "CharacterSlotsPlayer1";
		characterSlotsPlayer1.scaleX = 1.5;
		characterSlotsPlayer1.scaleY = 1.5;

		// player1_slot1
		const player1_slot1 = this.add.image(455, 438, "base", 0);
		player1_slot1.name = "player1_slot1";
		player1_slot1.scaleX = 0.4;
		player1_slot1.scaleY = 0.4;
		player1_slot1.setOrigin(0.5, 0);
		player1_slot1.visible = false;
		characterSlotsPlayer1.add(player1_slot1);

		// glowFx_5
		player1_slot1.preFX.addGlow(16777215, 4, 0, false);

		// attackMechanism_5
		const attackMechanism_5 = new AttackMechanism(player1_slot1);

		// onPointerDownScript_6
		const onPointerDownScript_6 = new OnPointerDownScript(player1_slot1);

		// pushActionScript_6
		new PushActionScript(onPointerDownScript_6);

		// throwables
		const throwables = new Throwables(player1_slot1);

		// matchMechanism
		const matchMechanism = new MatchMechanism(player1_slot1);

		// nameAndLevelMechanism
		const nameAndLevelMechanism = new NameAndLevelMechanism(player1_slot1);

		// highlights_10
		const highlights_10 = new Highlights(player1_slot1);

		// player1_slot2
		const player1_slot2 = this.add.image(357, 523, "base", 0);
		player1_slot2.name = "player1_slot2";
		player1_slot2.scaleX = 0.4;
		player1_slot2.scaleY = 0.4;
		player1_slot2.setOrigin(0.5, 0);
		player1_slot2.visible = false;
		characterSlotsPlayer1.add(player1_slot2);

		// glowFx_6
		player1_slot2.preFX.addGlow(16777215, 4, 0, false);

		// attackMechanism_6
		const attackMechanism_6 = new AttackMechanism(player1_slot2);

		// onPointerDownScript_7
		const onPointerDownScript_7 = new OnPointerDownScript(player1_slot2);

		// pushActionScript_7
		new PushActionScript(onPointerDownScript_7);

		// highlights_11
		const highlights_11 = new Highlights(player1_slot2);

		// player1_slot3
		const player1_slot3 = this.add.image(456, 602, "base", 0);
		player1_slot3.name = "player1_slot3";
		player1_slot3.scaleX = 0.4;
		player1_slot3.scaleY = 0.4;
		player1_slot3.setOrigin(0.5, 0);
		player1_slot3.visible = false;
		characterSlotsPlayer1.add(player1_slot3);

		// glowFx_7
		player1_slot3.preFX.addGlow(16777215, 4, 0, false);

		// attackMechanism_7
		const attackMechanism_7 = new AttackMechanism(player1_slot3);

		// onPointerDownScript_8
		const onPointerDownScript_8 = new OnPointerDownScript(player1_slot3);

		// pushActionScript_8
		new PushActionScript(onPointerDownScript_8);

		// highlights_12
		const highlights_12 = new Highlights(player1_slot3);

		// player1_slot4
		const player1_slot4 = this.add.image(235, 438, "base", 0);
		player1_slot4.name = "player1_slot4";
		player1_slot4.scaleX = 0.4;
		player1_slot4.scaleY = 0.4;
		player1_slot4.setOrigin(0.5, 0);
		player1_slot4.visible = false;
		characterSlotsPlayer1.add(player1_slot4);

		// glowFx_8
		player1_slot4.preFX.addGlow(16777215, 4, 0, false);

		// attackMechanism_8
		const attackMechanism_8 = new AttackMechanism(player1_slot4);

		// onPointerDownScript_9
		const onPointerDownScript_9 = new OnPointerDownScript(player1_slot4);

		// pushActionScript_9
		new PushActionScript(onPointerDownScript_9);

		// highlights_13
		const highlights_13 = new Highlights(player1_slot4);

		// player1_slot5
		const player1_slot5 = this.add.image(238, 599, "base", 0);
		player1_slot5.name = "player1_slot5";
		player1_slot5.scaleX = 0.4;
		player1_slot5.scaleY = 0.4;
		player1_slot5.setOrigin(0.5, 0);
		player1_slot5.visible = false;
		characterSlotsPlayer1.add(player1_slot5);

		// glowFx_9
		player1_slot5.preFX.addGlow(16777215, 4, 0, false);

		// attackMechanism_9
		const attackMechanism_9 = new AttackMechanism(player1_slot5);

		// onPointerDownScript_10
		const onPointerDownScript_10 = new OnPointerDownScript(player1_slot5);

		// pushActionScript_10
		new PushActionScript(onPointerDownScript_10);

		// highlights_14
		const highlights_14 = new Highlights(player1_slot5);

		// cardTook
		const cardTook = this.add.image(640, 388, "cartas4_Imprimir", 3);
		cardTook.name = "cardTook";
		cardTook.setInteractive(new Phaser.Geom.Rectangle(0, 0, 304, 432), Phaser.Geom.Rectangle.Contains);
		cardTook.scaleX = 0.4;
		cardTook.scaleY = 0.4;
		cardTook.visible = false;
		characterSlotsPlayer1.add(cardTook);

		// throwables_1
		const throwables_1 = new Throwables(cardTook);

		// player1_deck
		const player1_deck = this.add.image(98, 582, "cardsUnavailable", 3);
		player1_deck.name = "player1_deck";
		player1_deck.scaleX = 0.4;
		player1_deck.scaleY = 0.4;
		characterSlotsPlayer1.add(player1_deck);

		// cardsMechanism_3
		const cardsMechanism_3 = new CardsMechanism(player1_deck);

		// glowFx_10
		const glowFx_10 = player1_deck.preFX.addGlow(16777215, 10, 0, false);

		// onPointerDownScript_11
		const onPointerDownScript_11 = new OnPointerDownScript(player1_deck);

		// pushActionScript_5
		new PushActionScript(onPointerDownScript_11);

		// damageAnimationMechanism
		const damageAnimationMechanism = new DamageAnimationMechanism(this, 347, 415);
		damageAnimationMechanism.name = "damageAnimationMechanism";
		characterSlotsPlayer1.add(damageAnimationMechanism);

		// throwables_p1_slot1
		const throwables_p1_slot1 = this.add.image(455, 469, "throwables", 1);
		throwables_p1_slot1.name = "throwables_p1_slot1";
		throwables_p1_slot1.scaleX = 0.4;
		throwables_p1_slot1.scaleY = 0.4;
		throwables_p1_slot1.visible = false;
		characterSlotsPlayer1.add(throwables_p1_slot1);

		// throwables_p1_slot2
		const throwables_p1_slot2 = this.add.image(355, 552, "throwables", 1);
		throwables_p1_slot2.name = "throwables_p1_slot2";
		throwables_p1_slot2.scaleX = 0.4;
		throwables_p1_slot2.scaleY = 0.4;
		throwables_p1_slot2.visible = false;
		characterSlotsPlayer1.add(throwables_p1_slot2);

		// throwables_p1_slot3
		const throwables_p1_slot3 = this.add.image(455, 631, "throwables", 1);
		throwables_p1_slot3.name = "throwables_p1_slot3";
		throwables_p1_slot3.scaleX = 0.4;
		throwables_p1_slot3.scaleY = 0.4;
		throwables_p1_slot3.visible = false;
		characterSlotsPlayer1.add(throwables_p1_slot3);

		// throwables_p1_slot4
		const throwables_p1_slot4 = this.add.image(233, 466, "throwables", 1);
		throwables_p1_slot4.name = "throwables_p1_slot4";
		throwables_p1_slot4.scaleX = 0.4;
		throwables_p1_slot4.scaleY = 0.4;
		throwables_p1_slot4.visible = false;
		characterSlotsPlayer1.add(throwables_p1_slot4);

		// throwables_p1_slot5
		const throwables_p1_slot5 = this.add.image(238, 626, "throwables", 1);
		throwables_p1_slot5.name = "throwables_p1_slot5";
		throwables_p1_slot5.scaleX = 0.4;
		throwables_p1_slot5.scaleY = 0.4;
		throwables_p1_slot5.visible = false;
		characterSlotsPlayer1.add(throwables_p1_slot5);

		// HealthBarsPlayer1
		const healthBarsPlayer1 = this.add.container(0, -2);
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
		const healthBarsPlayer2 = this.add.container(0, -2);
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

		// endTurnButtons
		const endTurnButtons = this.add.image(960, 1035, "buttons");
		endTurnButtons.setInteractive(new Phaser.Geom.Rectangle(1, 1, 68.03979790402462, 19.273804418001685), Phaser.Geom.Rectangle.Contains);
		endTurnButtons.scaleX = 4.2;
		endTurnButtons.scaleY = 3;

		// glowFx_15
		endTurnButtons.preFX.addGlow(16777215, 4, 0, false);

		// highlights
		const highlights = new Highlights(endTurnButtons);

		// endTurnMechanism
		const endTurnMechanism = new EndTurnMechanism(endTurnButtons);

		// onPointerDownScript_5
		const onPointerDownScript_5 = new OnPointerDownScript(endTurnButtons);

		// pushActionScript_11
		new PushActionScript(onPointerDownScript_5);

		// endTurnText
		const endTurnText = this.add.text(960, 1036, "", {});
		endTurnText.scaleX = 0.25;
		endTurnText.scaleY = 0.25;
		endTurnText.setOrigin(0.5, 0.5);
		endTurnText.text = "End turn";
		endTurnText.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Minecraft", "fontSize": "150px" });

		// turn
		const turn = this.add.text(962, 130, "", {});
		turn.scaleX = 0.5;
		turn.scaleY = 0.5;
		turn.setOrigin(0.5, 0.5);
		turn.visible = false;
		turn.text = "something";
		turn.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Minecraft", "fontSize": "100px" });

		// namesAndLevelsPlayers
		const namesAndLevelsPlayers = this.add.container(0, -3);
		namesAndLevelsPlayers.name = "namesAndLevelsPlayers";

		// player1NameShape
		const player1NameShape = this.add.image(372, 65, "buttons");
		player1NameShape.scaleX = 5;
		player1NameShape.scaleY = 3.5;
		namesAndLevelsPlayers.add(player1NameShape);

		// player2NameShape
		const player2NameShape = this.add.image(1586, 63, "buttons");
		player2NameShape.scaleX = 5;
		player2NameShape.scaleY = 3.5;
		namesAndLevelsPlayers.add(player2NameShape);

		// levelPlayer1Shape
		const levelPlayer1Shape = this.add.image(370, 121, "buttons");
		levelPlayer1Shape.scaleX = 3;
		levelPlayer1Shape.scaleY = 1.5;
		namesAndLevelsPlayers.add(levelPlayer1Shape);

		// levelPlayer2Shape
		const levelPlayer2Shape = this.add.image(1587, 121, "buttons");
		levelPlayer2Shape.scaleX = 3;
		levelPlayer2Shape.scaleY = 1.5;
		namesAndLevelsPlayers.add(levelPlayer2Shape);

		// namePlayer1Text
		const namePlayer1Text = this.add.text(372, 65, "", {});
		namePlayer1Text.name = "namePlayer1Text";
		namePlayer1Text.scaleX = 0.18;
		namePlayer1Text.scaleY = 0.18;
		namePlayer1Text.setOrigin(0.5, 0.5);
		namePlayer1Text.text = "Player 1";
		namePlayer1Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "200px" });
		namesAndLevelsPlayers.add(namePlayer1Text);

		// namePlayer2Text
		const namePlayer2Text = this.add.text(1586, 63, "", {});
		namePlayer2Text.name = "namePlayer2Text";
		namePlayer2Text.scaleX = 0.18;
		namePlayer2Text.scaleY = 0.18;
		namePlayer2Text.setOrigin(0.5, 0.5);
		namePlayer2Text.text = "Player 2";
		namePlayer2Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "200px" });
		namesAndLevelsPlayers.add(namePlayer2Text);

		// levelPlayer1Text
		const levelPlayer1Text = this.add.text(370, 121, "", {});
		levelPlayer1Text.name = "levelPlayer1Text";
		levelPlayer1Text.scaleX = 0.2;
		levelPlayer1Text.scaleY = 0.2;
		levelPlayer1Text.setOrigin(0.5, 0.5);
		levelPlayer1Text.text = "Level: ";
		levelPlayer1Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "100px" });
		namesAndLevelsPlayers.add(levelPlayer1Text);

		// levelPlayer2Text
		const levelPlayer2Text = this.add.text(1587, 121, "", {});
		levelPlayer2Text.name = "levelPlayer2Text";
		levelPlayer2Text.scaleX = 0.2;
		levelPlayer2Text.scaleY = 0.2;
		levelPlayer2Text.setOrigin(0.5, 0.5);
		levelPlayer2Text.text = "Level: ";
		levelPlayer2Text.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "100px" });
		namesAndLevelsPlayers.add(levelPlayer2Text);

		// showCardsImage
		const showCardsImage = this.add.image(254, 399, "showCardsImage");
		showCardsImage.setInteractive(new Phaser.Geom.Rectangle(-2, -23, 67.92614110687856, 180.49089758595323), Phaser.Geom.Rectangle.Contains);
		showCardsImage.scaleX = 2.16;
		showCardsImage.scaleY = 1.14;

		// highlights_4
		const highlights_4 = new Highlights(showCardsImage);

		// cardsMechanism_1
		const cardsMechanism_1 = new CardsMechanism(showCardsImage);

		// glowFx_14
		showCardsImage.preFX.addGlow(16777215, 4, 0, false);

		// showCards
		const showCards = this.add.text(255, 399, "", {});
		showCards.name = "showCards";
		showCards.scaleX = 0.2;
		showCards.scaleY = 0.2;
		showCards.setOrigin(0.5, 0.5);
		showCards.text = "SHOW CARDS";
		showCards.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "100px" });

		// cheatsContainer
		const cheatsContainer = this.add.container(0, 0);
		cheatsContainer.name = "cheatsContainer";
		cheatsContainer.visible = false;

		// setHPTo1Button
		const setHPTo1Button = this.add.image(960, 383, "buttons");
		setHPTo1Button.name = "setHPTo1Button";
		setHPTo1Button.scaleX = 4.2;
		setHPTo1Button.scaleY = 3;
		cheatsContainer.add(setHPTo1Button);

		// cheatsMechanism
		const cheatsMechanism = new CheatsMechanism(setHPTo1Button);

		// onPointerDownScript_15
		const onPointerDownScript_15 = new OnPointerDownScript(setHPTo1Button);

		// pushActionScript_15
		new PushActionScript(onPointerDownScript_15);

		// highlights_1
		const highlights_1 = new Highlights(setHPTo1Button);

		// glowFx_11
		setHPTo1Button.preFX.addGlow(16777215, 4, 0, false);

		// resetAttackStatusButton
		const resetAttackStatusButton = this.add.image(960, 318, "buttons");
		resetAttackStatusButton.name = "resetAttackStatusButton";
		resetAttackStatusButton.scaleX = 4.2;
		resetAttackStatusButton.scaleY = 3;
		cheatsContainer.add(resetAttackStatusButton);

		// cheatsMechanism_1
		const cheatsMechanism_1 = new CheatsMechanism(resetAttackStatusButton);

		// onPointerDownScript_14
		const onPointerDownScript_14 = new OnPointerDownScript(resetAttackStatusButton);

		// pushActionScript_14
		new PushActionScript(onPointerDownScript_14);

		// highlights_2
		const highlights_2 = new Highlights(resetAttackStatusButton);

		// glowFx_12
		resetAttackStatusButton.preFX.addGlow(16777215, 4, 0, false);

		// resetHpButton
		const resetHpButton = this.add.image(960, 253, "buttons");
		resetHpButton.name = "resetHpButton";
		resetHpButton.scaleX = 4.2;
		resetHpButton.scaleY = 3;
		cheatsContainer.add(resetHpButton);

		// cheatsMechanism_2
		const cheatsMechanism_2 = new CheatsMechanism(resetHpButton);

		// onPointerDownScript_13
		const onPointerDownScript_13 = new OnPointerDownScript(resetHpButton);

		// pushActionScript_13
		new PushActionScript(onPointerDownScript_13);

		// highlights_3
		const highlights_3 = new Highlights(resetHpButton);

		// glowFx_13
		resetHpButton.preFX.addGlow(16777215, 4, 0, false);

		// setHPTo1Text
		const setHPTo1Text = this.add.text(960, 383, "", {});
		setHPTo1Text.name = "setHPTo1Text";
		setHPTo1Text.scaleX = 0.25;
		setHPTo1Text.scaleY = 0.25;
		setHPTo1Text.setOrigin(0.5, 0.5);
		setHPTo1Text.text = "Everyone to 1HP";
		setHPTo1Text.setStyle({ "color": "#ffffffff", "fontFamily": "Minecraft", "fontSize": "100px" });
		cheatsContainer.add(setHPTo1Text);

		// resetAttackStatusText
		const resetAttackStatusText = this.add.text(960, 318, "", {});
		resetAttackStatusText.name = "resetAttackStatusText";
		resetAttackStatusText.scaleX = 0.25;
		resetAttackStatusText.scaleY = 0.25;
		resetAttackStatusText.setOrigin(0.5, 0.5);
		resetAttackStatusText.text = "Reset Attack Status";
		resetAttackStatusText.setStyle({ "color": "#ffffffff", "fontFamily": "Minecraft", "fontSize": "100px" });
		cheatsContainer.add(resetAttackStatusText);

		// resetHPText
		const resetHPText = this.add.text(960, 253, "", {});
		resetHPText.name = "resetHPText";
		resetHPText.scaleX = 0.25;
		resetHPText.scaleY = 0.25;
		resetHPText.setOrigin(0.5, 0.5);
		resetHPText.text = "Reset HP";
		resetHPText.setStyle({ "color": "#ffffffff", "fontFamily": "Minecraft", "fontSize": "100px" });
		cheatsContainer.add(resetHPText);

		// winner
		const winner = this.add.container(1499, -403);
		winner.name = "winner";
		winner.visible = false;

		// shadow_1
		const shadow_1 = this.add.image(-539, 952, "Shadow");
		shadow_1.scaleX = 10.27991336353874;
		shadow_1.scaleY = 6.0759387580083795;
		winner.add(shadow_1);

		// onPointerDownScript_12
		new OnPointerDownScript(shadow_1);

		// winnerText
		const winnerText = this.add.text(-552, 963.8000013232231, "", {});
		winnerText.scaleY = 0.8;
		winnerText.setOrigin(0.5, 0.5);
		winnerText.text = "Winner:";
		winnerText.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "200px" });
		winner.add(winnerText);

		// leaveButton
		const leaveButton = this.add.container(0, 0);
		leaveButton.name = "leaveButton";

		// button
		const button = this.add.image(87, 70, "leaveButton");
		leaveButton.add(button);

		// glowFx_17
		button.preFX.addGlow(16777215, 4, 0, false);

		// highlights_15
		const highlights_15 = new Highlights(button);

		// onPointerDownScript_16
		const onPointerDownScript_16 = new OnPointerDownScript(button);

		// pushActionScript_12
		new PushActionScript(onPointerDownScript_16);

		// leaveTheGameMechanism
		new LeaveTheGameMechanism(button);

		// shadowLeaveButton
		const shadowLeaveButton = this.add.image(973, 529, "Shadow");
		shadowLeaveButton.name = "shadowLeaveButton";
		shadowLeaveButton.scaleX = 10.03127832345736;
		shadowLeaveButton.scaleY = 5.743648692660658;
		shadowLeaveButton.visible = false;
		leaveButton.add(shadowLeaveButton);

		// onPointerDownScript_29
		new OnPointerDownScript(shadowLeaveButton);

		// confirmText
		const confirmText = this.add.text(951, 331, "", {});
		confirmText.scaleX = 0.8;
		confirmText.scaleY = 0.8;
		confirmText.setOrigin(0.5, 0.5);
		confirmText.visible = false;
		confirmText.text = "Confirm?";
		confirmText.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "150px" });
		leaveButton.add(confirmText);

		// yesButton
		const yesButton = this.add.image(760, 525, "buttons");
		yesButton.name = "yesButton";
		yesButton.scaleX = 5;
		yesButton.scaleY = 5;
		yesButton.visible = false;
		leaveButton.add(yesButton);

		// highlights_16
		const highlights_16 = new Highlights(yesButton);

		// onPointerDownScript_30
		const onPointerDownScript_30 = new OnPointerDownScript(yesButton);

		// pushActionScript_16
		new PushActionScript(onPointerDownScript_30);

		// glowFx_18
		yesButton.preFX.addGlow(16777215, 4, 0, false);

		// noButton
		const noButton = this.add.image(1149, 525, "buttons");
		noButton.name = "noButton";
		noButton.scaleX = 5;
		noButton.scaleY = 5;
		noButton.visible = false;
		leaveButton.add(noButton);

		// highlights_17
		const highlights_17 = new Highlights(noButton);

		// onPointerDownScript_31
		const onPointerDownScript_31 = new OnPointerDownScript(noButton);

		// pushActionScript_28
		new PushActionScript(onPointerDownScript_31);

		// glowFx_19
		noButton.preFX.addGlow(16777215, 4, 0, false);

		// yesText
		const yesText = this.add.text(753, 530, "", {});
		yesText.scaleX = 0.4;
		yesText.scaleY = 0.4;
		yesText.setOrigin(0.5, 0.5);
		yesText.visible = false;
		yesText.text = "Yes";
		yesText.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "150px" });
		leaveButton.add(yesText);

		// noText
		const noText = this.add.text(1152, 532, "", {});
		noText.scaleX = 0.4;
		noText.scaleY = 0.4;
		noText.setOrigin(0.5, 0.5);
		noText.visible = false;
		noText.text = "No";
		noText.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "150px" });
		leaveButton.add(noText);

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
		attackMechanism.type = "Opponent";
		attackMechanism.slotID = 1;
		attackMechanism.damageText;

		// highlights_5 (prefab fields)
		highlights_5.type = "Match";

		// attackMechanism_1 (prefab fields)
		attackMechanism_1.type = "Opponent";
		attackMechanism_1.slotID = 2;

		// highlights_6 (prefab fields)
		highlights_6.type = "Match";

		// attackMechanism_2 (prefab fields)
		attackMechanism_2.type = "Opponent";
		attackMechanism_2.slotID = 3;

		// highlights_7 (prefab fields)
		highlights_7.type = "Match";

		// attackMechanism_3 (prefab fields)
		attackMechanism_3.type = "Opponent";
		attackMechanism_3.slotID = 4;

		// highlights_8 (prefab fields)
		highlights_8.type = "Match";

		// attackMechanism_4 (prefab fields)
		attackMechanism_4.type = "Opponent";
		attackMechanism_4.slotID = 5;

		// highlights_9 (prefab fields)
		highlights_9.type = "Match";

		// throwables_2 (prefab fields)
		throwables_2.type = "CardTook";

		// attackMechanism_5 (prefab fields)
		attackMechanism_5.type = "Player";
		attackMechanism_5.slotID = 1;

		// throwables (prefab fields)
		throwables.type = "Throwables";

		// matchMechanism (prefab fields)
		matchMechanism.turnText = turn;
		matchMechanism.winnerText = winnerText;
		matchMechanism.health = healthBarMechanism;

		// nameAndLevelMechanism (prefab fields)
		nameAndLevelMechanism.nameText = namePlayer1Text;
		nameAndLevelMechanism.levelText = levelPlayer1Text;

		// highlights_10 (prefab fields)
		highlights_10.type = "Match";

		// attackMechanism_6 (prefab fields)
		attackMechanism_6.type = "Player";
		attackMechanism_6.slotID = 2;

		// highlights_11 (prefab fields)
		highlights_11.type = "Match";

		// attackMechanism_7 (prefab fields)
		attackMechanism_7.type = "Player";
		attackMechanism_7.slotID = 3;

		// highlights_12 (prefab fields)
		highlights_12.type = "Match";

		// attackMechanism_8 (prefab fields)
		attackMechanism_8.type = "Player";
		attackMechanism_8.slotID = 4;

		// highlights_13 (prefab fields)
		highlights_13.type = "Match";

		// attackMechanism_9 (prefab fields)
		attackMechanism_9.type = "Player";
		attackMechanism_9.slotID = 5;

		// highlights_14 (prefab fields)
		highlights_14.type = "Match";

		// throwables_1 (prefab fields)
		throwables_1.type = "CardTook";

		// cardsMechanism_3 (prefab fields)
		cardsMechanism_3.type = "Deck";

		// highlights (prefab fields)
		highlights.type = "Buttons";

		// endTurnMechanism (prefab fields)
		endTurnMechanism.type = "endTurn";

		// highlights_4 (prefab fields)
		highlights_4.type = "Buttons";

		// cardsMechanism_1 (prefab fields)
		cardsMechanism_1.type = "ShowCards";

		// cheatsMechanism (prefab fields)
		cheatsMechanism.type = "hpTo1";

		// highlights_1 (prefab fields)
		highlights_1.type = "Buttons";

		// cheatsMechanism_1 (prefab fields)
		cheatsMechanism_1.type = "resetAttackStatus";

		// highlights_2 (prefab fields)
		highlights_2.type = "Buttons";

		// cheatsMechanism_2 (prefab fields)
		cheatsMechanism_2.type = "resetHP";

		// highlights_3 (prefab fields)
		highlights_3.type = "Buttons";

		// highlights_15 (prefab fields)
		highlights_15.type = "Buttons";

		// highlights_16 (prefab fields)
		highlights_16.type = "Buttons";

		// highlights_17 (prefab fields)
		highlights_17.type = "Buttons";

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
		this.player2_slot1 = player2_slot1;
		this.player2_slot2 = player2_slot2;
		this.player2_slot3 = player2_slot3;
		this.player2_slot4 = player2_slot4;
		this.player2_slot5 = player2_slot5;
		this.characterSlotsPlayer2 = characterSlotsPlayer2;
		this.matchMechanism = matchMechanism;
		this.player1_slot1 = player1_slot1;
		this.player1_slot2 = player1_slot2;
		this.player1_slot3 = player1_slot3;
		this.player1_slot4 = player1_slot4;
		this.player1_slot5 = player1_slot5;
		this.cardTook = cardTook;
		this.glowFx_10 = glowFx_10;
		this.player1_deck = player1_deck;
		this.damageAnimationMechanism = damageAnimationMechanism;
		this.characterSlotsPlayer1 = characterSlotsPlayer1;
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
		this.turn = turn;
		this.player2NameShape = player2NameShape;
		this.levelPlayer1Shape = levelPlayer1Shape;
		this.levelPlayer2Shape = levelPlayer2Shape;
		this.namePlayer1Text = namePlayer1Text;
		this.namePlayer2Text = namePlayer2Text;
		this.levelPlayer1Text = levelPlayer1Text;
		this.levelPlayer2Text = levelPlayer2Text;
		this.namesAndLevelsPlayers = namesAndLevelsPlayers;
		this.showCards = showCards;
		this.setHPTo1Button = setHPTo1Button;
		this.resetAttackStatusButton = resetAttackStatusButton;
		this.resetHpButton = resetHpButton;
		this.setHPTo1Text = setHPTo1Text;
		this.resetAttackStatusText = resetAttackStatusText;
		this.resetHPText = resetHPText;
		this.cheatsContainer = cheatsContainer;
		this.winnerText = winnerText;
		this.winner = winner;
		this.button = button;
		this.shadowLeaveButton = shadowLeaveButton;
		this.confirmText = confirmText;
		this.yesButton = yesButton;
		this.noButton = noButton;
		this.leaveButton = leaveButton;
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
		this.toggleCheats = toggleCheats;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	result;
	/** @type {AttackMechanism} */
	attackMechanism;
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
	cardTook;
	/** @type {Phaser.FX.Glow} */
	glowFx_10;
	/** @type {Phaser.GameObjects.Image} */
	player1_deck;
	/** @type {DamageAnimationMechanism} */
	damageAnimationMechanism;
	/** @type {Phaser.GameObjects.Container} */
	characterSlotsPlayer1;
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
	/** @type {Phaser.GameObjects.Text} */
	turn;
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
	setHPTo1Button;
	/** @type {Phaser.GameObjects.Image} */
	resetAttackStatusButton;
	/** @type {Phaser.GameObjects.Image} */
	resetHpButton;
	/** @type {Phaser.GameObjects.Text} */
	setHPTo1Text;
	/** @type {Phaser.GameObjects.Text} */
	resetAttackStatusText;
	/** @type {Phaser.GameObjects.Text} */
	resetHPText;
	/** @type {Phaser.GameObjects.Container} */
	cheatsContainer;
	/** @type {Phaser.GameObjects.Text} */
	winnerText;
	/** @type {Phaser.GameObjects.Container} */
	winner;
	/** @type {Phaser.GameObjects.Image} */
	button;
	/** @type {Phaser.GameObjects.Image} */
	shadowLeaveButton;
	/** @type {Phaser.GameObjects.Text} */
	confirmText;
	/** @type {Phaser.GameObjects.Image} */
	yesButton;
	/** @type {Phaser.GameObjects.Image} */
	noButton;
	/** @type {Phaser.GameObjects.Container} */
	leaveButton;
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
	/** @type {Phaser.Input.Keyboard.Key} */
	toggleCheats;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		this.input.keyboard.on('keydown-C', (event) => {
			this.cheatsContainer.visible = !this.cheatsContainer.visible;
		});

		if(battleMusic.isPlaying == false){
			battleMusic.play(musicConfig)
			menusMusic.pause()
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
