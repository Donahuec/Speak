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
};

GameOver.prototype.update = function() {
	// TODO: generated method.
};