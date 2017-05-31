/**
 * LivingRoom state.
 */
function LivingRoom() {
	StoryState.call(this);
}

/** @type Phaser.State */
var proto = Object.create(StoryState.prototype);
LivingRoom.prototype = proto;
LivingRoom.prototype.constructor = LivingRoom;

LivingRoom.prototype.init = function() {
	StoryState.prototype.init.call(this);
	
	this.KITCHEN = 0;
	this.BUS = 1;
	this.WALK = 2;
};

LivingRoom.prototype.create = function() {
	this.scene = new LivingRoomCanvas(this.game);
	this.setStateData(this.game.data.livingRoom);
	StoryState.prototype.create.call(this);
	
	//set up bedroom door animation
	this.scene.fBedroomDoor.onInputOver.add(openDoor, 
			{HUD : this.HUD, door : this.scene.fBedroomDoor,
				description : this.data.toBedroomDescription});
	this.scene.fBedroomDoor.onInputOut.add(closeDoor, 
			{HUD : this.HUD, door : this.scene.fBedroomDoor, 
				description : this.data.description});
	
	//set up hallway/kitchen door animation
	this.scene.fKitchenDoor.onInputOver.add(openDoor, 
			{HUD : this.HUD, door : this.scene.fKitchenDoor,
				description : this.data.hallway.click});
	this.scene.fKitchenDoor.onInputOut.add(closeDoor, 
			{HUD : this.HUD, door : this.scene.fKitchenDoor, 
				description : this.data.description});
	
	//Set up hallway door click interaction
	this.scene.fKitchenDoor.onInputDown.add(this.startInteraction, this, 0, this.data.hallway);	
	
};

LivingRoom.prototype.update = function() {
	StoryState.prototype.update.call(this);
	if (this.interactionReturn.clicked === 0) {
		this.game.state.start("Kitchen");
	}else if (this.interactionReturn.clicked === 1){
		this.game.state.start("BusStop");		
	} else if (this.interactionReturn.interaction === this.data.hallway){
		this.game.state.start("GameOver");		
	}
};






