const { Musician } = require("./Musician");
const { Troupe } = require("./Troupe");
const { Guitarist } = require("./guitarist");
const { Flautist } = require("./flautist");
const { Bassist } = require("./bassist");
const { Percussionist } = require("./percussionist");

// check Guitarist method
test("Test Bassist method", () => {
  troupe = new Troupe();
  troupe.name = "Troupe1";
  troupe.genre = "rock";
  troupe.minimumDuration = "2";

  musician = new Guitarist();
  musician.name = "Pink";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = "100";
  musician.instrument = "guitarist";

  troupe.addMusician(musician);

  expect(musician.displayInstrumentDetail()).toBe(
    "The musician is a guitarist"
  );
});
