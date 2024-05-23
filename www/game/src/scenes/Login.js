
// You can write more code here

/* START OF COMPILED CODE */

class Login extends Phaser.Scene {

	constructor() {
		super("Login");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// specasdossheets
		const specasdossheets = this.add.image(640, 360, "Specasdossheets");
		specasdossheets.scaleX = 0.6666666;
		specasdossheets.scaleY = 0.6666666;

		// tipsy_Tussle_Logo
		this.add.image(640, 184, "Tipsy_Tussle_Logo");

		// Logintext
		const logintext = this.add.text(640, 373, "", {});
		logintext.setOrigin(0.485108814731946, 0.5208983594727721);
		logintext.text = "Login";
		logintext.setStyle({ "fontFamily": "Minecraft", "fontSize": "40px" });

		// Username
		const username = this.add.text(480, 466, "", {});
		username.setOrigin(0.485108814731946, 0.5208983594727721);
		username.text = "Username";
		username.setStyle({ "fontFamily": "Minecraft", "fontSize": "30px" });

		// Password
		const password = this.add.text(789, 466, "", {});
		password.setOrigin(0.485108814731946, 0.5208983594727721);
		password.text = "Password";
		password.setStyle({ "fontFamily": "Minecraft", "fontSize": "30px" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
