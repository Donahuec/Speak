/**
 * StoryState state.
 */
function StoryState() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
StoryState.prototype = proto;
StoryState.prototype.constructor = StoryState;


StoryState.prototype.create = function() {
	this.HUD = new HUDCanvas(this.game);
};

StoryState.prototype.update = function() {
	this.interactionReturn = StoryState.prototype.handleInteraction.call(this);
};

StoryState.prototype.startInteraction = function(interaction) {
	this.game.stats.curInteraction = interaction;
	this.HUD.setInteractionText(interaction);
	this.HUD.activateOptions(true);
};

StoryState.prototype.clearInteraction = function() {
	this.game.stats.curInteraction = null;
	this.game.stats.lastClicked = -1;
	this.HUD.activateOptions(false);
	
};

StoryState.prototype.handleInteraction = function() {
	if (this.game.stats.lastClicked === -1) {
		return -1;
	}
	var returnValue = this.game.stats.lastClicked;
	StoryState.prototype.handleChoice.call(this);
	StoryState.prototype.clearInteraction.call(this);
	return returnValue;
};

StoryState.prototype.handleChoice = function() {
	var options = this.game.stats.curInteraction.options;
	for (option in options) {
		if (options[option].index === this.game.stats.lastClicked) {
			this.game.stats.updateAnxiety(options[option].anxiety);
			this.add.tween(this.HUD.fAnxietyFill.scale).to( {x : (this.game.stats.getAnxiety() / MAX_ANXIETY)
				* this.HUD.fAnxietyFill.data.maxScale }, 300, null, true);
			
			this.game.stats.updateStress(options[option].stress);
			this.add.tween(this.HUD.fStressFill.scale).to( {x : (this.game.stats.getStress() / MAX_STRESS)
				* this.HUD.fStressFill.data.maxScale }, 300, null, true);
			
			this.game.stats.updateTime(options[option].time.hoursTaken, options[option].time.minutesTaken);
			
		}
	}
};












