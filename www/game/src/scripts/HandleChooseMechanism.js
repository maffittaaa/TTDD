let slotChosen = 0
let charChosen = 0

/* START OF COMPILED CODE */

class HandleChooseMechanism extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	CharacterID = 0;
	/** @type {number} */
	SlotID = 0;
	/** @type {string} */
	type = "Image";

	/* START-USER-CODE */

	start(){
		this.parent.on('pointerdown', event => {
			if(this.CharacterID != 0){
				console.log(this.CharacterID)
				charChosen = this.CharacterID
			}else{
				console.log(this.SlotID)
				slotChosen = this.SlotID
			}
		})
	}

	update(){
		if(charChosen != 0 && slotChosen != 0){
			if(this.type == "Text"){
				if(this.SlotID == slotChosen){
					console.log(this.parent)
					this.parent.text = charChosen

					slotChosen = 0
					charChosen = 0
				}
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
