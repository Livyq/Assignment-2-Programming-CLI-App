const { Musician } = require("./Musician.js");

class Flautist extends Musician {
  // constructor(name, yearOfPlaying, hourlyRate) {
  //   super(name, yearOfPlaying, hourlyRate);
  //   this._instrument = "Flute";
  // }
  set instrument(value){
    this._instrument = value;
  }
  get instrument() {
    return this._instrument;
  }
  displayInstrumentDetail() {
    return `The musician is a ${this._instrument}`;
  }
  get funFact() {
    return "1989 heavy metal instrument of the year";
  }
}
module.exports = { Flautist };
