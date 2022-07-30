const ps = require("prompt-sync");
const prompt = ps({ sigint: true });
const { Musician } = require("./Musician.js");
const { Guitarist } = require("./Guitarist.js");
const { Bassist } = require("./Bassist");
const { Percussionist } = require("./Percussionist");
const { Flautist } = require("./Flautist.js");
const inputFunction = require("./inputFunction.js");

const instrumentList = ["Guitarist", "Bassist", "Percussionist", "Flautist"];
var musicianList = new Array();

function createMusician() {
  let musician;
  // instrumentChoice will be any of 1, 2, 3 or 4(index)
  let instrumentChoice = inputFunction.listInput(
    "Please select one instructment: ",
    instrumentList
  );
  let name = inputFunction.stringInput(
    "Please put in your name(3-30 characters): ",
    {min: 3, max: 30}
    );
  let yearOfPlaying = inputFunction.numberInput(
    "Please put in years of playing(minimum 0.1): ",
    { type: "float", min: 0.1 }
  );
  let hourlyRate = inputFunction.numberInput(
    "Please put in hourly rate(more than 50): ",
    { type: "integer", min: 51 }
  );

  if (instrumentChoice === 1) {
    musician = new Guitarist(name, yearOfPlaying, hourlyRate, instrumentList[instrumentChoice-1]);
  } else if (instrumentChoice === 2) {
    musician = new Bassist(name, yearOfPlaying, hourlyRate, instrumentList[instrumentChoice-1]);
  } else if (instrumentChoice === 3) {
    musician = new Percussionist(name, yearOfPlaying, hourlyRate, instrumentList[instrumentChoice-1]);
  } else {
    musician = new Flautist(name, yearOfPlaying, hourlyRate, instrumentList[instrumentChoice-1]);
  }

  musicianList.push(musician);
  console.log('======================================');
  console.log(musicianList);
}
module.exports = {createMusician}
