var goToProfile = false;
var goToCharactersAndCards = false;
var goToChooseChar = false;
var goToMatch = false;

/* START OF COMPILED CODE */

class GoToScene extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	sceneChosen = "";

	/* START-USER-CODE */

	start(){
		this.parent.parentContainer.list[0].visible = false
		
		this.parent.on('pointerdown', event => {
			if(this.sceneChosen == "ChangeProfile"){
				setTimeout(function () {
					window.location.replace("/changeProfile.html")
				}, 200);
			}else if(this.sceneChosen == "Profile"){
				setTimeout(function () {
					goToProfile = true
				}, 200);
			}else if(this.sceneChosen == "ChooseCharacters"){
				setTimeout(function () {
					goToChooseChar = true
				}, 200);
			}else if(this.sceneChosen == "CharactersAndCards"){
				setTimeout(function () {
					goToCharactersAndCards = true
				}, 200);
			}else if(this.sceneChosen == "HomePage"){
				setTimeout(function () {
					window.location.replace("/")
				}, 200);
			}
		})
		this.parent.on('pointerover', event => {
			this.parent.parentContainer.list[0].visible = true
		})
		this.parent.on('pointerout', event => {
			this.parent.parentContainer.list[0].visible = false
		})

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
