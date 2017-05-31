// Generated by Phaser Editor v1.2.1

/**
 * HUDCanvas.
 * @param {Phaser.Game} aGame The game.
 * @param {Phaser.Group} aParent The parent group. If not given the game world will be used instead.
 */
function HUDCanvas(aGame, aParent) {
	Phaser.Group.call(this, aGame, aParent);

	/* --- pre-init-begin --- */

	// you can insert code here
	/* --- pre-init-end --- */

	this.game.add.sprite(0, -129, 'HUDAtlas', 'header', this);

	var footer = this.game.add.sprite(0, 797, 'HUDAtlas', 'footer', this);

	this.game.add.sprite(111, 10, 'HUDAtlas', 'leftBarEnd', this);

	var anxietyBarMiddle = this.game.add.tileSprite(120, 10, 7, 19, 'HUDAtlas', 'barMiddle', this);
	anxietyBarMiddle.scale.setTo(221.07512928627278, 1.0);

	this.game.add.sprite(1667, 10, 'HUDAtlas', 'rightBarEnd', this);

	var anxietyFill = this.game.add.tileSprite(119, 12, 4, 15, 'HUDAtlas', 'barFill', this);
	anxietyFill.scale.setTo(205.75000134774817, 1.0);
	anxietyFill.data = {
		"maxScale" : 388
		};

	this.game.add.sprite(111, 41, 'HUDAtlas', 'leftBarEnd', this);

	var stressBarMiddle = this.game.add.tileSprite(120, 41, 7, 19, 'HUDAtlas', 'barMiddle', this);
	stressBarMiddle.scale.setTo(117.94871248565869, 1.0);

	this.game.add.sprite(945, 41, 'HUDAtlas', 'rightBarEnd', this);

	var stressFill = this.game.add.tileSprite(119, 43, 4, 15, 'HUDAtlas', 'barFill', this);
	stressFill.scale.setTo(29.597236588509997, 1.0);
	stressFill.data = {
		"maxScale" : 207
		};

	var options = this.game.add.group(this);

	var option0 = this.game.add.button(960, 250, 'HUDAtlas', optionClick, { game : this.game, index : 0}, null, 'option', null, null, options);
	option0.anchor.setTo(0.5, 0.5);
	option0.data = {
		"index" : 1
		};

	var option1 = this.game.add.button(960, 250, 'HUDAtlas', optionClick, { game : this.game, index : 1 }, null, 'option', null, null, options);
	option1.anchor.setTo(0.5, 0.5);
	option1.data = {
		"index" : 2
		};

	var option2 = this.game.add.button(960, 250, 'HUDAtlas', optionClick, { game : this.game, index : 2 }, null, 'option', null, null, options);
	option2.anchor.setTo(0.5, 0.5);
	option2.data = {
		"index" : 3
		};

	var option3 = this.game.add.button(960, 250, 'HUDAtlas', optionClick, { game : this.game, index : 3 }, null, 'option', null, null, options);
	option3.anchor.setTo(0.5, 0.5);
	option3.data = {
		"index" : 4
		};

	var option4 = this.game.add.button(960, 250, 'HUDAtlas', optionClick, { game : this.game, index : 4 }, null, 'option', null, null, options);
	option4.anchor.setTo(0.5, 0.5);
	option4.data = {
		"index" : 5
		};

	var timer = this.game.add.tileSprite(659, 167, 1, 15, 'HUDAtlas', 'barFill', this);
	timer.scale.setTo(598.1065810998632, 1.0);
	timer.tint = 0xff0000;

	 // public fields

	this.fFooter = footer;
	this.fAnxietyFill = anxietyFill;
	this.fStressFill = stressFill;
	this.fOptions = options;
	this.fOption0 = option0;
	this.fOption1 = option1;
	this.fOption2 = option2;
	this.fOption3 = option3;
	this.fOption4 = option4;
	this.fTimer = timer;

	/* --- post-init-begin --- */
	//default y position for buttons
	this.defaultY = option0.y;
	var defaultTimerWidth = timer.scale.x;
	
	timer.visible = false;
	

	//set status bars tp default values
	stressFill.scale.setTo((this.game.stats.getStress() / MAX_STRESS)
			* stressFill.data.maxScale, 1.0);
	anxietyFill.scale.setTo((this.game.stats.getAnxiety() / MAX_ANXIETY)
			* anxietyFill.data.maxScale, 1.0);

	//set up the scene description text
	var descriptionStyle = {
		font : "26px Arial",
		fill : "#DADFF2",
		align : "center",
		wordWrap : true,
		wordWrapWidth : footer.width * 0.75
	};
	
	var description = this.game.add.text(Math.floor(footer.width / 2),
			footer.y * 1.25, "", descriptionStyle);
	description.anchor.set(0.5);

	this.fDescription = description;

	//set up option text and buttons
	var optionStyle = {
		font : "32px Arial",
		fill : "#DADFF2",
		align : "center"
	};

	var optionText = [
			this.game.add.text(option0.x, option0.y, "", optionStyle),
			this.game.add.text(option1.x, option1.y, "", optionStyle),
			this.game.add.text(option2.x, option2.y, "", optionStyle),
			this.game.add.text(option3.x, option3.y, "", optionStyle),
			this.game.add.text(option4.x, option4.y, "", optionStyle) ];

	for (var i = 0; i < 5; i++) {
		optionText[i].anchor.set(0.5, 0.5);
		//add to group that holds the buttons
		options.addChild(optionText[i]);
	}

	var optionButtons = [ this.fOption0, this.fOption1, this.fOption2,
			this.fOption3, this.fOption4 ];

	for (i = 0; i < 5; i++) {
		//TODO: figure out weird thing with buttons after being clicked
		optionButtons[i].forceOut = true;

		optionButtons[i].onInputOver.add(buttonScale, {
			button : optionButtons[i],
			scale : 1.05,
			option : true,
			description : this.fDescription
		});
		
		optionButtons[i].onInputOut.add(buttonScale, {
			button : optionButtons[i],
			scale : 1,
			option : true,
			description : this.fDescription
		});

	}

	//make sure buttons do not start visible
	for (i = 0; i < 5; i++) {
		optionText[i].visible = false;
		optionButtons[i].visible = false;
	}

	this.setDescriptionText = function(text) {
		description.text = text;
	};

	/**
	 * Sets the text for one option
	 * @param option to set up
	 */
	this.setSingleOptionText = function(option) {
		//if the option is undefined, then there are less than 5 options
		//and this option does not exist, so don't display it
		//Also don't display if it is passed its available time
		if (option != undefined &&
				this.game.stats.timeCompare(option.time.hourLimit, option.time.minuteLimit) !== PAST) {
			optionText[option.index].text = option.title;
			optionButtons[option.index].data = option;
		} else if (option != undefined ) {
			optionText[option.index].text = "";
			optionButtons[option.index].data = undefined;
			if (option.time.timeOut != undefined) {
				description.text = option.time.timeOut;
			}
		}
	};

	/**
	 * Set up all of the options for an interaction
	 * @param interaction to set up
	 */
	this.setInteractionText = function(interaction) {
		for (option in interaction.options) {
			description.text = interaction.description;
			this.setSingleOptionText(interaction.options[option]);
		}
	};

	
	
	/**
	 * Make options visible or not. Do not display an option 
	 * if it is an empty string
	 * if toActivate is true, make sure buttons are reset to default size
	 * @param toActivate true to make options visible, false to remove them
	 */
	this.activateOptions = function(toActivate) {
		
		var currentY = this.defaultY;
		
		for (var i = 0; i < 5; i++) {
			
			if (optionText[i].text) {
				optionText[i].visible = toActivate;
				optionButtons[i].visible = toActivate;
				
				if (toActivate == true){
					optionButtons[i].scale.setTo(1);
					optionButtons[i].reset(optionButtons[i].x, optionButtons[i].y);
					
					//dynamically place the buttons with pretty tween
					tween = this.game.add.tween(optionButtons[i]).to( { y: currentY },
							200, Phaser.Easing.Cubic.Out, true);
					tween = this.game.add.tween(optionText[i]).to( { y: currentY },
							200, Phaser.Easing.Cubic.Out, true);
					currentY += 100;
					
				} else {
					optionText[i].text = "";
					optionButtons[i].y = this.defaultY;
					optionText[i].y = this.defaultY;
				}
			}
		}
	};
	
	//variable to hold the tween for the timer
	this.timerTween = null;
	
	/**
	 * Activates or deactivates the timer bar
	 * @param activate whether or not to activate the timer
	 * @param time time in seconds for the timer bar to count down
	 */
	this.activateTimer = function(activate, time) {
		if (activate === true) {
			timer.visible = true;
			this.timerTween = this.game.add.tween(timer.scale).to( 
					{x : 0 }, Phaser.Timer.SECOND *  time, null, true);
		} else if (this.timerTween != null) {
			this.timerTween.stop();
			this.timerTween = null;
			timer.scale.setTo(defaultTimerWidth, 1.0);
			timer.visible = false;
		} 
	};

	/* --- post-init-end --- */
}

/** @type Phaser.Group */
var HUDCanvas_proto = Object.create(Phaser.Group.prototype);
HUDCanvas.prototype = HUDCanvas_proto;
HUDCanvas.prototype.constructor = Phaser.Group;

/* --- end generated code --- */

/**
 * Gets this.game and this.index passed as context
 */
function optionClick() {
	this.game.stats.setLastClicked(this.index);
}
