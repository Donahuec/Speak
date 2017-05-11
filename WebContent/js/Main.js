window.onload = function() {
	// Create your Phaser game and inject it into an auto-created canvas.
	// We did it in a window.onload event, but you can do it anywhere (requireJS
	// load, anonymous function, jQuery dom ready, - whatever floats your boat)
	var game = new Phaser.Game(1920, 1080, Phaser.AUTO);

	// Add the States your game has.
	game.state.add("Boot", Boot);
	
	game.state.add("Preload", Preload);
	
	// Now start the Boot state.
	game.state.start("Boot");
};


/**
 * Scales a button. needs to be passed a context containing a this.button that has the button, and this.scale that defines what size to scale the button to.
 * To be used for button callbacks
 */
function buttonScale() {
	this.button.scale.setTo(this.scale, this.scale);
}