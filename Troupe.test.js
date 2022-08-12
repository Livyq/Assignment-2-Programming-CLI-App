const { Musician } = require("./Musician");
const { Troupe } = require("./Troupe");
const { Guitarist } = require("./guitarist");
const { Flautist } = require("./flautist");
const { Bassist } = require("./bassist");
const { Percussionist } = require("./percussionist");

// Check troupe name
test("Test troupe name for 2 characters", () => {
  expect(() => {
    troupe = new Troupe();
    troupe.name = "Tr";
  }).toThrowError("Troupe name must be between 3 and 30 characters");
});

test("Test troupe name for 5 characters", () => {
  troupe = new Troupe();
  troupe.name = "Troupe";
  expect(troupe.name).toEqual("Troupe");
});

test("Test troupe name for empty value", () => {
  expect(() => {
    troupe = new Troupe();
    troupe.name = "";
  }).toThrowError("Troupe name must be between 3 and 30 characters");
});

test("Test troupe name for more than 30 characters", () => {
  expect(() => {
    troupe = new Troupe();
    troupe.name = "Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst";
  }).toThrowError("Troupe name must be between 3 and 30 characters");
});

//Check troupe genre
test("Test troupe genre with rock", () => {
  troupe = new Troupe();
  troupe.genre = "rock";
  expect(troupe.genre).toEqual("rock");
});

test("Test troupe genre with jazz", () => {
  troupe = new Troupe();
  troupe.genre = "jazz";
  expect(troupe.genre).toEqual("jazz");
});

test("Test troupe genre with empyt value", () => {
  expect(() => {
    troupe = new Troupe();
    troupe.genre = "";
  }).toThrowError("Troupe genre must be Rock, Jazz or Pop");
});

test("Test troupe genre with number 30", () => {
  expect(() => {
    troupe = new Troupe();
    troupe.genre = "30";
  }).toThrowError("Troupe genre must be Rock, Jazz or Pop");
});

// check minimum duration
test("Test troupe minimum duration with 0.5", () => {
  troupe = new Troupe();
  troupe.minimumDuration = "0.5";
  expect(troupe.minimumDuration).toEqual("0.5");
});

test("Test minimum duration  with -10", () => {
  expect(() => {
    troupe = new Troupe();
    troupe.minimumDuration = "-10";
  }).toThrowError("Troupe minimum duration must be between 0.5 and 3");
});

test("Test minimum duration  with empty value", () => {
  expect(() => {
    troupe = new Troupe();
    troupe.minimumDuration = "";
  }).toThrowError("Troupe minimum duration must be between 0.5 and 3");
});

test("Testing minimum duration  with 30 hours", () => {
  expect(() => {
    troupe = new Troupe();
    troupe.minimumDuration = "30";
  }).toThrowError("Troupe minimum duration must be between 0.5 and 3");
});

//13 - Check troupe class add musicians’ method
test("Test troupe add musicians", () => {
  troupe = new Troupe();
  troupe.name = "Troupe1";
  musician = new Guitarist();
  musician.name = "Pink";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = "100";

  musician = new Guitarist();
  musician.name = "Pink";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = "100";
  expect(troupe.addMusician(musician)).toBe(true);
  expect(troupe.addMusician(musician)).toBe(false);
});

// 14 - Check troupe class count instrument method
test("Test troupe class count instrument ", () => {
  troupe = new Troupe();
  troupe.name = "Troupe1";

  musician = new Guitarist();
  musician.name = "Pink";
  musician.instrument = "Guitar";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = 100;

  musician1 = new Flautist();
  musician1.name = "Red";
  musician1.instrument = "Flute";
  musician1.yearOfPlaying = "10";
  musician1.hourlyRate = 200;

  musician2 = new Bassist();
  musician2.name = "Blue";
  musician2.instrument = "Bass";
  musician2.yearOfPlaying = "10";
  musician2.hourlyRate = 300;

  musician3 = new Percussionist();
  musician3.name = "Green";
  musician3.instrument = "Percussion";
  musician3.yearOfPlaying = "10";
  musician3.hourlyRate = 200;

  troupe.addMusician(musician);
  troupe.addMusician(musician1);
  troupe.addMusician(musician2);
  troupe.addMusician(musician3);
  expect(troupe.countInstrument()).toMatch(
    `Total instrument number of \x1b[32mTroupe1\x1b[0m is \x1b[32m4\x1b[0m.`
  );
});

// 15 - Check troupe class hourlyRateWholeTroupe method
test("Test troupe hourlyRateWholeTroupe ", () => {
  troupe = new Troupe();
  troupe.name = "Troupe1";

  musician = new Guitarist();
  musician.name = "Pink";
  musician.instrument = "Guitar";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = 100;

  musician1 = new Flautist();
  musician1.name = "Red";
  musician1.instrument = "Flute";
  musician1.yearOfPlaying = "10";
  musician1.hourlyRate = 900;

  musician2 = new Bassist();
  musician2.name = "Blue";
  musician2.instrument = "Bass";
  musician2.yearOfPlaying = "10";
  musician2.hourlyRate = 300;

  musician3 = new Percussionist();
  musician3.name = "Green";
  musician3.instrument = "Percussion";
  musician3.yearOfPlaying = "10";
  musician3.hourlyRate = 200;

  troupe.addMusician(musician);
  troupe.addMusician(musician1);
  troupe.addMusician(musician2);
  troupe.addMusician(musician3);
  expect(troupe.hourlyRateWholeTroupe()).toBe(1500);
});

// 16 - Check troupe class countCostOfTroupeDeploying method
test("Test troupe countCostOfTroupeDeploying ", () => {
  troupe = new Troupe();
  troupe.name = "Troupe1";

  musician = new Guitarist();
  musician.name = "Pink";
  musician.instrument = "Guitar";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = 100;

  musician1 = new Flautist();
  musician1.name = "Red";
  musician1.instrument = "Flute";
  musician1.yearOfPlaying = "10";
  musician1.hourlyRate = 900;

  musician2 = new Bassist();
  musician2.name = "Blue";
  musician2.instrument = "Bass";
  musician2.yearOfPlaying = "10";
  musician2.hourlyRate = 300;

  musician3 = new Percussionist();
  musician3.name = "Green";
  musician3.instrument = "Percussion";
  musician3.yearOfPlaying = "10";
  musician3.hourlyRate = 200;

  troupe.addMusician(musician);
  troupe.addMusician(musician1);
  troupe.addMusician(musician2);
  troupe.addMusician(musician3);
  expect(troupe.countCostOfTroupeDeploying(2)).toBe(3000);
});

// 17 	Check troupe class displaySummaryDetails
test("Test troupe class displaySummaryDetails ", () => {
  troupe = new Troupe();
  troupe.name = "Troupe1";
  troupe.genre = "rock";

  musician = new Guitarist();
  musician.name = "Pink";
  musician.instrument = "Guitar";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = "100";

  musician1 = new Flautist();
  musician1.name = "Red";
  musician1.instrument = "Flute";
  musician1.yearOfPlaying = "10";
  musician1.hourlyRate = "200";

  musician2 = new Bassist();
  musician2.name = "Blue";
  musician2.instrument = "Bass";
  musician2.yearOfPlaying = "10";
  musician2.hourlyRate = 300;

  musician3 = new Percussionist();
  musician3.name = "Green";
  musician3.instrument = "Percussion";
  musician3.yearOfPlaying = "10";
  musician3.hourlyRate = 200;

  troupe.addMusician(musician);
  troupe.addMusician(musician1);
  troupe.addMusician(musician2);
  troupe.addMusician(musician3);
  expect(troupe.displaySummaryDetails()).toMatch(
    `You have selescted \x1b[32mTroupe1\x1b[0m.\n\x1b[32mTroupe1\x1b[0m is a \x1b[32mrock\x1b[0m troupe that has \x1b[32m4\x1b[0m musicians.`
  );
});

// 18. Check troupe class details
test(" Test troupe class details ", () => {
  troupe = new Troupe();
  troupe.name = "Troupe1";
  troupe.genre = "rock";
  troupe.minimumDuration = "2";

  musician = new Guitarist();
  musician.name = "Pink";
  musician.instrument = "Guitar";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = 100;

  musician1 = new Flautist();
  musician1.name = "Red";
  musician1.instrument = "Flute";
  musician1.yearOfPlaying = "10";
  musician1.hourlyRate = 200;

  musician2 = new Bassist();
  musician2.name = "Blue";
  musician2.instrument = "Bass";
  musician2.yearOfPlaying = "10";
  musician2.hourlyRate = 300;

  musician3 = new Percussionist();
  musician3.name = "Green";
  musician3.instrument = "Percussion";
  musician3.yearOfPlaying = "10";
  musician3.hourlyRate = 200;

  troupe.addMusician(musician);
  troupe.addMusician(musician1);
  troupe.addMusician(musician2);
  troupe.addMusician(musician3);
  let troupeDetails = `Troupe Name: \x1b[32mTroupe1\x1b[0m,
Troupe Genre: \x1b[32mrock\x1b[0m,
Minimum Booking time: \x1b[32m2\x1b[0m hours,`;
  expect(troupe.details()).toMatch(troupeDetails);
});

// 19. Check troupe class displayDetailswithMusicians
test("Test troupe class displaySummaryDetails ", () => {
  troupe = new Troupe();
  troupe.name = "Troupe1";
  troupe.genre = "rock";
  troupe.minimumDuration = "2";

  musician = new Guitarist();
  musician.name = "Pink";
  musician.instrument = "Guitar";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = 100;

  musician1 = new Flautist();
  musician1.name = "Red";
  musician1.instrument = "Flute";
  musician1.yearOfPlaying = "10";
  musician1.hourlyRate = 200;

  musician2 = new Bassist();
  musician2.name = "Blue";
  musician2.instrument = "Bass";
  musician2.yearOfPlaying = "10";
  musician2.hourlyRate = 300;

  musician3 = new Percussionist();
  musician3.name = "Green";
  musician3.instrument = "Percussion";
  musician3.yearOfPlaying = "10";
  musician3.hourlyRate = 200;

  troupe.addMusician(musician);
  troupe.addMusician(musician1);
  troupe.addMusician(musician2);
  troupe.addMusician(musician3);
  let troupeDetailswithMusicians = `Troupe Name: \x1b[32mTroupe1\x1b[0m,
Troupe Genre: \x1b[32mrock\x1b[0m,
Minimum Booking time: \x1b[32m2\x1b[0m hours,
Cost per hour: \x1b[32m$ 800\x1b[0m,
It has \x1b[32m1\x1b[0m Bassists, \x1b[32m1\x1b[0m Flautists, \x1b[32m1\x1b[0m Guitarists, \x1b[32m1\x1b[0m Percussionists.
It has the following musician: 
  ----
  Musician Name: \x1b[33mPink\x1b[0m,
  Musician Instrument: \x1b[33mGuitar\x1b[0m,
  Year of Playing: \x1b[33m10\x1b[0m,
  Hourly Rate: \x1b[33m100\x1b[0m, 
  The more strings you have, the better you are
  ----
  Musician Name: \x1b[33mRed\x1b[0m,
  Musician Instrument: \x1b[33mFlute\x1b[0m,
  Year of Playing: \x1b[33m10\x1b[0m,
  Hourly Rate: \x1b[33m200\x1b[0m, 
  1989 heavy metal instrument of the year
  ----
  Musician Name: \x1b[33mBlue\x1b[0m,
  Musician Instrument: \x1b[33mBass\x1b[0m,
  Year of Playing: \x1b[33m10\x1b[0m,
  Hourly Rate: \x1b[33m300\x1b[0m, 
  Everyone loves a bassist
  ----
  Musician Name: \x1b[33mGreen\x1b[0m,
  Musician Instrument: \x1b[33mPercussion\x1b[0m,
  Year of Playing: \x1b[33m10\x1b[0m,
  Hourly Rate: \x1b[33m200\x1b[0m, 
  Me drum`;

  expect(troupe.displayDetailswithMusicians()).toMatch(
    troupeDetailswithMusicians
  );
});

// 20. troupe class countMusicianType
test("Test troupe class countMusicianType ", () => {
  troupe = new Troupe();
  troupe.name = "Troupe1";
  troupe.genre = "rock";

  musician = new Guitarist();
  musician.name = "Pink";
  musician.instrument = "Guitar";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = "100";

  musician1 = new Guitarist();
  musician1.name = "Blue";
  musician1.instrument = "Guitar";
  musician1.yearOfPlaying = "20";
  musician1.hourlyRate = "150";

  musician2 = new Flautist();
  musician2.name = "Red";
  musician2.instrument = "Flute";
  musician2.yearOfPlaying = "10";
  musician2.hourlyRate = "200";

  troupe.addMusician(musician);
  troupe.addMusician(musician1);
  troupe.addMusician(musician2);
  expect(troupe.countMusicianType("Guitar")).toBe(2);
  expect(troupe.countMusicianType("Flute")).toBe(1);
});
