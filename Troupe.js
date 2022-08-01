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
    console.log(`Total Total Instrument Number of ${this.name} is ${count}.`)
  }
  hourlyRateWholeTroupe(){
    const troupeHourlyRate = this.musicians.map((musician) => musician.hourlyRate) 
    const initialValue = 0;
    const sum = troupeHourlyRate.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    console.log (`${this.name} Hourly Rate is ${sum}`);
  }
   //troupe details only
   displaySummaryDetails() {
    console.log(`You have selescted ${this.name}.\n${this.name} is a ${this.genre} troupe that has ${this.musicians.length} musicians.`) ;
  }

  //troupe details with musicians details
  displayDetailswithMusicians(){
    return JSON.stringify(this);
   
  }

}
module.exports = { Troupe };
