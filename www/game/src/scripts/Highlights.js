
// You can write more code here

/* START OF COMPILED CODE */

class Highlights extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	type = "";

	/* START-USER-CODE */

	start(){
		if(this.type == "DescriptionCards"){
			console.log(this.parent.parentContainer)
			this.parent.parentContainer.postFX.list[0].active = false;
		}else{
			this.parent.preFX.list[0].active = false;
		}
		this.parent.on('pointerover', event => {
			if(this.type == "DescriptionCards"){
				this.parent.parentContainer.postFX.list[0].active = true;
			}else{
				this.parent.preFX.list[0].active = true;
			}
		})
		this.parent.on('pointerout', event => {
			if(this.type == "DescriptionCards"){
				console.log
				this.parent.parentContainer.postFX.list[0].active = true;
			}else{
				this.parent.preFX.list[0].active = false;
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
