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
function timer(min, sec){
      timer.minutes = min
      timer.seconds = sec
      timer.timerID = null
}
function runPause(timer,minBox,secBox){
      if(timer.timedID == 0){
            window.clearInterval(timer.timerID == null)
      }
      else
      {
            window.setInterval()
      }
}






/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

