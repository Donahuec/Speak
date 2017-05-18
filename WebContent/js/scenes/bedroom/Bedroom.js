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
	
	this.openDoor = function() {
		this.HUD.fDescription.text = this.game.data.bedroom.doorDescription;
		this.scene.fDoor.play("open");
		
	};
	
	this.closeDoor = function() {
		this.HUD.fDescription.text = this.game.data.bedroom.description;
		this.scene.fDoor.play("close");
	};
	
	this.scene.fDoor.onInputOver.add(this.openDoor, this);
	this.scene.fDoor.onInputOut.add(this.closeDoor, this);
};

Bedroom.prototype.update = function() {
	StoryState.prototype.update.call(this);
};