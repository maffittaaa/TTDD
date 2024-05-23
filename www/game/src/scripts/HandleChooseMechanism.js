let slotChosen = null
let charChosen = null

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
			if(this.SlotID != 0){
				console.log(this.SlotID)
				slotChosen = this.SlotID
			}else{
				console.log(this.CharacterID)
				charChosen = this.CharacterID
			}
			console.log(this.CharacterID)
			console.log(this.SlotID)
		})
	}

	update(){
		if(charChosen != null && slotChosen != null){
			if(this.type == "Slot"){
				if(this.SlotID == slotChosen){
					this.parent.setTexture("peawns", charChosen)
					slotChosen = null
					charChosen = null
				}
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
