
// You can write more code here

/* START OF COMPILED CODE */

class DescriptionsMechanism extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	option = "";
	/** @type {number} */
	id = 0;
	/** @type {number} */
	frameId = 0;

	/* START-USER-CODE */

	start(){
		this.parent.on('pointerdown', event => {
			console.log(this.id)
			if(this.option == "Cards"){
				this.parent.visible = false
				this.parent.scene.children.list[4].visible = false
				this.parent.parentContainer.list[0].visible = true

			}else if(this.option == "Characters"){
				this.parent.visible = false
				this.parent.scene.children.list[5].visible = false
				this.parent.parentContainer.list[0].visible = true

			}else if(this.option == "Char"){
				if(this.id == 3){
					this.parent.parentContainer.list[10].setTexture("cartas2_Imprimir", this.frameId)
				}else{
					this.parent.parentContainer.list[10].setTexture("cartas1_Imprimir", this.frameId)
				}

			}else if(this.option == "Card"){
				if(this.id == 4 || this.id == 6 || this.id == 10){
					this.parent.parentContainer.list[10].setTexture("cartas4_Imprimir", this.frameId)
				}else{
					this.parent.parentContainer.list[10].setTexture("cartas3_Imprimir", this.frameId)
				}
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
