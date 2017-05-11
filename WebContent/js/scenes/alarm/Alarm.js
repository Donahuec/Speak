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


Alarm.prototype.create = function() {
	this.scene = new alarmCanvas(this.game);
	this.HUD = new HUDCanvas(this.game);
	
	this.scene.fAlarm_bg.onInputDown.add(clickBG, {option : this.HUD.fOptions});
	
};

Alarm.prototype.update = function() {
	// TODO: generated method.
};
clickBG = function() {
	this.option.visible = true;
}