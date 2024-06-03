
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
		this.add.image(960, 540, "Specasdossheets");

		// Profile Information
		const profile_Information = this.add.container(50.88749999999993, 93.75);
		profile_Information.scaleX = 1.5;
		profile_Information.scaleY = 1.5;

		// XP
		const xP = this.add.text(300, 191, "", {});
		xP.name = "XP";
		xP.scaleX = 0.3;
		xP.scaleY = 0.3;
		xP.setOrigin(0.5, 0.5);
		xP.text = "XP:";
		xP.setStyle({ "fontFamily": "minecraft", "fontSize": "100px" });
		profile_Information.add(xP);

		// Matches
		const matches = this.add.text(300, 301, "", {});
		matches.name = "Matches";
		matches.scaleX = 0.3;
		matches.scaleY = 0.3;
		matches.setOrigin(0.5, 0.5);
		matches.text = "Matches:";
		matches.setStyle({ "fontFamily": "minecraft", "fontSize": "100px" });
		profile_Information.add(matches);

		// Victories
		const victories = this.add.text(300, 404, "", {});
		victories.name = "Victories";
		victories.scaleX = 0.3;
		victories.scaleY = 0.3;
		victories.setOrigin(0.5, 0.5);
		victories.text = "Victories:";
		victories.setStyle({ "fontFamily": "minecraft", "fontSize": "100px" });
		profile_Information.add(victories);

		// Username
		const username = this.add.text(900, 237, "", {});
		username.name = "Username";
		username.scaleX = 0.3;
		username.scaleY = 0.3;
		username.setOrigin(0.5, 0.5);
		username.text = "Username:";
		username.setStyle({ "fontFamily": "minecraft", "fontSize": "100px" });
		profile_Information.add(username);

		// Email
		const email = this.add.text(900, 364, "", {});
		email.name = "Email";
		email.scaleX = 0.3;
		email.scaleY = 0.3;
		email.setOrigin(0.5, 0.5);
		email.text = "Email:";
		email.setStyle({ "fontFamily": "minecraft", "fontSize": "100px" });
		profile_Information.add(email);

		// Profile Button
		const profile_Button = this.add.container(0, 0);
		profile_Button.scaleX = 1.5;
		profile_Button.scaleY = 1.5;

		// highlight
		const highlight = this.add.rectangle(622, 48, 128, 128);
		highlight.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight.scaleX = 0.75;
		highlight.scaleY = 0.21995512106258827;
		highlight.isFilled = true;
		highlight.fillColor = 0;
		highlight.strokeColor = 4194559;
		highlight.strokeAlpha = 4;
		highlight.lineWidth = 4;
		profile_Button.add(highlight);

		// glowFx_1
		highlight.postFX.addGlow(4194559, 3, 3, false);

		// Profile
		const profile = this.add.text(622, 48, "", {});
		profile.setInteractive(new Phaser.Geom.Rectangle(-126, -17, 596.45805613654, 134.9449253851471), Phaser.Geom.Rectangle.Contains);
		profile.scaleX = 0.18;
		profile.scaleY = 0.18;
		profile.setOrigin(0.5, 0.5);
		profile.text = "Profile";
		profile.setStyle({ "fontFamily": "minecraft", "fontSize": "100px" });
		profile_Button.add(profile);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(profile);

		// pushActionScript_1
		new PushActionScript(onPointerDownScript_1);

		// goToScene_1
		const goToScene_1 = new GoToScene(profile);

		// Choose Menu Button
		const choose_Menu_Button = this.add.container(0, 0);
		choose_Menu_Button.scaleX = 1.5;
		choose_Menu_Button.scaleY = 1.5;

		// ChooseCharacters
		const chooseCharacters = this.add.text(180, 48, "", {});
		chooseCharacters.setInteractive(new Phaser.Geom.Rectangle(0, 0, 938.7022180518616, 106.19393534231743), Phaser.Geom.Rectangle.Contains);
		chooseCharacters.scaleX = 0.18;
		chooseCharacters.scaleY = 0.18;
		chooseCharacters.setOrigin(0.5, 0.5);
		chooseCharacters.text = "Choose Characters";
		chooseCharacters.setStyle({ "fontFamily": "minecraft", "fontSize": "100px" });
		choose_Menu_Button.add(chooseCharacters);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(chooseCharacters);

		// pushActionScript_2
		new PushActionScript(onPointerDownScript);

		// goToScene
		const goToScene = new GoToScene(chooseCharacters);

		// Change Profile Button
		const change_Profile_Button = this.add.container(0, 0);
		change_Profile_Button.scaleX = 1.5;
		change_Profile_Button.scaleY = 1.5;

		// highlight_1
		const highlight_1 = this.add.rectangle(640, 632, 128, 128);
		highlight_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_1.scaleX = 1.0590319501176437;
		highlight_1.scaleY = 0.21995512106258827;
		highlight_1.isFilled = true;
		highlight_1.fillColor = 0;
		highlight_1.strokeColor = 4194559;
		highlight_1.lineWidth = 0;
		change_Profile_Button.add(highlight_1);

		// glowFx
		highlight_1.postFX.addGlow(4194559, 3, 2, false);

		// Profile_1
		const profile_1 = this.add.text(640, 632, "", {});
		profile_1.setInteractive(new Phaser.Geom.Rectangle(-66, -19, 853.5246855678633, 148.41470913262742), Phaser.Geom.Rectangle.Contains);
		profile_1.scaleX = 0.15;
		profile_1.scaleY = 0.15;
		profile_1.setOrigin(0.5, 0.5);
		profile_1.text = "Change profile";
		profile_1.setStyle({ "fontFamily": "minecraft", "fontSize": "100px" });
		change_Profile_Button.add(profile_1);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(profile_1);

		// pushActionScript
		new PushActionScript(onPointerDownScript_2);

		// goToScene_3
		const goToScene_3 = new GoToScene(profile_1);

		// Characters and Cards
		const characters_and_Cards = this.add.container(0, 0);
		characters_and_Cards.scaleX = 1.5;
		characters_and_Cards.scaleY = 1.5;

		// Characters And Cards
		const characters_And_Cards = this.add.text(422, 48, "", {});
		characters_And_Cards.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1113.1380000583476, 106.19393534231743), Phaser.Geom.Rectangle.Contains);
		characters_And_Cards.scaleX = 0.18;
		characters_And_Cards.scaleY = 0.18;
		characters_And_Cards.setOrigin(0.5, 0.5);
		characters_And_Cards.text = "Characters and Cards";
		characters_And_Cards.setStyle({ "fontFamily": "minecraft", "fontSize": "100px" });
		characters_and_Cards.add(characters_And_Cards);

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(characters_And_Cards);

		// pushActionScript_3
		new PushActionScript(onPointerDownScript_3);

		// goToScene_2
		const goToScene_2 = new GoToScene(characters_And_Cards);

		// Button Go Back To Home Page
		const button_Go_Back_To_Home_Page = this.add.container(0, 0);
		button_Go_Back_To_Home_Page.scaleX = 1.5;
		button_Go_Back_To_Home_Page.scaleY = 1.5;

		// Profile_2
		const profile_2 = this.add.text(808, 48, "", {});
		profile_2.setInteractive(new Phaser.Geom.Rectangle(-15, 3, 1006.8885150534778, 106.26468581356662), Phaser.Geom.Rectangle.Contains);
		profile_2.scaleX = 0.18;
		profile_2.scaleY = 0.18;
		profile_2.setOrigin(0.5, 0.5);
		profile_2.text = "Back To Home Page";
		profile_2.setStyle({ "fontFamily": "minecraft", "fontSize": "100px" });
		button_Go_Back_To_Home_Page.add(profile_2);

		// onPointerDownScript_25
		const onPointerDownScript_25 = new OnPointerDownScript(profile_2);

		// pushActionScript_25
		new PushActionScript(onPointerDownScript_25);

		// goToScene_4
		const goToScene_4 = new GoToScene(profile_2);

		// goToScene_1 (prefab fields)
		goToScene_1.sceneChosen = "Profile";

		// goToScene (prefab fields)
		goToScene.sceneChosen = "ChooseCharacters";

		// goToScene_3 (prefab fields)
		goToScene_3.sceneChosen = "ChangeProfile";

		// goToScene_2 (prefab fields)
		goToScene_2.sceneChosen = "CharactersAndCards";

		// goToScene_4 (prefab fields)
		goToScene_4.sceneChosen = "HomePage";

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
