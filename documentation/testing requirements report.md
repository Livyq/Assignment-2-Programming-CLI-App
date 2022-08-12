# Test Requirements Document
Prepared By:
Wenjing Qiu
# Introduction
The test requirement document will be used to validate MusoPlan software requirements.<br> 
The document is also used to check input validation supplied by users. <br>
With input validation, it prevents improper formed data from entering the MusoPlan application.
# Test Requirements
This test requirement document will be used to confirm software requirements and all the users’ input complying for quality purposes.<br>
## Manual testing method
The manual testing will be used to validate the users’ input, which is the full system testing. For manual testing of the MusoPlan to be successful, a tester first needs to understand the software requirements, which will be provided in this document. Knowing this information before preparing to test is very useful because the main goal is to get the software as close as possible to being bug-free.<br>
With manual testing, a tester prepares four test cases, executes the tests, and reports the results in a document. This involves a human tester who physically performs tests on the MusoPlan software to determine whether the test results are a “pass” or “fail”.<br>
## Automation testing method
The automation testing method will be used to test the values of all classes and methods of MusoPlan. The testing will be used to test and compare the actual outcome with the expected outcome.<br>
In automation testing, code scripts, which will be written by a tester, are run to verify a testing unit. The tests are not carried out by people but are performed programmatically by using Jest.<br>
## Manual testing process  
Here’s how to perform manual testing step by step:<br>
•	Analyse requirements from the software requirement specification document

•	Create a clear test plan 

•	Write test cases that cover all the requirements defined in the document

•	The manual testing process can be operated from the command line. 

•	Execute test cases and detect any bugs

•	Report bugs, if any, and once fixed, run the failed tests again to re-verify the fixes

## Automation testing process
Here’s how to perform automation testing step by step:

•	The first thing is to open a command line terminal and run the command 
< npm init>to initialize the project.

•	With the project ready, we need to do is install Jest with the command< npm install --save-dev jest>

•	Update the <package.json> file with the scripts element

•	Create a test file according to the file we want to test

•	Add test code to the test file content

•	Run the test directly from the command line

•	Jest prints to the console a summary of the execution and highlights what went well with green and what resulted in an error in red

•	Setting up junit in the jest config file to generate the testing report

## Manual testing requirements
The test scenarios below will be tested by using manual testing thoroughly for quality purposes.

1.	Create a musician
Musician data requirements are:
- a.	Name should be between 3 and 30 characters
- b.	Years playing must be non-negative
- c.	Hourly rate must be over 50
- d.	Musicians must play one of the four instruments (guitar, bass, drum, flute)
2.	Create a troupe  
Troupe data requirements are:

- a.	Name between 3 and 30 characters
- b.	Valid genres from (rock, jazz, and pop)
- c.	Minimum duration in hours between 0.5 and 3

3.	Add a musician to a troupe

    Troupe data requirements are:
- a.	No more than 5 musicians

- b.	Valid genres from (rock, jazz, and pop)

- c.	Minimum duration in hours between 0.5 and 3

4. 	Calculate the cost of deploying the troupe for several hours

    Hour’s data requirement is:

- a.	the minimum duration of booking in hours between 0.5 and 3

## Automation testing requirements:
1.	Troupe class
    1)	Name between 3 and 30 characters
    2)	Valid genres from (rock, jazz, and pop)
    3)	Minimum duration in hours between 0.5 and 3
2.	Troupe methods
    1)	Add musicians
    2)	Count Instrument
    3)	Hourly rate for the whole troupe
    4)	Count the cost of a troupe deploying
    5)	Display summary details
    6)	Details
    7)	Display troupe details with musicians
    8)	Count musician type
3.	Musician class
    1)	Name should be between 3 and 30 characters
    2)	Years playing must be non-negative
    3)	Hourly rate must be over 50
4.	Musician methods
    1)	Display musicians’ details 
5.	Bassist/Flautist/Guitarist/Percussionist class
    1)	Method: Display instrument detail
