// get input from the user.
const ps = require('prompt-sync');//load prompt-sync module
const prompt = ps(); // call ps function 
const musoFunctions=require('./musoFunction.js')

const rootMenuList = [
    'Create a musician','Create a musician','Create a troupe','Add musicians to a troupe',
    'Troupe summary description','Troupe detailed description','Show hourly cost for a troupe',
    'Show troupe names','Write troupe details to a file','Exit'
]

const instrumentList = ['Guitarist','Bassist','Percussionist','Flautist']


// user choose from eight options 
while (true){
    let choice = listInput(rootMenuList);
    if (choice == 0){
        //show input to users
        console.log('======================================');
        console.log(musoFunctions.listInput("Please select your instructment", rootMenuList));
        
    }
    // option 1 create a musician
    else if(choice == 1){ 
        musoFunctions.listInput(instrumentList); 
        choice = 0;
    }
    else if(choice == 2){

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

    }
    else{

    }


}
