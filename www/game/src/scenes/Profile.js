
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

		// Change Profile Button
		const change_Profile_Button = this.add.container(0, 0);
		change_Profile_Button.scaleX = 1.5;
		change_Profile_Button.scaleY = 1.5;

		// highlight_1
		const highlight_1 = this.add.rectangle(640, 660, 128, 128);
		highlight_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_1.scaleX = 1.56;
		highlight_1.scaleY = 0.3;
		highlight_1.isFilled = true;
		highlight_1.fillColor = 0;
		highlight_1.strokeColor = 4194559;
		highlight_1.lineWidth = 0;
		change_Profile_Button.add(highlight_1);

		// glowFx
		highlight_1.postFX.addGlow(4194559, 3, 2, false);

		// Profile_1
		const profile_1 = this.add.text(640, 660, "", {});
		profile_1.setInteractive(new Phaser.Geom.Rectangle(-66, -19, 853.5246855678633, 148.41470913262742), Phaser.Geom.Rectangle.Contains);
		profile_1.scaleX = 0.23;
		profile_1.scaleY = 0.23;
		profile_1.setOrigin(0.5, 0.5);
		profile_1.text = "Change profile";
		profile_1.setStyle({ "fontFamily": "minecraft", "fontSize": "100px", "stroke": "#4000ff", "strokeThickness":10});
		change_Profile_Button.add(profile_1);

		// onPointerDownScript_2
		const onPointerDownScript_2 = new OnPointerDownScript(profile_1);

		// pushActionScript
		new PushActionScript(onPointerDownScript_2);

		// goToScene_3
		const goToScene_3 = new GoToScene(profile_1);

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

		// goToScene
		const goToScene = new GoToScene(playAMatch);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(playAMatch);

		// pushActionScript_2
		new PushActionScript(onPointerDownScript);

		// goToScene_3 (prefab fields)
		goToScene_3.sceneChosen = "ChangeProfile";

		// goToScene_1 (prefab fields)
		goToScene_1.sceneChosen = "HomePage";

		// goToScene_2 (prefab fields)
		goToScene_2.sceneChosen = "CharactersAndCards";

		// goToScene (prefab fields)
		goToScene.sceneChosen = "ChooseCharacters";

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
