// Generated by Phaser Editor v1.2.1

/**
 * HUDCanvas.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function HUDCanvas(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	this.game.add.sprite(0, -129, 'HUDAtlas', 'header', this);

	this.game.add.sprite(0, 797, 'HUDAtlas', 'footer', this);

	this.game.add.sprite(111, 10, 'HUDAtlas', 'leftBarEnd', this);

	var anxietyBarMiddle = this.game.add.tileSprite(120, 10, 7, 19, 'HUDAtlas', 'barMiddle', this);
	anxietyBarMiddle.scale.setTo(221.07512928627278, 1.0);

	this.game.add.sprite(1667, 10, 'HUDAtlas', 'rightBarEnd', this);

	var anxietyFill = this.game.add.tileSprite(119, 12, 4, 15, 'HUDAtlas', 'barFill', this);
	anxietyFill.scale.setTo(60.69777847539599, 1.0);

	this.game.add.sprite(111, 41, 'HUDAtlas', 'leftBarEnd', this);

	var stressBarMiddle = this.game.add.tileSprite(120, 41, 7, 19, 'HUDAtlas', 'barMiddle', this);
	stressBarMiddle.scale.setTo(117.94871248565869, 1.0);

	this.game.add.sprite(945, 41, 'HUDAtlas', 'rightBarEnd', this);

	var stressFill = this.game.add.tileSprite(119, 43, 4, 15, 'HUDAtlas', 'barFill', this);
	stressFill.scale.setTo(60.69777847539599, 1.0);

	 // public fields

	this.fAnxietyFill = anxietyFill;
	this.fStressFill = stressFill;

	/* --- post-init-begin --- */

	// you can insert code here

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var HUDCanvas_proto = Object.create(Phaser.Group.prototype);
HUDCanvas.prototype = HUDCanvas_proto;
HUDCanvas.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here
