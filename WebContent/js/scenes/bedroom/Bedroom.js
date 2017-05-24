/**
 * Bedroom state.
 */
function Bedroom() {
	StoryState.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(StoryState.prototype);
Bedroom.prototype = proto;
Bedroom.prototype.constructor = Bedroom;


Bedroom.prototype.create = function() {
	this.scene = new bedroomCanvas(this.game);
	this.setStateData(this.game.data.bedroom);
	StoryState.prototype.create.call(this);
	
	this.scene.fDoor.onInputOver.add(openDoor, 
			{HUD : this.HUD, door : this.scene.fDoor,
				description : this.game.data.bedroom.doorDescription});
	this.scene.fDoor.onInputOut.add(closeDoor, 
			{HUD : this.HUD, door : this.scene.fDoor, 
				description : this.game.data.bedroom.description});
};

Bedroom.prototype.update = function() {
	StoryState.prototype.update.call(this);
};