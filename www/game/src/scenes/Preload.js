
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// specasdossheetsPreload
		this.add.image(960, 540, "SpecasdossheetsPreload");

		// guapen
		this.add.image(692, 540, "peawnsPreload", 3);

		// progressBar
		const progressBar = this.add.rectangle(800, 520, 256, 20);
		progressBar.scaleX = 2;
		progressBar.scaleY = 2;
		progressBar.setOrigin(0, 0);
		progressBar.isFilled = true;
		progressBar.fillColor = 4194559;

		// preloadUpdater
		new PreloadBarUpdaterScript(progressBar);

		// progressBarBg
		const progressBarBg = this.add.rectangle(800, 520, 256, 20);
		progressBarBg.scaleX = 2;
		progressBarBg.scaleY = 2;
		progressBarBg.setOrigin(0, 0);
		progressBarBg.fillColor = 0;
		progressBarBg.isStroked = true;

		// loadingText
		const loadingText = this.add.text(969, 518, "", {});
		loadingText.scaleX = 2;
		loadingText.scaleY = 2;
		loadingText.text = "Loading...";
		loadingText.setStyle({ "color": "#e0e0e0", "fontFamily": "minecraft", "fontSize": "20px" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {
		this.editorPreload();

		this.editorCreate();

		this.loadFont("minecraft", "../css/Minecraft.ttf");
		this.loadFont("pixeled", "../css/Pixeled.ttf");

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("ChooseCharactersMenu"));
	}

	loadFont(name, url) {
		var newFont = new FontFace(name, `url(${url})`);
			newFont.load().then(function (loaded) {
				document.fonts.add(loaded);
			}).catch(function (error) {
				return error;
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
