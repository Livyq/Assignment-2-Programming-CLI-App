# 1. Create a musician

## Data requirements for musicians are:

- Musician name between 3 and 30 characters
- Must play one of the four instruments below
- Years playing must be non-negative
- Hourly rate must be over 50

### Instruction: 
- select option 1 from the main menu -> select one instrument from the provided list -> enter musician name -> enter musician years of playing -> enter musician hourly rate

The table below shows user input, expected output and actual output in details.<br>

User select option 1 from the main menu, and it will display a message as below.

```diff
- Please enter your choice [1,2,3,4,5,6,7,8,9]:

User can choose from the provided insturments list and a message will show as below.

- 1. Guitar
- 2. Bass
- 3. Percussion
- 4. Flute
- Please select one instrument:
```

| User Input | Expected Output                                   | Actual Output                                     |
| ---------- | ------------------------------------------------- | ------------------------------------------------- |
| 1          | Please put in musician name(3-30 characters):     | Please put in musician name(3-30 characters)::    |
| 2          | Please put in musician name(3-30 characters):     | Please put in musician name(3-30 characters)::    |
| 3          | Please put in musician name(3-30 characters):     | Please put in musician name(3-30 characters)::    |
| 5          | ERROR, please enter the number within given range | ERROR, please enter the number within given range |

User can put in musicians name.<br />
User can put in between 3 and 30 characters. <br />
A message will show as below.<br />

```diff
- Please put in musician name(3-30 characters):
```

| User Input | Expected Output                              | Actual Output                                |
| ---------- | -------------------------------------------- | -------------------------------------------- |
| Bob        | Please put in years of playing(minimum 0.1): | Please put in years of playing(minimum 0.1): |
| Penny      | Please put in years of playing(minimum 0.1): | Please put in years of playing(minimum 0.1): |
| CC         | ERROR, please enter within range             | ERROR, please enter within range             |

User can put in years of playing.<br />
User input must be non-negative.<br>
A message will display as below. <br />

```diff
- Please put in years of playing(minimum 0.1): 10
```

| User Input | Expected Output                          | Actual Output                            |
| ---------- | ---------------------------------------- | ---------------------------------------- |
| -10        | ERROR, please enter valid number         | ERROR, please enter valid number         |
| 10         | Please put in hourly rate(more than 50): | Please put in hourly rate(more than 50): |
| 5          | Please put in hourly rate(more than 50): | Please put in hourly rate(more than 50): |

User can put in hourly rate.<br />
Hourly rate should be more than 50.<br>
A message will display as below. <br />

```diff
- Please put in hourly rate(more than 50):
```

| User Input | Expected Output                                                                                        | Actual Output                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 40         | ERROR, please enter valid number                                                                       | ERROR, please enter valid number                                                                       |
| 80         | Musician Name: Pink,<br>  Musician Instrument: Guitar,<br>  Year of Playing: 1,<br>  Hourly Rate: 80,  | Musician Name: Pink,<br>  Musician Instrument: Guitar,<br>  Year of Playing: 1,<br>  Hourly Rate: 80,  |
| 110        | Musician Name: Pink,<br>  Musician Instrument: Guitar,<br>  Year of Playing: 1,<br>  Hourly Rate: 110, | Musician Name: Pink,<br>  Musician Instrument: Guitar,<br>  Year of Playing: 1,<br>  Hourly Rate: 110, |

# 2. Create a troupe

## Data requirements for musicians are:

- Name between 3 and 30 characters
- No more than 5 musicians
- Valid genre from (rock, jazz, pop)
- Minimum duration in hours between 0.5 and 3

### Instruction: 
- select option 2 from the main menu -> enter troupe name -> enter duration hours -> select one genre

The table below shows user input, expected output and actual output in details.<br>
User select option 2 from the main menu, and it will display a message as below.<br>
A message will display as below. <br />

```diff
- Please put in troupe name(3-30 characters):
```

| User Input | Expected Output                               | Actual Output                                 |
| ---------- | --------------------------------------------- | --------------------------------------------- |
| Bronze     | Please put in hours(between 0.5 and 3 hours): | Please put in hours(between 0.5 and 3 hours): |
| Silver     | Please put in hours(between 0.5 and 3 hours): | Please put in hours(between 0.5 and 3 hours): |
| Gold       | Please put in hours(between 0.5 and 3 hours): | Please put in hours(between 0.5 and 3 hours): |
| AA         | ERROR, please enter within range              | ERROR, please enter within range              |

User can put minimum duration in hours. <br />
Minimum duration in hours between 0.5 and 3.<br>
A message will display as below. <br />

```diff
- Please put in hours(between 0.5 and 3 hours):
```

| User Input | Expected Output                                                  | Actual Output                                                    |     |     |
| ---------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | --- | --- |
| 0.1        | ERROR, please enter valid number                                 | ERROR, please enter valid number                                 |     |     |
| 4          | ERROR, please enter valid number                                 | ERROR, please enter valid number                                 |     |     |
| 3          | 1. Rock<br> 2. Jazz<br> 3. Pop<br> <br> Please select one genre: | 1. Rock<br> 2. Jazz<br> 3. Pop<br> <br> Please select one genre: |     |     |
| 1          | 1. Rock<br> 2. Jazz<br> 3. Pop<br> <br> Please select one genre: | 1. Rock<br> 2. Jazz<br> 3. Pop<br> <br> Please select one genre: |     |     |

User can choose a genre.<br>
User can choose from the provided genre list and a message will show as below.

```diff
- 1. Rock
- 2. Jazz
- 3. Pop
- Please select one genre:
```

| User Input | Expected Output                                                                  | Actual Output                                                                    |
| ---------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 1          | Troupe Name: Troupe 1,<br>Troupe Genre: Rock,<br>Minimum Booking time: 1 hours,  | Troupe Name: Troupe 1,<br>Troupe Genre: Rock,<br>Minimum Booking time: 1 hours,  |
| 2          | Troupe Name: Troupe 2,<br>Troupe Genre: Rock,<br>Minimum Booking time: 2  hours, | Troupe Name: Troupe 2,<br>Troupe Genre: Rock,<br>Minimum Booking time: 2  hours, |
| 4          | ERROR, please enter the number within given range                                | ERROR, please enter the number within given range                                |

# 3. Add musicians to a troupe

## Instruction: 
- select option 3 from the main menu -> select a troupe -> select musicians -> enter Y/N to continue adding musicians or not -> enter Y/N to continue choose another troupe

The table below shows user input, expected output and actual output in details.<br>
User select option 3 from the main menu, and it will display a troupe list for user to choose and a message as below:

```diff
- 1. Troupe 1
- 2. Troupe 2
- 3. Troupe 3

- Please select a troupe:
```

| User Input | Expected Output                                                                                                           | Actual Output                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 4          | ERROR, please enter the number within given range                                                                         | ERROR, please enter the number within given range                                                                         |
| 2          | You have selected: Troupe 2<br>Musician List<br>1\. Pink<br>2\. Red<br>3.Blue<br>Please select musicians(no more than 5): | You have selected: Troupe 2<br>Musician List<br>1\. Pink<br>2\. Red<br>3.Blue<br>Please select musicians(no more than 5): |
| 1          | You have selected: Troupe 1<br>Musician List<br>1\. Pink<br>2\. Red<br>3.Blue<br>Please select musicians(no more than 5): | You have selected: Troupe 1<br>Musician List<br>1\. Pink<br>2\. Red<br>3.Blue<br>Please select musicians(no more than 5): |

User can select musicians.<br>
Maxmum 5 musicians can be selected.<br>
A message will display as below. <br />

```diff
- Please select musicians(no more than 5):
```

| 4   | ERROR, please enter the number within given range                         | ERROR, please enter the number within given range                         |
| --- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1   | You have selected troupe: Troupe 1 and musicians: Pink                    | You have selected troupe: Troupe 1 and musicians: Pink                    |
| 2   | You have selected troupe: Troupe 1 and musicians: Pink,Red                | You have selected troupe: Troupe 1 and musicians: Pink,Red                |
| 1   | You have selected troupe: Troupe 1 and musicians: Pink,Red,Pink           | You have selected troupe: Troupe 1 and musicians: Pink,Red,Pink           |
| 3   | You have selected troupe: Troupe 1 and musicians: Pink,Red,Pink,Blue      | You have selected troupe: Troupe 1 and musicians: Pink,Red,Pink,Blue      |
| 1   | You have selected troupe: Troupe 1 and musicians: Pink,Red,Pink,Blue,Pink | You have selected troupe: Troupe 1 and musicians: Pink,Red,Pink,Blue,Pink |
| 1   | Sorry, no more than 5 musicians in a troupe.                              | Sorry, no more than 5 musicians in a troupe.                              |

User enter Y or N to continue adding musicians or not.<br>
A message will display as below. <br />

```diff
- Contiue to add musicians Y or N:
```

| User Input | Expected Output                                                                                                           | Actual Output                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Y          | Musician List<br>1\. Pink<br>2\. Red<br>3\. Blue                                                                          | Musician List<br>1\. Pink<br>2\. Red<br>3\. Blue                                                                          |
| y          | You have selected troupe: Troupe 2 and musicians: Pink,Pink,Pink,Red,Pink<br>Sorry, no more than 5 musicians in a troupe. | You have selected troupe: Troupe 2 and musicians: Pink,Pink,Pink,Red,Pink<br>Sorry, no more than 5 musicians in a troupe. |
| N          | Do you want to select another troupe Y or N:                                                                              | Do you want to select another troupe Y or N:                                                                              |
| n          | Do you want to select another troupe Y or N:                                                                              | Do you want to select another troupe Y or N:                                                                              |
| t          | You have selected Troupe 1 troupe and it includes musicians: Pink,Red<br>Do you want to select another troupe Y or N:     | You have selected Troupe 1 troupe and it includes musicians: Pink,Red<br>Do you want to select another troupe Y or N:     |

User enter Y or N to choose another troupe or not.<br>
A message will display as below. <br />

```diff
- Do you want to select another troupe Y or N:
```

| User Input | Expected Output                                                             | Actual Output                                                               |
| ---------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Y          | 1\. Troupe 1<br>2\. Troupe 2<br>3\. Troupe 3<br><br>Please select a troupe: | 1\. Troupe 1<br>2\. Troupe 2<br>3\. Troupe 3<br><br>Please select a troupe: |
| y          | 1\. Troupe 1<br>2\. Troupe 2<br>3\. Troupe 3<br><br>Please select a troupe: | 1\. Troupe 1<br>2\. Troupe 2<br>3\. Troupe 3<br><br>Please select a troupe: |
| N          | Back to Main Menu                                                           | Back to Main Menu                                                           |
| n          | Back to Main Menu                                                           | Back to Main Menu                                                           |
| b          | Back to Main Menu                                                           | Back to Main Menu                                                           |

# 4. Troupe summary description

## Instruction: 
- select option 4 from the main menu -> select a troupe -> display troupe summary

The table below shows user input, expected output and actual output in details.<br>
User select option 4 from the main menu, and it will display a troupe list for user to choose and a message as below.

```diff
- 1. Troupe 1
- 2. Troupe 2
- 3. Troupe 3
- Please select a troupe:
```

| User Input | Expected Output                                                                                                                                               | Actual Output                                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1          | You have selescted Troupe 1.<br>Troupe 1 is a Rock troupe that has 1 musicians.<br>Total instrument number of Troupe 1 is 1.<br>The troupe hourly rate is 111 | You have selescted Troupe 1.<br>Troupe 1 is a Rock troupe that has 1 musicians.<br>Total instrument number of Troupe 1 is 1.<br>The troupe hourly rate is 111 |
| 2          | You have selescted Troupe 2.<br>Troupe 2 is a Jazz troupe that has 2 musicians.<br>Total instrument number of Troupe 2 is 1.<br>The troupe hourly rate is 222 | You have selescted Troupe 2.<br>Troupe 2 is a Jazz troupe that has 2 musicians.<br>Total instrument number of Troupe 2 is 1.<br>The troupe hourly rate is 222 |
| 3          | You have selescted Troupe 3.<br>Troupe 3 is a Pop troupe that has 0 musicians.<br>Total instrument number of Troupe 3 is 0.<br>The troupe hourly rate is 0    | You have selescted Troupe 3.<br>Troupe 3 is a Pop troupe that has 0 musicians.<br>Total instrument number of Troupe 3 is 0.<br>The troupe hourly rate is 0    |
| 4          | ERROR, please enter the number within given range                                                                                                             | ERROR, please enter the number within given range                                                                                                             |

# 5. Troupe detailed description

## Instruction: 
- select option 5 from the main menu -> select a troupe -> display troupe detailed summary

The table below shows user input, expected output and actual output in details.<br>
User select option 5 from the main menu, and it will display a troupe list for user to choose and a message as below.

```diff
- 1. Troupe 1
- 2. Troupe 2
- 3. Troupe 3
- Please select a troupe:
```

| User Input | Expected Output                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Actual Output                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1          | Troupe Name: Troupe 1,<br>Troupe Genre: Rock,<br>Minimum Booking time: 1 hours,<br>Cost per hour: $ 209,<br>It has 1 Bassists, 0 Flautists, 1 Guitarists, 0 Percussionists.<br>It has the following musician:<br>  ----<br>  Musician Name: Pink,<br>  Musician Instrument: Guitar,<br>  Year of Playing: 1,<br>  Hourly Rate: 100,<br>  The more strings you have, the better you are<br>  ----<br>  Musician Name: Red,<br>  Musician Instrument: Bass,<br>  Year of Playing: 1,<br>  Hourly Rate: 109,<br>  Everyone loves a bassist                                                                                                                                        | Troupe Name: Troupe 1,<br>Troupe Genre: Rock,<br>Minimum Booking time: 1 hours,<br>Cost per hour: $ 209,<br>It has 1 Bassists, 0 Flautists, 1 Guitarists, 0 Percussionists.<br>It has the following musician:<br>  ----<br>  Musician Name: Pink,<br>  Musician Instrument: Guitar,<br>  Year of Playing: 1,<br>  Hourly Rate: 100,<br>  The more strings you have, the better you are<br>  ----<br>  Musician Name: Red,<br>  Musician Instrument: Bass,<br>  Year of Playing: 1,<br>  Hourly Rate: 109,<br>  Everyone loves a bassist                                                                                                                                        |
| 2          | Troupe Name: Troupe 3,<br>Troupe Genre: Jazz,<br>Minimum Booking time: 2 hours,<br>Cost per hour: $ 408,<br>It has 1 Bassists, 0 Flautists, 1 Guitarists, 1 Percussionists.<br>It has the following musician:<br>  ----<br>  Musician Name: Pink,<br>  Musician Instrument: Guitar,<br>  Year of Playing: 1,<br>  Hourly Rate: 100,<br>  The more strings you have, the better you are<br>  ----<br>  Musician Name: Red,<br>  Musician Instrument: Bass,<br>  Year of Playing: 1,<br>  Hourly Rate: 109,<br>  Everyone loves a bassist<br>  ----<br>  Musician Name: Blue,<br>  Musician Instrument: Percussion,<br>  Year of Playing: 1,<br>  Hourly Rate: 199,<br>  Me drum | Troupe Name: Troupe 3,<br>Troupe Genre: Jazz,<br>Minimum Booking time: 2 hours,<br>Cost per hour: $ 408,<br>It has 1 Bassists, 0 Flautists, 1 Guitarists, 1 Percussionists.<br>It has the following musician:<br>  ----<br>  Musician Name: Pink,<br>  Musician Instrument: Guitar,<br>  Year of Playing: 1,<br>  Hourly Rate: 100,<br>  The more strings you have, the better you are<br>  ----<br>  Musician Name: Red,<br>  Musician Instrument: Bass,<br>  Year of Playing: 1,<br>  Hourly Rate: 109,<br>  Everyone loves a bassist<br>  ----<br>  Musician Name: Blue,<br>  Musician Instrument: Percussion,<br>  Year of Playing: 1,<br>  Hourly Rate: 199,<br>  Me drum |
| 3          | Troupe Name: Troupe 2,<br>Troupe Genre: Pop,<br>Minimum Booking time: 1 hours,<br>Cost per hour: $ 199,<br>It has 0 Bassists, 0 Flautists, 0 Guitarists, 1 Percussionists.<br>It has the following musician:<br>  ----<br>  Musician Name: Blue,<br>  Musician Instrument: Percussion,<br>  Year of Playing: 1,<br>  Hourly Rate: 199,<br>  Me drum                                                                                                                                                                                                                                                                                                                            | Troupe Name: Troupe 2,<br>Troupe Genre: Pop,<br>Minimum Booking time: 1 hours,<br>Cost per hour: $ 199,<br>It has 0 Bassists, 0 Flautists, 0 Guitarists, 1 Percussionists.<br>It has the following musician:<br>  ----<br>  Musician Name: Blue,<br>  Musician Instrument: Percussion,<br>  Year of Playing: 1,<br>  Hourly Rate: 199,<br>  Me drum                                                                                                                                                                                                                                                                                                                            |
| 4          | ERROR, please enter the number within given range                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ERROR, please enter the number within given range                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

# 6. Show hourly cost for a troupe

## Instruction: 
- select option 6 from the main menu -> select a troupe -> enter hour values

The table below shows user input, expected output and actual output in details.<br>
User select option 6 from the main menu, and it will display a troupe list for user to choose and a message as below.

```diff
-1. Troupe 1
-2. Troupe 3
-3. Troupe 2

- Please select a troupe:
```

User can put in hours values after selecting a troupe from the list above.<br>
Minimum duration in hours between 0.5 and 3.<br>
A message will display as below.<br>

```diff
- Please put in hours(between 0.5 and 3):
```

| User Input | Expected Output                                    | Actual Output                                      |
| ---------- | -------------------------------------------------- | -------------------------------------------------- |
| 0.1        | ERROR, please enter valid number                   | ERROR, please enter valid number                   |
| 0.5        | Total cost of Troup Troupe 1 for 0.5 hours is: 200 | Total cost of Troup Troupe 1 for 0.5 hours is: 200 |
| 2          | Total cost of Troup Troupe 1 for 2 hours is: 800   | Total cost of Troup Troupe 1 for 2 hours is: 800   |
| 3          | Total cost of Troup Troupe 2 for 3 hours is: 600   | Total cost of Troup Troupe 2 for 3 hours is: 600   |
| 5          | ERROR, please enter valid number                   | ERROR, please enter valid number                   |

# 7. Show troupe names from a file

## Instruction: 
- select option 7 from the main menu -> display troupe name from a file

- File name is required to put in _troupeNamesList.txt_

- Important: other file names will display error message.

The table below shows user input, expected output and actual output in details.<br>
User select option 7 from the main menu, and it will display troupe names.<br>
A message will display as below. <br />

```diff
- Please put in a file name to read:
```

| User Input          | Expected Output                                                                                                                                                                                                                                                                                                                                                                                                                           | Actual Output                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| troupeNamesList.txt | \[ 'bronze', 'silver', 'gold' \]<br>\[<br>  Troupe {<br>    name: 'bronze',<br>    minimumDuration: undefined,<br>    genre: undefined,<br>    musicians: \[\]<br>  },<br>  Troupe {<br>    name: 'silver',<br>    minimumDuration: undefined,<br>    genre: undefined,<br>    musicians: \[\]<br>  },<br>  Troupe {<br>    name: 'gold',<br>    minimumDuration: undefined,<br>    genre: undefined,<br>    musicians: \[\]<br>  }<br>\] | \[<br>  Troupe {<br>    name: 'bronze',<br>    minimumDuration: undefined,<br>    genre: undefined,<br>    musicians: \[\]<br>  },<br>  Troupe {<br>    name: 'silver',<br>    minimumDuration: undefined,<br>    genre: undefined,<br>    musicians: \[\]<br>  },<br>  Troupe {<br>    name: 'gold',<br>    minimumDuration: undefined,<br>    genre: undefined,<br>    musicians: \[\]<br>  }<br>\] |
| troupe.txt          | ERROR, no this file!!                                                                                                                                                                                                                                                                                                                                                                                                                     | ERROR, no this file!!                                                                                                                                                                                                                                                                                                                                                                                 |

# 8. Write troupe names to a file

## Instruction: 
- select option 8 from the main menu -> enter a file name -> write troupe details in a file

The table below shows user input, expected output and actual output in details.<br>
User select option 8 from the main menu, and it will ask user to enter a file name <br>
A message will display as below.

```diff
- Please put in a file name to print:
```

| User Input | Expected Output           | Actual Output             |
| ---------- | ------------------------- | ------------------------- |
| Troupe 1   | File written successfully | File written successfully |
| Troupe 2   | File written successfully | File written successfully |
| Troupe 3   | File written successfully | File written successfully |
| Troupe 4   | ERROR, no this troupe!!   | ERROR, no this troupe!!   |
