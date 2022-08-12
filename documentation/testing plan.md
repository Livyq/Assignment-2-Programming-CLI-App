# Test Plan Report

Prepared by
Wenjing QIU

# Introduction

The document is used to identify the items to be tested, the features to be tested, the types of testing to be performed for testing, the resources and schedule required to complete testing, and the risks associated with MusoPlan application.

# Scope

The scope of the software testing of this application is defined and confirmed using base cases, edge cases, and boundary values, however corner cases are optional.

# Test Plan Details

## Manual testing

• With the manual testing, we assume that users are entering valid inputs for testing purpose.

• The proposed test plan steps are as follows:

## Identifier 1: Musician

### Test Case: Users create a musician

• Users must be able to create a musician by entering and answering prompt questions.

Preconditions:

The following software is required before testing the application:

• Windows 8 and above

• Node.js

• npm install

Input Values:

• Application will display an inurement list to choose: 1. Guitar; 2. Bass; 3. Percussion; 4. Flute

• Users will be asked to choose an instrument from the list.

    o	Users to choose = 1. Guitar

• Enter the musician’s name

    o	Users to enter musician name = Bob

• Enter years of playing

    o	Users to enter = 10

• Enter hourly rate

    o	Users to enter = 100

Execution Steps:

• Run the software using a command prompt.

• Application will display a list: 1. Guitar; 2. Bass; 3. Percussion; 4. Flute

• Users will be asked to choose an instrument from the list.

• Users will be asked to put in a musician name within 3-30 characters.

• Users will be asked to put in a musician’s years (minimum 0.1) of playing the instrument 3-30.

• Users will be asked to put in a musician’s hourly rate which must be more than 50.

Output Values:

• Application will display an inurement list: 1. Guitar; 2. Bass; 3. Percussion; 4. Flute

• Users will be asked to choose an instrument from the list.
o Users to choose = 1. Guitar &rarr; Success

• Enter the musician’s name
o Users to enter musician name = Pink &rarr; Success

• Enter years of playing
o Users to enter = 10 &rarr; Success

• Enter hourly rate
o Users to enter = 100 &rarr; Success

• Application will display the created musician details on the command screen &rarr; Successfully created a musician

## Identifier 2: Troupe

### Test Case: The user must be able to create a troupe

• Users must be able to create a troupe by entering and answering prompt questions.

Preconditions:

The following software is required before testing the application:

• Windows 8 and above

• Node.js

• npm install

Input Values:

• Users will be asked to enter a troupe name

    o	Users to enter = Troupe 1

• Users will be asked to enter minimum duration of booking hours.

    o	Users to enter hours = 2

• Application will display a genre list: 1. Rock; 2. Jazz; 3. Pop

    o	Users to choose = 1. Rock

Execution Steps:

• Run the software using a command prompt.

• Users will be asked to put in a troupe name within 3-30 characters.

• Users will be asked to put in a troupe minimum duration between 0.5 and 3 hours.

• Application will display a genre list for users to choose: 1. Rock; 2. Jazz; 3. Pop

Output Values:

• Users will be asked to enter a troupe name

    o	Users to enter = Troupe 1

• Users will be asked to enter the minimum duration of booking hours.

    o	Users to enter hours = 2

• Application will display a genre list for users to choose: 1. Rock; 2. Jazz; 3. Pop

    o	Users to choose = 1. Rock

• Application will display the created troupe details on the command screen &rarr; Successfully created a troupe

## Identifier 3: Troupe with musicians

### Test Case: Users must be able to add a musician to a troupe

Preconditions:

The following software is required before testing the application:

• Windows 8 and above

• Node.js

• npm install

Input Values:

• Application will display a list of created troupes.

• Users will be asked to select a troupe from the list.

    o	Users to select = 1. Troupe 1

• Application will display a list of created musician names (2 musicians).

• Users will be asked to select musicians.

    o	Users to select = 1. Pink

• Users will be asked if they want to continue adding another musician.

    o	If users to enter = Y
    o	If users to enter = N

• Users will be asked if they want to select another troupe.

    o	If users to enter = Y
    o	If users to enter = N

• Users add non-existent musicians to a troupe<br>

    o If users to select = 5

Execution Steps:

• Users will be asked to enter a troupe name

• Users will be asked to enter minimum duration of booking hours.

• Application will display a genre list for users to choose: 1. Rock; 2. Jazz; 3. Pop

Output Values:

• Application will display a list of created troupes.

• Users will be asked to select a troupe from the list.<br>

- Users to select = 1. Troupe 1 &rarr; Success

• Application will display user’s selected troupe on the command screen.

• Application will display a list of created musician names.<br>
• Users will be asked to select musicians.
<br>Users to select = 1. Pink &rarr; Success&rarr;

• Users will be asked if they want to continue adding another musician.
<br>If users to enter = Y &rarr; Success &rarr;Application will display a list of created musician names for users to choose again.
<br>If users to enter = N &rarr; Success&rarr;

• Users will be asked if they want to select another troupe.
<br>If users to enter = Y &rarr; Success &rarr; Application will display a list of created troupes for users to choose again.
<br>If users to enter = N &rarr; Success&rarr;Back to main menu

• Users add non-existent musicians to a troupe
<br>If users to select = 5&rarr; ERROR, please enter the number within given range

### Identifier 4: Calculate the cost of deploying a troupe

#### Test Case: Calculate the total cost of deploying a troupe

Preconditions:

The following software is required before testing the application:

• Windows 8 and above

• Node.js

• npm install

Input Values:

• Application will display a list of created troupes for users to choose.

• Users to select a troupe.

    o	Users to select = 1. Troupe 1

• Users will be asked to put in hours.

    o	Users to enter = 2

Execution Steps:

• Run the software using a command prompt

• Application will display a list of existing troupes for users to choose.

• Users will be asked to select a troupe.

• Users will be asked to put in hours between 0.5 and 3.

Output Values:

• Application will display a list of created troupes for users to choose.

• Users to select a troupe.
o Users to select = 1. Troupe 1&rarr;Success

• Users will be asked to put in hours.
o Users to enter = 2 &rarr;Success

• Application will display the total cost of the selected troupe for input hours on the command screen &rarr; Successfully calculated a troupe hourly cost

## Automation testing

## Identifier 1: Musician class

### Test Case: The user must be able to create a troupe

Preconditions:

The following software is required before testing the application:

• Windows 8 and above

• Node.js

• npm install

Input Values:

• Check musician name

o Give values to test musician name function

        1)	Enter musician name =  Ab
        2)	Enter musician name =  Abb
        3)	Enter musician name =  empty value
        4)	Enter musician name =  Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst

• Check musician year of playing

o Give values to test year of playing function

        5)	Enter musician year of playing = -10
        6)	Enter musician year of playing = 10
        7)	Enter musician year of playing = 1000000
        8)	Enter musician year of playing = 0
        9)	Enter musician year of playing = empty value

• Check musician hourly rate

o Give values to test hourly rate function

        10)	Enter musician hourly rate = 50
        11)	Enter musician hourly rate = 100
        12)	Enter musician hourly rate = 10000000000
        13)	Enter musician hourly rate = 0

• Check musician display details method

o Give values to test display details function

        -	Musician. instrument = guitar
        -	Musician. name = Pink
        -	Musician. Year of playing = 10
        -	musician.hourlyRate = 100

Execution Steps:

• Run the software using a command prompt

• Enter the input values as mentioned above.

Output Values:

• Check musician name <br>
Give values to test musician class name function <br>

- Enter musician name = Ab &rarr; Display error message <br>
- Enter musician name = Abb &rarr; Pass <br>
- Enter musician name = null &rarr; Display error message<br>
- Enter musician name = Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst &rarr; Display error message

• Check musician year of playing
Give values to test year of playing function<br>

- Enter musician year of playing = -10 &rarr; Display error message<br>
- Enter musician year of playing = 10 &rarr; Pass<br>
- Enter musician year of playing = 1000000 &rarr; Display error message<br>
- Enter musician year of playing = 0 &rarr; Display error message<br>

• Check musician hourly rate
Give values to test musician hourly rate function <br>

- Enter musician hourly rate = 50 &rarr; Display error message<br>
- Enter musician hourly rate = 100 &rarr; Pass<br>
- Enter musician hourly rate = 10000000000 &rarr; Display error message <br>
- Enter musician hourly rate = 0 &rarr; Display error message<br>

• Check musician display details method
Give values to testing function

- Musician instrument = guitar
- Musician name = Pink
- Musician year of playing = 10
- Musician hour rate = 100

- Successfully display musician details &rarr; Pass

## Identifier 2: Troupe class

### Test Case: The user must be able to create a troupe

Preconditions:

The following software is required before testing the application:

    •	Windows 8 and above
    •	Node.js
    •	npm install

Input Values:

• Check troupe name

o Give values to test troupe class name function

        1)	Enter musician name =  Tr
        2)	Enter musician name =  Troupe
        3)	Enter musician name =  empty value
        4)	Enter musician name =  Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst

• Check troupe genre

o Give values to test troupe genre function

        5)	Enter troupe genres =  rock
        6)	Enter troupe genres =  jazz
        7)	Enter troupe genres =  empty value
        8)	Enter troupe genres =  30

• Check troupe minimum duration

o Give values to test troupe minimum duration function

        9)	Enter minimum duration =  0.5
        10)	Enter minimum duration =  -10
        11)	Enter minimum duration =  empty value
        12)	Enter minimum duration =  30

• Check troupe class add musicians’ method

    -	Troupe  name  = Troupe 1
    -	Troupe  genre = Rock
    -	Troupe minimum duration = 3
    -	Musician name = Pink
    -	Musician year of playing = 10
    -   Musician hour rate = 100

• Check troupe class count instrument method

    -	Troupe  name  =  Troupe 1
    -	Troupe musicians name = Pink, Red
    -	Troupe  instrument count  = 2

• Check troupe class hourly rate for the whole troupe method

    -	Troupe  name  = Troupe 1
    -	Musician name = Pink
    -	Musician instrument = guitar
    -	Musician year of playing = 10
    -   Musician hour rate = 100

• Check troupe class count the cost of a troupe deploying for hours method

    -	Troupe  name  = Troupe 1
    -	Troupe musicians name = Pink, Red
    -	Troupe minimum duration = 2

• Check troupe class display summary details method

    -	Troupe  name  = Troupe 1
    -	Troupe musicians name = Pink, Red
    -	Troupe  genre = Rock
    -	Troupe minimum duration = 3

• Check troupe class details method

    -	Troupe  name  = Troupe 1
    -	Troupe minimum duration = 2
    -	Troupe  genre = Rock
    -	Musician name = Pink
    -	Musician instrument = guitar
    -	Musician year of playing = 10
    -   Musician hour rate = 100

• Check troupe class display troupe details with musicians method

    -	Troupe  name  = Troupe 1
    -	Troupe musicians name = Pink
    -	Musician name = Pink
    -	Musician instrument = guitar
    -	Musician year of playing = 10
    -   Musician hour rate = 100

• Check troupe class count musician type method

    -	Troupe musicians  = Pink, Red
    -	Musician name = Pink
    -	Musician instrument = guitar
    -	Musician year of playing = 10
    -   Musician hour rate = 100
    -	musican type count  = 1

Execution Steps:

• Run the software using a command prompt
• Enter the input values as mentioned above

Output Values:
• Check troupe name

o Give values to test troupe class name function

- Enter musician name = Ab Display error message
- Enter musician name = Abb Pass
- Enter musician name = null Display error message
- Enter musician name = Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrst&rarr;

Display error message

• Check troupe genre

o Give values to test troupe genre function

- Enter troupe genres = 1 &rarr; Pass
- Enter troupe genres = 3 &rarr; Pass
- Enter troupe genres = null &rarr; Display error message
- Enter troupe genres = 30 &rarr; Display error message

• Check troupe minimum duration

o Give values to test troupe minimum duration function

- Enter minimum duration = 0.5 &rarr; Pass
- Enter minimum duration = -10 &rarr; Display error message
- Enter minimum duration = null &rarr; Display error message
- Enter minimum duration = 30 &rarr; Display error message

• Check troupe class add musicians’ method

- Troupe name = Troupe 1
- Troupe genre = Rock
- Troupe minimum duration = 3
- Musician name = Pink
- Musician year of playing = 10
- Musician hour rate = 100

- Successfully display musicians’ details &rarr; Pass

• Check troupe class count instrument method

- Troupe name = Troupe 1
- Troupe musicians name = Pink, Red
- Troupe instrument count = 2

- Successfully display total instrument number of the selected troupe &rarr; Pass

• Check troupe class hourly rate for the whole troupe method

- Troupe name = Troupe 1
- Musician name = Pink
- Musician instrument = guitar
- Musician year of playing = 10
- Musician hour rate = 100

- Successfully display hourly rate of the selected troupe &rarr; Pass

• Check troupe class count the cost of a troupe deploying for hours method

- Troupe name = Troupe 1
- Troupe musicians name = Pink, Red
- Troupe minimum duration = 2

- Successfully display the cost of the selected troupe for two hours &rarr; Pass

• Check troupe class display summary details method

- Troupe name = Troupe 1
- Troupe musicians name = Pink, Red
- Troupe genre = Rock
- Troupe minimum duration = 3

- Successfully display the summary details of the selected troupe &rarr; Pass

• Check troupe class details method

- Troupe name = Troupe 1
- Troupe minimum duration = 2
- Troupe genre = Rock
- Musician name = Pink
- Musician instrument = guitar
- Musician year of playing = 10
- Musician hour rate = 100

- Successfully display the details of the created troupe &rarr; Pass

• Check troupe class display troupe details with musicians method

- Troupe name = Troupe 1
- Troupe musicians name = Pink
- Musician name = Pink
- Musician instrument = guitar
- Musician year of playing = 10
- Musician hour rate = 100
- Successfully display troupe details with musicians of the selected troupe &rarr; Pass

• Check troupe class count musician type method

- Troupe musicians = Pink, Red
- Musician name = Pink
- Musician instrument = guitar
- Musician year of playing = 10
- Musician hour rate = 100
- musican type count = 1
- Successfully display numbers of musician type &rarr; Pass

## Identifier 3: Bassist/Flautist/Guitarist/Percussionist class method

### Test Case: The user must be able to create a troupe

Preconditions:
The following software is required before testing the application:
• Windows 8 and above
• Node.js
• npm install

Input Values:
• Check four child classes method
o Give values to test function

- Musician name = Pink
- Musician year of playing = 5
- Musician hourly rate = 100

Execution Steps:
• Run the software using a command prompt
• Enter the input values as mentioned above.

Output Values:
• Check four child classes method
o Give values to test function

- Musician name = Pink
- Musician year of playing = 5
- Musician hourly rate = 100
- Musician instrument = guitar
- Successfully display bassist/flautist/guitarist/percussionist details &rarr; Pass
