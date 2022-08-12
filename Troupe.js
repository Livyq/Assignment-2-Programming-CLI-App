const { Guitarist } = require("./Guitarist.js");
const { Bassist } = require("./Bassist");
const { Percussionist } = require("./Percussionist");
const { Flautist } = require("./Flautist.js");

class Troupe {
  // constructor(name, minimumDuration, genre) {
  //   this.name = name;
  //   this.minimumDuration = minimumDuration;
  //   this.genre = genre;
  //   this._musicians = [];
  // }
  // ----- name accessors -----
  _musicians = new Array();

  set name(value) {
    if (value.length < 3 || value.length > 30) {
      throw new Error("Troupe name must be between 3 and 30 characters");
    } else {
      this._name = value;
    }
  }
  get name() {
    return this._name;
  }
  // ----- minimum duration accessors -----
  set minimumDuration(value) {
    if (value < 0.5 || value > 3) {
      throw new Error("Troupe minimum duration must be between 0.5 and 3");
    } else {
      this._minimumDuration = value;
    }
  }
  get minimumDuration() {
    return this._minimumDuration;
  }
  // ----- genre accessors -----
  set genre(value) {
    const genreList = ["rock", "jazz", "pop"];
    if (!genreList.includes(value.toLowerCase())) {
      throw new Error("Troupe genre must be Rock, Jazz or Pop");
    } else {
      this._genre = value;
    }
  }
  get genre() {
    return this._genre;
  }
  get musicians() {
    return this._musicians;
  }

  addMusician(musician) {
    const isExist = this._musicians.find((m) => m.name === musician.name);
    if (isExist) {
      return false;
    }
    this._musicians.push(musician);
    return true;
  }

  countInstrument() {
    const instrumentList = this._musicians.map(
      (musician) => musician.instrument
    );
    let count = instrumentList.filter(
      (value, index, a) => a.indexOf(value) === index
    ).length;
    return `Total instrument number of \x1b[32m${this._name}\x1b[0m is \x1b[32m${count}\x1b[0m.`;
  }
  // sum of one troupe hourly rate
  hourlyRateWholeTroupe() {
    const troupeHourlyRate = this._musicians.map(
      (musician) => musician.hourlyRate
    );
    const initialValue = 0;
    const sum = troupeHourlyRate.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    return sum;
  }
  // sum of deploying a troupe for hours
  countCostOfTroupeDeploying(hours) {
    let total = hours * this.hourlyRateWholeTroupe();
    return total;
  }
  //troupe summary only
  displaySummaryDetails() {
    return `You have selescted \x1b[32m${this._name}\x1b[0m.\n\x1b[32m${this._name}\x1b[0m is a \x1b[32m${this._genre}\x1b[0m troupe that has \x1b[32m${this._musicians.length}\x1b[0m musicians.`;
  }
  // display created troupe details
  details() {
    return `\nTroupe Name: \x1b[32m${this._name}\x1b[0m,
Troupe Genre: \x1b[32m${this._genre}\x1b[0m,
Minimum Booking time: \x1b[32m${this._minimumDuration}\x1b[0m hours,`;
  }
  //troupe details with musicians details
  displayDetailswithMusicians() {
    let details = this.details();
    details += `
Cost per hour: \x1b[32m$ ${this.hourlyRateWholeTroupe()}\x1b[0m,
It has \x1b[32m${this.countMusicianType("Bass")}\x1b[0m Bassists, \x1b[32m${this.countMusicianType(
      "Flute"
    )}\x1b[0m Flautists, \x1b[32m${this.countMusicianType(
      "Guitar"
    )}\x1b[0m Guitarists, \x1b[32m${this.countMusicianType(
      "Percussion"
    )}\x1b[0m Percussionists.
It has the following musician: `;

    for (const musician of this.musicians) {
      details += musician.details();
      details += musician.funFact;
    }
    return details;
  }
  // the sum of musicians playing same instrument   
  countMusicianType(instrument) {
    return this._musicians.filter((m) => m.instrument === instrument).length;
  }
}

module.exports = { Troupe };
