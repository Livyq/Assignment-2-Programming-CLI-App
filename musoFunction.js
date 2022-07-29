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

  /**
 * 
 * @param string text 
 * @param Object condition - {
 *      type: [integer, float],
 *      min,
 *      max,
 * }
 */ 
 function numberInput(text, condition){
    const errorMessage = "ERROR, please enter valid number"
    while(true){
        const tempChoice = prompt(text);
        if (condition.type === 'integer') {
            const choice = parseInt(tempChoice);
        } else {
            const choice = parseFloat(tempChoice)
        }
        if (!choice) {
            console.log(errorMessage);
            continue;
        }
        // if both min and max are set, validate the input using both
        if (condition.min && condition.max) {
            // if the input is out of given range, show error and continue
            if (choice < condition.min || choice > condition.max) {
                console.log(errorMessage);
                continue;
            }
        } else if (condition.min) {
            // if only the minimum is set, validate it
            if (choice < condition.min) {
                console.log(errorMessage);
                continue;
            }
        } else if (condition.max) {
            // if only the maximum is set, validate it
            if (choice > condition.max) {
                console.log(errorMessage);
                continue;
            }
        }

        // if it passes all the validation
        return choice;
    }
}
