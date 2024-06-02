var leveledUp = false
var randomChar = null
var orderCharImages = null
var imageList = null
var charQnt = 0
var getRandomChar = false

/* START OF COMPILED CODE */

class UnlockCharacterMechanism extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	type = "";
	/** @type {number} */
	characterID = 0;

	/* START-USER-CODE */

	start(){
		this.parent.on('pointerdown', event => {
			var levelUpScreen = this.scene.children.list
			for (let i = 0; i < levelUpScreen.length; i++) {
				if(levelUpScreen[i].name == "LevelUpScreen"){
					this.chooseCharacter()
					levelUpScreen[i].visible = false
				}
			}
		})
	}

	update(){
		if(leveledUp == true && getRandomChar == false){
			if(this.type == "LevelUpManager"){
				this.getRandomCharacters()
				getRandomChar = true
			}
		}
		
		if(randomChar != null && charQnt < randomChar.length){
			for (let i = 0; i < randomChar.length; i++) {
				this.characterID = randomChar[charQnt]
				if (randomChar[i] == 3){
					imageList[i].setTexture("cartas2_Imprimir", orderCharImages[randomChar[i] - 1])
				}else{
					imageList[i].setTexture("cartas1_Imprimir", orderCharImages[randomChar[i] - 1])
				}
			}

			if(randomChar.length < 3){
				var emptySlots = 3 - randomChar.length
				for (let i = 0; i < emptySlots; i++) {
					if(emptySlots == 1){
						if(i == 0){
							imageList[i].x = 840
							imageList[i + 1].x = 440 
						}

						imageList[i + randomChar.length].visible = false
					}else if (emptySlots == 2){
						imageList[i].x = 640

						imageList[i + randomChar.length].visible = false
					}
				}
			}

			charQnt++
		}else{
			randomChar = null
			orderCharImages = null
			imageList = null
			charQnt = 0
		}
	}

	chooseCharacter(){
		var charID = this.characterID
		$.ajax({
			type: "put",
			url: "/levelUp/addCharacters",
			data:{
				character: charID,
			},
			success: function (data) {
				if(data.success){
					console.log(data.message)
					window.location.reload()
				}else{
					console.log(data.message)
				}
			},
			error: function (err) {
				console.log(err);
			}
		})
	}

	getRandomCharacters(){
		var scene = this
		$.ajax({
			type: "GET",
			url: "/levelUp/getRandomCharacters",
			success: function (data) {
				if(data.gotCharacters){
					randomChar = JSON.parse(data.characters)
					orderCharImages = [8, 6, 0, 0, 5, 7, 1, 3, 2, 4]
					imageList = scene.parent.parentContainer.list

				}else{
					console.log(JSON.parse(data.characters))
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
