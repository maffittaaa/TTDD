
// You can write more code here

/* START OF COMPILED CODE */

class HealthBarMechanism extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	awake() {

	}

	healthBarChanges(currentHP, player, slot_id, character_id) {
		var maxHP = 100 //all characters have 100hp except for Panda and Big Billy

		if (character_id == 4 || character_id == 7) { //Panda or Big Billy are tanks, so they have 200Hp max
			maxHP = 200;
		}

		var healthBar = this.scene.children.list;

		for (let i = 0; i < healthBar.length; i++) {

			if (healthBar[i].name == "HealthBarsPlayer" + player) {

				for (let j = 0; j < healthBar[i].list.length; j++) {
					if (healthBar[i].list[j].name == "healthbar_p" + player + "_slot" + slot_id) {
						for (let k = 0; k < 11; k++) {
							if (currentHP >= maxHP * (k * 0.1)) {
								healthBar[i].list[j].visible = true
								healthBar[i].list[j].setTexture("spritesheet", 10 - k);
								if(currentHP > 0 && k == 0){
									healthBar[i].list[j].setTexture("spritesheet", 9);
								}
							} 
						}

						if(currentHP < 0 ){
							healthBar[i].list[j].setTexture("spritesheet", 10);
						}
					}else if (healthBar[i].list[j].name == "hp_p" + player + "_slot" + slot_id) {
						healthBar[i].list[j].visible = true
						healthBar[i].list[j].text = currentHP + " / " + Math.floor(maxHP);
					}
				}
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
