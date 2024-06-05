var item = null
var throwing = false
var initialX = null
var initialY = null
var finalX = null
var finalY = null
var peakHeight = null
var startTime = null
var angle = 1
var duration = 1500

/* START OF COMPILED CODE */

class Throwables extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	update(){
		if (throwing == true) {
			// console.log(throwing, item, initialX, initialY, finalX, finalY, peakHeight, startTime)

			if(item.x != finalX || item.y != finalY ){
				item.angle += angle
				this.throwItem(item, initialX, initialY, finalX, finalY)
			}else{
				throwing = false
			}
		}
	}

	throwItem(item, initialX, initialY, finalX, finalY){
		const currentTime = performance.now();
		const elapsedTime = currentTime - startTime;
		const progress = elapsedTime / duration;
  
		if (progress < 1) {
			// Calculate the current position
			const x = initialX + (finalX - initialX) * progress;
			const y = initialY + (finalY - initialY) * progress - peakHeight * Math.sin(Math.PI * progress);
		
			// Update item's position

			item.x = x;
			item.y = y;
		} else {
		  // Ensure the item ends at the final position
			item.x = finalX;
			item.y = finalY;
			item.angle = Math.atan2(finalY - initialY, finalX - initialX) * 180 / Math.PI;
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
