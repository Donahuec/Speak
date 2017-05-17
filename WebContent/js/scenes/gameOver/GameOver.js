/**
 * GameOver state.
 */
function GameOver() {
	Phaser.State.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
GameOver.prototype = proto;
GameOver.prototype.constructor = GameOver;



GameOver.prototype.create = function() {
	this.scene = new GameOverCanvas(this.game);
	window.alert("You've reached the end of the implemented game! Keep an eye out for further updates!");
};
