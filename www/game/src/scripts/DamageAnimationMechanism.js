
// You can write more code here

/* START OF COMPILED CODE */

class DamageAnimationMechanism extends Phaser.GameObjects.Text {

	constructor(scene, x, y) {
		super(scene, x ?? -13, y ?? -17, "", {});

		this.text = "0\n";
		this.setStyle({ "fontSize": "40px" });

		/* START-USER-CTR-CODE */
		this.scene.tweens.add({
			targets: this,
			y: y - 50,
			alpha: 0,
			duration: 1000,
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
