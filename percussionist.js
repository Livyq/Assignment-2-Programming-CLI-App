const { Musician } = require("./Musician.js");

class Percussionist  extends Musician  {
    constructor (name,yearOfPlaying,hourlyRate){
      super (name,yearOfPlaying,hourlyRate)
      this.instrument = "Percussion";
    }
    displayInstrumentDetail(){
      return `The musician is a ${this.instrument} `
    }
    get funFact(){
      return "Me drum"
    }
  }
  module.exports = { Percussionist };
