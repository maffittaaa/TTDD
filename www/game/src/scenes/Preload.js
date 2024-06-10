var throwSound 
var pandaSound 
var plasticSwordSound
var txukiSound
var velhoLoucoSound 
var stabSound 
var mafiaZombieSound 
var baseballBatSound 

var copsSound 
var finishHimSound 
var fountainOfYouthSound 
var pukeSound 
var shhhhSound 
var shityLicorSound 
var thunderstormSound 

var mouseClickSound 
var mouseOverSound 

var battleMusic
var menusMusic
var musicConfig

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
		const progressBarBg = this.add.rectangle(1056, 540, 256, 20);
		progressBarBg.scaleX = 2;
		progressBarBg.scaleY = 2;
		progressBarBg.fillColor = 0;
		progressBarBg.isStroked = true;

		// loadingText
		const loadingText = this.add.text(1056, 540, "", {});
		loadingText.scaleX = 0.3;
		loadingText.scaleY = 0.3;
		loadingText.setOrigin(0.5, 0.5);
		loadingText.text = "Loading...";
		loadingText.setStyle({ "color": "#e0e0e0", "fontFamily": "minecraft", "fontSize": "100px" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {
		this.loadFont("minecraft", "../css/Minecraft.ttf");
		this.loadFont("pixeled", "../css/Pixeled.ttf");
		this.loadFont("pixelfont", "../css/PixelFont.ttf");
		
		this.editorPreload();
		
		this.editorCreate();

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("ChooseCharactersMenu"));

		//load sons characters
		this.loadAudio('throw', 'assets/audio/soundEffects/Characters/throwStuff.mp3')
		this.loadAudio('panda', 'assets/audio/soundEffects/Characters/panda.mp3')
		this.loadAudio('plasticSword', 'assets/audio/soundEffects/Characters/plasticSword.mp3')
		this.loadAudio('txuki', 'assets/audio/soundEffects/Characters/txuki.mp3')
		this.loadAudio('velhoLouco', 'assets/audio/soundEffects/Characters/velhoLouco.mp3')
		this.loadAudio('stab', 'assets/audio/soundEffects/Characters/stab.mp3')
		this.loadAudio('mafiaZombie', 'assets/audio/soundEffects/Characters/mafiaZombie.mp3')
		this.loadAudio('baseballBat', 'assets/audio/soundEffects/Characters/baseballBat.mp3')

		//load sons cards
		this.loadAudio('cops','assets/audio/soundEffects/Cards/cops.mp3')
		this.loadAudio('finishHim','assets/audio/soundEffects/Cards/finishHim.mp3')
		this.loadAudio('fountainOfYouth','assets/audio/soundEffects/Cards/fountainOfYouth.mp3')
		this.loadAudio('puke','assets/audio/soundEffects/Cards/puke.mp3')
		this.loadAudio('shhhh','assets/audio/soundEffects/Cards/shhhh.mp3')
		this.loadAudio('shityLicor','assets/audio/soundEffects/Cards/shityLicor.mp3')
		this.loadAudio('thunderstorm','assets/audio/soundEffects/Cards/thunderstorm.mp3')

		//load sons mouse
		this.loadAudio('mouseClick', 'assets/audio/mouse/mouseClick.mp3')
		this.loadAudio('mouseOver', 'assets/audio/mouse/mouseOver.mp3')

		//load music
		this.loadAudio('battle', 'assets/audio/songs/battle.mp3')
		this.loadAudio('menus', 'assets/audio/songs/menus.mp3')
	}

	create(){
		//store sounds in variables

		//characters
		throwSound = this.sound.add("throw")
		pandaSound = this.sound.add("panda")
		plasticSwordSound = this.sound.add("plasticSword")
		txukiSound = this.sound.add("txuki")
		velhoLoucoSound = this.sound.add("velhoLouco")
		stabSound = this.sound.add("stab")
		mafiaZombieSound = this.sound.add("mafiaZombie")
		baseballBatSound = this.sound.add("baseballBat")

		//cards
		copsSound = this.sound.add("cops")
		finishHimSound = this.sound.add("finishHim")
		fountainOfYouthSound = this.sound.add("fountainOfYouth")
		pukeSound = this.sound.add("puke")
		shhhhSound = this.sound.add("shhhh")
		shityLicorSound = this.sound.add("shityLicor")
		thunderstormSound = this.sound.add("thunderstorm")

		//mouse
		mouseClickSound = this.sound.add("mouseClick")
		mouseOverSound = this.sound.add("mouseOver")

		//music
		battleMusic = this.sound.add("battle")
		menusMusic = this.sound.add("menus")

		musicConfig = {
			mute: false,
			volume: 1,
			rate: 1,
			detune: 0,
			seek: 0,
			loop: true,
			delay: 0
		}
	}

	loadAudio(name, url){
		this.load.audio({
			key: name,
			url: [url]
		});
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
