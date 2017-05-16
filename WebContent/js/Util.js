/**
 * File containing constants and utility functions
 */

var MAX_ANXIETY = 200;
var STARTING_ANXIETY = 50;
var MAX_STRESS = 50;
var STARTING_STRESS = 10;
var START_HOUR = 7;
var START_MINUTE = 20;
var AM = "AM";
var PM = "PM";
var NO_BREAKFAST = 0;
var SMALL_BREAKFAST = 1;
var MEDIUM_BREAKFAST = 2;
var LARGE_BREAKFAST = 3;
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

