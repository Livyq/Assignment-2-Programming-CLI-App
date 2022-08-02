class Musician {
  constructor(name, yearOfPlaying, hourlyRate) {
    this.instrument = "";
    this.name = name;
    this.yearOfPlaying = yearOfPlaying;
    this.hourlyRate = hourlyRate; 
    this.troupes = [];
  }
  
  addToTroupe(troupe) {
    if (!this.troupes.includes(troupe)) {
      this.troupes.push(troupe);
    }
  }
  summary() {
    return `${this.name} is a ${this.instrument} musician that has been playing for ${this.yearOfPlaying} and makes ${this.hourlyRate} per hour.`;
  }
  details() {
    return `${this.name} is a ${this.instrument} musician that has been playing for ${this.yearOfPlaying} and makes ${this.hourlyRate} per hour.`;
  }
  get funFact() {}

  toJSON() {
    return {
      MusicianName: this.name,
      instrument: this.instrument,
      yearOfPlaying: this.yearOfPlaying,
      hourlyRate: this.hourlyRate,
      troupes: this.troupes,
      funFact: this.funFact,
    }
  }
}

module.exports = { Musician };
