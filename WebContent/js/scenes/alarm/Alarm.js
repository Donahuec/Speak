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
	StoryState.prototype.setStateData.call(this, this.game.data.alarm);
	StoryState.prototype.create.call(this);
	this.scene.fAlarm_bg.onInputDown.add(startInteractionClick,
			{HUD : this.HUD, game : this.game, 
			interaction : this.data.alarmGoesOff });
	
};

Alarm.prototype.update = function() {
	StoryState.prototype.update.call(this);
	console.log(this.interactionReturn);
	if (this.interactionReturn === 0) {
		this.game.state.start("GameOver");
	}
	this.scene.alarmTime.text = this.game.stats.getTimeString().slice(0, 5);
};

//clickBG = function(game) {
//	console.log("click!");
//	console.log(this);
//	StoryState.prototype.startInteraction.call(this, this.game.data.alarm.alarmGoesOff);
//};