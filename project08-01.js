"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Jose Villa
      Date:   4/16/2025  

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// step 3
function timer(min, sec){
      this.minutes = min
      this.seconds = sec
      this.timerID = null
}
// step 4 creating runPause method with 3 perameters timer,minBox,secBox
timer.prototype.runPause = function(timer,minBox,secBox){
      // step 5 using if else statement to pause the timer else the timer will start to countdown from 1000 milliseconds
      if(timer.timeID){
            window.clearInterval(timer.timeID);
            timer.timeID = null;
      }
      else
      {
            timer.timeID = window.setInterval(countdown, 1000);
      }
      // step 6 adding a countdown function 
      function countdown(){
            // 6a
            if (timer.seconds > 0){
                  timer.seconds -= 1;
            // 6b
            }else if (timer.minutes > 0){
                  timer.minutes -= 1;
                  timer.seconds = 59;
            // 6c
            }else {
                  window.clearInterval(timer.timeID);
                  timer.timeID = null;
            }
            // 6d
            minBox.value = timer.minutes;
            secBox.value = timer.seconds;
      }
}


/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// step 7 declaring myTimer with an instance of timer with the values of minBox.value and secBox.value
let myTimer = new timer(parseInt(minBox.value), parseInt(secBox.value));

// step 8 creating onchange event to minBox that sets myTimer.minutes to minBox.value
minBox.onchange = function() {
      myTimer.minutes = parseInt(minBox.value);
};
// creating onchange event to secBox that sets myTimer.seconds to secBox.value
secBox.onchange = function() {
      myTimer.seconds = parseInt(secBox.value);
};

// step 9 creating an onclick event for runPauseTimer()
runPauseTimer.onclick = function(){
      myTimer.runPause(myTimer,minBox,secBox)
}
