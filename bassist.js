const { Musician } = require("./Musician.js");

class Bassist extends Musician  {
  constructor (name,yearOfPlaying,hourlyRate,instrument){
    super (name,yearOfPlaying,hourlyRate)
    this.instrument = instrument
  }
  displayInstrumentDetail(){
    return `The musician is a ${this.instrument} `
  }
  funFact(){
    return "Everyone loves a bassist"
  }
}
module.exports = { Bassist };
