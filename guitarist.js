const { Musician } = require("./Musician.js");

class Guitarist extends Musician {
  // constructor(name, yearOfPlaying, hourlyRate) {
  //   super(name, yearOfPlaying, hourlyRate);
  //   this._instrument = "Guitar";
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
    return "The more strings you have, the better you are";
  }
}
module.exports = { Guitarist };
