//global variable for the sake of testing
var gameGlobal;

window.onload = function() {
	// Create your Phaser game and inject it into an auto-created canvas.
	// We did it in a window.onload event, but you can do it anywhere (requireJS
	// load, anonymous function, jQuery dom ready, - whatever floats your boat)
	gameGlobal = new Phaser.Game(1920, 1080, Phaser.AUTO);

	// Add the States your game has.
	gameGlobal.state.add("Boot", Boot);
	gameGlobal.state.add("Preload", Preload);
	
	// Now start the Boot state.
	gameGlobal.state.start("Boot");
};


