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
};

BusStop.prototype.create = function() {
	this.scene = new BusStopCanvas(this.game);
	this.setStateData(this.game.data.busStop);
	
	StoryState.prototype.create.call(this);
	
	this.scene.fToll.onInputDown.add(startInteractionClick,
			{HUD : this.HUD, game : this.game, 
			interaction : this.data.toll});	
};

BusStop.prototype.update = function() {
	StoryState.prototype.update.call(this);
	if (this.interactionReturn.clicked !== -1) {
		this.game.state.start("GameOver");
	}
};
