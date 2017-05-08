/**
 * Alarm state.
 */
function Alarm() {
	Phaser.State.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Alarm.prototype = proto;
Alarm.prototype.constructor = Alarm;

Alarm.prototype.preload = function() {
	// TODO: generated method.
};

Alarm.prototype.create = function() {
	this.scene = new alarmCanvas(this.game);
	this.scene = new HUDCanvas(this.game);
	
};

Alarm.prototype.update = function() {
	// TODO: generated method.
};