const { Musician } = require("./Musician.js");

class Flautist extends Musician  {
    constructor (name,yearOfPlaying,hourlyRate){
      super (name,yearOfPlaying,hourlyRate)
      this.instrument = "Flute";
    }
    displayInstrumentDetail(){
      return `The musician is a ${this.instrument} `
    }
    get funFact(){
      return "1989 heavy metal instrument of the year"
    }
  }
  module.exports = { Flautist };
