const { Musician } = require("./Musician.js");

class Percussionist  extends Musician  {
    constructor (name,yearOfPlaying,hourlyRate,instrument){
      super (name,yearOfPlaying,hourlyRate)
      this.instrument = instrument
    }
    displayInstrumentDetail(){
      return `The musician is a ${this.instrument} `
    }
    funFact(){
      return "Me drum"
    }
  }
  module.exports = { Percussionist };
