

/* START OF COMPILED CODE */

class ChooseCharactersMenu extends Phaser.Scene {

	constructor() {
		super("ChooseCharactersMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// specasdossheets
		this.add.image(960, 540, "Specasdossheets");

		// Match
		const match = this.add.container(0, 0);
		match.scaleX = 1.5;
		match.scaleY = 1.5;

		// highlight_1
		const highlight_1 = this.add.rectangle(638, 660, 128, 128);
		highlight_1.name = "highlight_1";
		highlight_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_1.scaleX = 0.89;
		highlight_1.scaleY = 0.3;
		highlight_1.isFilled = true;
		highlight_1.fillColor = 0;
		highlight_1.strokeColor = 4194559;
		highlight_1.strokeAlpha = 4;
		highlight_1.lineWidth = 4;
		match.add(highlight_1);

		// handleChooseMechanism_18
		const handleChooseMechanism_18 = new HandleChooseMechanism(highlight_1);

		// glowFx_14
		highlight_1.postFX.addGlow(4194559, 3, 3, false);

		// Message
		const message = this.add.text(640, 660, "", {});
		message.name = "Message";
		message.scaleX = 0.15;
		message.scaleY = 0.15;
		message.setOrigin(0.5, 0.5);
		message.setStyle({ "fontFamily": "Minecraft", "fontSize": "100px" });
		match.add(message);

		// handleChooseMechanism_15
		const handleChooseMechanism_15 = new HandleChooseMechanism(message);

		// GoToMatch
		const goToMatch = this.add.text(640, 660, "", {});
		goToMatch.name = "GoToMatch";
		goToMatch.setInteractive(new Phaser.Geom.Rectangle(-20, -7, 402.4184635613999, 131.42520332043517), Phaser.Geom.Rectangle.Contains);
		goToMatch.scaleX = 0.23;
		goToMatch.scaleY = 0.23;
		goToMatch.setOrigin(0.5, 0.5);
		goToMatch.text = "Ready?";
		goToMatch.setStyle({ "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#4000ff", "strokeThickness":10});
		match.add(goToMatch);

		// onPointerDownScript_12
		const onPointerDownScript_12 = new OnPointerDownScript(goToMatch);

		// pushActionScript_12
		new PushActionScript(onPointerDownScript_12);

		// handleChooseMechanism_5
		const handleChooseMechanism_5 = new HandleChooseMechanism(goToMatch);

		// goToScene_4
		const goToScene_4 = new GoToScene(goToMatch);

		// Slots
		const slots = this.add.container(0, 8);
		slots.name = "Slots";
		slots.scaleX = 1.5;
		slots.scaleY = 1.5;

		// slot_4
		const slot_4 = this.add.image(967, 297, "base", 0);
		slot_4.name = "slot_4";
		slot_4.setInteractive(new Phaser.Geom.Rectangle(-10, -11, 173.38076714293672, 172.09921126705498), Phaser.Geom.Rectangle.Contains);
		slot_4.scaleX = 0.5;
		slot_4.scaleY = 0.5;
		slots.add(slot_4);

		// glowFx_2
		slot_4.preFX.addGlow(16777215, 4, 0, false);

		// onPointerDownScript_17
		const onPointerDownScript_17 = new OnPointerDownScript(slot_4);

		// pushActionScript_17
		new PushActionScript(onPointerDownScript_17);

		// handleChooseMechanism_13
		const handleChooseMechanism_13 = new HandleChooseMechanism(slot_4);

		// highlights_13
		const highlights_13 = new Highlights(slot_4);

		// slot_1
		const slot_1 = this.add.image(1127, 217, "base", 0);
		slot_1.name = "slot_1";
		slot_1.setInteractive(new Phaser.Geom.Rectangle(-6, -9, 168.3486228584178, 168.19886025995473), Phaser.Geom.Rectangle.Contains);
		slot_1.scaleX = 0.5;
		slot_1.scaleY = 0.5;
		slots.add(slot_1);

		// glowFx
		slot_1.preFX.addGlow(16777215, 4, 0, false);

		// onPointerDownScript_16
		const onPointerDownScript_16 = new OnPointerDownScript(slot_1);

		// pushActionScript_16
		new PushActionScript(onPointerDownScript_16);

		// handleChooseMechanism_12
		const handleChooseMechanism_12 = new HandleChooseMechanism(slot_1);

		// highlights_14
		const highlights_14 = new Highlights(slot_1);

		// slot_2
		const slot_2 = this.add.image(1127, 377, "base", 0);
		slot_2.name = "slot_2";
		slot_2.setInteractive(new Phaser.Geom.Rectangle(-13, -11, 176.55683443309778, 175.20777384883507), Phaser.Geom.Rectangle.Contains);
		slot_2.scaleX = 0.5;
		slot_2.scaleY = 0.5;
		slots.add(slot_2);

		// glowFx
		slot_2.preFX.addGlow(16777215, 4, 0, false);

		// onPointerDownScript_15
		const onPointerDownScript_15 = new OnPointerDownScript(slot_2);

		// pushActionScript_15
		new PushActionScript(onPointerDownScript_15);

		// handleChooseMechanism_11
		const handleChooseMechanism_11 = new HandleChooseMechanism(slot_2);

		// highlights_12
		const highlights_12 = new Highlights(slot_2);

		// slot_3
		const slot_3 = this.add.image(1127, 537, "base", 0);
		slot_3.name = "slot_3";
		slot_3.setInteractive(new Phaser.Geom.Rectangle(-19, -20, 188.87782037941005, 185.77302709086553), Phaser.Geom.Rectangle.Contains);
		slot_3.scaleX = 0.5;
		slot_3.scaleY = 0.5;
		slots.add(slot_3);

		// glowFx
		slot_3.preFX.addGlow(16777215, 4, 0, false);

		// onPointerDownScript_14
		const onPointerDownScript_14 = new OnPointerDownScript(slot_3);

		// pushActionScript_14
		new PushActionScript(onPointerDownScript_14);

		// handleChooseMechanism_10
		const handleChooseMechanism_10 = new HandleChooseMechanism(slot_3);

		// highlights_10
		const highlights_10 = new Highlights(slot_3);

		// slot_5
		const slot_5 = this.add.image(969, 457, "base", 0);
		slot_5.name = "slot_5";
		slot_5.setInteractive(new Phaser.Geom.Rectangle(-9, -10, 174.216231934174, 174.87675448717522), Phaser.Geom.Rectangle.Contains);
		slot_5.scaleX = 0.5;
		slot_5.scaleY = 0.5;
		slots.add(slot_5);

		// glowFx_1
		slot_5.preFX.addGlow(16777215, 4, 0, false);

		// onPointerDownScript_13
		const onPointerDownScript_13 = new OnPointerDownScript(slot_5);

		// pushActionScript_13
		new PushActionScript(onPointerDownScript_13);

		// handleChooseMechanism_14
		const handleChooseMechanism_14 = new HandleChooseMechanism(slot_5);

		// highlights_11
		const highlights_11 = new Highlights(slot_5);

		// MessageServer
		const messageServer = this.add.text(1050, 611, "", {});
		messageServer.name = "MessageServer";
		messageServer.scaleX = 0.15;
		messageServer.scaleY = 0.15;
		messageServer.setOrigin(0.5, 0.5);
		messageServer.setStyle({ "align": "center", "fontFamily": "Minecraft", "fontSize": "100px" });
		slots.add(messageServer);

		// handleChooseMechanism_16
		const handleChooseMechanism_16 = new HandleChooseMechanism(messageServer);

		// BackgroundAndText
		const backgroundAndText = this.add.container(0, 67);
		backgroundAndText.scaleX = 1.5;
		backgroundAndText.scaleY = 1.5;

		// cartas2_Imprimir
		const cartas2_Imprimir = this.add.image(777, 472, "cartas2_Imprimir", 1);
		cartas2_Imprimir.scaleX = 0.5;
		cartas2_Imprimir.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir);

		// cartas2_Imprimir_1
		const cartas2_Imprimir_1 = this.add.image(619, 472, "cartas2_Imprimir", 1);
		cartas2_Imprimir_1.scaleX = 0.5;
		cartas2_Imprimir_1.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_1);

		// cartas2_Imprimir_2
		const cartas2_Imprimir_2 = this.add.image(459, 472, "cartas2_Imprimir", 1);
		cartas2_Imprimir_2.scaleX = 0.5;
		cartas2_Imprimir_2.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_2);

		// cartas2_Imprimir_3
		const cartas2_Imprimir_3 = this.add.image(301, 472, "cartas2_Imprimir", 1);
		cartas2_Imprimir_3.scaleX = 0.5;
		cartas2_Imprimir_3.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_3);

		// cartas2_Imprimir_4
		const cartas2_Imprimir_4 = this.add.image(142, 472, "cartas2_Imprimir", 1);
		cartas2_Imprimir_4.scaleX = 0.5;
		cartas2_Imprimir_4.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_4);

		// cartas2_Imprimir_5
		const cartas2_Imprimir_5 = this.add.image(776, 203, "cartas2_Imprimir", 1);
		cartas2_Imprimir_5.scaleX = 0.5;
		cartas2_Imprimir_5.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_5);

		// cartas2_Imprimir_6
		const cartas2_Imprimir_6 = this.add.image(619, 203, "cartas2_Imprimir", 1);
		cartas2_Imprimir_6.scaleX = 0.5;
		cartas2_Imprimir_6.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_6);

		// cartas2_Imprimir_7
		const cartas2_Imprimir_7 = this.add.image(459, 203, "cartas2_Imprimir", 1);
		cartas2_Imprimir_7.scaleX = 0.5;
		cartas2_Imprimir_7.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_7);

		// cartas2_Imprimir_8
		const cartas2_Imprimir_8 = this.add.image(301, 203, "cartas2_Imprimir", 1);
		cartas2_Imprimir_8.scaleX = 0.5;
		cartas2_Imprimir_8.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_8);

		// cartas2_Imprimir1
		const cartas2_Imprimir1 = this.add.image(142, 203, "cartas2_Imprimir", 1);
		cartas2_Imprimir1.scaleX = 0.5;
		cartas2_Imprimir1.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir1);

		// ChooseCharacters_1
		const chooseCharacters_1 = this.add.text(460, 71, "", {});
		chooseCharacters_1.scaleX = 0.15;
		chooseCharacters_1.scaleY = 0.15;
		chooseCharacters_1.setOrigin(0.5, 0.5);
		chooseCharacters_1.text = "Close-Range";
		chooseCharacters_1.setStyle({ "fontFamily": "Minecraft", "fontSize": "100px" });
		backgroundAndText.add(chooseCharacters_1);

		// onPointerDownScript_18
		const onPointerDownScript_18 = new OnPointerDownScript(chooseCharacters_1);

		// pushActionScript_18
		new PushActionScript(onPointerDownScript_18);

		// ChooseCharacters_2
		const chooseCharacters_2 = this.add.text(460, 337, "", {});
		chooseCharacters_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 154, 15), Phaser.Geom.Rectangle.Contains);
		chooseCharacters_2.scaleX = 0.15;
		chooseCharacters_2.scaleY = 0.15;
		chooseCharacters_2.setOrigin(0.5, 0.5);
		chooseCharacters_2.text = "Long-Range";
		chooseCharacters_2.setStyle({ "fontFamily": "Minecraft", "fontSize": "100px" });
		backgroundAndText.add(chooseCharacters_2);

		// onPointerDownScript_19
		const onPointerDownScript_19 = new OnPointerDownScript(chooseCharacters_2);

		// pushActionScript_19
		new PushActionScript(onPointerDownScript_19);

		// Characters
		const characters = this.add.container(0, 0);
		characters.name = "Characters";
		characters.scaleX = 1.5;
		characters.scaleY = 1.5;

		// Username
		const username = this.add.text(1192, 58, "", {});
		username.name = "Username";
		username.scaleX = 0.2;
		username.scaleY = 0.2;
		username.setOrigin(1, 0.5);
		username.text = "Username";
		username.setStyle({ "align": "right", "fontFamily": "Minecraft", "fontSize": "180px" });
		characters.add(username);

		// handleChooseMechanism_17
		const handleChooseMechanism_17 = new HandleChooseMechanism(username);

		// character_id_0
		const character_id_0 = this.add.image(142, 248, "cartas1_Imprimir", 8);
		character_id_0.name = "character_id_0";
		character_id_0.scaleX = 0.5;
		character_id_0.scaleY = 0.5;
		character_id_0.visible = false;
		characters.add(character_id_0);

		// glowFx_11
		character_id_0.preFX.addGlow(16777215, 4, 0, false);

		// handleChooseMechanism_8
		const handleChooseMechanism_8 = new HandleChooseMechanism(character_id_0);

		// onPointerDownScript_10
		const onPointerDownScript_10 = new OnPointerDownScript(character_id_0);

		// pushActionScript_10
		new PushActionScript(onPointerDownScript_10);

		// highlights_8
		const highlights_8 = new Highlights(character_id_0);

		// character_id_1
		const character_id_1 = this.add.image(301, 248, "cartas1_Imprimir", 6);
		character_id_1.name = "character_id_1";
		character_id_1.scaleX = 0.5;
		character_id_1.scaleY = 0.5;
		character_id_1.visible = false;
		characters.add(character_id_1);

		// glowFx_9
		character_id_1.preFX.addGlow(16777215, 4, 0, false);

		// handleChooseMechanism_6
		const handleChooseMechanism_6 = new HandleChooseMechanism(character_id_1);

		// onPointerDownScript_8
		const onPointerDownScript_8 = new OnPointerDownScript(character_id_1);

		// pushActionScript_8
		new PushActionScript(onPointerDownScript_8);

		// highlights_6
		const highlights_6 = new Highlights(character_id_1);

		// character_id_2
		const character_id_2 = this.add.image(619, 248, "cartas2_Imprimir", 0);
		character_id_2.name = "character_id_2";
		character_id_2.scaleX = 0.5;
		character_id_2.scaleY = 0.5;
		character_id_2.visible = false;
		characters.add(character_id_2);

		// glowFx_12
		character_id_2.preFX.addGlow(16777215, 4, 0, false);

		// handleChooseMechanism_9
		const handleChooseMechanism_9 = new HandleChooseMechanism(character_id_2);

		// onPointerDownScript_11
		const onPointerDownScript_11 = new OnPointerDownScript(character_id_2);

		// pushActionScript_11
		new PushActionScript(onPointerDownScript_11);

		// highlights_9
		const highlights_9 = new Highlights(character_id_2);

		// character_id_3
		const character_id_3 = this.add.image(776, 248, "cartas1_Imprimir", 0);
		character_id_3.name = "character_id_3";
		character_id_3.scaleX = 0.5;
		character_id_3.scaleY = 0.5;
		character_id_3.visible = false;
		characters.add(character_id_3);

		// glowFx_3
		character_id_3.preFX.addGlow(16777215, 4, 0, false);

		// handleChooseMechanism
		const handleChooseMechanism = new HandleChooseMechanism(character_id_3);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(character_id_3);

		// pushActionScript
		new PushActionScript(onPointerDownScript_2);

		// highlights
		const highlights = new Highlights(character_id_3);

		// character_id_4
		const character_id_4 = this.add.image(459, 248, "cartas1_Imprimir", 5);
		character_id_4.name = "character_id_4";
		character_id_4.scaleX = 0.5;
		character_id_4.scaleY = 0.5;
		character_id_4.visible = false;
		characters.add(character_id_4);

		// glowFx_8
		character_id_4.preFX.addGlow(16777215, 4, 0, false);

		// handleChooseMechanism_
		const handleChooseMechanism_ = new HandleChooseMechanism(character_id_4);

		// onPointerDownScript_7
		const onPointerDownScript_7 = new OnPointerDownScript(character_id_4);

		// pushActionScript_7
		new PushActionScript(onPointerDownScript_7);

		// highlights_5
		const highlights_5 = new Highlights(character_id_4);

		// character_id_5
		const character_id_5 = this.add.image(142, 517, "cartas1_Imprimir", 7);
		character_id_5.name = "character_id_5";
		character_id_5.scaleX = 0.5;
		character_id_5.scaleY = 0.5;
		character_id_5.visible = false;
		characters.add(character_id_5);

		// glowFx_10
		character_id_5.preFX.addGlow(16777215, 4, 0, false);

		// handleChooseMechanism_7
		const handleChooseMechanism_7 = new HandleChooseMechanism(character_id_5);

		// onPointerDownScript_9
		const onPointerDownScript_9 = new OnPointerDownScript(character_id_5);

		// pushActionScript_9
		new PushActionScript(onPointerDownScript_9);

		// highlights_7
		const highlights_7 = new Highlights(character_id_5);

		// character_id_6
		const character_id_6 = this.add.image(777, 517, "cartas1_Imprimir", 1);
		character_id_6.name = "character_id_6";
		character_id_6.scaleX = 0.5;
		character_id_6.scaleY = 0.5;
		character_id_6.visible = false;
		characters.add(character_id_6);

		// glowFx_4
		character_id_6.preFX.addGlow(16777215, 4, 0, false);

		// handleChooseMechanism_1
		const handleChooseMechanism_1 = new HandleChooseMechanism(character_id_6);

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(character_id_6);

		// pushActionScript_3
		new PushActionScript(onPointerDownScript_3);

		// highlights_1
		const highlights_1 = new Highlights(character_id_6);

		// character_id_7
		const character_id_7 = this.add.image(301, 517, "cartas1_Imprimir", 3);
		character_id_7.name = "character_id_7";
		character_id_7.scaleX = 0.5;
		character_id_7.scaleY = 0.5;
		character_id_7.visible = false;
		characters.add(character_id_7);

		// glowFx_6
		character_id_7.preFX.addGlow(16777215, 4, 0, false);

		// handleChooseMechanism_3
		const handleChooseMechanism_3 = new HandleChooseMechanism(character_id_7);

		// onPointerDownScript_5
		const onPointerDownScript_5 = new OnPointerDownScript(character_id_7);

		// pushActionScript_5
		new PushActionScript(onPointerDownScript_5);

		// highlights_3
		const highlights_3 = new Highlights(character_id_7);

		// character_id_8
		const character_id_8 = this.add.image(459, 517, "cartas1_Imprimir", 2);
		character_id_8.name = "character_id_8";
		character_id_8.scaleX = 0.5;
		character_id_8.scaleY = 0.5;
		character_id_8.visible = false;
		characters.add(character_id_8);

		// glowFx_5
		character_id_8.preFX.addGlow(16777215, 4, 0, false);

		// handleChooseMechanism_2
		const handleChooseMechanism_2 = new HandleChooseMechanism(character_id_8);

		// onPointerDownScript_4
		const onPointerDownScript_4 = new OnPointerDownScript(character_id_8);

		// pushActionScript_4
		new PushActionScript(onPointerDownScript_4);

		// highlights_2
		const highlights_2 = new Highlights(character_id_8);

		// character_id_9
		const character_id_9 = this.add.image(619, 517, "cartas1_Imprimir", 4);
		character_id_9.name = "character_id_9";
		character_id_9.scaleX = 0.5;
		character_id_9.scaleY = 0.5;
		character_id_9.visible = false;
		characters.add(character_id_9);

		// glowFx_7
		character_id_9.preFX.addGlow(16777215, 4, 0, false);

		// handleChooseMechanism_4
		const handleChooseMechanism_4 = new HandleChooseMechanism(character_id_9);

		// onPointerDownScript_6
		const onPointerDownScript_6 = new OnPointerDownScript(character_id_9);

		// pushActionScript_6
		new PushActionScript(onPointerDownScript_6);

		// highlights_4
		const highlights_4 = new Highlights(character_id_9);

		// XpBar
		const xpBar = this.add.container(0, 79);
		xpBar.name = "XpBar";
		xpBar.scaleX = 1.5;
		xpBar.scaleY = 1.5;

		// spritesheet10
		const spritesheet10 = this.add.image(1119, 48, "spritesheet", 10);
		spritesheet10.scaleX = 4.9;
		spritesheet10.scaleY = 4.9;
		xpBar.add(spritesheet10);

		// XpTotal
		const xpTotal = this.add.text(1119, 50, "", {});
		xpTotal.setInteractive(new Phaser.Geom.Rectangle(-310, -13, 1196.1106329307904, 167.86389713934952), Phaser.Geom.Rectangle.Contains);
		xpTotal.scaleX = 0.2;
		xpTotal.scaleY = 0.2;
		xpTotal.setOrigin(0.5, 0.5);
		xpTotal.text = "TotalXP";
		xpTotal.setStyle({ "backgroundColor": "", "color": "#000000ff", "fontFamily": "Minecraft", "fontSize": "150px", "stroke": "#000000ff" });
		xpBar.add(xpTotal);

		// highlights_15
		const highlights_15 = new Highlights(xpTotal);

		// Button Play a Match
		const button_Play_a_Match = this.add.container(48, 12);
		button_Play_a_Match.scaleX = 1.5;
		button_Play_a_Match.scaleY = 1.5;

		// highlight
		const highlight = this.add.rectangle(180, 48, 128, 128);
		highlight.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight.scaleX = 1.35;
		highlight.scaleY = 0.3;
		highlight.isFilled = true;
		highlight.fillColor = 0;
		highlight.strokeColor = 4194559;
		highlight.strokeAlpha = 4;
		highlight.lineWidth = 4;
		button_Play_a_Match.add(highlight);

		// glowFx_13
		highlight.postFX.addGlow(4194559, 3, 3, false);

		// PlayAMatch
		const playAMatch = this.add.text(180, 48, "", {});
		playAMatch.setInteractive(new Phaser.Geom.Rectangle(1, 0, 626.943848443308, 122.13546878499065), Phaser.Geom.Rectangle.Contains);
		playAMatch.scaleX = 0.23;
		playAMatch.scaleY = 0.23;
		playAMatch.setOrigin(0.5, 0.5);
		playAMatch.text = "Play a Match";
		playAMatch.setStyle({ "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#4000ff", "strokeThickness":10});
		button_Play_a_Match.add(playAMatch);

		// goToScene_3
		const goToScene_3 = new GoToScene(playAMatch);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(playAMatch);

		// pushActionScript_2
		new PushActionScript(onPointerDownScript);

		// Characters and Cards
		const characters_and_Cards = this.add.container(65, 12);
		characters_and_Cards.scaleX = 1.5;
		characters_and_Cards.scaleY = 1.5;

		// highlight_2
		const highlight_2 = this.add.rectangle(422, 48, 128, 128);
		highlight_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_2.scaleX = 2.3;
		highlight_2.scaleY = 0.3;
		highlight_2.isFilled = true;
		highlight_2.fillColor = 0;
		highlight_2.strokeColor = 4194559;
		highlight_2.strokeAlpha = 4;
		highlight_2.lineWidth = 4;
		characters_and_Cards.add(highlight_2);

		// glowFx_15
		highlight_2.postFX.addGlow(4194559, 3, 3, false);

		// Characters And Cards
		const characters_And_Cards = this.add.text(422, 48, "", {});
		characters_And_Cards.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1101.472090680232, 112.19250373942205), Phaser.Geom.Rectangle.Contains);
		characters_And_Cards.scaleX = 0.23;
		characters_And_Cards.scaleY = 0.23;
		characters_And_Cards.setOrigin(0.5, 0.5);
		characters_And_Cards.text = "Characters and Cards";
		characters_And_Cards.setStyle({ "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#4000ff", "strokeThickness":10});
		characters_and_Cards.add(characters_And_Cards);

		// goToScene_2
		const goToScene_2 = new GoToScene(characters_And_Cards);

		// onPointerDownScript_20
		const onPointerDownScript_20 = new OnPointerDownScript(characters_And_Cards);

		// pushActionScript_20
		new PushActionScript(onPointerDownScript_20);

		// Button Go Back To Home Page
		const button_Go_Back_To_Home_Page = this.add.container(-47, 12);
		button_Go_Back_To_Home_Page.scaleX = 1.5;
		button_Go_Back_To_Home_Page.scaleY = 1.5;

		// highlight_4
		const highlight_4 = this.add.rectangle(118, 48, 128, 128);
		highlight_4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_4.scaleX = 0.3;
		highlight_4.scaleY = 0.3;
		highlight_4.isFilled = true;
		highlight_4.fillColor = 0;
		highlight_4.strokeColor = 4194559;
		highlight_4.strokeAlpha = 4;
		highlight_4.lineWidth = 4;
		button_Go_Back_To_Home_Page.add(highlight_4);

		// glowFx_17
		highlight_4.postFX.addGlow(4194559, 3, 3, false);

		// ButtonGoToHomePage
		const buttonGoToHomePage = this.add.text(118, 48, "", {});
		buttonGoToHomePage.setInteractive(new Phaser.Geom.Rectangle(5, 3, 140.06943109917512, 113.226466611809), Phaser.Geom.Rectangle.Contains);
		buttonGoToHomePage.scaleX = 0.25;
		buttonGoToHomePage.scaleY = 0.25;
		buttonGoToHomePage.setOrigin(0.5, 0.5);
		buttonGoToHomePage.text = "🏠";
		buttonGoToHomePage.setStyle({ "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#4000ff", "strokeThickness":10});
		button_Go_Back_To_Home_Page.add(buttonGoToHomePage);

		// onPointerDownScript_25
		const onPointerDownScript_25 = new OnPointerDownScript(buttonGoToHomePage);

		// pushActionScript_25
		new PushActionScript(onPointerDownScript_25);

		// goToScene_1
		const goToScene_1 = new GoToScene(buttonGoToHomePage);

		// Button Profile
		const button_Profile = this.add.container(0, 12);
		button_Profile.scaleX = 1.5;
		button_Profile.scaleY = 1.5;

		// highlight_3
		const highlight_3 = this.add.rectangle(1220, 48, 128, 128);
		highlight_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_3.scaleX = 0.3;
		highlight_3.scaleY = 0.3;
		highlight_3.isFilled = true;
		highlight_3.fillColor = 0;
		highlight_3.strokeColor = 4194559;
		highlight_3.strokeAlpha = 4;
		highlight_3.lineWidth = 4;
		button_Profile.add(highlight_3);

		// glowFx_16
		highlight_3.postFX.addGlow(4194559, 3, 3, false);

		// profileButton
		const profileButton = this.add.image(1220, 48, "profileButton");
		profileButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, 512, 512), Phaser.Geom.Rectangle.Contains);
		profileButton.scaleX = 0.05;
		profileButton.scaleY = 0.05;
		button_Profile.add(profileButton);

		// goToScene
		const goToScene = new GoToScene(profileButton);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(profileButton);

		// pushActionScript_1
		new PushActionScript(onPointerDownScript_1);

		// LevelUpScreen
		const levelUpScreen = this.add.container(0, 0);
		levelUpScreen.name = "LevelUpScreen";
		levelUpScreen.scaleX = 1.5;
		levelUpScreen.scaleY = 1.5;
		levelUpScreen.visible = false;

		// shadow
		const shadow = this.add.image(640, 360, "Shadow");
		shadow.scaleX = 6.4;
		shadow.scaleY = 3.6;
		levelUpScreen.add(shadow);

		// onPointerDownScript_24
		new OnPointerDownScript(shadow);

		// new_characters
		const new_characters = this.add.container(0, 0);
		levelUpScreen.add(new_characters);

		// character_new_3
		const character_new_3 = this.add.image(1000, 360, "cartas2_Imprimir", 1);
		character_new_3.name = "character_new_3";
		new_characters.add(character_new_3);

		// onPointerDownScript_23
		const onPointerDownScript_23 = new OnPointerDownScript(character_new_3);

		// pushActionScript_23
		new PushActionScript(onPointerDownScript_23);

		// unlockCharacterMechanism
		const unlockCharacterMechanism = new UnlockCharacterMechanism(character_new_3);

		// onAwakeScript_2
		const onAwakeScript_2 = new OnAwakeScript(character_new_3);

		// moveInSceneActionScript_2
		const moveInSceneActionScript_2 = new MoveInSceneActionScript(onAwakeScript_2);

		// character_new_2
		const character_new_2 = this.add.image(640, 360, "cartas2_Imprimir", 1);
		character_new_2.name = "character_new_2";
		new_characters.add(character_new_2);

		// onPointerDownScript_22
		const onPointerDownScript_22 = new OnPointerDownScript(character_new_2);

		// pushActionScript_22
		new PushActionScript(onPointerDownScript_22);

		// unlockCharacterMechanism_2
		const unlockCharacterMechanism_2 = new UnlockCharacterMechanism(character_new_2);

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(character_new_2);

		// moveInSceneActionScript_1
		const moveInSceneActionScript_1 = new MoveInSceneActionScript(onAwakeScript_1);

		// character_new_1
		const character_new_1 = this.add.image(292, 360, "cartas2_Imprimir", 1);
		character_new_1.name = "character_new_1";
		new_characters.add(character_new_1);

		// onPointerDownScript_21
		const onPointerDownScript_21 = new OnPointerDownScript(character_new_1);

		// pushActionScript_21
		new PushActionScript(onPointerDownScript_21);

		// unlockCharacterMechanism_1
		const unlockCharacterMechanism_1 = new UnlockCharacterMechanism(character_new_1);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(character_new_1);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

		// LevelUpText
		const levelUpText = this.add.text(640, 91.5, "", {});
		levelUpText.setOrigin(0.5, 0.5);
		levelUpText.text = "You have Leveled Up!! Now you can choose one of this three characters!!";
		levelUpText.setStyle({ "fontFamily": "Minecraft", "fontSize": "25px" });
		new_characters.add(levelUpText);

		// handleChooseMechanism_18 (prefab fields)
		handleChooseMechanism_18.type = "sceneManager";

		// handleChooseMechanism_15 (prefab fields)
		handleChooseMechanism_15.type = "Message";

		// handleChooseMechanism_5 (prefab fields)
		handleChooseMechanism_5.type = "LookForMatch";

		// goToScene_4 (prefab fields)
		goToScene_4.sceneChosen = "NotToBeUsed";

		// handleChooseMechanism_13 (prefab fields)
		handleChooseMechanism_13.SlotID = 4;
		handleChooseMechanism_13.type = "Slot";

		// highlights_13 (prefab fields)
		highlights_13.type = "LobbySlots";

		// handleChooseMechanism_12 (prefab fields)
		handleChooseMechanism_12.SlotID = 1;
		handleChooseMechanism_12.type = "Slot";

		// highlights_14 (prefab fields)
		highlights_14.type = "LobbySlots";

		// handleChooseMechanism_11 (prefab fields)
		handleChooseMechanism_11.SlotID = 2;
		handleChooseMechanism_11.type = "Slot";

		// highlights_12 (prefab fields)
		highlights_12.type = "LobbySlots";

		// handleChooseMechanism_10 (prefab fields)
		handleChooseMechanism_10.SlotID = 3;
		handleChooseMechanism_10.type = "Slot";

		// highlights_10 (prefab fields)
		highlights_10.type = "LobbySlots";

		// handleChooseMechanism_14 (prefab fields)
		handleChooseMechanism_14.SlotID = 5;
		handleChooseMechanism_14.type = "Slot";

		// highlights_11 (prefab fields)
		highlights_11.type = "LobbySlots";

		// handleChooseMechanism_16 (prefab fields)
		handleChooseMechanism_16.type = "charSelct";

		// handleChooseMechanism_17 (prefab fields)
		handleChooseMechanism_17.type = "charSelct";

		// handleChooseMechanism_8 (prefab fields)
		handleChooseMechanism_8.CharacterID = 0;
		handleChooseMechanism_8.type = "Character";

		// highlights_8 (prefab fields)
		highlights_8.type = "LobbyChar";
		highlights_8.id = 0;

		// handleChooseMechanism_6 (prefab fields)
		handleChooseMechanism_6.CharacterID = 1;
		handleChooseMechanism_6.type = "Character";

		// highlights_6 (prefab fields)
		highlights_6.type = "LobbyChar";
		highlights_6.id = 1;

		// handleChooseMechanism_9 (prefab fields)
		handleChooseMechanism_9.CharacterID = 2;
		handleChooseMechanism_9.type = "Character";

		// highlights_9 (prefab fields)
		highlights_9.type = "LobbyChar";
		highlights_9.id = 2;

		// handleChooseMechanism (prefab fields)
		handleChooseMechanism.CharacterID = 3;
		handleChooseMechanism.type = "Character";

		// highlights (prefab fields)
		highlights.type = "LobbyChar";
		highlights.id = 3;

		// handleChooseMechanism_ (prefab fields)
		handleChooseMechanism_.CharacterID = 4;
		handleChooseMechanism_.type = "Character";

		// highlights_5 (prefab fields)
		highlights_5.type = "LobbyChar";
		highlights_5.id = 4;

		// handleChooseMechanism_7 (prefab fields)
		handleChooseMechanism_7.CharacterID = 5;
		handleChooseMechanism_7.type = "Character";

		// highlights_7 (prefab fields)
		highlights_7.type = "LobbyChar";
		highlights_7.id = 5;

		// handleChooseMechanism_1 (prefab fields)
		handleChooseMechanism_1.CharacterID = 6;
		handleChooseMechanism_1.type = "Character";

		// highlights_1 (prefab fields)
		highlights_1.type = "LobbyChar";
		highlights_1.id = 6;

		// handleChooseMechanism_3 (prefab fields)
		handleChooseMechanism_3.CharacterID = 7;
		handleChooseMechanism_3.type = "Character";

		// highlights_3 (prefab fields)
		highlights_3.type = "LobbyChar";
		highlights_3.id = 7;

		// handleChooseMechanism_2 (prefab fields)
		handleChooseMechanism_2.CharacterID = 8;
		handleChooseMechanism_2.type = "Character";

		// highlights_2 (prefab fields)
		highlights_2.type = "LobbyChar";
		highlights_2.id = 8;

		// handleChooseMechanism_4 (prefab fields)
		handleChooseMechanism_4.CharacterID = 9;
		handleChooseMechanism_4.type = "Character";

		// highlights_4 (prefab fields)
		highlights_4.type = "LobbyChar";
		highlights_4.id = 9;

		// highlights_15 (prefab fields)
		highlights_15.type = "LobbyLevelXp";

		// goToScene_3 (prefab fields)
		goToScene_3.sceneChosen = "ChooseCharacters";

		// goToScene_2 (prefab fields)
		goToScene_2.sceneChosen = "CharactersAndCards";

		// goToScene_1 (prefab fields)
		goToScene_1.sceneChosen = "HomePage";

		// goToScene (prefab fields)
		goToScene.sceneChosen = "Profile";

		// unlockCharacterMechanism (prefab fields)
		unlockCharacterMechanism.type = "character";
		unlockCharacterMechanism.characterID = 0;

		// moveInSceneActionScript_2 (prefab fields)
		moveInSceneActionScript_2.from = "RIGHT";

		// unlockCharacterMechanism_2 (prefab fields)
		unlockCharacterMechanism_2.type = "character";
		unlockCharacterMechanism_2.characterID = 0;

		// moveInSceneActionScript_1 (prefab fields)
		moveInSceneActionScript_1.from = "BOTTOM";

		// unlockCharacterMechanism_1 (prefab fields)
		unlockCharacterMechanism_1.type = "LevelUpManager";
		unlockCharacterMechanism_1.characterID = 0;

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "LEFT";

		this.message = message;
		this.slot_4 = slot_4;
		this.slot_1 = slot_1;
		this.slot_2 = slot_2;
		this.slot_3 = slot_3;
		this.slot_5 = slot_5;
		this.slots = slots;
		this.username = username;
		this.character_id_0 = character_id_0;
		this.character_id_1 = character_id_1;
		this.character_id_2 = character_id_2;
		this.character_id_3 = character_id_3;
		this.character_id_4 = character_id_4;
		this.character_id_5 = character_id_5;
		this.character_id_6 = character_id_6;
		this.character_id_7 = character_id_7;
		this.character_id_8 = character_id_8;
		this.character_id_9 = character_id_9;
		this.levelUpScreen = levelUpScreen;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	message;
	/** @type {Phaser.GameObjects.Image} */
	slot_4;
	/** @type {Phaser.GameObjects.Image} */
	slot_1;
	/** @type {Phaser.GameObjects.Image} */
	slot_2;
	/** @type {Phaser.GameObjects.Image} */
	slot_3;
	/** @type {Phaser.GameObjects.Image} */
	slot_5;
	/** @type {Phaser.GameObjects.Container} */
	slots;
	/** @type {Phaser.GameObjects.Text} */
	username;
	/** @type {Phaser.GameObjects.Image} */
	character_id_0;
	/** @type {Phaser.GameObjects.Image} */
	character_id_1;
	/** @type {Phaser.GameObjects.Image} */
	character_id_2;
	/** @type {Phaser.GameObjects.Image} */
	character_id_3;
	/** @type {Phaser.GameObjects.Image} */
	character_id_4;
	/** @type {Phaser.GameObjects.Image} */
	character_id_5;
	/** @type {Phaser.GameObjects.Image} */
	character_id_6;
	/** @type {Phaser.GameObjects.Image} */
	character_id_7;
	/** @type {Phaser.GameObjects.Image} */
	character_id_8;
	/** @type {Phaser.GameObjects.Image} */
	character_id_9;
	/** @type {Phaser.GameObjects.Container} */
	levelUpScreen;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		if(menusMusic.isPlaying == false){
			menusMusic.play(musicConfig)
			battleMusic.pause()
			console.log(menusMusic)
		}
	}

	start(){
	}

	update(){
		if(goToProfile){
			this.scene.start("Profile");
			goToProfile = false;
		}else if(goToChooseChar){
			this.scene.start("ChooseCharactersMenu");
			goToChooseChar = false;
		}else if(goToCharactersAndCards){
			this.scene.start("CharactersAndCards");
			goToCharactersAndCards = false;
		}else if(goToMatch) {
			this.scene.start("Match");
			goToMatch = false;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
