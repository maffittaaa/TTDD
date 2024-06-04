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
				window.location.replace("/changeProfile.html")
			}else if(this.sceneChosen == "Profile"){
				goToProfile = true
			}else if(this.sceneChosen == "ChooseCharacters"){
				goToChooseChar = true
			}else if(this.sceneChosen == "CharactersAndCards"){
				goToCharactersAndCards = true
			}else if(this.sceneChosen == "HomePage"){
				window.location.replace("/")
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
