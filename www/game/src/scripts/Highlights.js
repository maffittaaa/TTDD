cardsAnimIn = false
cardsAnimOut = false
cardsDist = 143
cardsDistInc = cardsDist * 0.07
cardsInitialX = [892, 916, 937]

charAnimIn = false
charAnimOut = false
charDistY = 80
charDistX = 150
charDistIncY = charDistY * 0.07
charDistIncX = charDistX * 0.07
charInitialX = [405, 385, 425]
pandaInitialY = 262


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
				if(this.type == "DescriptionCards"){
					cardsAnimIn = true
					cardsAnimOut = false
				}else if(this.type == "DescriptionChar"){
					charAnimIn = true
					charAnimOut = false
				}
			})
			this.parent.on('pointerout', event => {
				this.parent.parentContainer.postPipelines[0].active = false
				if(this.type == "DescriptionCards"){
					cardsAnimOut = true
					cardsAnimIn = false
				}else if(this.type == "DescriptionChar"){
					charAnimOut = true
					charAnimIn = false
				}
			})
		}else{
			this.parent.on('pointerover', event => {
				if(charChosen == null){
					this.parent.preFX.list[0].active = true;
				}
			})
			this.parent.on('pointerout', event => {
				if(charChosen == null){
					this.parent.preFX.list[0].active = false;
				}
			})
		}
	}

	update(){
		if(this.type == "DescriptionCards"){
			if (cardsAnimOut == true){
				this.moveToLeft(this.parent.parentContainer)
			}
			if(cardsAnimIn == true){
				this.moveToRight(this.parent.parentContainer)
			}
		}else if(this.type == "DescriptionChar"){
			if (charAnimOut == true){
				this.moveCharOut(this.parent.parentContainer)
			}
			if(charAnimIn == true){
				this.moveCharIn(this.parent.parentContainer)
			}
		}
	}

	moveToRight(parentContainer){
		if(parentContainer.list[1].x < cardsInitialX[0] + cardsDist){
			parentContainer.list[1].x += cardsDistInc
		}else if (parentContainer.list[2].x < cardsInitialX[1] + cardsDist){
			parentContainer.list[2].x += cardsDistInc
		}else if (parentContainer.list[3].x < cardsInitialX[2] + cardsDist){
			parentContainer.list[3].x += cardsDistInc	
		}else{
			cardsAnimIn = false
		}
	}

	moveToLeft(parentContainer){
		if(parentContainer.list[3].x > cardsInitialX[2]){
			parentContainer.list[3].x -= cardsDistInc
		}else if (parentContainer.list[2].x > cardsInitialX[1]){
			parentContainer.list[2].x -= cardsDistInc
		}else if (parentContainer.list[1].x > cardsInitialX[0]){
			parentContainer.list[1].x -= cardsDistInc	
		}else{
			cardsAnimOut = false
		}
	}

	moveCharIn(parentContainer){
		if(parentContainer.list[1].y > pandaInitialY - charDistY){
			parentContainer.list[1].y -= charDistIncY
		}
		if (parentContainer.list[2].x < charInitialX[0] + charDistX){
			parentContainer.list[2].x += charDistIncX	
		}
		if (parentContainer.list[3].x > charInitialX[1] - charDistX){
			parentContainer.list[3].x -= charDistIncX	
		}
		if (parentContainer.list[4].x < charInitialX[2] + charDistX){
			parentContainer.list[4].x += charDistIncX	
		}else{
			charAnimIn = false
		}
	}

	moveCharOut(parentContainer){

		if(parentContainer.list[1].y < pandaInitialY){
			parentContainer.list[1].y += charDistIncY
		}
		if (parentContainer.list[2].x > charInitialX[0]){
			parentContainer.list[2].x -= charDistIncX	
		}
		if (parentContainer.list[3].x < charInitialX[1]){
			parentContainer.list[3].x += charDistIncX	
		}
		if (parentContainer.list[4].x > charInitialX[2]){
			parentContainer.list[4].x -= charDistIncX	
		}else{
			charAnimOut = false
		}
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
