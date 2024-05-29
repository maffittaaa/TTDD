
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
		const specasdossheets = this.add.image(640.0064, 360.0036, "Specasdossheets");
		specasdossheets.scaleX = 0.66666;
		specasdossheets.scaleY = 0.66666;

		// Slots
		const slots = this.add.container(0, -38);

		// slot_id_4
		const slot_id_4 = this.add.image(967, 307, "base", 0);
		slot_id_4.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 150), Phaser.Geom.Rectangle.Contains);
		slot_id_4.scaleX = 0.5;
		slot_id_4.scaleY = 0.5;
		slots.add(slot_id_4);

		// handleChooseMechanism_13
		const handleChooseMechanism_13 = new HandleChooseMechanism(slot_id_4);

		// onPointerDownScript_17
		const onPointerDownScript_17 = new OnPointerDownScript(slot_id_4);

		// pushActionScript_17
		new PushActionScript(onPointerDownScript_17);

		// slot_id_1
		const slot_id_1 = this.add.image(1127, 230, "base", 0);
		slot_id_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 150), Phaser.Geom.Rectangle.Contains);
		slot_id_1.scaleX = 0.5;
		slot_id_1.scaleY = 0.5;
		slots.add(slot_id_1);

		// handleChooseMechanism_12
		const handleChooseMechanism_12 = new HandleChooseMechanism(slot_id_1);

		// onPointerDownScript_16
		const onPointerDownScript_16 = new OnPointerDownScript(slot_id_1);

		// pushActionScript_16
		new PushActionScript(onPointerDownScript_16);

		// slot_id_2
		const slot_id_2 = this.add.image(1127, 378, "base", 0);
		slot_id_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 150), Phaser.Geom.Rectangle.Contains);
		slot_id_2.scaleX = 0.5;
		slot_id_2.scaleY = 0.5;
		slots.add(slot_id_2);

		// handleChooseMechanism_11
		const handleChooseMechanism_11 = new HandleChooseMechanism(slot_id_2);

		// onPointerDownScript_15
		const onPointerDownScript_15 = new OnPointerDownScript(slot_id_2);

		// pushActionScript_15
		new PushActionScript(onPointerDownScript_15);

		// slot_id_3
		const slot_id_3 = this.add.image(1127, 522, "base", 0);
		slot_id_3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 150), Phaser.Geom.Rectangle.Contains);
		slot_id_3.scaleX = 0.5;
		slot_id_3.scaleY = 0.5;
		slots.add(slot_id_3);

		// handleChooseMechanism_10
		const handleChooseMechanism_10 = new HandleChooseMechanism(slot_id_3);

		// onPointerDownScript_14
		const onPointerDownScript_14 = new OnPointerDownScript(slot_id_3);

		// pushActionScript_14
		new PushActionScript(onPointerDownScript_14);

		// slot_id_5
		const slot_id_5 = this.add.image(969, 450, "base", 0);
		slot_id_5.setInteractive(new Phaser.Geom.Rectangle(0, 0, 150, 150), Phaser.Geom.Rectangle.Contains);
		slot_id_5.scaleX = 0.5;
		slot_id_5.scaleY = 0.5;
		slots.add(slot_id_5);

		// handleChooseMechanism_14
		const handleChooseMechanism_14 = new HandleChooseMechanism(slot_id_5);

		// onPointerDownScript_13
		const onPointerDownScript_13 = new OnPointerDownScript(slot_id_5);

		// pushActionScript_13
		new PushActionScript(onPointerDownScript_13);

		// Match
		const match = this.add.container(0, 0);

		// Message
		const message = this.add.text(640, 633, "", {});
		message.name = "Message";
		message.setOrigin(0.5, 0.5);
		match.add(message);

		// handleChooseMechanism_15
		const handleChooseMechanism_15 = new HandleChooseMechanism(message);

		// highlight_1
		const highlight_1 = this.add.rectangle(640, 632, 128, 128);
		highlight_1.name = "highlight_1";
		highlight_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_1.scaleX = 0.9889080771893287;
		highlight_1.scaleY = 0.1807207308530191;
		highlight_1.fillColor = 4194559;
		highlight_1.isStroked = true;
		highlight_1.strokeColor = 4194559;
		highlight_1.strokeAlpha = 4;
		highlight_1.lineWidth = 4;
		match.add(highlight_1);

		// GoToMatch
		const goToMatch = this.add.text(640, 632, "", {});
		goToMatch.name = "GoToMatch";
		goToMatch.setInteractive(new Phaser.Geom.Rectangle(0, 0, 154, 15), Phaser.Geom.Rectangle.Contains);
		goToMatch.setOrigin(0.5, 0.5);
		goToMatch.text = "Find a Match";
		match.add(goToMatch);

		// onPointerDownScript_12
		const onPointerDownScript_12 = new OnPointerDownScript(goToMatch);

		// pushActionScript_12
		new PushActionScript(onPointerDownScript_12);

		// handleChooseMechanism_5
		const handleChooseMechanism_5 = new HandleChooseMechanism(goToMatch);

		// Button Profile
		const button_Profile = this.add.container(0, 0);

		// Profile
		const profile = this.add.text(399, 48, "", {});
		profile.setInteractive(new Phaser.Geom.Rectangle(-15, -17, 100.09315749661158, 53.83254699275936), Phaser.Geom.Rectangle.Contains);
		profile.setOrigin(0.5, 0.5);
		profile.text = "Profile";
		button_Profile.add(profile);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(profile);

		// pushActionScript_1
		new PushActionScript(onPointerDownScript_1);

		// goToProfile
		new GoToProfile(profile);

		// BackgroundAndText
		const backgroundAndText = this.add.container(0, 0);

		// cartas2_Imprimir
		const cartas2_Imprimir = this.add.image(777, 473, "cartas2_Imprimir", 1);
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
		const cartas2_Imprimir_5 = this.add.image(776, 221, "cartas2_Imprimir", 1);
		cartas2_Imprimir_5.scaleX = 0.5;
		cartas2_Imprimir_5.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_5);

		// cartas2_Imprimir_6
		const cartas2_Imprimir_6 = this.add.image(619, 221, "cartas2_Imprimir", 1);
		cartas2_Imprimir_6.scaleX = 0.5;
		cartas2_Imprimir_6.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_6);

		// cartas2_Imprimir_7
		const cartas2_Imprimir_7 = this.add.image(459, 221, "cartas2_Imprimir", 1);
		cartas2_Imprimir_7.scaleX = 0.5;
		cartas2_Imprimir_7.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_7);

		// cartas2_Imprimir_8
		const cartas2_Imprimir_8 = this.add.image(301, 221, "cartas2_Imprimir", 1);
		cartas2_Imprimir_8.scaleX = 0.5;
		cartas2_Imprimir_8.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir_8);

		// cartas2_Imprimir1
		const cartas2_Imprimir1 = this.add.image(142, 221, "cartas2_Imprimir", 1);
		cartas2_Imprimir1.scaleX = 0.5;
		cartas2_Imprimir1.scaleY = 0.5;
		backgroundAndText.add(cartas2_Imprimir1);

		// ChooseCharacters_1
		const chooseCharacters_1 = this.add.text(460, 97, "", {});
		chooseCharacters_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 154, 15), Phaser.Geom.Rectangle.Contains);
		chooseCharacters_1.setOrigin(0.5, 0.5);
		chooseCharacters_1.text = "Close-Range";
		backgroundAndText.add(chooseCharacters_1);

		// onPointerDownScript_18
		const onPointerDownScript_18 = new OnPointerDownScript(chooseCharacters_1);

		// pushActionScript_18
		new PushActionScript(onPointerDownScript_18);

		// ChooseCharacters_2
		const chooseCharacters_2 = this.add.text(460, 351, "", {});
		chooseCharacters_2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 154, 15), Phaser.Geom.Rectangle.Contains);
		chooseCharacters_2.setOrigin(0.5, 0.5);
		chooseCharacters_2.text = "Long-Range";
		backgroundAndText.add(chooseCharacters_2);

		// onPointerDownScript_19
		const onPointerDownScript_19 = new OnPointerDownScript(chooseCharacters_2);

		// pushActionScript_19
		new PushActionScript(onPointerDownScript_19);

		// Button Choose Characters
		const button_Choose_Characters = this.add.container(75.16212463378906, -70.72154235839844);

		// highlight
		const highlight = this.add.rectangle(103.83787536621094, 118.72154235839844, 128, 128);
		highlight.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight.scaleX = 1.333615647299753;
		highlight.scaleY = 0.1807207308530191;
		highlight.fillColor = 4194559;
		highlight.isStroked = true;
		highlight.strokeColor = 4194559;
		highlight.strokeAlpha = 4;
		highlight.lineWidth = 4;
		button_Choose_Characters.add(highlight);

		// ChooseCharacters
		const chooseCharacters = this.add.text(104.83787536621094, 118.72154235839844, "", {});
		chooseCharacters.setInteractive(new Phaser.Geom.Rectangle(0, 0, 154, 15), Phaser.Geom.Rectangle.Contains);
		chooseCharacters.setOrigin(0.5, 0.5);
		chooseCharacters.text = "Choose Characters";
		button_Choose_Characters.add(chooseCharacters);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(chooseCharacters);

		// pushActionScript_2
		new PushActionScript(onPointerDownScript);

		// Characters
		const characters = this.add.container(-1, -38);

		// Username
		const username = this.add.text(1152, 92, "", {});
		username.name = "Username";
		username.scaleX = 1.05;
		username.setOrigin(0.5, 0.5);
		username.setStyle({ "fontSize": "30px" });
		characters.add(username);

		// handleChooseMechanism_17
		const handleChooseMechanism_17 = new HandleChooseMechanism(username);

		// MessageServer
		const messageServer = this.add.text(1046, 135, "", {});
		messageServer.name = "MessageServer";
		messageServer.setOrigin(0.5, 0.5);
		messageServer.text = "\n";
		characters.add(messageServer);

		// handleChooseMechanism_16
		const handleChooseMechanism_16 = new HandleChooseMechanism(messageServer);

		// character_id_2
		const character_id_2 = this.add.image(620, 259, "cartas2_Imprimir", 0);
		character_id_2.name = "character_id_2";
		character_id_2.scaleX = 0.5;
		character_id_2.scaleY = 0.5;
		character_id_2.visible = false;
		characters.add(character_id_2);

		// onPointerDownScript_11
		const onPointerDownScript_11 = new OnPointerDownScript(character_id_2);

		// pushActionScript_11
		new PushActionScript(onPointerDownScript_11);

		// handleChooseMechanism_9
		const handleChooseMechanism_9 = new HandleChooseMechanism(character_id_2);

		// character_id_0
		const character_id_0 = this.add.image(143, 259, "cartas1_Imprimir", 8);
		character_id_0.name = "character_id_0";
		character_id_0.scaleX = 0.5;
		character_id_0.scaleY = 0.5;
		character_id_0.visible = false;
		characters.add(character_id_0);

		// onPointerDownScript_10
		const onPointerDownScript_10 = new OnPointerDownScript(character_id_0);

		// pushActionScript_10
		new PushActionScript(onPointerDownScript_10);

		// handleChooseMechanism_8
		const handleChooseMechanism_8 = new HandleChooseMechanism(character_id_0);

		// character_id_5
		const character_id_5 = this.add.image(143, 510, "cartas1_Imprimir", 7);
		character_id_5.name = "character_id_5";
		character_id_5.scaleX = 0.5;
		character_id_5.scaleY = 0.5;
		character_id_5.visible = false;
		characters.add(character_id_5);

		// onPointerDownScript_9
		const onPointerDownScript_9 = new OnPointerDownScript(character_id_5);

		// pushActionScript_9
		new PushActionScript(onPointerDownScript_9);

		// handleChooseMechanism_7
		const handleChooseMechanism_7 = new HandleChooseMechanism(character_id_5);

		// character_id_1
		const character_id_1 = this.add.image(302, 259, "cartas1_Imprimir", 6);
		character_id_1.name = "character_id_1";
		character_id_1.scaleX = 0.5;
		character_id_1.scaleY = 0.5;
		character_id_1.visible = false;
		characters.add(character_id_1);

		// onPointerDownScript_8
		const onPointerDownScript_8 = new OnPointerDownScript(character_id_1);

		// pushActionScript_8
		new PushActionScript(onPointerDownScript_8);

		// handleChooseMechanism_6
		const handleChooseMechanism_6 = new HandleChooseMechanism(character_id_1);

		// character_id_4
		const character_id_4 = this.add.image(460, 259, "cartas1_Imprimir", 5);
		character_id_4.name = "character_id_4";
		character_id_4.scaleX = 0.5;
		character_id_4.scaleY = 0.5;
		character_id_4.visible = false;
		characters.add(character_id_4);

		// onPointerDownScript_7
		const onPointerDownScript_7 = new OnPointerDownScript(character_id_4);

		// pushActionScript_7
		new PushActionScript(onPointerDownScript_7);

		// handleChooseMechanism_
		const handleChooseMechanism_ = new HandleChooseMechanism(character_id_4);

		// character_id_9
		const character_id_9 = this.add.image(620, 510, "cartas1_Imprimir", 4);
		character_id_9.name = "character_id_9";
		character_id_9.scaleX = 0.5;
		character_id_9.scaleY = 0.5;
		character_id_9.visible = false;
		characters.add(character_id_9);

		// onPointerDownScript_6
		const onPointerDownScript_6 = new OnPointerDownScript(character_id_9);

		// pushActionScript_6
		new PushActionScript(onPointerDownScript_6);

		// handleChooseMechanism_4
		const handleChooseMechanism_4 = new HandleChooseMechanism(character_id_9);

		// character_id_7
		const character_id_7 = this.add.image(302, 510, "cartas1_Imprimir", 3);
		character_id_7.name = "character_id_7";
		character_id_7.scaleX = 0.5;
		character_id_7.scaleY = 0.5;
		character_id_7.visible = false;
		characters.add(character_id_7);

		// onPointerDownScript_5
		const onPointerDownScript_5 = new OnPointerDownScript(character_id_7);

		// pushActionScript_5
		new PushActionScript(onPointerDownScript_5);

		// handleChooseMechanism_3
		const handleChooseMechanism_3 = new HandleChooseMechanism(character_id_7);

		// character_id_8
		const character_id_8 = this.add.image(460, 510, "cartas1_Imprimir", 2);
		character_id_8.name = "character_id_8";
		character_id_8.scaleX = 0.5;
		character_id_8.scaleY = 0.5;
		character_id_8.visible = false;
		characters.add(character_id_8);

		// onPointerDownScript_4
		const onPointerDownScript_4 = new OnPointerDownScript(character_id_8);

		// pushActionScript_4
		new PushActionScript(onPointerDownScript_4);

		// handleChooseMechanism_2
		const handleChooseMechanism_2 = new HandleChooseMechanism(character_id_8);

		// character_id_6
		const character_id_6 = this.add.image(778, 510, "cartas1_Imprimir", 1);
		character_id_6.name = "character_id_6";
		character_id_6.scaleX = 0.5;
		character_id_6.scaleY = 0.5;
		character_id_6.visible = false;
		characters.add(character_id_6);

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(character_id_6);

		// pushActionScript_3
		new PushActionScript(onPointerDownScript_3);

		// handleChooseMechanism_1
		const handleChooseMechanism_1 = new HandleChooseMechanism(character_id_6);

		// character_id_3
		const character_id_3 = this.add.image(777, 259, "cartas1_Imprimir", 0);
		character_id_3.name = "character_id_3";
		character_id_3.scaleX = 0.5;
		character_id_3.scaleY = 0.5;
		character_id_3.visible = false;
		characters.add(character_id_3);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(character_id_3);

		// pushActionScript
		new PushActionScript(onPointerDownScript_2);

		// handleChooseMechanism
		const handleChooseMechanism = new HandleChooseMechanism(character_id_3);

		// handleChooseMechanism_13 (prefab fields)
		handleChooseMechanism_13.SlotID = 4;
		handleChooseMechanism_13.type = "Slot";

		// handleChooseMechanism_12 (prefab fields)
		handleChooseMechanism_12.SlotID = 1;
		handleChooseMechanism_12.type = "Slot";

		// handleChooseMechanism_11 (prefab fields)
		handleChooseMechanism_11.SlotID = 2;
		handleChooseMechanism_11.type = "Slot";

		// handleChooseMechanism_10 (prefab fields)
		handleChooseMechanism_10.SlotID = 3;
		handleChooseMechanism_10.type = "Slot";

		// handleChooseMechanism_14 (prefab fields)
		handleChooseMechanism_14.SlotID = 5;
		handleChooseMechanism_14.type = "Slot";

		// handleChooseMechanism_15 (prefab fields)
		handleChooseMechanism_15.type = "Message";

		// handleChooseMechanism_5 (prefab fields)
		handleChooseMechanism_5.type = "LookForMatch";

		// handleChooseMechanism_17 (prefab fields)
		handleChooseMechanism_17.type = "charSelct";

		// handleChooseMechanism_16 (prefab fields)
		handleChooseMechanism_16.type = "charSelct";

		// handleChooseMechanism_9 (prefab fields)
		handleChooseMechanism_9.CharacterID = 2;
		handleChooseMechanism_9.type = "Character";

		// handleChooseMechanism_8 (prefab fields)
		handleChooseMechanism_8.CharacterID = 0;
		handleChooseMechanism_8.type = "Character";

		// handleChooseMechanism_7 (prefab fields)
		handleChooseMechanism_7.CharacterID = 5;
		handleChooseMechanism_7.type = "Character";

		// handleChooseMechanism_6 (prefab fields)
		handleChooseMechanism_6.CharacterID = 1;
		handleChooseMechanism_6.type = "Character";

		// handleChooseMechanism_ (prefab fields)
		handleChooseMechanism_.CharacterID = 4;
		handleChooseMechanism_.type = "Character";

		// handleChooseMechanism_4 (prefab fields)
		handleChooseMechanism_4.CharacterID = 9;
		handleChooseMechanism_4.type = "Character";

		// handleChooseMechanism_3 (prefab fields)
		handleChooseMechanism_3.CharacterID = 7;
		handleChooseMechanism_3.type = "Character";

		// handleChooseMechanism_2 (prefab fields)
		handleChooseMechanism_2.CharacterID = 8;
		handleChooseMechanism_2.type = "Character";

		// handleChooseMechanism_1 (prefab fields)
		handleChooseMechanism_1.CharacterID = 6;
		handleChooseMechanism_1.type = "Character";

		// handleChooseMechanism (prefab fields)
		handleChooseMechanism.CharacterID = 3;
		handleChooseMechanism.type = "Character";

		this.slot_id_4 = slot_id_4;
		this.slot_id_1 = slot_id_1;
		this.slot_id_2 = slot_id_2;
		this.slot_id_3 = slot_id_3;
		this.slot_id_5 = slot_id_5;
		this.message = message;
		this.username = username;
		this.character_id_2 = character_id_2;
		this.character_id_0 = character_id_0;
		this.character_id_5 = character_id_5;
		this.character_id_1 = character_id_1;
		this.character_id_4 = character_id_4;
		this.character_id_9 = character_id_9;
		this.character_id_7 = character_id_7;
		this.character_id_8 = character_id_8;
		this.character_id_6 = character_id_6;
		this.character_id_3 = character_id_3;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	slot_id_4;
	/** @type {Phaser.GameObjects.Image} */
	slot_id_1;
	/** @type {Phaser.GameObjects.Image} */
	slot_id_2;
	/** @type {Phaser.GameObjects.Image} */
	slot_id_3;
	/** @type {Phaser.GameObjects.Image} */
	slot_id_5;
	/** @type {Phaser.GameObjects.Text} */
	message;
	/** @type {Phaser.GameObjects.Text} */
	username;
	/** @type {Phaser.GameObjects.Image} */
	character_id_2;
	/** @type {Phaser.GameObjects.Image} */
	character_id_0;
	/** @type {Phaser.GameObjects.Image} */
	character_id_5;
	/** @type {Phaser.GameObjects.Image} */
	character_id_1;
	/** @type {Phaser.GameObjects.Image} */
	character_id_4;
	/** @type {Phaser.GameObjects.Image} */
	character_id_9;
	/** @type {Phaser.GameObjects.Image} */
	character_id_7;
	/** @type {Phaser.GameObjects.Image} */
	character_id_8;
	/** @type {Phaser.GameObjects.Image} */
	character_id_6;
	/** @type {Phaser.GameObjects.Image} */
	character_id_3;

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