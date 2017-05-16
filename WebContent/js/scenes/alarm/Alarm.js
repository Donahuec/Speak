/**
 * Alarm state.
 */
function Alarm() {
	StoryState.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Alarm.prototype = proto;
Alarm.prototype.constructor = Alarm;


Alarm.prototype.create = function() {
	this.scene = new alarmCanvas(this.game);
	StoryState.prototype.create.call(this);
	this.scene.fAlarm_bg.onInputDown.add(clickBG, {HUD : this.HUD, game : this.game});
	
};

Alarm.prototype.update = function() {
	StoryState.prototype.update.call(this);

	this.scene.alarmTime.text = this.game.stats.getTimeString().slice(0, 5);
};

clickBG = function(game) {
	StoryState.prototype.startInteraction.call(this, this.game.data.alarm.alarmGoesOff);
};