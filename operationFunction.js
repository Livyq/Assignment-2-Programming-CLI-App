const ps = require("prompt-sync");
const prompt = ps({ sigint: true });
const fs = require("fs");
const { Musician } = require("./Musician.js");
const { Troupe } = require("./Troupe.js");
const { Guitarist } = require("./Guitarist.js");
const { Bassist } = require("./Bassist");
const { Percussionist } = require("./Percussionist");
const { Flautist } = require("./Flautist.js");
const inputFunction = require("./inputFunction.js");
var musicianList = new Array();
var troupeList = new Array();
const genreList = ["rock", "jazz", "pop"];
const instrumentList = ["Guitar", "Bass", "Percussion", "Flute"];

// option 1_users create musicians
function createMusician() {
  let musician;
  // instrumentChoice will be any of 1, 2, 3 or 4(index)
  let instrumentChoice = inputFunction.listInput(
    "Please select one instructment: ",
    instrumentList
  );
  let name = inputFunction.stringInput(
    "Please put in musician name(3-30 characters): ",
    { min: 3, max: 30 }
  );
  let yearOfPlaying = inputFunction.numberInput(
    "Please put in years of playing(minimum 0.1): ",
    { type: "float", min: 0.1 }
  );
  let hourlyRate = inputFunction.numberInput(
    "Please put in hourly rate(more than 50): ",
    { type: "integer", min: 51 }
  );

  if (instrumentChoice === 0) {
    musician = new Guitarist(
      name,
      yearOfPlaying,
      hourlyRate,
      instrumentList[instrumentChoice]
    );
  } else if (instrumentChoice === 1) {
    musician = new Bassist(
      name,
      yearOfPlaying,
      hourlyRate,
      instrumentList[instrumentChoice]
    );
  } else if (instrumentChoice === 2) {
    musician = new Percussionist(
      name,
      yearOfPlaying,
      hourlyRate,
      instrumentList[instrumentChoice]
    );
  } else {
    musician = new Flautist(
      name,
      yearOfPlaying,
      hourlyRate,
      instrumentList[instrumentChoice]
    );
  }

  musicianList.push(musician);
  console.log("======================================");
  console.log(musicianList);
}

// option 2 users create a troupe
function createTroupe() {
  let name = inputFunction.stringInput(
    "Please put in troupe name(3-30 characters): ",
    { min: 3, max: 30 }
  );
  let minimumDuration = inputFunction.numberInput(
    "Please put in hours(between 0.5 and 3 hours): ",
    { type: "float", min: 0.5, max: 3 }
  );
  let genreIndex = inputFunction.listInput(
    "Please select one genre: ",
    genreList
  );
  const newTroupe = new Troupe(name, minimumDuration, genreList[genreIndex]);
  troupeList.push(newTroupe);
  console.log("======================================");
  console.log(troupeList);
}

// option 3_add musicians to a troupe, no more than 5 musicians function
function addMusicianToTroupe() {
  //display troupe names in a list
  const troupeNameList = troupeList.map((troupe) => troupe.name);
  const musicianNameList = musicianList.map((musician) => musician.name);
  // users choose a troupe and return array index
  let selectedTroupeIndex = inputFunction.listInput(
    "Please select a troupe:  ",
    troupeNameList
  );
  console.log("You have selected: " + troupeNameList[selectedTroupeIndex]);

  let errorMessage = "Sorry, no more than 5 musicians in a troupe.";
  // while loop to add musician until user end it
  while (true) {
    let currentTroupe = troupeList[selectedTroupeIndex];
    if (currentTroupe.musicians.length >= 5) {
      console.log(errorMessage);
      break;
    }
    // users choose musicians and return array index
    let selecetedMusicianIndex = inputFunction.listInput(
      "Please select musicians(no more than 5): ",
      //use map function to get the all names(new array)
      musicianList.map((musician) => musician.name)
    );

    //  use class troupe/Musician method (push)
    troupeList[selectedTroupeIndex].addMusician(
      musicianList[selecetedMusicianIndex]
    );
    musicianList[selecetedMusicianIndex].addToTroupe(selectedTroupeIndex);

    // to check if users want to continue or not
    const displaySelectedMusicians = troupeList[
      selectedTroupeIndex
    ].musicians.map((musician) => musician.name);
    console.log(
      `You have selected troupe: ${troupeNameList[selectedTroupeIndex]} and musicians: ${displaySelectedMusicians}`
    );
    if (inputFunction.usercontinue("Contiue to add musicians Y or N: ")) {
      continue;
    } else {
      console.log(
        `You have selsected ${troupeNameList[selectedTroupeIndex]} troupe and it includes musicians: ${displaySelectedMusicians}`
      );
      return;
    }
  }
}

// option 4_display troupe summary description function
function displayTroupeSummary() {
  //display all troupes name in a list
  const troupeNameList = troupeList.map((troupe) => troupe.name);
  let selectedTroupeIndex = inputFunction.listInput(
    "Please select a troupe:  ",
    troupeNameList
  );
  console.log(troupeList[selectedTroupeIndex].displaySummaryDetails());
  console.log(troupeList[selectedTroupeIndex].countInstrument());
  console.log(
    `The troupe hourly rate is ${troupeList[
      selectedTroupeIndex
    ].hourlyRateWholeTroupe()}`
  );
}

//option 5_display the troupe and musicians detailed description function
function displayDetailsDesription() {
  const troupeNameList = troupeList.map((troupe) => troupe.name);
  let selectedTroupeIndex = inputFunction.listInput(
    "Please select a troupe:  ",
    troupeNameList
  );
  // troupeList[selectedTroupeIndex].displaySummaryDetails();
  console.log(troupeList[selectedTroupeIndex].displayDetailswithMusicians());
}

//option 6_caculate the cost of deploying the troupe for a number of hours
// get the sum of troupe houly rate
function caculateCost() {
  // select a troupe
  const troupeNameList = troupeList.map((troupe) => troupe.name);
  let selectedTroupeIndex = inputFunction.listInput(
    "Please select a troupe:  ",
    troupeNameList
  );
  // put in hours users need
  let hours = inputFunction.numberInput(
    "Please put in hours(between 0.5 and 3): ",
    { type: "float", min: 0.5, max: 3 }
  );
  console.log(
    parseInt(troupeList[selectedTroupeIndex].countCostOfTroupeDeploying(hours))
  );
}

//option 7_read a list of troupe names to be populated from a file
var newTroupeList = new Array();
function readTroupeList(filename) {
  const data = fs.readFileSync(filename, { encoding: "utf8", flag: "r" }).split('\r\n');
  // console.log(data);
  // create objects and push to a new array

  for (let element of data){
    const newTroupe = new Troupe(element);
    newTroupeList.push(newTroupe);
  }
  console.log(newTroupeList);
}


//option 8_write a list of the detailed descriptions for all troupes to a given file name
function writeTroupeListDetails() {
  const troupeNameList = troupeList.map((troupe) => troupe.name);
  console.log(troupeNameList);
  let selectedTroupeName = '';
  while(true) {
    selectedTroupeName = inputFunction.stringInput(
      "Please put in a troupe name:  ",
      {min: 3, max: 30}
    );

    if (troupeNameList.includes(selectedTroupeName)) {
      break;
    } 
    console.log('ERROR, no this troupe!!');
  }
  
  fs.writeFileSync(
    selectedTroupeName + ".txt",
    JSON.stringify(troupeList[troupeNameList.indexOf(selectedTroupeName)], null, 4),
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
  console.log(`File written successfully`);
}

module.exports = {
  createMusician,
  createTroupe,
  addMusicianToTroupe,
  displayTroupeSummary,
  displayDetailsDesription,
  caculateCost,
  readTroupeList,
  writeTroupeListDetails,
};
