/**
 * Preload state.
 */
function Preload() {
	Phaser.State.call(this);
}


/** @type Phaser.State */
var proto = Object.create(Phaser.State);
Preload.prototype = proto;

Preload.prototype.preload = function() {
	// This sets the preloadBar sprite as a loader sprite.
	// What that does is automatically crop the sprite from 0 to full-width
	// as the files below are loaded in.
	var preloadBar = this.add.sprite(this.world.centerX, this.world.centerY,
			"loading");
	preloadBar.anchor.set(0.5, 0.5);
	this.load.setPreloadSprite(preloadBar);
	
	this.game.stats = new GameStats();
	
	this.game.state.add("StoryState", StoryState);
	this.game.state.add("Start", Start);
	this.game.state.add("Alarm", Alarm);
	this.game.state.add("GameOver", GameOver);
	this.game.state.add("Bedroom", Bedroom);
	this.game.state.add("LivingRoom", LivingRoom);
	this.game.state.add("Kitchen", Kitchen);
	

	// Here we load the rest of the assets our game needs.
	this.load.pack("start", "assets/assets-pack.json");
	this.load.pack("alarm", "assets/assets-pack.json");
	this.load.pack("bedroom", "assets/assets-pack.json");
	this.load.pack("HUD", "assets/assets-pack.json");
	this.load.pack("gameOver", "assets/assets-pack.json");
	this.load.pack("gameData", "assets/assets-pack.json");
	this.load.pack("livingRoom", "assets/assets-pack.json");
	this.load.pack("home", "assets/assets-pack.json");
	this.load.pack("kitchen", "assets/assets-pack.json");
	
};

Preload.prototype.create = function() {
	this.game.data = this.game.cache.getJSON('GameData');
	this.game.state.start("Start");
};