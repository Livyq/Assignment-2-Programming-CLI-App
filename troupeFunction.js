const ps = require("prompt-sync");
const prompt = ps({ sigint: true });
const { Musician } = require("./Musician.js");
const { Troupe } = require("./Troupe.js");
const { Guitarist } = require("./Guitarist.js");
const { Bassist } = require("./Bassist");
const { Percussionist } = require("./Percussionist");
const { Flautist } = require("./Flautist.js");
const inputFunction = require("./inputFunction.js");

var troupeList = new Array();
const genreList = ['rock','jazz','pop'];

function createTroupe(){
    let name = inputFunction.stringInput("Please put in your name(3-30 characters): ",{min: 3,max: 30}); 
    let minimumDuration = inputFunction.numberInput("Please put in hours(between 0.5 and 3 hours): ", {type: 'float', min: 0.5, max: 3}); 
    let genre = inputFunction.listInput("Please select one genre", genreList); 
    const newTroupe =  new Troupe(name,minimumDuration,genre);
    troupeList.push(newTroupe);
    console.log('======================================');
    console.log(troupeList);
}
module.exports = {createTroupe}
