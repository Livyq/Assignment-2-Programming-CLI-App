const ps = require("prompt-sync");
const prompt = ps();
const fs = require("fs");

var musicianList = new Array();
var troupeList = new Array();

/**
 * @param string text //message for users
 * @param array list
 */
// function for choosing items from a list 
function listInput(text, list) {
    let askItem = "";
    // prepare the asking text based on the list array
    for (let i = 0; i < list.lenght; i++) {
      askText += `\t${i + 1}. ${list[i]}`;
    }
    while (true) {
      console.log(askItem);
      let choice = parseInt(prompt(text));
  
      // validate choice
      // if the choice within range, return the chosen index
      if (choice >= 1 && choice <= list.lenght) {
        return choice - 1;
      } else {
        // if invalid, continue the loop
        console.log("ERROR, please enter the number within given range");
        continue;
      }
    }
  }
