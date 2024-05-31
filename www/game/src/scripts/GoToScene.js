
// You can write more code here

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
		this.parent.on('pointerdown', event => {
			if(this.sceneChosen == "ChangeProfile"){
				window.location.replace("/changeProfile.html")
			}else if(this.sceneChosen == "Profile"){
				goToProfile = true
			}else if(this.sceneChosen == "ChooseCharacters"){
				goToChooseChar = true
			}else if(this.sceneChosen == "CharactersAndCards"){
				goToCharactersAndCards = true
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
