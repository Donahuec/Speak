/**
 * StoryState state.
 * This is a base for states used for the story in this game
 * provides utilities for handling interactions
 * and sets up some utilities used by all story states
 */
function StoryState() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
StoryState.prototype = proto;
StoryState.prototype.constructor = StoryState;

StoryState.prototype.init = function() {
	/**
	 * sets/creats a data propert that holds the json data for the current state
	 * @param data object from json data that representst the current state
	 */
	this.setStateData = function(data) {
		this.data = data;
	};
	
	/**
	 * updates stress, anxiety, and time when a choice is made
	 */
	this.handleChoice = function() {
		var options = this.game.stats.getCurInteraction().options;
		for (option in options) {
			//check if this option was the one chosen
			if (options[option].index === this.game.stats.getLastClicked()) {
				//update anxiety
				this.game.stats.updateAnxiety(options[option].anxiety);
				this.add.tween(this.HUD.fAnxietyFill.scale).to( 
						{x : (this.game.stats.getAnxiety() / MAX_ANXIETY)
							* this.HUD.fAnxietyFill.data.maxScale }, 300, null, true);
				
				//update stress
				this.game.stats.updateStress(options[option].stress);
				this.add.tween(this.HUD.fStressFill.scale).to( 
						{x : (this.game.stats.getStress() / MAX_STRESS)
							* this.HUD.fStressFill.data.maxScale }, 300, null, true);
				
				this.game.stats.updateTime(options[option].time.hoursTaken, options[option].time.minutesTaken);
			}
		}
	};
	
	/**
	 * resets the interaction data, to prepare for the next interaction
	 */
	this.clearInteraction = function() {
		this.game.stats.setCurInteraction(null);
		this.game.stats.resetLastClicked();
		this.HUD.activateOptions(false);
		
	};

	/**
	 * runs during update. Checks if a choice has been made
	 * and handles related logic
	 * @returns -1 if no choice has been made, otherwise the index of the choice
	 */
	this.handleInteraction = function() {
		//if nothing has been clicked, return -1
		if (this.game.stats.getLastClicked() === -1) {
			return { clicked : -1, interaction : null};
		}

		//update information based ogg of choice
		var lastClicked = this.game.stats.getLastClicked();
		var interaction = this.game.stats.getCurInteraction();
		this.handleChoice.call(this);
		this.clearInteraction.call(this);
		return {clicked : lastClicked, interaction : interaction};
	};
};

StoryState.prototype.create = function() {
	this.game.stats.setCurState(this.key);
	this.HUD = new HUDCanvas(this.game);
	this.HUD.fDescription.text = this.data.description;	
	
};

StoryState.prototype.update = function() {
	this.interactionReturn = this.handleInteraction.call(this);
};

/**
 * Deisplay interaction choices
 * @param interaction json data for the interaction to display
 */
StoryState.prototype.startInteraction = function(interaction) {
	this.game.stats.setCurInteraction(interaction);
	this.HUD.setInteractionText(interaction);
	this.HUD.activateOptions(true);
};
















