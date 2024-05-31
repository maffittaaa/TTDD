
// You can write more code here
goToChooseCharacters = false

/* START OF COMPILED CODE */

class Profile extends Phaser.Scene {

	constructor() {
		super("Profile");

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

		// Profile Information
		const profile_Information = this.add.container(43.75000000000003, 62.5);

		// XP
		const xP = this.add.text(300, 191, "", {});
		xP.name = "XP";
		xP.setOrigin(0.5, 0.5);
		xP.text = "XP:";
		xP.setStyle({ "fontSize": "25px" });
		profile_Information.add(xP);

		// Matches
		const matches = this.add.text(300, 301, "", {});
		matches.name = "Matches";
		matches.setOrigin(0.5, 0.5);
		matches.text = "Matches:";
		matches.setStyle({ "fontSize": "25px" });
		profile_Information.add(matches);

		// Victories
		const victories = this.add.text(300, 404, "", {});
		victories.name = "Victories";
		victories.setOrigin(0.5, 0.5);
		victories.text = "Victories:";
		victories.setStyle({ "fontSize": "25px" });
		profile_Information.add(victories);

		// Username
		const username = this.add.text(900, 237, "", {});
		username.name = "Username";
		username.setOrigin(0.5, 0.5);
		username.text = "Username:";
		username.setStyle({ "fontSize": "25px" });
		profile_Information.add(username);

		// Email
		const email = this.add.text(900, 364, "", {});
		email.name = "Email";
		email.setOrigin(0.5, 0.5);
		email.text = "Email:";
		email.setStyle({ "fontSize": "25px" });
		profile_Information.add(email);

		// Profile Button
		const profile_Button = this.add.container(0, 0);

		// highlight
		const highlight = this.add.rectangle(399, 48, 128, 128);
		highlight.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight.scaleY = 0.1807207308530191;
		highlight.fillColor = 4194559;
		highlight.isStroked = true;
		highlight.strokeColor = 4194559;
		highlight.strokeAlpha = 4;
		highlight.lineWidth = 4;
		profile_Button.add(highlight);

		// Profile
		const profile = this.add.text(399, 48, "", {});
		profile.setInteractive(new Phaser.Geom.Rectangle(-15, -17, 100.09315749661158, 53.83254699275936), Phaser.Geom.Rectangle.Contains);
		profile.setOrigin(0.5, 0.5);
		profile.text = "Profile";
		profile_Button.add(profile);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(profile);

		// pushActionScript_1
		new PushActionScript(onPointerDownScript_1);

		// goToScene_1
		const goToScene_1 = new GoToScene(profile);

		// Choose Menu Button
		const choose_Menu_Button = this.add.container(-233.9641265767494, 317.934904354586);

		// ChooseCharacters
		const chooseCharacters = this.add.text(413.96412658691406, -269.9349060058594, "", {});
		chooseCharacters.setInteractive(new Phaser.Geom.Rectangle(0, 0, 154, 15), Phaser.Geom.Rectangle.Contains);
		chooseCharacters.setOrigin(0.5, 0.5);
		chooseCharacters.text = "Choose Characters";
		choose_Menu_Button.add(chooseCharacters);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(chooseCharacters);

		// pushActionScript_2
		new PushActionScript(onPointerDownScript);

		// goToScene
		const goToScene = new GoToScene(chooseCharacters);

		// Change Profile Button
		const change_Profile_Button = this.add.container(640, 632);

		// highlight_1
		const highlight_1 = this.add.rectangle(-2, 0, 128, 128);
		highlight_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_1.scaleX = 1.3;
		highlight_1.scaleY = 0.1807207308530191;
		highlight_1.fillColor = 4194559;
		highlight_1.isStroked = true;
		highlight_1.strokeColor = 4194559;
		highlight_1.strokeAlpha = 4;
		highlight_1.lineWidth = 4;
		change_Profile_Button.add(highlight_1);

		// Profile_1
		const profile_1 = this.add.text(0, 0, "", {});
		profile_1.setInteractive(new Phaser.Geom.Rectangle(-15, -17, 100.09315749661158, 53.83254699275936), Phaser.Geom.Rectangle.Contains);
		profile_1.setOrigin(0.5, 0.5);
		profile_1.text = "Change profile";
		change_Profile_Button.add(profile_1);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(profile_1);

		// pushActionScript
		new PushActionScript(onPointerDownScript_2);

		// goToScene_3
		const goToScene_3 = new GoToScene(profile_1);

		// Characters and Cards
		const characters_and_Cards = this.add.container(0, 0);

		// Characters And Cards
		const characters_And_Cards = this.add.text(622, 48, "", {});
		characters_And_Cards.setInteractive(new Phaser.Geom.Rectangle(0, 0, 154, 15), Phaser.Geom.Rectangle.Contains);
		characters_And_Cards.setOrigin(0.5, 0.5);
		characters_And_Cards.text = "Characters and Cards";
		characters_and_Cards.add(characters_And_Cards);

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(characters_And_Cards);

		// pushActionScript_3
		new PushActionScript(onPointerDownScript_3);

		// goToScene_2
		const goToScene_2 = new GoToScene(characters_And_Cards);

		// goToScene_1 (prefab fields)
		goToScene_1.sceneChosen = "Profile";

		// goToScene (prefab fields)
		goToScene.sceneChosen = "ChooseCharacters";

		// goToScene_3 (prefab fields)
		goToScene_3.sceneChosen = "ChangeProfile";

		// goToScene_2 (prefab fields)
		goToScene_2.sceneChosen = "CharactersAndCards";

		this.xP = xP;
		this.matches = matches;
		this.victories = victories;
		this.username = username;
		this.email = email;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	xP;
	/** @type {Phaser.GameObjects.Text} */
	matches;
	/** @type {Phaser.GameObjects.Text} */
	victories;
	/** @type {Phaser.GameObjects.Text} */
	username;
	/** @type {Phaser.GameObjects.Text} */
	email;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		var scene = this
		$.ajax({
			type: "GET",
			url: "/login/CheckLogin",
			success: function (data) {
				if (data.logged == false) {
					window.location.replace("/login.html");
					return false;
				} else {
					scene.xP.text += " " + data.xp
					scene.username.text += " " + data.name
					scene.email.text += " " + data.email
					scene.victories.text += " " + data.victories
					scene.matches.text += " " + data.matchesDone
				}
			},
			error: function (err) {
				console.log(err);
			}
		})
	}

	start(){

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
