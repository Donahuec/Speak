/**
 * Alarm state.
 */
function Alarm() {
	StoryState.call(this);
}

/** @type Phaser.State */
var proto = Object.create(StoryState.prototype);
Alarm.prototype = proto;
Alarm.prototype.constructor = Alarm;

Alarm.prototype.init = function() {
	StoryState.prototype.init.call(this);
	
	this.GET_UP = 0;
};

Alarm.prototype.create = function() {
	this.scene = new alarmCanvas(this.game);
	this.setStateData(this.game.data.alarm);
	
	StoryState.prototype.create.call(this);
	
	this.scene.fAlarm_bg.onInputDown.add(startInteractionClick,
			{HUD : this.HUD, game : this.game, 
			interaction : this.data.alarmGoesOff});	
};

Alarm.prototype.update = function() {
	StoryState.prototype.update.call(this);
	//Get up Button is clicked
	if (this.interactionReturn.clicked == this.GET_UP) {
		this.game.state.start("Bedroom");
	}
	//display alarm clock text with just numbers, no AM or PM
	this.scene.alarmTime.text = this.game.stats.getTimeString().slice(0, 5);
};
