class Troupe {
  constructor(name, minimumDuration, genre) {
    this.name = name;
    this.minimumDuration = minimumDuration;
    this.genre = genre;
    this.musicians = [];
  }
  addMusician(musician) {
    this.musicians.push(musician);
  }
  countInstrument(){
    const instrumentList = this.musicians.map((musician) => musician.instrument)
    let count = instrumentList.filter((value,index,a) => a.indexOf(value) === index).length;
    return`Total Total Instrument Number of ${this.name} is ${count}.`
  }
  hourlyRateWholeTroupe(){
    const troupeHourlyRate = this.musicians.map((musician) => musician.hourlyRate) 
    const initialValue = 0;
    const sum = troupeHourlyRate.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    return sum;
  }
   //troupe details only
   displaySummaryDetails() {
    return `You have selescted ${this.name}.\n${this.name} is a ${this.genre} troupe that has ${this.musicians.length} musicians.`;
  }

  //troupe details with musicians details
  displayDetailswithMusicians(){
    let details = JSON.stringify(this, null, 4);
    return details;
  }

  toJSON() {
    return {
      TroupeName: this.name,
      MinimumDuration: this.minimumDuration,
      Genre: this.genre,
      hourlyRate: this.hourlyRate,
      troupes: this.troupes,
      funFact: this.funFact,
    }
  }

  countCostOfTroupeDeploying(hours){
    let total = hours * this.hourlyRateWholeTroupe();
    return total;
  }
}

module.exports = { Troupe };
