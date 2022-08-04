const { Musician } = require("./Musician.js");

class Guitarist extends Musician  {
    constructor (name,yearOfPlaying,hourlyRate){
      super (name,yearOfPlaying,hourlyRate)
      this.instrument = "Guitar";
    }
    displayInstrumentDetail(){
      return `The musician is a ${this.instrument} `
    }
    get funFact(){
      return "The more strings you have, the better you are"
    }
  }
  module.exports = { Guitarist };