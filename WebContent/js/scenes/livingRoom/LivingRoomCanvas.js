// Generated by Phaser Editor v1.2.1

/**
 * LivingRoomCanvas.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function LivingRoomCanvas(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	this.goToBedroom = function() {
		this.game.state.start("Bedroom");
	};

	/* --- pre-init-end --- */

	this.game.add.sprite(0, 0, 'livingRoom_bg', null, this);

	var bedroomDoor = this.game.add.button(57, 74, 'bedroomDoor', this.goToBedroom, this, null, 0, null, null, this);
	bedroomDoor.animations.add('open', [0, 1, 2, 3], 6, false);
	bedroomDoor.animations.add('close', [3, 2, 1, 0], 6, false);

	var kitchenDoor = this.game.add.button(1597, 71, 'kitchenDoor', null, this, null, 0, null, null, this);
	kitchenDoor.animations.add('open', [0, 1, 2, 3], 6, false);
	kitchenDoor.animations.add('close', [3, 2, 1, 0], 6, false);

	var livingroom_laundry = this.game.add.sprite(305, 574, 'homeAtlas', 'livingroom_laundry', this);
	livingroom_laundry.scale.setTo(0.44427519648011843, 0.38828797369705675);

	var livingroom_bills = this.game.add.sprite(635, 773, 'homeAtlas', 'livingroom_bills', this);
	livingroom_bills.scale.setTo(0.4055681486839246, 0.3364479590406657);

	 // public fields

	this.fBedroomDoor = bedroomDoor;
	this.fKitchenDoor = kitchenDoor;

	/* --- post-init-begin --- */

	// you can insert code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var LivingRoomCanvas_proto = Object.create(Phaser.Group.prototype);
LivingRoomCanvas.prototype = LivingRoomCanvas_proto;
LivingRoomCanvas.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here

