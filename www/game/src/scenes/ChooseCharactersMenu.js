
// You can write more code here
goToProfile = false

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
		const specasdossheets = this.add.image(640, 360, "Specasdossheets");
		specasdossheets.scaleX = 0.66666;
		specasdossheets.scaleY = 0.66666;

		// Profile
		const profile = this.add.text(399, 48, "", {});
		profile.setInteractive(new Phaser.Geom.Rectangle(-15, -17, 100.09315749661158, 53.83254699275936), Phaser.Geom.Rectangle.Contains);
		profile.setOrigin(0.5, 0.5);
		profile.text = "Profile";

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(profile);

		// pushActionScript_1
		new PushActionScript(onPointerDownScript_1);

		// goToProfile
		new GoToProfile(profile);

		// highlight
		const highlight = this.add.rectangle(179, 48, 128, 128);
		highlight.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight.scaleX = 1.333615647299753;
		highlight.scaleY = 0.1807207308530191;
		highlight.fillColor = 4194559;
		highlight.isStroked = true;
		highlight.strokeColor = 4194559;
		highlight.strokeAlpha = 4;
		highlight.lineWidth = 4;

		// container_1
		const container_1 = this.add.container(-1, -38);

		// character_id_3
		const character_id_3 = this.add.image(620, 268, "cartas2_Imprimir", 0);
		character_id_3.scaleX = 0.5;
		character_id_3.scaleY = 0.5;
		container_1.add(character_id_3);

		// onPointerDownScript_11
		const onPointerDownScript_11 = new OnPointerDownScript(character_id_3);

		// pushActionScript_11
		new PushActionScript(onPointerDownScript_11);

		// handleChooseMechanism_9
		const handleChooseMechanism_9 = new HandleChooseMechanism(character_id_3);

		// character_id_1
		const character_id_1 = this.add.image(143, 268, "cartas1_Imprimir", 8);
		character_id_1.scaleX = 0.5;
		character_id_1.scaleY = 0.5;
		container_1.add(character_id_1);

		// onPointerDownScript_10
		const onPointerDownScript_10 = new OnPointerDownScript(character_id_1);

		// pushActionScript_10
		new PushActionScript(onPointerDownScript_10);

		// handleChooseMechanism_8
		const handleChooseMechanism_8 = new HandleChooseMechanism(character_id_1);

		// character_id_6
		const character_id_6 = this.add.image(143, 491, "cartas1_Imprimir", 7);
		character_id_6.scaleX = 0.5;
		character_id_6.scaleY = 0.5;
		container_1.add(character_id_6);

		// onPointerDownScript_9
		const onPointerDownScript_9 = new OnPointerDownScript(character_id_6);

		// pushActionScript_9
		new PushActionScript(onPointerDownScript_9);

		// handleChooseMechanism_7
		const handleChooseMechanism_7 = new HandleChooseMechanism(character_id_6);

		// character_id_2
		const character_id_2 = this.add.image(302, 268, "cartas1_Imprimir", 6);
		character_id_2.scaleX = 0.5;
		character_id_2.scaleY = 0.5;
		container_1.add(character_id_2);

		// onPointerDownScript_8
		const onPointerDownScript_8 = new OnPointerDownScript(character_id_2);

		// pushActionScript_8
		new PushActionScript(onPointerDownScript_8);

		// handleChooseMechanism_6
		const handleChooseMechanism_6 = new HandleChooseMechanism(character_id_2);

		// character_id_5
		const character_id_5 = this.add.image(460, 268, "cartas1_Imprimir", 5);
		character_id_5.scaleX = 0.5;
		character_id_5.scaleY = 0.5;
		container_1.add(character_id_5);

		// onPointerDownScript_7
		const onPointerDownScript_7 = new OnPointerDownScript(character_id_5);

		// pushActionScript_7
		new PushActionScript(onPointerDownScript_7);

		// handleChooseMechanism_5
		const handleChooseMechanism_5 = new HandleChooseMechanism(character_id_5);

		// character_id_10
		const character_id_10 = this.add.image(620, 491, "cartas1_Imprimir", 4);
		character_id_10.scaleX = 0.5;
		character_id_10.scaleY = 0.5;
		container_1.add(character_id_10);

		// onPointerDownScript_6
		const onPointerDownScript_6 = new OnPointerDownScript(character_id_10);

		// pushActionScript_6
		new PushActionScript(onPointerDownScript_6);

		// handleChooseMechanism_4
		const handleChooseMechanism_4 = new HandleChooseMechanism(character_id_10);

		// character_id_8
		const character_id_8 = this.add.image(302, 491, "cartas1_Imprimir", 3);
		character_id_8.scaleX = 0.5;
		character_id_8.scaleY = 0.5;
		container_1.add(character_id_8);

		// onPointerDownScript_5
		const onPointerDownScript_5 = new OnPointerDownScript(character_id_8);

		// pushActionScript_5
		new PushActionScript(onPointerDownScript_5);

		// handleChooseMechanism_3
		const handleChooseMechanism_3 = new HandleChooseMechanism(character_id_8);

		// character_id_9
		const character_id_9 = this.add.image(460, 491, "cartas1_Imprimir", 2);
		character_id_9.scaleX = 0.5;
		character_id_9.scaleY = 0.5;
		container_1.add(character_id_9);

		// onPointerDownScript_4
		const onPointerDownScript_4 = new OnPointerDownScript(character_id_9);

		// pushActionScript_4
		new PushActionScript(onPointerDownScript_4);

		// handleChooseMechanism_2
		const handleChooseMechanism_2 = new HandleChooseMechanism(character_id_9);

		// character_id_7
		const character_id_7 = this.add.image(778, 491, "cartas1_Imprimir", 1);
		character_id_7.scaleX = 0.5;
		character_id_7.scaleY = 0.5;
		container_1.add(character_id_7);

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(character_id_7);

		// pushActionScript_3
		new PushActionScript(onPointerDownScript_3);

		// handleChooseMechanism_1
		const handleChooseMechanism_1 = new HandleChooseMechanism(character_id_7);

		// character_id_4
		const character_id_4 = this.add.image(777, 268, "cartas1_Imprimir", 0);
		character_id_4.scaleX = 0.5;
		character_id_4.scaleY = 0.5;
		container_1.add(character_id_4);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(character_id_4);

		// pushActionScript
		new PushActionScript(onPointerDownScript_2);

		// handleChooseMechanism
		const handleChooseMechanism = new HandleChooseMechanism(character_id_4);

		// ChooseCharacters
		const chooseCharacters = this.add.text(180, 48, "", {});
		chooseCharacters.setInteractive(new Phaser.Geom.Rectangle(0, 0, 154, 15), Phaser.Geom.Rectangle.Contains);
		chooseCharacters.setOrigin(0.5, 0.5);
		chooseCharacters.text = "Choose Characters";

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(chooseCharacters);

		// pushActionScript_2
		new PushActionScript(onPointerDownScript);

		// container_2
		const container_2 = this.add.container(0, -38);

		// slot_id_4
		const slot_id_4 = this.add.image(967, 325, "base", 0);
		slot_id_4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 150), Phaser.Geom.Rectangle.Contains);
		slot_id_4.scaleX = 0.5;
		slot_id_4.scaleY = 0.5;
		container_2.add(slot_id_4);

		// handleChooseMechanism_13
		const handleChooseMechanism_13 = new HandleChooseMechanism(slot_id_4);

		// slot_id_1
		const slot_id_1 = this.add.image(1079, 266, "base", 0);
		slot_id_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 150), Phaser.Geom.Rectangle.Contains);
		slot_id_1.scaleX = 0.5;
		slot_id_1.scaleY = 0.5;
		container_2.add(slot_id_1);

		// handleChooseMechanism_12
		const handleChooseMechanism_12 = new HandleChooseMechanism(slot_id_1);

		// slot_id_2
		const slot_id_2 = this.add.image(1079, 378, "base", 0);
		slot_id_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 150), Phaser.Geom.Rectangle.Contains);
		slot_id_2.scaleX = 0.5;
		slot_id_2.scaleY = 0.5;
		container_2.add(slot_id_2);

		// handleChooseMechanism_11
		const handleChooseMechanism_11 = new HandleChooseMechanism(slot_id_2);

		// slot_id_3
		const slot_id_3 = this.add.image(1079, 487, "base", 0);
		slot_id_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 150), Phaser.Geom.Rectangle.Contains);
		slot_id_3.scaleX = 0.5;
		slot_id_3.scaleY = 0.5;
		container_2.add(slot_id_3);

		// handleChooseMechanism_10
		const handleChooseMechanism_10 = new HandleChooseMechanism(slot_id_3);

		// slot_id_5
		const slot_id_5 = this.add.image(969, 439, "base", 0);
		slot_id_5.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 150), Phaser.Geom.Rectangle.Contains);
		slot_id_5.scaleX = 0.5;
		slot_id_5.scaleY = 0.5;
		container_2.add(slot_id_5);

		// handleChooseMechanism_14
		const handleChooseMechanism_14 = new HandleChooseMechanism(slot_id_5);

		// text_1
		const text_1 = this.add.text(1054, 258, "", {});
		text_1.text = "Empty";
		container_2.add(text_1);

		// handleChooseMechanism_19
		const handleChooseMechanism_19 = new HandleChooseMechanism(text_1);

		// text_2
		const text_2 = this.add.text(1054, 370, "", {});
		text_2.text = "Empty";
		container_2.add(text_2);

		// handleChooseMechanism_18
		const handleChooseMechanism_18 = new HandleChooseMechanism(text_2);

		// text_3
		const text_3 = this.add.text(1055, 478, "", {});
		text_3.text = "Empty";
		container_2.add(text_3);

		// handleChooseMechanism_17
		const handleChooseMechanism_17 = new HandleChooseMechanism(text_3);

		// text_4
		const text_4 = this.add.text(942, 318, "", {});
		text_4.text = "Empty";
		container_2.add(text_4);

		// handleChooseMechanism_16
		const handleChooseMechanism_16 = new HandleChooseMechanism(text_4);

		// text_5
		const text_5 = this.add.text(945, 430, "", {});
		text_5.text = "Empty";
		container_2.add(text_5);

		// handleChooseMechanism_15
		const handleChooseMechanism_15 = new HandleChooseMechanism(text_5);

		// highlight_1
		const highlight_1 = this.add.rectangle(640, 632, 128, 128);
		highlight_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_1.scaleX = 0.9889080771893287;
		highlight_1.scaleY = 0.1807207308530191;
		highlight_1.fillColor = 4194559;
		highlight_1.isStroked = true;
		highlight_1.strokeColor = 4194559;
		highlight_1.strokeAlpha = 4;
		highlight_1.lineWidth = 4;

		// GoToMatch
		const goToMatch = this.add.text(640, 632, "", {});
		goToMatch.setInteractive(new Phaser.Geom.Rectangle(0, 0, 154, 15), Phaser.Geom.Rectangle.Contains);
		goToMatch.setOrigin(0.5, 0.5);
		goToMatch.text = "Find a Match";

		// onPointerDownScript_12
		const onPointerDownScript_12 = new OnPointerDownScript(goToMatch);

		// pushActionScript_12
		new PushActionScript(onPointerDownScript_12);

		// handleChooseMechanism_9 (prefab fields)
		handleChooseMechanism_9.CharacterID = 3;

		// handleChooseMechanism_8 (prefab fields)
		handleChooseMechanism_8.CharacterID = 1;

		// handleChooseMechanism_7 (prefab fields)
		handleChooseMechanism_7.CharacterID = 6;

		// handleChooseMechanism_6 (prefab fields)
		handleChooseMechanism_6.CharacterID = 2;

		// handleChooseMechanism_5 (prefab fields)
		handleChooseMechanism_5.CharacterID = 5;

		// handleChooseMechanism_4 (prefab fields)
		handleChooseMechanism_4.CharacterID = 10;

		// handleChooseMechanism_3 (prefab fields)
		handleChooseMechanism_3.CharacterID = 8;

		// handleChooseMechanism_2 (prefab fields)
		handleChooseMechanism_2.CharacterID = 9;

		// handleChooseMechanism_1 (prefab fields)
		handleChooseMechanism_1.CharacterID = 7;

		// handleChooseMechanism (prefab fields)
		handleChooseMechanism.CharacterID = 4;

		// handleChooseMechanism_13 (prefab fields)
		handleChooseMechanism_13.SlotID = 4;

		// handleChooseMechanism_12 (prefab fields)
		handleChooseMechanism_12.SlotID = 1;

		// handleChooseMechanism_11 (prefab fields)
		handleChooseMechanism_11.SlotID = 2;

		// handleChooseMechanism_10 (prefab fields)
		handleChooseMechanism_10.SlotID = 3;

		// handleChooseMechanism_14 (prefab fields)
		handleChooseMechanism_14.SlotID = 5;

		// handleChooseMechanism_19 (prefab fields)
		handleChooseMechanism_19.SlotID = 1;
		handleChooseMechanism_19.type = "Text";

		// handleChooseMechanism_18 (prefab fields)
		handleChooseMechanism_18.SlotID = 2;
		handleChooseMechanism_18.type = "Text";

		// handleChooseMechanism_17 (prefab fields)
		handleChooseMechanism_17.SlotID = 3;
		handleChooseMechanism_17.type = "Text";

		// handleChooseMechanism_16 (prefab fields)
		handleChooseMechanism_16.SlotID = 4;
		handleChooseMechanism_16.type = "Text";

		// handleChooseMechanism_15 (prefab fields)
		handleChooseMechanism_15.SlotID = 5;
		handleChooseMechanism_15.type = "Text";

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
	}

	update(){
		if (goToProfile){
			this.scene.start("Profile");
			goToProfile = false;
		}
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
