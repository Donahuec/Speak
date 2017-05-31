/**
 * Kitchen state.
 */
function Kitchen() {
	StoryState.call(this);
}

/** @type Phaser.State */
var proto = Object.create(StoryState.prototype);
Kitchen.prototype = proto;
Kitchen.prototype.constructor = Kitchen;

Kitchen.prototype.init = function() {
	StoryState.prototype.init.call(this);
	
	this.KITCHEN = 0;
	this.BUS = 1;
	this.WALK = 2;
};

Kitchen.prototype.create = function() {
	this.scene = new KitchenCanvas(this.game);
	this.setStateData(this.game.data.kitchen);
	StoryState.prototype.create.call(this);
	
	//set up hallway door animation
	this.scene.fHallwayDoor.onInputOver.add(openDoor, 
			{HUD : this.HUD, door : this.scene.fHallwayDoor,
				description : this.data.hallway.click});
	this.scene.fHallwayDoor.onInputOut.add(closeDoor, 
			{HUD : this.HUD, door : this.scene.fHallwayDoor, 
				description : this.data.description});
	//Set up hallway door click interaction
	this.scene.fHallwayDoor.onInputDown.add(this.startInteraction, this, 0, this.data.hallway);	
	
	
	if (this.game.data.kitchen.fridge.enabled !== false) {
		//set up fridge door animation
		this.scene.fFridge.onInputOver.add(openDoor, 
				{HUD : this.HUD, door : this.scene.fFridge,
					description : this.data.fridge.click});
		this.scene.fFridge.onInputOut.add(closeDoor, 
				{HUD : this.HUD, door : this.scene.fFridge, 
					description : this.data.description});
		//Set up fridge door click interaction
		this.scene.fFridge.onInputDown.add(this.startInteraction, this, 0, this.data.fridge);	
	}
};

Kitchen.prototype.update = function() {
	StoryState.prototype.update.call(this);
	if (this.interactionReturn.clicked === 0 && this.interactionReturn.interaction === this.data.hallway) {
		this.game.state.start("LivingRoom");		
	} else if (this.interactionReturn.clicked === 1 && this.interactionReturn.interaction === this.data.hallway) {
		this.game.state.start("BusStop");		
	}else if (this.interactionReturn.interaction === this.data.fridge) {
		//make sure we can't eat breakfast twice
		this.game.data.kitchen.fridge.enabled = false;
		this.scene.fFridge.inputEnabled = false;
		//record what kind of breakfast we ate
		this.game.stats.breakfastType = this.interactionReturn.clicked;
	} else if (this.interactionReturn.interaction === this.data.hallway){
		this.game.state.start("GameOver");		

	}
};






