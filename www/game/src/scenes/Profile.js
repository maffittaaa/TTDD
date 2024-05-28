
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
		const profile_Information = this.add.container(18.75, 52.5);

		// XP
		const xP = this.add.text(302, 191, "", {});
		xP.name = "XP";
		xP.setOrigin(0.5, 0.5);
		xP.text = "XP:";
		xP.setStyle({ "fontSize": "25px" });
		profile_Information.add(xP);

		// profileDefenitions
		const profileDefenitions = new ProfileDefenitions(xP);

		// Matches
		const matches = this.add.text(302, 424, "", {});
		matches.name = "Matches";
		matches.setOrigin(0.5, 0.5);
		matches.text = "Matches:";
		matches.setStyle({ "fontSize": "25px" });
		profile_Information.add(matches);

		// profileDefenitions_2
		const profileDefenitions_2 = new ProfileDefenitions(matches);

		// Victories
		const victories = this.add.text(302, 311, "", {});
		victories.name = "Victories";
		victories.setOrigin(0.5, 0.5);
		victories.text = "Victories:";
		victories.setStyle({ "fontSize": "25px" });
		profile_Information.add(victories);

		// profileDefenitions_1
		const profileDefenitions_1 = new ProfileDefenitions(victories);

		// Username
		const username = this.add.text(948, 258, "", {});
		username.name = "Username";
		username.setOrigin(0.5, 0.5);
		username.text = "Username:";
		username.setStyle({ "fontSize": "25px" });
		profile_Information.add(username);

		// profileDefenitions_4
		const profileDefenitions_4 = new ProfileDefenitions(username);

		// Email
		const email = this.add.text(948, 365, "", {});
		email.name = "Email";
		email.setOrigin(0.5, 0.5);
		email.text = "Email:";
		email.setStyle({ "fontSize": "25px" });
		profile_Information.add(email);

		// profileDefenitions_5
		const profileDefenitions_5 = new ProfileDefenitions(email);

		// Change Button
		const change_Button = this.add.container(622, 579.5);
		profile_Information.add(change_Button);

		// highlight_1
		const highlight_1 = this.add.rectangle(-0.5767543512015436, 0.3699310952790711, 128, 128);
		highlight_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		highlight_1.scaleX = 1.25;
		highlight_1.scaleY = 0.1807207308530191;
		highlight_1.fillColor = 4194559;
		highlight_1.isStroked = true;
		highlight_1.strokeColor = 4194559;
		highlight_1.strokeAlpha = 4;
		highlight_1.lineWidth = 4;
		change_Button.add(highlight_1);

		// Change Profile
		const change_Profile = this.add.text(-0.5767543512015436, -0.6300689047209289, "", {});
		change_Profile.name = "Change Profile";
		change_Profile.setInteractive(new Phaser.Geom.Rectangle(0, 0, 154, 15), Phaser.Geom.Rectangle.Contains);
		change_Profile.setOrigin(0.5, 0.5);
		change_Profile.text = "Change profile";
		change_Button.add(change_Profile);

		// onPointerDownScript_3
		const onPointerDownScript_3 = new OnPointerDownScript(change_Profile);

		// pushActionScript_3
		new PushActionScript(onPointerDownScript_3);

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

		// goToChooseCharacters
		new GoToChooseCharacters(chooseCharacters);

		// profileDefenitions (prefab fields)
		profileDefenitions.Type = "XP";

		// profileDefenitions_2 (prefab fields)
		profileDefenitions_2.Type = "Matches";

		// profileDefenitions_1 (prefab fields)
		profileDefenitions_1.Type = "Victories";

		// profileDefenitions_4 (prefab fields)
		profileDefenitions_4.Type = "Username";

		// profileDefenitions_5 (prefab fields)
		profileDefenitions_5.Type = "Email";

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

		if (goToChooseCharacters){
			this.scene.start("ChooseCharactersMenu")
			goToChooseCharacters = false
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
