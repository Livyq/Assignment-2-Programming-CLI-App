# Summary Details about the proposed software
## Classes 
### Musiciaian Class 
1. Properties
    * Name (between 3 and characters)
    * Yeas of playing 
    * Hourly rate 
    * instrument
    * troupe
2. Methods:
    * details(）{//user function to return musicians details}

## Subclass
###  Instrumentalist Class Inheritance of Musician class
- Guitarist 
- Bassist 
- Percussionist 
- Flautist

1. Methodes  
displayInstrumentDetail(troupe）{// user function to return instrument details that the musician plays}

###  Troupe Subclass
1. Properties 
    * Name(3-30 characters)
    * Genre (rock, jazz, pop)
    * Musicians use Aggregation in this property  
    * Minimum duration(0.5-3 hours)
    * musicians 

2. Methods --conditions
    * addMusician (musician){// use if condition to verify if the musicians is already exist in the musician array
    }
    * countInstrument(){// use filter function to return number of instrument in a troupe}
    * hourlyRateWholeTroupe(){//use reduce function to count the sum of a troupe's hourly rate  }       
    * countCostOfTroupeDeploying(){// retrun total sum of deploying a troupe for a number of hours}
    * displaySummaryDetails (){//retrun troupe summary only}
    * details(){return created troupe details }
    * displayDetailswithMusicians(){//retrun troupe and musician details;// use for loop to iterate musicians array }
    * countMusicianType(instrument){//retrun number of musician type for display purpose}

3. SDLC- 
MusoPlan is using Waterfall SDLC Model  which is the oldest and most straightforward of the structured SDLC methodologies — finish one phase, then move on to the next. 

Each stage relies on information from the previous stage and has its own project plan. Waterfall is easy to understand and simple to manage.

4. VCS- Git







