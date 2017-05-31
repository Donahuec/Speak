

/**
 * Object that holds all of the information needed throughout the game.
 */
function GameStats() {
    var anxiety = null;
    var stress = null;
    var twelveHourClock = null;
    var time = null;
    var random = new Phaser.RandomDataGenerator();
    var curState = null;
    var lastClicked = null; 
    var curInteraction = null;
    var gameOver = null;

    
    //Start adding functions
    
    /**
     * Sets all of the stats to default values
     */
    this.setStats = function() {
    	curState = "Start";
    	curInteraction = null;
    	lastClicked = -1;
    	gameOver = false;
        anxiety = STARTING_ANXIETY;
        stress = STARTING_STRESS;
        twelveHourClock = true;
        time = {
        		hour : START_HOUR,
        		minute : START_MINUTE, 
        		am : ""
        };
        
        //start adding specific gameplay variables here.
        this.breakfastType = NO_BREAKFAST;
    };
    
    this.setStats();
    
    /**
     * Get an object that holds the current time. 
     * If on 12 hour clock sets the am variable, otherwise leaves it blank
     * @return object that holds time values
     */
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
    
    /**
     * Sets the time based off of given hours and minutes
     * @param hours : number that represents number of hours to add
     * @param minutes : number to represent number of minutes to add
     */
    this.updateTime = function(hours, minutes) {
    	time.hour += hours;
    	time.minute += minutes;
    	
    	while (time.minute >= 60) {
    		time.hour++;
    		time.minute %= 60;
    	}
    };
    
    /**
     * Gets a string representing the current time
     * @return string representing current time
     */
    this.getTimeString = function() {
    	var curTime = this.getTime();
    	var hour;
    	var minute;
    	
    	if (twelveHourClock) {
    		hour = curTime.hour % 12;
    		if (hour === 0) hour = 12;
    	}
    	else hour = curTime.hour;
    	minute = curTime.minute;
    	
    	if (hour < 10) hour = "0" + hour;
    	if (minute < 10) minute = "0" + minute;
    	else minute = curTime.minute;
    		
    	return hour + ":" + minute + " " +  curTime.am;
    };
     
    
    /**
     * Checks whether the given time is in the past present or future
     * @param hour to check
     * @param minute to check
     * @return If the given time is in the past present or future
     */
    this.timeCompare = function(hour, minute) {
    	if ((hour == undefined || minute == undefined) || (hour === 0 && minute === 0)) return null;
    	
    	if (hour < time.hour) return PAST;
    	else if (hour > time.hour) return FUTURE;
    	else if (hour === time.hour && minute < time.minute) return PAST;
    	else if (hour === time.hour && minute > time.minute) return FUTURE;
    	else return CURRENT;
    };
    
    
    /**
     * Function that updates anxiety in a way that introduces some randomness, 
     * and is wighted by current stress and anxiety
     * @param data from json
     */
    this.updateAnxiety = function(data) {
    	var update = data.change;
    	//add in random variance
    	update *= random.realInRange(0, 2);
    	
    	if(data.change < 0) {
            update *= (2 - (stress / (MAX_STRESS / 2.0)));
            update *= (2 - (anxiety / (MAX_ANXIETY / 2.0)));
        } else {
            update *= (stress / (MAX_STRESS / 2.0));
            update *= (anxiety / (MAX_ANXIETY / 2.0));
        }
    	
    	if (update > data.max){
            update = data.max;
        } else if (update < data.min) {
            update = data.min;
        }
        //anxiety can't be less than 0
        anxiety += Math.round(update);
        
        if (anxiety < 0) {
            anxiety = 0;
        }
        //if anxiety is full end the game
        if (anxiety >= MAX_ANXIETY) {
            gameOver = true;
        }      
    };
    
    
    /**
     * Function that updates stress in a way that introduces some randomness
     * @param data from json
     */
    this.updateStress = function(data) {
    	
    	var update = data.change;
    	update *= random.realInRange(0, 2);
    	
    	if (update > data.max){
            update = data.max;
        } else if (update < data.min) {
            update = data.min;
        }
        //stress can't be less than 0
        stress += Math.round(update);
        
        if (stress < 0) {
            stress = 0;
        }
        
        if (stress >= MAX_STRESS) {
            stress = MAX_STRESS;
        } 
    };
    
    /**
     * Given a possibility of panicing, determines whether or not to panic
     * @param chance number between 0 and 1 that determines the possibility of panicing
     * @return whether or not to panic
     */
    this.determinePanic = function(chance) {
    	var randomValue = random.realInRange(0, 1);
    	var anxietyValue =  (anxiety / (MAX_ANXIETY / 2.5));
    	if (randomValue * anxietyValue >= 1 - chance) return true;
    	return false;
    };  
    
    //getters and setters
    
    /**
     * @param setTo : boolean that says wheter or not to use a 12 hour clock
     */
    this.setTwelveHourClock= function(setTo) {
    	twelveHourClock = setTo;
    };
    
    this.getAnxiety = function() {
    	return anxiety;
    };
    
    this.getStress = function() {
    	return stress;
    };
    
    this.getLastClicked = function() {
    	return lastClicked;
    };
    
    this.setLastClicked = function(num) {
    	lastClicked = num;
    };
    
    this.resetLastClicked = function() {
    	lastClicked = -1;
    };
    
    this.getCurState = function() {
    	return curState;
    };
    
    this.setCurState = function(state) {
    	curState = state;
    };
    
    this.setCurInteraction = function(interaction) {
    	curInteraction = interaction;
    };
    
    this.getCurInteraction = function() {
    	return curInteraction;
    };
    
    this.getGameOver = function() {
    	return gameOver;
    };
}





