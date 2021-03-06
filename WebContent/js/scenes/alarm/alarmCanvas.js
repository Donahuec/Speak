// Generated by Phaser Editor v1.2.1

/**
 * alarmCanvas.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function alarmCanvas(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */


	/* --- pre-init-end --- */

	var alarm_bg = this.game.add.button(0, 0, 'alarm_bg', null, this, null, null, null, null, this);

	 // public fields

	this.fAlarm_bg = alarm_bg;

	/* --- post-init-begin --- */

	var style = { font: "bold 500px LCD", fill: "#f00"};
    this.alarmTime = this.game.add.text(350, 270, this.game.stats.getTimeString().slice(0, 5), style);
    

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var alarmCanvas_proto = Object.create(Phaser.Group.prototype);
alarmCanvas.prototype = alarmCanvas_proto;
alarmCanvas.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

// you can insert code here


