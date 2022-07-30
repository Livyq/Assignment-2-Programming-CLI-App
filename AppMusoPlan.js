// get input from the user.
const ps = require('prompt-sync');//load prompt-sync module
const prompt = ps(); // call ps function 
const inputFunction=require('./inputFunction.js')
const musicianFunction=require('./musicianFunction.js')

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


const genreList = ['rock','jazz','pop'];

var choice = 0;


// user choose from eight options 
while (true){
  
    if (choice == 0){
        //show input to users
        console.log('======================================');
        console.log("Main Menu")
        choice = inputFunction.listInput("Please enter your choice [1,2,3,4,5,6,7,8,9]", rootMenuList); 
    }
    // option 1 create a musician
    else if(choice == 1){
        musicianFunction.addMusician();
        console.log('======================================');
        choice = 0;
    }

    else if(choice == 2){
        
        choice = 0;
    }
    else if(choice == 3){


    }
    else if(choice == 4){

    }
    else if(choice == 5){

    }
    else if(choice == 6){

    }
    else if(choice == 7){

    }
    else if(choice == 8){

    }
    else if(choice == 9){
        break;

    }
    else{

    }

}
