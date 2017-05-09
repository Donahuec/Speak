var MAX_ANXIETY = 200;
var STARTING_ANXIETY = 50;
var MAX_STRESS = 50;
var STARTING_STRESS = 10;
var START_HOUR = 7;
var START_MINUTE = 20;
var AM = "AM";
var PM = "PM";


function GameStats() {
	var curState = "Start";
	var gameOver = false;
    var anxiety = STARTING_ANXIETY;
    var stress = STARTING_STRESS;
    var time = {
    		hour : START_HOUR,
    		minute : START_MINUTE, 
    		am : ""
    };
    var twelveHourClock = true;
    
    var breakfastType;
    
    this.getTime = function() {
    	if (twelveHourClock) {
    		var newTime = {minute : time.minute};
    		
    		if (time.hour <= 12) {
    			newTime.hour = time.hour;
    			newTime.am = AM;
    		}
    		else {
    			newTime.hour = time.hour - 12;
    			newTime.am = PM;
    		}
    		return newTime;
    	}
    	
    	return time;
    };
    
    this.updateTime = function(hours, minutes) {
    	time.hour += hours;
    	time.minute += minutes;
    	
    	while (time.minute >= 60) {
    		time.hour++;
    		time.minute %= 60;
    	}
    };
    
    this.getTimeString = function() {
    	var curTime = this.getTime();
    	var hour;
    	var minute;
    	
    	if (curTime.hour < 10) hour = "0" + curTime.hour;
    	else hour = curTime.hour;
    	

    };
    
	 
	
}

var gameVariables = new GameStats();