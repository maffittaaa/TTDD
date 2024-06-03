
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
		this.add.image(960, 540, "Specasdossheets");

		// Characters
		const characters = this.add.container(0, 0);
		characters.name = "Characters";
		characters.scaleX = 1.5;
		characters.scaleY = 1.5;

		// Characters_1
		const characters_1 = this.add.container(37, -15);
		characters_1.visible = false;
		characters.add(characters_1);

		// character_id_3
		const character_id_3 = this.add.image(620, 259, "cartas2_Imprimir", 0);
		character_id_3.name = "character_id_3";
		character_id_3.scaleX = 0.5;
		character_id_3.scaleY = 0.5;
		characters_1.add(character_id_3);

		// onPointerDownScript_11
		const onPointerDownScript_11 = new OnPointerDownScript(character_id_3);

		// pushActionScript_11
		new PushActionScript(onPointerDownScript_11);

		// descriptionsMechanism_21
		const descriptionsMechanism_21 = new DescriptionsMechanism(character_id_3);

		// glowFx_10
		character_id_3.preFX.addGlow(16777215, 4, 0, false);

		// character_id_1
		const character_id_1 = this.add.image(143, 259, "cartas1_Imprimir", 8);
		character_id_1.name = "character_id_1";
		character_id_1.scaleX = 0.5;
		character_id_1.scaleY = 0.5;
		characters_1.add(character_id_1);

		// onPointerDownScript_10
		const onPointerDownScript_10 = new OnPointerDownScript(character_id_1);

		// pushActionScript_10
		new PushActionScript(onPointerDownScript_10);

		// descriptionsMechanism_14
		const descriptionsMechanism_14 = new DescriptionsMechanism(character_id_1);

		// glowFx_9
		character_id_1.preFX.addGlow(16777215, 4, 0, false);

		// character_id_6
		const character_id_6 = this.add.image(143, 510, "cartas1_Imprimir", 7);
		character_id_6.name = "character_id_6";
		character_id_6.scaleX = 0.5;
		character_id_6.scaleY = 0.5;
		characters_1.add(character_id_6);

		// onPointerDownScript_9
		const onPointerDownScript_9 = new OnPointerDownScript(character_id_6);

		// pushActionScript_9
		new PushActionScript(onPointerDownScript_9);

		// descriptionsMechanism_15
		const descriptionsMechanism_15 = new DescriptionsMechanism(character_id_6);

		// glowFx_8
		character_id_6.preFX.addGlow(16777215, 4, 0, false);

		// character_id_2
		const character_id_2 = this.add.image(302, 259, "cartas1_Imprimir", 6);
		character_id_2.name = "character_id_2";
		character_id_2.scaleX = 0.5;
		character_id_2.scaleY = 0.5;
		characters_1.add(character_id_2);

		// onPointerDownScript_8
		const onPointerDownScript_8 = new OnPointerDownScript(character_id_2);

		// pushActionScript_8
		new PushActionScript(onPointerDownScript_8);

		// descriptionsMechanism_16
		const descriptionsMechanism_16 = new DescriptionsMechanism(character_id_2);

		// glowFx_7
		character_id_2.preFX.addGlow(16777215, 4, 0, false);

		// character_id_5
		const character_id_5 = this.add.image(460, 259, "cartas1_Imprimir", 5);
		character_id_5.name = "character_id_5";
		character_id_5.scaleX = 0.5;
		character_id_5.scaleY = 0.5;
		characters_1.add(character_id_5);

		// onPointerDownScript_7
		const onPointerDownScript_7 = new OnPointerDownScript(character_id_5);

		// pushActionScript_7
		new PushActionScript(onPointerDownScript_7);

		// descriptionsMechanism_17
		const descriptionsMechanism_17 = new DescriptionsMechanism(character_id_5);

		// glowFx_6
		character_id_5.preFX.addGlow(16777215, 4, 0, false);

		// character_id_10
		const character_id_10 = this.add.image(620, 510, "cartas1_Imprimir", 4);
		character_id_10.name = "character_id_10";
		character_id_10.scaleX = 0.5;
		character_id_10.scaleY = 0.5;
		characters_1.add(character_id_10);

		// onPointerDownScript_6
		const onPointerDownScript_6 = new OnPointerDownScript(character_id_10);

		// pushActionScript_6
		new PushActionScript(onPointerDownScript_6);

		// descriptionsMechanism_18
		const descriptionsMechanism_18 = new DescriptionsMechanism(character_id_10);

		// glowFx_5
		character_id_10.preFX.addGlow(16777215, 4, 0, false);

		// character_id_8
		const character_id_8 = this.add.image(302, 510, "cartas1_Imprimir", 3);
		character_id_8.name = "character_id_8";
		character_id_8.scaleX = 0.5;
		character_id_8.scaleY = 0.5;
		characters_1.add(character_id_8);

		// onPointerDownScript_5
		const onPointerDownScript_5 = new OnPointerDownScript(character_id_8);

		// pushActionScript_5
		new PushActionScript(onPointerDownScript_5);

		// descriptionsMechanism_19
		const descriptionsMechanism_19 = new DescriptionsMechanism(character_id_8);

		// glowFx_4
		character_id_8.preFX.addGlow(16777215, 4, 0, false);

		// character_id_9
		const character_id_9 = this.add.image(460, 510, "cartas1_Imprimir", 2);
		character_id_9.name = "character_id_9";
		character_id_9.scaleX = 0.5;
		character_id_9.scaleY = 0.5;
		characters_1.add(character_id_9);

		// onPointerDownScript_4
		const onPointerDownScript_4 = new OnPointerDownScript(character_id_9);

		// pushActionScript_4
		new PushActionScript(onPointerDownScript_4);

		// descriptionsMechanism_20
		const descriptionsMechanism_20 = new DescriptionsMechanism(character_id_9);

		// glowFx_3
		character_id_9.preFX.addGlow(16777215, 4, 0, false);

		// character_id_7
		const character_id_7 = this.add.image(778, 510, "cartas1_Imprimir", 1);
		character_id_7.name = "character_id_7";
		character_id_7.scaleX = 0.5;
		character_id_7.scaleY = 0.5;
		characters_1.add(character_id_7);

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(character_id_7);

		// pushActionScript_3
		new PushActionScript(onPointerDownScript_3);

		// descriptionsMechanism_13
		const descriptionsMechanism_13 = new DescriptionsMechanism(character_id_7);

		// glowFx_2
		character_id_7.preFX.addGlow(16777215, 4, 0, false);

		// character_id_4
		const character_id_4 = this.add.image(777, 259, "cartas1_Imprimir", 0);
		character_id_4.name = "character_id_4";
		character_id_4.scaleX = 0.5;
		character_id_4.scaleY = 0.5;
		characters_1.add(character_id_4);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(character_id_4);

		// pushActionScript
		new PushActionScript(onPointerDownScript_2);

		// descriptionsMechanism_12
		const descriptionsMechanism_12 = new DescriptionsMechanism(character_id_4);

		// glowFx_1
		character_id_4.preFX.addGlow(16777215, 4, 0, false);

		// cartas4_Imprimir_1
		const cartas4_Imprimir_1 = this.add.image(1038, 343, "cartas2_Imprimir", 1);
		cartas4_Imprimir_1.scaleX = 0.9;
		cartas4_Imprimir_1.scaleY = 0.9;
		characters_1.add(cartas4_Imprimir_1);

		// Card_description_1
		const card_description_1 = this.add.text(1038, 554, "", {});
		card_description_1.name = "Card_description_1";
		card_description_1.setOrigin(0.5, -0.0011025686642976021);
		card_description_1.text = "Character description";
		card_description_1.setStyle({ "fontFamily": "minecraft" });
		characters_1.add(card_description_1);

		// characters_option_button
		const characters_option_button = this.add.image(401, 360, "cartas2_Imprimir", 1);
		characters_option_button.name = "characters_option_button";
		characters.add(characters_option_button);

		// onPointerDownScript_23
		const onPointerDownScript_23 = new OnPointerDownScript(characters_option_button);

		// pushActionScript_23
		new PushActionScript(onPointerDownScript_23);

		// descriptionsMechanism
		const descriptionsMechanism = new DescriptionsMechanism(characters_option_button);

		// Cards
		const cards = this.add.container(0, 0);
		cards.name = "Cards";
		cards.scaleX = 1.5;
		cards.scaleY = 1.5;

		// Cards_1
		const cards_1 = this.add.container(37, -15);
		cards_1.visible = false;
		cards.add(cards_1);

		// card_id_1
		const card_id_1 = this.add.image(620, 259, "cartas3_Imprimir", 4);
		card_id_1.name = "card_id_1";
		card_id_1.scaleX = 0.5;
		card_id_1.scaleY = 0.5;
		cards_1.add(card_id_1);

		// onPointerDownScript_12
		const onPointerDownScript_12 = new OnPointerDownScript(card_id_1);

		// pushActionScript_12
		new PushActionScript(onPointerDownScript_12);

		// descriptionsMechanism_11
		const descriptionsMechanism_11 = new DescriptionsMechanism(card_id_1);

		// glowFx
		card_id_1.preFX.addGlow(16777215, 4, 0, false);

		// card_id_6
		const card_id_6 = this.add.image(143, 259, "cartas4_Imprimir", 1);
		card_id_6.name = "card_id_6";
		card_id_6.scaleX = 0.5;
		card_id_6.scaleY = 0.5;
		cards_1.add(card_id_6);

		// onPointerDownScript_13
		const onPointerDownScript_13 = new OnPointerDownScript(card_id_6);

		// pushActionScript_13
		new PushActionScript(onPointerDownScript_13);

		// descriptionsMechanism_10
		const descriptionsMechanism_10 = new DescriptionsMechanism(card_id_6);

		// glowFx
		card_id_6.preFX.addGlow(16777215, 4, 0, false);

		// card_id_4
		const card_id_4 = this.add.image(143, 510, "cartas4_Imprimir", 0);
		card_id_4.name = "card_id_4";
		card_id_4.scaleX = 0.5;
		card_id_4.scaleY = 0.5;
		cards_1.add(card_id_4);

		// onPointerDownScript_14
		const onPointerDownScript_14 = new OnPointerDownScript(card_id_4);

		// pushActionScript_14
		new PushActionScript(onPointerDownScript_14);

		// descriptionsMechanism_9
		const descriptionsMechanism_9 = new DescriptionsMechanism(card_id_4);

		// glowFx
		card_id_4.preFX.addGlow(16777215, 4, 0, false);

		// card_id_10
		const card_id_10 = this.add.image(302, 259, "cartas4_Imprimir", 2);
		card_id_10.name = "card_id_10";
		card_id_10.scaleX = 0.5;
		card_id_10.scaleY = 0.5;
		cards_1.add(card_id_10);

		// onPointerDownScript_15
		const onPointerDownScript_15 = new OnPointerDownScript(card_id_10);

		// pushActionScript_15
		new PushActionScript(onPointerDownScript_15);

		// descriptionsMechanism_8
		const descriptionsMechanism_8 = new DescriptionsMechanism(card_id_10);

		// glowFx
		card_id_10.preFX.addGlow(16777215, 4, 0, false);

		// card_id_3
		const card_id_3 = this.add.image(460, 259, "cartas3_Imprimir", 5);
		card_id_3.name = "card_id_3";
		card_id_3.scaleX = 0.5;
		card_id_3.scaleY = 0.5;
		cards_1.add(card_id_3);

		// onPointerDownScript_16
		const onPointerDownScript_16 = new OnPointerDownScript(card_id_3);

		// pushActionScript_16
		new PushActionScript(onPointerDownScript_16);

		// descriptionsMechanism_7
		const descriptionsMechanism_7 = new DescriptionsMechanism(card_id_3);

		// glowFx
		card_id_3.preFX.addGlow(16777215, 4, 0, false);

		// card_id_7
		const card_id_7 = this.add.image(620, 510, "cartas3_Imprimir", 8);
		card_id_7.name = "card_id_7";
		card_id_7.scaleX = 0.5;
		card_id_7.scaleY = 0.5;
		cards_1.add(card_id_7);

		// onPointerDownScript_17
		const onPointerDownScript_17 = new OnPointerDownScript(card_id_7);

		// pushActionScript_17
		new PushActionScript(onPointerDownScript_17);

		// descriptionsMechanism_6
		const descriptionsMechanism_6 = new DescriptionsMechanism(card_id_7);

		// glowFx
		card_id_7.preFX.addGlow(16777215, 4, 0, false);

		// card_id_2
		const card_id_2 = this.add.image(302, 510, "cartas3_Imprimir", 6);
		card_id_2.name = "card_id_2";
		card_id_2.scaleX = 0.5;
		card_id_2.scaleY = 0.5;
		cards_1.add(card_id_2);

		// onPointerDownScript_18
		const onPointerDownScript_18 = new OnPointerDownScript(card_id_2);

		// pushActionScript_18
		new PushActionScript(onPointerDownScript_18);

		// descriptionsMechanism_5
		const descriptionsMechanism_5 = new DescriptionsMechanism(card_id_2);

		// glowFx
		card_id_2.preFX.addGlow(16777215, 4, 0, false);

		// card_id_8
		const card_id_8 = this.add.image(460, 510, "cartas3_Imprimir", 7);
		card_id_8.name = "card_id_8";
		card_id_8.scaleX = 0.5;
		card_id_8.scaleY = 0.5;
		cards_1.add(card_id_8);

		// onPointerDownScript_19
		const onPointerDownScript_19 = new OnPointerDownScript(card_id_8);

		// pushActionScript_19
		new PushActionScript(onPointerDownScript_19);

		// descriptionsMechanism_4
		const descriptionsMechanism_4 = new DescriptionsMechanism(card_id_8);

		// glowFx
		card_id_8.preFX.addGlow(16777215, 4, 0, false);

		// card_id_9
		const card_id_9 = this.add.image(778, 510, "cartas3_Imprimir", 2);
		card_id_9.name = "card_id_9";
		card_id_9.scaleX = 0.5;
		card_id_9.scaleY = 0.5;
		cards_1.add(card_id_9);

		// onPointerDownScript_21
		const onPointerDownScript_21 = new OnPointerDownScript(card_id_9);

		// pushActionScript_21
		new PushActionScript(onPointerDownScript_21);

		// descriptionsMechanism_3
		const descriptionsMechanism_3 = new DescriptionsMechanism(card_id_9);

		// glowFx
		card_id_9.preFX.addGlow(16777215, 4, 0, false);

		// card_id_5
		const card_id_5 = this.add.image(777, 259, "cartas3_Imprimir", 3);
		card_id_5.name = "card_id_5";
		card_id_5.scaleX = 0.5;
		card_id_5.scaleY = 0.5;
		cards_1.add(card_id_5);

		// onPointerDownScript_22
		const onPointerDownScript_22 = new OnPointerDownScript(card_id_5);

		// pushActionScript_22
		new PushActionScript(onPointerDownScript_22);

		// descriptionsMechanism_2
		const descriptionsMechanism_2 = new DescriptionsMechanism(card_id_5);

		// glowFx
		card_id_5.preFX.addGlow(16777215, 4, 0, false);

		// cartas4_Imprimir
		const cartas4_Imprimir = this.add.image(1038, 343, "cartas4_Imprimir", 3);
		cartas4_Imprimir.scaleX = 0.9;
		cartas4_Imprimir.scaleY = 0.9;
		cards_1.add(cartas4_Imprimir);

		// Card_description
		const card_description = this.add.text(1038, 554, "", {});
		card_description.name = "Card_description";
		card_description.setOrigin(0.5, -0.022889636867095456);
		card_description.text = "Card description";
		card_description.setStyle({ "align": "center", "fontFamily": "minecraft" });
		cards_1.add(card_description);

		// cartas4_Imprimir3
		const cartas4_Imprimir3 = this.add.image(864, 360, "cartas4_Imprimir", 3);
		cartas4_Imprimir3.name = "cartas4_Imprimir3";
		cards.add(cartas4_Imprimir3);

		// onPointerDownScript_24
		const onPointerDownScript_24 = new OnPointerDownScript(cartas4_Imprimir3);

		// pushActionScript_24
		new PushActionScript(onPointerDownScript_24);

		// descriptionsMechanism_1
		const descriptionsMechanism_1 = new DescriptionsMechanism(cartas4_Imprimir3);

		// Button Choose Characters
		const button_Choose_Characters = this.add.container(-51, 12);
		button_Choose_Characters.scaleX = 1.5;
		button_Choose_Characters.scaleY = 1.5;

		// highlight
		const highlight = this.add.rectangle(180, 48, 128, 128);
		highlight.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight.scaleX = 1.44;
		highlight.scaleY = 0.21995512106258827;
		highlight.isFilled = true;
		highlight.fillColor = 0;
		highlight.strokeColor = 4194559;
		highlight.strokeAlpha = 4;
		highlight.lineWidth = 4;
		button_Choose_Characters.add(highlight);

		// glowFx_13
		highlight.postFX.addGlow(4194559, 3, 3, false);

		// ChooseCharacters
		const chooseCharacters = this.add.text(180, 48, "", {});
		chooseCharacters.setInteractive(new Phaser.Geom.Rectangle(0, 0, 949.9773032706995, 100.90937292581162), Phaser.Geom.Rectangle.Contains);
		chooseCharacters.scaleX = 0.18;
		chooseCharacters.scaleY = 0.18;
		chooseCharacters.setOrigin(0.5, 0.5);
		chooseCharacters.text = "Choose Characters";
		chooseCharacters.setStyle({ "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#4000ff", "strokeThickness":10});
		button_Choose_Characters.add(chooseCharacters);

		// goToScene_1
		const goToScene_1 = new GoToScene(chooseCharacters);

		// Characters and Cards
		const characters_and_Cards = this.add.container(-66, 12);
		characters_and_Cards.scaleX = 1.5;
		characters_and_Cards.scaleY = 1.5;

		// highlight_2
		const highlight_2 = this.add.rectangle(422, 48, 128, 128);
		highlight_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_2.scaleX = 1.68;
		highlight_2.scaleY = 0.21995512106258827;
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
		characters_And_Cards.scaleX = 0.18;
		characters_And_Cards.scaleY = 0.18;
		characters_And_Cards.setOrigin(0.5, 0.5);
		characters_And_Cards.text = "Characters and Cards";
		characters_And_Cards.setStyle({ "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#4000ff", "strokeThickness":10});
		characters_and_Cards.add(characters_And_Cards);

		// goToScene_2
		const goToScene_2 = new GoToScene(characters_And_Cards);

		// Button Profile
		const button_Profile = this.add.container(-95, 12);
		button_Profile.scaleX = 1.5;
		button_Profile.scaleY = 1.5;

		// highlight_3
		const highlight_3 = this.add.rectangle(622, 48, 128, 128);
		highlight_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_3.scaleX = 0.63;
		highlight_3.scaleY = 0.21995512106258827;
		highlight_3.isFilled = true;
		highlight_3.fillColor = 0;
		highlight_3.strokeColor = 4194559;
		highlight_3.strokeAlpha = 4;
		highlight_3.lineWidth = 4;
		button_Profile.add(highlight_3);

		// glowFx_16
		highlight_3.postFX.addGlow(4194559, 3, 3, false);

		// Profile
		const profile = this.add.text(622, 48, "", {});
		profile.setInteractive(new Phaser.Geom.Rectangle(-15, -17, 351.15663686934727, 134.83406914622725), Phaser.Geom.Rectangle.Contains);
		profile.scaleX = 0.18;
		profile.scaleY = 0.18;
		profile.setOrigin(0.5, 0.5);
		profile.text = "Profile";
		profile.setStyle({ "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#4000ff", "strokeThickness":10});
		button_Profile.add(profile);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(profile);

		// pushActionScript_1
		new PushActionScript(onPointerDownScript_1);

		// goToScene_4
		const goToScene_4 = new GoToScene(profile);

		// Button Go Back To Home Page
		const button_Go_Back_To_Home_Page = this.add.container(-121, 12);
		button_Go_Back_To_Home_Page.scaleX = 1.5;
		button_Go_Back_To_Home_Page.scaleY = 1.5;

		// highlight_4
		const highlight_4 = this.add.rectangle(808, 48, 128, 128);
		highlight_4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_4.scaleX = 1.53;
		highlight_4.scaleY = 0.21995512106258827;
		highlight_4.isFilled = true;
		highlight_4.fillColor = 0;
		highlight_4.strokeColor = 4194559;
		highlight_4.strokeAlpha = 4;
		highlight_4.lineWidth = 4;
		button_Go_Back_To_Home_Page.add(highlight_4);

		// glowFx_17
		highlight_4.postFX.addGlow(4194559, 3, 3, false);

		// ButtonGoToHomePage
		const buttonGoToHomePage = this.add.text(808, 48, "", {});
		buttonGoToHomePage.setInteractive(new Phaser.Geom.Rectangle(-3, 3, 990.1760256343523, 103.70293702497405), Phaser.Geom.Rectangle.Contains);
		buttonGoToHomePage.scaleX = 0.18;
		buttonGoToHomePage.scaleY = 0.18;
		buttonGoToHomePage.setOrigin(0.5, 0.5);
		buttonGoToHomePage.text = "Back To Home Page";
		buttonGoToHomePage.setStyle({ "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#4000ff", "strokeThickness":10});
		button_Go_Back_To_Home_Page.add(buttonGoToHomePage);

		// onPointerDownScript_25
		const onPointerDownScript_25 = new OnPointerDownScript(buttonGoToHomePage);

		// pushActionScript_25
		new PushActionScript(onPointerDownScript_25);

		// goToScene
		const goToScene = new GoToScene(buttonGoToHomePage);

		// descriptionsMechanism_21 (prefab fields)
		descriptionsMechanism_21.option = "Char";
		descriptionsMechanism_21.id = 3;
		descriptionsMechanism_21.frameId = 0;

		// descriptionsMechanism_14 (prefab fields)
		descriptionsMechanism_14.option = "Char";
		descriptionsMechanism_14.id = 1;
		descriptionsMechanism_14.frameId = 8;

		// descriptionsMechanism_15 (prefab fields)
		descriptionsMechanism_15.option = "Char";
		descriptionsMechanism_15.id = 6;
		descriptionsMechanism_15.frameId = 7;

		// descriptionsMechanism_16 (prefab fields)
		descriptionsMechanism_16.option = "Char";
		descriptionsMechanism_16.id = 2;
		descriptionsMechanism_16.frameId = 6;

		// descriptionsMechanism_17 (prefab fields)
		descriptionsMechanism_17.option = "Char";
		descriptionsMechanism_17.id = 5;
		descriptionsMechanism_17.frameId = 5;

		// descriptionsMechanism_18 (prefab fields)
		descriptionsMechanism_18.option = "Char";
		descriptionsMechanism_18.id = 10;
		descriptionsMechanism_18.frameId = 4;

		// descriptionsMechanism_19 (prefab fields)
		descriptionsMechanism_19.option = "Char";
		descriptionsMechanism_19.id = 8;
		descriptionsMechanism_19.frameId = 3;

		// descriptionsMechanism_20 (prefab fields)
		descriptionsMechanism_20.option = "Char";
		descriptionsMechanism_20.id = 9;
		descriptionsMechanism_20.frameId = 2;

		// descriptionsMechanism_13 (prefab fields)
		descriptionsMechanism_13.option = "Char";
		descriptionsMechanism_13.id = 7;
		descriptionsMechanism_13.frameId = 1;

		// descriptionsMechanism_12 (prefab fields)
		descriptionsMechanism_12.option = "Char";
		descriptionsMechanism_12.id = 4;
		descriptionsMechanism_12.frameId = 0;

		// descriptionsMechanism (prefab fields)
		descriptionsMechanism.option = "Characters";

		// descriptionsMechanism_11 (prefab fields)
		descriptionsMechanism_11.option = "Card";
		descriptionsMechanism_11.id = 1;
		descriptionsMechanism_11.frameId = 4;

		// descriptionsMechanism_10 (prefab fields)
		descriptionsMechanism_10.option = "Card";
		descriptionsMechanism_10.id = 6;
		descriptionsMechanism_10.frameId = 1;

		// descriptionsMechanism_9 (prefab fields)
		descriptionsMechanism_9.option = "Card";
		descriptionsMechanism_9.id = 4;
		descriptionsMechanism_9.frameId = 0;

		// descriptionsMechanism_8 (prefab fields)
		descriptionsMechanism_8.option = "Card";
		descriptionsMechanism_8.id = 10;
		descriptionsMechanism_8.frameId = 2;

		// descriptionsMechanism_7 (prefab fields)
		descriptionsMechanism_7.option = "Card";
		descriptionsMechanism_7.id = 3;
		descriptionsMechanism_7.frameId = 5;

		// descriptionsMechanism_6 (prefab fields)
		descriptionsMechanism_6.option = "Card";
		descriptionsMechanism_6.id = 7;
		descriptionsMechanism_6.frameId = 8;

		// descriptionsMechanism_5 (prefab fields)
		descriptionsMechanism_5.option = "Card";
		descriptionsMechanism_5.id = 2;
		descriptionsMechanism_5.frameId = 6;

		// descriptionsMechanism_4 (prefab fields)
		descriptionsMechanism_4.option = "Card";
		descriptionsMechanism_4.id = 8;
		descriptionsMechanism_4.frameId = 7;

		// descriptionsMechanism_3 (prefab fields)
		descriptionsMechanism_3.option = "Card";
		descriptionsMechanism_3.id = 9;
		descriptionsMechanism_3.frameId = 2;

		// descriptionsMechanism_2 (prefab fields)
		descriptionsMechanism_2.option = "Card";
		descriptionsMechanism_2.id = 5;
		descriptionsMechanism_2.frameId = 3;

		// descriptionsMechanism_1 (prefab fields)
		descriptionsMechanism_1.option = "Cards";

		// goToScene_1 (prefab fields)
		goToScene_1.sceneChosen = "ChooseCharacters";

		// goToScene_2 (prefab fields)
		goToScene_2.sceneChosen = "CharactersAndCards";

		// goToScene_4 (prefab fields)
		goToScene_4.sceneChosen = "Profile";

		// goToScene (prefab fields)
		goToScene.sceneChosen = "HomePage";

		this.character_id_3 = character_id_3;
		this.character_id_1 = character_id_1;
		this.character_id_6 = character_id_6;
		this.character_id_2 = character_id_2;
		this.character_id_5 = character_id_5;
		this.character_id_10 = character_id_10;
		this.character_id_8 = character_id_8;
		this.character_id_9 = character_id_9;
		this.character_id_7 = character_id_7;
		this.character_id_4 = character_id_4;
		this.card_description_1 = card_description_1;
		this.characters_option_button = characters_option_button;
		this.characters = characters;
		this.card_id_1 = card_id_1;
		this.card_id_6 = card_id_6;
		this.card_id_4 = card_id_4;
		this.card_id_10 = card_id_10;
		this.card_id_3 = card_id_3;
		this.card_id_7 = card_id_7;
		this.card_id_2 = card_id_2;
		this.card_id_8 = card_id_8;
		this.card_id_9 = card_id_9;
		this.card_id_5 = card_id_5;
		this.card_description = card_description;
		this.cartas4_Imprimir3 = cartas4_Imprimir3;
		this.cards = cards;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	character_id_3;
	/** @type {Phaser.GameObjects.Image} */
	character_id_1;
	/** @type {Phaser.GameObjects.Image} */
	character_id_6;
	/** @type {Phaser.GameObjects.Image} */
	character_id_2;
	/** @type {Phaser.GameObjects.Image} */
	character_id_5;
	/** @type {Phaser.GameObjects.Image} */
	character_id_10;
	/** @type {Phaser.GameObjects.Image} */
	character_id_8;
	/** @type {Phaser.GameObjects.Image} */
	character_id_9;
	/** @type {Phaser.GameObjects.Image} */
	character_id_7;
	/** @type {Phaser.GameObjects.Image} */
	character_id_4;
	/** @type {Phaser.GameObjects.Text} */
	card_description_1;
	/** @type {Phaser.GameObjects.Image} */
	characters_option_button;
	/** @type {Phaser.GameObjects.Container} */
	characters;
	/** @type {Phaser.GameObjects.Image} */
	card_id_1;
	/** @type {Phaser.GameObjects.Image} */
	card_id_6;
	/** @type {Phaser.GameObjects.Image} */
	card_id_4;
	/** @type {Phaser.GameObjects.Image} */
	card_id_10;
	/** @type {Phaser.GameObjects.Image} */
	card_id_3;
	/** @type {Phaser.GameObjects.Image} */
	card_id_7;
	/** @type {Phaser.GameObjects.Image} */
	card_id_2;
	/** @type {Phaser.GameObjects.Image} */
	card_id_8;
	/** @type {Phaser.GameObjects.Image} */
	card_id_9;
	/** @type {Phaser.GameObjects.Image} */
	card_id_5;
	/** @type {Phaser.GameObjects.Text} */
	card_description;
	/** @type {Phaser.GameObjects.Image} */
	cartas4_Imprimir3;
	/** @type {Phaser.GameObjects.Container} */
	cards;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	update(){
		if(goToProfile){
			this.scene.start("Profile")
			goToProfile = false
		}else if(goToChooseChar){
			this.scene.start("ChooseCharactersMenu")
			goToChooseChar = false
		}else if(goToCharactersAndCards){
			this.scene.start("CharactersAndCards")
			goToCharactersAndCards = false
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
