
// You can write more code here

/* START OF COMPILED CODE */

class LeaveTheGameMechanism extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	start() {
		this.parent.on('pointerdown', event => {
			this.scene.children.list[18].list[1].visible = true;
			this.scene.children.list[18].list[2].visible = true;
			this.scene.children.list[18].list[3].visible = true;
			this.scene.children.list[18].list[4].visible = true;
			this.scene.children.list[18].list[5].visible = true;
			this.scene.children.list[18].list[6].visible = true;

			// No Icon
			this.scene.children.list[18].list[4].on('pointerdown', event => {
				this.cancelActions();
			});

			// Yes Icon
			this.scene.children.list[18].list[3].on('pointerdown', event => {
				this.confirmActions();
			});
		});
	}

	confirmActions() {
		console.log("Player decided to surrender.");
		$.ajax({
			type: "POST",
			url: "/match/leaveMatch",
			success: function (data) {
				console.log(data);
				if (data.surrended == true) {
					window.location.replace("/index.html")
				} else {
					console.log("Something went wrong...");
				}
			},
			error: function (err) {
				console.log(err);
			}
		})
	}

	cancelActions() {
		console.log("Player decided not to surrender.");
		this.scene.children.list[18].list[1].visible = false;
		this.scene.children.list[18].list[2].visible = false;
		this.scene.children.list[18].list[3].visible = false;
		this.scene.children.list[18].list[4].visible = false;
		this.scene.children.list[18].list[5].visible = false;
		this.scene.children.list[18].list[6].visible = false;
	}

	// window.location.replace("/index.html");

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
