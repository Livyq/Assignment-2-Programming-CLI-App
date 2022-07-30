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
  summary() {
    return `${this.name} is a ${this.genre} troupe that has ${this.musicians.length} musicians.`;
  }
  details() {
    return `${this.name} is a ${this.genre} troupe that has ${this.musicians.length} musicians.`;
  }
}
module.exports = { Troupe };
