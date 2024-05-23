
// You can write more code here

/* START OF COMPILED CODE */

class Register extends Phaser.Scene {

	constructor() {
		super("Register");

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// specasdossheets
		const specasdossheets = this.add.image(640, 360, "Specasdossheets");
		specasdossheets.scaleX = 0.6666666;
		specasdossheets.scaleY = 0.6666666;

		// tipsy_Tussle_Logo
		this.add.image(322, 360, "Tipsy_Tussle_Logo");

		// Email
		const email = this.add.text(1050, 285, "", {});
		email.setOrigin(0.485108814731946, 0.5208983594727721);
		email.text = "Email";
		email.setStyle({ "fontFamily": "Minecraft", "fontSize": "30px" });

		// Username
		const username = this.add.text(740, 285, "", {});
		username.setOrigin(0.485108814731946, 0.5208983594727721);
		username.text = "Username";
		username.setStyle({ "fontFamily": "Minecraft", "fontSize": "30px" });

		// RegisterText
		const registerText = this.add.text(903, 172, "", {});
		registerText.setOrigin(0.485108814731946, 0.5208983594727721);
		registerText.text = "Register";
		registerText.setStyle({ "fontFamily": "Minecraft", "fontSize": "40px" });

		// Password
		const password = this.add.text(740, 446, "", {});
		password.setOrigin(0.485108814731946, 0.5208983594727721);
		password.text = "Password";
		password.setStyle({ "fontFamily": "Minecraft", "fontSize": "30px" });

		// ConfirmPassword
		const confirmPassword = this.add.text(1050, 446, "", {});
		confirmPassword.setOrigin(0.485108814731946, 0.5208983594727721);
		confirmPassword.text = "Confirm password";
		confirmPassword.setStyle({ "fontFamily": "Minecraft", "fontSize": "30px" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	preload() {
        var url;
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js';
        this.load.plugin('rexbbcodetextplugin', url, true);
      
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js';
        this.load.plugin('rextexteditplugin', url, true);
    }

    create() {     
		this.editorCreate();
	}

	update(){
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */
// You can write more code here
