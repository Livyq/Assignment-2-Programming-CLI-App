const { Guitarist } = require("./Guitarist.js");
const { Bassist } = require("./Bassist");
const { Percussionist } = require("./Percussionist");
const { Flautist } = require("./Flautist.js");

class Troupe {
  constructor(name, minimumDuration, genre) {
    this.name = name;
    this.minimumDuration = minimumDuration;
    this.genre = genre;
    this.musicians = [];
  }
  addMusician(musician) {
    const isExist = this.musicians.find(m => m.name === musician.name);
    if (isExist) {
      return false
    }
    this.musicians.push(musician);
    return true;
  }
  countInstrument() {
    const instrumentList = this.musicians.map(
      (musician) => musician.instrument
    );
    let count = instrumentList.filter(
      (value, index, a) => a.indexOf(value) === index
    ).length;
    return `Total instrument number of \x1b[32m${this.name}\x1b[0m is \x1b[32m${count}\x1b[0m.`;
  }
  // sum of one troupe hourly rate 
  hourlyRateWholeTroupe() {
    const troupeHourlyRate = this.musicians.map(
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
    return `You have selescted \x1b[32m${this.name}\x1b[0m.\n\x1b[32m${this.name}\x1b[0m is a \x1b[32m${this.genre}\x1b[0m troupe that has \x1b[32m${this.musicians.length}\x1b[0m musicians.`;
  }
  // display created troupe details
  details() {
    return `Troupe Name: \x1b[32m${this.name}\x1b[0m,
Troupe Genre: \x1b[32m${this.genre}\x1b[0m,
Minimum Booking time: \x1b[32m${this.minimumDuration}\x1b[0m hours,`;
  }
  //troupe details with musicians details
  displayDetailswithMusicians() {
    let details = this.details();
    details += `
Cost per hour: \x1b[32m$ ${this.hourlyRateWholeTroupe()}\x1b[0m,
It has \x1b[32m${this.countMusicianType('Bass')}\x1b[0m Bassists, \x1b[32m${this.countMusicianType('Flute')}\x1b[0m Flautists, \x1b[32m${this.countMusicianType('Guitar')}\x1b[0m Guitarists, \x1b[32m${this.countMusicianType('Percussion')}\x1b[0m Percussionists.
It has the following musician: `;

    for (const musician of this.musicians) {
      details += musician.details();
      details += musician.funFact;
    }
    return details;
  }
  countMusicianType(instrument) {
    return this.musicians.filter(m => m.instrument === instrument).length
  }
}

module.exports = { Troupe };
