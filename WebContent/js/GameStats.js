var MAX_ANXIETY = 200;
var STARTING_ANXIETY = 50;
var MAX_STRESS = 50;
var STARTING_STRESS = 10;
var START_HOUR = 7;
var START_MINUTE = 20;
var AM = "AM";
var PM = "PM";
var NO_BREAKFAST = 0;
var SMALL_BREAKFAST = 1;
var MEDIUM_BREAKFAST = 2;
var LARGE_BREAKFAST = 3;
var PAST = -1;
var CURRENT = 0;
var FUTURE = 1;


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
    
    var twelveHourClock = false;
    
    this.breakfastType = NO_BREAKFAST;
    
    this.getTime = function() {
    	if (!twelveHourClock) {
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
    	
    	if (!twelveHourClock) hour = curTime.hour % 12;
    	else hour = curTime.hour;
    	minute = curTime.minute;
    	
    	if (hour < 10) hour = "0" + hour;
    	if (minute < 10) minute = "0" + minute;
    	else minute = curTime.minute;
    		
    	return hour + ":" + minute + " " +  curTime.am;
    };
    
    this.setTwelveHourClock= function(setTo) {
    	twelveHourClock = setTo;
    };
    
    
    this.timeCompare = function(hour, minute) {
    	if (hour < time.hour) return PAST;
    	else if (hour > time.hour) return FUTURE;
    	else if (hour === time.hour && minute < time.minute) return PAST;
    	else if (hour === time.hour && minute > time.minute) return FUTURE;
    	else return CURRENT;
    };

}

var gameVariables = new GameStats();



