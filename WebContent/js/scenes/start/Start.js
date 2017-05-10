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


Start.prototype.create = function() {
	this.scene = new startCanvas(this.game);
};
