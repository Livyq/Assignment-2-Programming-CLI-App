const { Musician } = require("./Musician");
const { Troupe } = require("./Troupe");
const { Guitarist } = require("./guitarist");
const { Flautist } = require("./flautist");
const { Bassist } = require("./bassist");
const { Percussionist } = require("./percussionist");
// test musician name
test("Test musician name for 2 characters", () => {
  expect(() => {
    musician = new Musician();
    musician.name = "Ab";
  }).toThrowError("Musician name must be between 3 and 30 characters");
});

test("Test musician name for 3 characters", () => {
  musician = new Musician();
  musician.name = "Abb";
  expect(musician.name).toEqual("Abb");
});

test("Test musician name for more than 30 characters", () => {
  expect(() => {
    musician = new Musician();
    musician.name = "Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst";
  }).toThrowError("Musician name must be between 3 and 30 characters");
});

test("Test musician name for empty value", () => {
  expect(() => {
    musician = new Musician();
    musician.name = "";
  }).toThrowError("Musician name must be between 3 and 30 characters");
});

// test musician year of playing
test("Test musician year of playing with a negative number", () => {
  expect(() => {
    musician = new Musician();
    musician.yearOfPlaying = "-10"; // setting the value
    musician.yearOfPlaying; // geting the value
  }).toThrowError(
    "Musician years playing must be non-negative or less than 100"
  );
});

test("Test musician year of playing with a non-negative number", () => {
  musician = new Musician();
  musician.yearOfPlaying = "10";
  expect(musician.yearOfPlaying).toEqual("10");
});

test("Test musician year of playing with a non-negative number", () => {
  expect(() => {
    musician = new Musician();
    musician.yearOfPlaying = "1000000";
    musician.yearOfPlaying;
  }).toThrowError(
    "Musician years playing must be non-negative or less than 100"
  );
});

test("Test musician year of playing with zero", () => {
  expect(() => {
    musician = new Musician();
    musician.yearOfPlaying = "0";
    musician.yearOfPlaying;
  }).toThrowError(
    "Musician years playing must be non-negative or less than 100"
  );
});

test("Test musician year of for empty value", () => {
  expect(() => {
    musician = new Musician();
    musician.yearOfPlaying = "";
  }).toThrowError(
    "Musician years playing must be non-negative or less than 100"
  );
});

//	Check musician hourly rate
test("Test musician hourly rate 50", () => {
  expect(() => {
    musician = new Musician();
    musician.hourlyRate = "50";
  }).toThrowError("Musician hourly rate must be over 50 or less than 10000000");
});
test("Test musician hourly rate 100", () => {
  musician = new Musician();
  musician.hourlyRate = "100";
  expect(musician.hourlyRate).toEqual("100");
});
test("Test musician hourly rate 10000000000", () => {
  expect(() => {
    musician = new Musician();
    musician.hourlyRate = "50";
  }).toThrowError("Musician hourly rate must be over 50 or less than 10000000");
});
test("Test musician hourly rate for empty value", () => {
  expect(() => {
    musician = new Musician();
    musician.hourlyRate = "";
  }).toThrowError("Musician hourly rate must be over 50 or less than 10000000");
});

//Check musician display details method
test("Test display musician details", () => {
  //   troupe = new Troupe();
  //   troupe.name = "Troupe1";
  musician = new Guitarist();
  musician.name = "Pink";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = "100";
  musician.instrument = "Guitar"
  musician.details();
  let musicianDetails = `
  ----
  Musician Name: \x1b[33mPink\x1b[0m,
  Musician Instrument: \x1b[33mGuitar\x1b[0m,
  Year of Playing: \x1b[33m10\x1b[0m,
  Hourly Rate: \x1b[33m100\x1b[0m, 
  `;
  expect(musician.details()).toMatch(musicianDetails);
});
