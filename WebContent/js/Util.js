/**
 * File containing constants and utility functions
 */

/* Constants for use throughout the game */
var MAX_ANXIETY = 200;
var STARTING_ANXIETY = 50;
var MAX_STRESS = 50;
var STARTING_STRESS = 10;
var START_HOUR = 7;
var START_MINUTE = 20;
var AM = "AM";
var PM = "PM";
var NO_BREAKFAST = -1;
var SMALL_BREAKFAST = 0;
var MEDIUM_BREAKFAST = 1;
var LARGE_BREAKFAST = 2;
var PAST = -1;
var CURRENT = 0;
var FUTURE = 1;


/**
 * Scales a button. needs to be passed a context containing a this.button that has the button, 
 * and this.scale that defines what size to scale the button to.
 * and this.option which is a boolean that determines if it is an option button or not
 * if it is an option, inclued this.description, and this.index
 * To be used for button callbacks
 */
function buttonScale() {
	this.button.scale.setTo(this.scale, this.scale);
	if (this.option) {
		if (this.button.data.description) {
			if (this.scale == 1) {
				this.description.text = this.button.returnDescription;
			} else {
				this.button.returnDescription = this.description.text;
				this.description.text = this.button.data.description;
			}			
		}
	}
}

/**
 * Takes a context that includes HUD, the game, and the interaction
 *  that you want to activate
 *  Button Callback that activates an interaction
 */
function startInteractionClick() {
	StoryState.prototype.startInteraction.call(this, this.interaction);
}

/**
 * An alert pop-up for when a feature is not yet implemented
 */
function notImplemented() {
	console.log("feature not implemented");
	window.alert("This feature has not yet been implemented!");
}


/**
 * Gets passed a context with the door sprite, description, and HUD
 */
function openDoor() {
	this.HUD.fDescription.text = this.description;
	this.door.play("open");
	
};

/**
 * Gets passed a context with the door sprite,description, and HUD
 */
function closeDoor() {
	this.HUD.fDescription.text = this.description;
	this.door.play("close");
};

