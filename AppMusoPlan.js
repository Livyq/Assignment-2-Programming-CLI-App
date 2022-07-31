// get input from the user.
const ps = require('prompt-sync');//load prompt-sync module
const prompt = ps(); // call ps function 
const inputFunction = require('./inputFunction.js')
const operationFunction = require('./operationFunction.js')

const rootMenuList = [
    'Create a musician',
    'Create a troupe',
    'Add musicians to a troupe',
    'Troupe summary description',
    'Troupe detailed description',
    'Show hourly cost for a troupe',
    'Show troupe names',
    'Write troupe details to a file',
    'Exit'
]

var choice = -1;
// user choose from eight options , choice ==> index
while (true){
  
    if (choice === -1){
        //show input to users
        console.log('======================================');
        console.log("Main Menu")
        choice = inputFunction.listInput("Please enter your choice [1,2,3,4,5,6,7,8,9]", rootMenuList); 
    }
    // option 1 create a musician
    else if(choice === 0){
        operationFunction.createMusician();
        console.log('======================================');
        choice = -1;
    }
    // option 2 create a troupe
    else if(choice === 1){
        operationFunction.createTroupe();
        console.log('======================================');
        choice = -1;
    }
    //option 3 add musicians to a troupe
    else if(choice === 2){
        operationFunction.addMusicianToTroupe();
        if (inputFunction.usercontinue("Do you want to select another troupe: ")) {
            continue;
          } else {
            return
          }
    }
    //option 4 
    else if(choice === 3){
        

    }
    else if(choice === 4){

    }
    else if(choice === 5){

    }
    else if(choice === 6){

    }
    else if(choice === 7){

    }
    else if(choice === 8){
        break;

    }
    else{

    }

}
