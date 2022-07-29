class Musician {
  constructor(name,yearOfPlaying, hourlyRate) {
    this.name = name;
    this.instrument = instrument;
    this.yearOfPlaying = yearOfPlaying;
    this.hourlyRate = hourlyRate;
    this.troupes = [];
  }

  addToTroupe(troupe) {
    this.troupes.push(troupe);
  }
  summary() {
    return `${this.name} is a ${this.instrument} musician that has been playing for ${this.yearOfPlaying} and makes ${this.hourlyRate} per hour.`;
  }
  details() {
    return `${this.name} is a ${this.instrument} musician that has been playing for ${this.yearOfPlaying} and makes ${this.hourlyRate} per hour.`;
  }
}
