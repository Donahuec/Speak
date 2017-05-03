/**
 * start state.
 */
function Start() {
	Phaser.State.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Start.prototype = proto;
//start.prototype.constructor = start;



Start.prototype.preload = function() {
	this.load.pack("start", "assets/assets-pack.json");
};

Start.prototype.create = function() {
	this.scene = new startCanvas(this.game);
//	this.scene.fStartButton.onInputOver.add(startHover, this);
//	this.scene.fStartButton.onInputOut.add(startOut, this);
//	this.scene.fOptionsButton.onInputOver.add(optionsHover, this);
//	this.scene.fOptionsButton.onInputOut.add(optionsOut, this);
}

Start.prototype.startGame = function() {
	this.game.state.start("Level");
};

//function startHover() {
//	this.scene.fStartButton.scale.setTo(1.25, 1.25);
//}
//
//function startOut() {
//	this.scene.fStartButton.scale.setTo(1, 1);	
//}
//
//function optionsHover() {
//	this.scene.fOptionsButton.scale.setTo(1.25, 1.25);
//}
//
//function optionsOut() {
//	this.scene.fOptionsButton.scale.setTo(1, 1);	
//}
//
//function startGame() {
//	this.game.state.start("Level");
//}