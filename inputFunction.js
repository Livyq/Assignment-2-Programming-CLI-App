const ps = require("prompt-sync");
const prompt = ps({sigint: true});
const fs = require("fs");

/**
 * @param string text //message for users
 * @param array list
 */
// function for choosing items from a list 
function listInput(text, list) {
    let askItem = "";
    // prepare the asking text based on the list array
    for (let i = 0; i < list.length; i++) {
        //display list
        // i+1=> number in front of items
        askItem += `${i + 1}. ${list[i]} \n`;
    }
    while (true) {
      console.log(askItem);
      let choice = parseInt(prompt(text));
      // validate choice
      // if the choice within range, return the chosen index
      if (choice >= 1 && choice <= list.length) {
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
        let choice;
        if (condition.type === 'integer') {
            choice = parseInt(tempChoice);
        } else {
            choice = parseFloat(tempChoice)
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


/**
 * @param string text //message for users
 * @param Object condition - {
 *      min,
 *      max,
 * }
 */

// //function for string input
function stringInput(text,condition){
    const errorMessage = "ERROR, please enter within range"
    while(true){
        const choiceString = prompt(text);
        if (condition.min && condition.max){
            if(choiceString.length < condition.min || choiceString > condition.max ){
                console.log(errorMessage);
                continue;
            }
        }else if(condition.min){
            // if only the minmum is set, validate it
            if (choiceString.length < condition.min) {
                console.log(errorMessage);
                continue;
            }
        }else if (condition.max) {
            // if only the maximum is set, validate it
            if (choiceString > condition.max) {
                console.log(errorMessage);
                continue;
            }
        }
        // if it passes all the validation
        return choiceString; 
       
    }
}
//continue function 
/**
 * @param string display text 
 * @returns boolean
 * 
 */
function usercontinue (text){
    const option = ['Yes','YES','yes','y','Y',];
    const userInputContinue = prompt(text);
    let contineInput = option.includes(userInputContinue) 
    if( contineInput == true ){
        return contineInput
    }else{
    }
}




module.exports = {listInput,numberInput,stringInput,usercontinue}
