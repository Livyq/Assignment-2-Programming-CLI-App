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
const genreList = ["Rock", "Jazz", "Pop"];
const instrumentList = ["Guitar", "Bass", "Percussion", "Flute"];

// option 1_users create musicians
function createMusician() {
  let musician;
  // instrumentChoice will be any of 1, 2, 3 or 4(index)
  let instrumentChoice = inputFunction.listInput(
    "Please select one instrument: ",
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
    musician = new Guitarist(name, yearOfPlaying, hourlyRate);
  } else if (instrumentChoice === 1) {
    musician = new Bassist(name, yearOfPlaying, hourlyRate);
  } else if (instrumentChoice === 2) {
    musician = new Percussionist(name, yearOfPlaying, hourlyRate);
  } else {
    musician = new Flautist(name, yearOfPlaying, hourlyRate);
  }

  musicianList.push(musician);
  console.log("======================================");
  musicianList.forEach((musician) => console.log(musician.details()));
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
  troupeList.forEach((troups) => console.log(troups.details()));
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
  console.log(
    `You have selected:\x1b[32m${troupeNameList[selectedTroupeIndex]}\x1b[0m`
  );

  let errorMessage = "Sorry, no more than 5 musicians in a troupe.";
  // while loop to add musician until user end it
  while (true) {
    let currentTroupe = troupeList[selectedTroupeIndex];
    if (currentTroupe.musicians.length >= 5) {
      console.log(errorMessage);
      break;
    }
    // users choose musicians and return array index
    console.log(`Musician List`);
    let selecetedMusicianIndex = inputFunction.listInput(
      "Please select musicians(no more than 5): ",
      //use map function to get all names(new array)
      musicianNameList
    );

    //  add  musician to troupe
    const addSuccessful = troupeList[selectedTroupeIndex].addMusician(
      musicianList[selecetedMusicianIndex]
    );
    if (!addSuccessful) {
      console.log("ERROR, musician already exists");
      break;
    }
    // //create for display musician's troupe
    // musicianList[selecetedMusicianIndex].addToTroupe(selectedTroupeIndex);

    // to check if users want to continue or not
    const displaySelectedMusicians = troupeList[
      selectedTroupeIndex
    ].musicians.map((musician) => musician.name);
    console.log(
      `You have selected troupe: \x1b[32m${troupeNameList[selectedTroupeIndex]}\x1b[0m and musicians: \x1b[32m${displaySelectedMusicians}\x1b[0m`
    );
    if (inputFunction.usercontinue("Contiue to add musicians Y or N: ")) {
      continue;
    } else {
      console.log(
        `You have selected \x1b[32m${troupeNameList[selectedTroupeIndex]}\x1b[0m troupe and it includes musicians: \x1b[32m${displaySelectedMusicians}\x1b[0m`
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
    `The troupe hourly rate is \x1b[32m${troupeList[
      selectedTroupeIndex
    ].hourlyRateWholeTroupe()}\x1b[0m`
  );
}

//option 5_display the troupe and musicians detailed description function
function displayDetailsDesription() {
  const troupeNameList = troupeList.map((troupe) => troupe.name);
  let selectedTroupeIndex = inputFunction.listInput(
    "Please select a troupe:  ",
    troupeNameList
  );
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
    `Total cost of Troup \x1b[32m${
      troupeNameList[selectedTroupeIndex]
    }\x1b[0m for \x1b[32m${hours}\x1b[0m hours is: \x1b[32m${parseInt(
      troupeList[selectedTroupeIndex].countCostOfTroupeDeploying(hours)
    )}\x1b[0m`
  );
}

//option 7_read a list of troupe names to be populated from a file
var newTroupeList = new Array();
function readTroupeList(filename) {
  while (true) {
    selectedFileName = inputFunction.stringInput(
      "Please put in a file name to read:  ",
      { min: 3, max: 30 }
    );

    if (fs.existsSync(selectedFileName)) {
      break;
    }
    console.log("ERROR, no this file!!");
  }
  const data = fs
    .readFileSync(filename, { encoding: "utf8", flag: "r" })
    .split("\r\n");

  // create objects and push to a new array

  for (let element of data) {
    const newTroupe = new Troupe(element);
    newTroupeList.push(newTroupe);
  }
  console.log(data);
  console.log(newTroupeList);
}

//option 8_write a list of the detailed descriptions for all troupes to a given file name
function writeTroupeListDetails() {
  fileName = inputFunction.stringInput(
    "Please put in a file name to print:  ",
    { min: 1 }
  );

  let allDetails = "Now we have the following troupes: \n";
  troupeList.forEach((troupe) => {
    allDetails = allDetails + troupe.displayDetailswithMusicians();
  });

  //// Print musicians details only.
  // allDetails = allDetails + '\n\nand the following musicians:';
  // musicianList.forEach(musician => allDetails += musician.details())

  allDetails = allDetails
    .replaceAll("\x1b[32m", "")
    .replaceAll("\x1b[33m", "")
    .replaceAll("\x1b[0m", "");

  fs.writeFileSync(fileName + ".txt", allDetails, function (err) {
    if (err) {
      console.log(err);
    }
  });
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
