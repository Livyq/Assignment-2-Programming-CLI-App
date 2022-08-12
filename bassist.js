const { Musician } = require("./Musician.js");

class Bassist extends Musician  {
  // constructor (name,yearOfPlaying,hourlyRate){
  //   super (name,yearOfPlaying,hourlyRate)
  //   this._instrument = "Bass";
  // }
  set instrument(value){
    this._instrument = value;
  }
  get instrument() {
    return this._instrument;
  }
  displayInstrumentDetail(){
    return `The musician is a ${this._instrument}`
  }
  get funFact(){
    return "Everyone loves a bassist"
  }
}
module.exports = { Bassist };
