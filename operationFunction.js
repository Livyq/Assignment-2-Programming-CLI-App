const ps = require("prompt-sync");
const prompt = ps({ sigint: true });
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
const instrumentList = ["Guitarist", "Bassist", "Percussionist", "Flautist"];

// users create musicians
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

// users create troupes
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
    "Please select one genre",
    genreList
  );
  const newTroupe = new Troupe(
    name,
    minimumDuration,
    genreList[genreIndex]
  );
  troupeList.push(newTroupe);
  console.log("======================================");
  console.log(troupeList);
}

// // add musicians to a troupe, no more than 5 musicians
function addMusicianToTroupe() {
  //display troupe names in a list
  const troupeNameList = troupeList.map((troupe) => troupe.name);
  const musicianNameList = musicianList.map((musician) => musician.name);
  // users choose a troupe and return array index
  let selectedTroupeIndex = inputFunction.listInput(
    "Please select a troupe:  ", troupeNameList
  );
  console.log("You have selected: " + troupeNameList[selectedTroupeIndex]);

  // while loop to add musician until user end it 
  while(true){
    // users choose musicians and return array index
    let selecetedMusicianIndex = inputFunction.listInput(
    "Please select musicians(no more than 5): ",
    //use map function to get the all names
    musicianList.map((musician) => musician.name)
    );
    
    //  use class troupe/Musician method (push)
    troupeList[selectedTroupeIndex].addMusician(musicianNameList[selecetedMusicianIndex]);
    musicianList[selecetedMusicianIndex].addToTroupe(selectedTroupeIndex);
    
    // to check if users want to continue or not
    console.log(`You have selected troupe: ${troupeNameList[selectedTroupeIndex]} and musicians: ${musicianNameList[selecetedMusicianIndex]}`)
    if (inputFunction.usercontinue("Contiue to add musicians to the same troupe: ")) {
      continue;
    } else {
      console.log(troupeList[selectedTroupeIndex])
      return;
    }
  }
}

module.exports = { createMusician, createTroupe, addMusicianToTroupe };
