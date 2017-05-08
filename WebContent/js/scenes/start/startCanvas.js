// Generated by Phaser Editor v1.2.1

/**
 * startCanvas.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function startCanvas(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here

	/* --- pre-init-end --- */

	this.game.add.sprite(0, 0, 'startBackground', null, this);

	var optionsButton = this.game.add.button(1500, 100, 'startAtlas', null, this, null, 'options', null, null, this);
	optionsButton.anchor.setTo(0.5, 0.5);

	var startButton = this.game.add.button(400, 100, 'startAtlas', startGame, this, null, 'start', null, null, this);
	startButton.anchor.setTo(0.5, 0.5);

	 // public fields

	this.fOptionsButton = optionsButton;
	this.fStartButton = startButton;

	/* --- post-init-begin --- */

	startButton.onInputOver.add(startHover, this);
	startButton.onInputOut.add(startOut, this);
	optionsButton.onInputOver.add(optionsHover, this);
	optionsButton.onInputOut.add(optionsOut, this);

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var startCanvas_proto = Object.create(Phaser.Group.prototype);
startCanvas.prototype = startCanvas_proto;
startCanvas.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

/*
 * Handles Hovering over the Start Button
 */
function startHover() {
	this.fStartButton.scale.setTo(1.25, 1.25);
}

/*
 * Resets the start button after leaving it
 */
function startOut() {
	this.fStartButton.scale.setTo(1, 1);	
}

/*
 * Handles Hovering over the Options Button
 */
function optionsHover() {
	this.fOptionsButton.scale.setTo(1.25, 1.25);
}

/*
 * Resets the options button after leaving it
 */
function optionsOut() {
	this.fOptionsButton.scale.setTo(1, 1);	
}

/*
 * Starts the game when clicking the start button.
 */
function startGame() {
	this.game.state.start("Alarm");
}

