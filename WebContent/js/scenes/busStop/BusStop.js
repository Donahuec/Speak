/**
 * BusStop state.
 */
function BusStop() {
	StoryState.call(this);
}

/** @type Phaser.State */
var proto = Object.create(StoryState.prototype);
BusStop.prototype = proto;
BusStop.prototype.constructor = BusStop;

BusStop.prototype.init = function() {
	StoryState.prototype.init.call(this);
	this.RIDE = 0;
	this.WAIT = 1;
	this.WALK = 2;
};

BusStop.prototype.create = function() {
	this.scene = new BusStopCanvas(this.game);
	this.setStateData(this.game.data.busStop);
	
	StoryState.prototype.create.call(this);
	
	this.scene.fToll.onInputDown.add(this.startInteraction, this, 0, this.data.toll);	
};

BusStop.prototype.update = function() {
	StoryState.prototype.update.call(this);
	
	if (this.interactionReturn.interaction == this.data.toll) {
		if (this.interactionReturn.clicked == PANIC) {
			this.startInteraction(null, null, this.data.panic);
		} else if (this.interactionReturn.clicked == this.RIDE) {
			if (panic) {
				this.startInteraction(null, null, this.data.panic);
			}
		} else if (this.interactionReturn.clicked == this.WAIT) {
			this.startInteraction(null, null, this.data.didWait);
		} else {
			this.game.state.start("GameOver");
		}
	} else if (this.interactionReturn.clicked != -1) {
		this.game.state.start("GameOver");
	}
};
