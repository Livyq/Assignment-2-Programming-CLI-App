class Musician {
  // constructor(name, yearOfPlaying, hourlyRate) {
  //   this._instrument = "";
  //   this.name = name;
  //   this.yearOfPlaying = yearOfPlaying;
  //   this.hourlyRate = hourlyRate;
  // }
  // ----- name accessors -----
  set name(value) {
    console.log(value);
    if (value.length < 3 || value.length > 30) {
      throw new Error("Musician name must be between 3 and 30 characters");
    } else {
      this._name = value;
    }
  }
  get name() {
    return this._name;
  }
  // ----- yearOfPlaying accessors -----
  set yearOfPlaying(value) {
    if (value <= 0 || value >= 100) {
      throw new Error(
        "Musician years playing must be non-negative or less than 100"
      );
    } else {
      this._yearOfPlaying = value;
    }
  }
  get yearOfPlaying() {
    return this._yearOfPlaying;
  }
  // ----- hourlyRate accessors -----
  set hourlyRate(value) {
    if (value <= 50 || value > 10000000) {
      throw new Error(
        "Musician hourly rate must be over 50 or less than 10000000"
      );
    } else {
      this._hourlyRate = value;
    }
  }
  get hourlyRate() {
    return this._hourlyRate;
  }

  // //create for display musician's troupe
  // addToTroupe(troupe) {
  //   if (!this.troupes.includes(troupe)) {
  //     this.troupes.push(troupe);
  //   }
  // }

  details() {
    return `
  ----
  Musician Name: \x1b[33m${this._name}\x1b[0m,
  Musician Instrument: \x1b[33m${this._instrument}\x1b[0m,
  Year of Playing: \x1b[33m${this._yearOfPlaying}\x1b[0m,
  Hourly Rate: \x1b[33m${this._hourlyRate}\x1b[0m, 
  `;
  }
}

module.exports = { Musician };
