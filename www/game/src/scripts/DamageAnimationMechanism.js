
// You can write more code here

/* START OF COMPILED CODE */

class DamageAnimationMechanism extends Phaser.GameObjects.Text {

	constructor(scene, x, y) {
		super(scene, x ?? 1, y ?? 3, "", {});

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		this.setOrigin(0.5, 0.5);
		this.text = "0";
		this.setStyle({ "align": "center", "color": "#c30d0dff", "fontFamily": "Minecraft", "fontSize": "100px", "stroke": "#000000ff", "strokeThickness":6});

		/* START-USER-CTR-CODE */
		this.scene.tweens.add({
			targets: this,
			y: y - 50,
			alpha: 0,
			duration: 2500,
			ease: 'Power1',
			onComplete: () => {
				this.destroy();
			}
		})
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
