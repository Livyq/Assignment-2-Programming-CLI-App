const { Musician } = require("./Musician");
const { Troupe } = require("./Troupe");
const { Guitarist } = require("./guitarist");
const { Flautist } = require("./flautist");
const { Bassist } = require("./bassist");
const { Percussionist } = require("./percussionist");

// check Flautist method
test("Test Bassist method", () => {
  troupe = new Troupe();
  troupe.name = "Troupe1";
  troupe.genre = "rock";
  troupe.minimumDuration = "2";

  musician = new Flautist();
  musician.name = "Pink";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = "100";
  musician.instrument = "flautist";

  troupe.addMusician(musician);

  expect(musician.displayInstrumentDetail()).toBe(
    "The musician is a flautist"
  );
});
