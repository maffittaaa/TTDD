
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

			var script = this

			if(this.option == "Cards"){

				setTimeout(function () {
					for (let i = 0; i < script.parent.parentContainer.list[0].list.length; i++) {
						if(script.parent.parentContainer.list[0].list[i].name.search("card_id") == 0){
							script.parent.parentContainer.list[0].list[i].preFX.list[0].active = false
						}
					}

					for (let i = 0; i < script.parent.parentContainer.list.length; i++) {
						if(i == 0){
							script.parent.parentContainer.list[i].visible = true
						}else{
							script.parent.parentContainer.list[i].visible = false
						}
					}

					script.scene.children.list[2].visible = false
				}, 200);

			}else if(this.option == "Characters"){

				setTimeout(function () {
					for (let i = 0; i < script.parent.parentContainer.list[0].list.length; i++) {
						if(script.parent.parentContainer.list[0].list[i].name.search("character_id") == 0){
							script.parent.parentContainer.list[0].list[i].preFX.list[0].active = false
						}
					}

					for (let i = 0; i < script.parent.parentContainer.list.length; i++) {
						if(i == 0){
							script.parent.parentContainer.list[i].visible = true
						}else{
							script.parent.parentContainer.list[i].visible = false
						}
					}

					script.scene.children.list[1].visible = false
				}, 200);

			}else if(this.option == "Char"){
				for (let i = 0; i < this.parent.parentContainer.list.length; i++) {
					if(this.parent.parentContainer.list[i].name.search("character_id") == 0){
						this.parent.parentContainer.list[i].preFX.list[0].active = false
					}
				}

				this.parent.preFX.list[0].active = true
				this.parent.name = "character_id_" + this.id

				if(this.id == 3){
					this.parent.parentContainer.list[10].setTexture("cartas2_Imprimir", this.frameId)
					this.getCardCharacterDescription("Char", this.id)
				}else{
					this.parent.parentContainer.list[10].setTexture("cartas1_Imprimir", this.frameId)
					this.getCardCharacterDescription("Char", this.id)
				}

			}else if(this.option == "Card"){
				for (let i = 0; i < this.parent.parentContainer.list.length; i++) {
					if(this.parent.parentContainer.list[i].name.search("card_id") == 0){
						this.parent.parentContainer.list[i].preFX.list[0].active = false
					}
				}
				
				this.parent.preFX.list[0].active = true
				this.parent.name = "card_id_" + this.id

				if(this.id == 4 || this.id == 6 || this.id == 10){
					this.parent.parentContainer.list[10].setTexture("cartas4_Imprimir", this.frameId)
					this.getCardCharacterDescription("Card", this.id)
				}else{
					this.parent.parentContainer.list[10].setTexture("cartas3_Imprimir", this.frameId)
					this.getCardCharacterDescription("Card", this.id)
				}
			}
		})
	}

	getCardCharacterDescription(type, id){
		var scene = this
		$.ajax({
			type: "POST",
			url: "/match/descriptions",
			data:{
				"type": type,
				"id": id
			},
			success: function (data) {
				if(data.succesfull){
					scene.parent.parentContainer.list[11].text = data.description
					scene.parent.parentContainer.list[11].setWordWrapWidth(1600)
				}else{
					scene.parent.parentContainer.list[11].text = data.message;
				}
			},
			error: function (err) {
				console.log(err);
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
