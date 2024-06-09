var item = null
var throwing = false
var initialX = null
var initialY = null
var finalX = null
var finalY = null
var peakHeight = null
var startTime = null
var angle = 4
var maxAngle = 360
var duration = 500
var thrownBack = false

/* START OF COMPILED CODE */

class Throwables extends ScriptNode {

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
		this.parent.on('pointerdown', event => {
			if(this.type == "CardTook"){
				initialX = this.parent.x
				initialY = this.parent.y
				finalX = 1920 + 304/2
				finalY = this.parent.y
				startTime = performance.now();
				peakHeight = Math.abs(finalY - initialY) + 0
				thrownBack = true
			}
		})
	}

	update(){
		if(this.type == "CardTook"){
			if(this.parent.visible == true){
				this.parent.angle += 5
				this.throwItem(this.parent, initialX, initialY, finalX, finalY, true)
			}
		}else if(this.type == "Throwables"){
			if (throwing == true) {
				// console.log(throwing, item, initialX, initialY, finalX, finalY, peakHeight, startTime)
				if(item.x != finalX || item.y != finalY ){
					if(item.name.search("throwables") == 0){
						item.angle += angle
					}
					this.throwItem(item, initialX, initialY, finalX, finalY)
				}else{
					throwing = false
				}
			}
		}
	}

	throwItem(item, initialX, initialY, finalX, finalY, card = false){
		const currentTime = performance.now();
		const elapsedTime = currentTime - startTime;
		const progress = elapsedTime / duration;

		if (progress < 1) {
			// Calculate the current position
			const x = initialX + (finalX - initialX) * progress;
			const y = initialY + (finalY - initialY) * progress - peakHeight * Math.sin(Math.PI * progress);
			
			//angle of thrown card
			if(thrownBack == false && card == true){
				item.scaleX += 0.005
				item.scaleY += 0.005
			}

			// Update item's position

			item.x = x;
			item.y = y;
		} else {
		  // Ensure the item ends at the final position
			item.x = finalX;
			item.y = finalY;

			// item.angle = Math.atan2(finalY - initialY, finalX - initialX) * 180 / Math.PI;
			item.angle = 0

			if(card == true){
				if(thrownBack == true){
					item.visible = false
					item.x = initialX;
					item.y = initialY;
					item.scaleX = 0.4
					item.scaleY = 0.4
					thrownBack = false
				}
			}else{
				if(item.name.search("throwables") == 0){
					item.visible = false
				}
				item.x = initialX;
				item.y = initialY;
			}

			item = null
			initialX = null
			initialY = null
			finalX = null
			finalY = null
			peakHeight = null
			startTime = null
			throwing = false
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
