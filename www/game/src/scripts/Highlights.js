
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
		if(this.type == "DescriptionCards" ||this.type == "DescriptionChar"){
			this.parent.parentContainer.postPipelines[0].active = false

			this.parent.on('pointerdown', event => {
				this.parent.parentContainer.postPipelines[0].active = false
			})

			this.parent.on('pointerover', event => {
				this.parent.parentContainer.postPipelines[0].active = true
			})
			this.parent.on('pointerout', event => {
				this.parent.parentContainer.postPipelines[0].active = false
			})
		}else{
			this.parent.on('pointerover', event => {
				this.parent.preFX.list[0].active = true;
			})
			this.parent.on('pointerout', event => {
				if(charChosen == null){
					this.parent.preFX.list[0].active = false;
				}
			})
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
