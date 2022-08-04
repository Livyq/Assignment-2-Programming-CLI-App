const { Musician } = require("./Musician.js");

class Bassist extends Musician  {
  constructor (name,yearOfPlaying,hourlyRate){
    super (name,yearOfPlaying,hourlyRate)
    this.instrument = "Bass";
  }
  displayInstrumentDetail(){
    return `The musician is a ${this.instrument} `
  }
  get funFact(){
    return "Everyone loves a bassist"
  }
}
module.exports = { Bassist };
