class Musician {
  constructor(name, yearOfPlaying, hourlyRate) {
    this.instrument = "";
    this.name = name;
    this.yearOfPlaying = yearOfPlaying;
    this.hourlyRate = hourlyRate;
    this.troupes = [];
  }
  // push to troupe when musician is not the same
  addToTroupe(troupe) {
    if (!this.troupes.includes(troupe)) {
      this.troupes.push(troupe);
    }
  }
  details() {
    return `
  ----
  Musician Name: \x1b[33m${this.name}\x1b[0m,
  Musician Instrument: \x1b[33m${this.instrument}\x1b[0m,
  Year of Playing: \x1b[33m${this.yearOfPlaying}\x1b[0m,
  Hourly Rate: \x1b[33m${this.hourlyRate}\x1b[0m, 
  `
  }
}

module.exports = { Musician };


