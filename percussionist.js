const { Musician } = require("./Musician.js");

class Percussionist extends Musician {
  // constructor (name,yearOfPlaying,hourlyRate){
  //   super (name,yearOfPlaying,hourlyRate)
  //   this._instrument = "Percussion";
  // }
  set instrument(value) {
    this._instrument = value;
  }
  get instrument() {
    return this._instrument;
  }
  displayInstrumentDetail() {
    return `The musician is a ${this._instrument}`;
  }
  get funFact() {
    return "Me drum";
  }
}
module.exports = { Percussionist };
