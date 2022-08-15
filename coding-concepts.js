// ASSESSMENT 2: Coding Conceptual Questions

const { default: test } = require("node:test");

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// // QUESTION-ONE
// // --------------------1) What will this log?

// const cohort = "Echo 2022"
//  console.log(cohort.split(""))

// // a) Your answer:

// I believe the computer will log ["E","c","h","o", "2","0","2","2"]. I believe this will be the right console.log becasue the .split() method is a method that divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

// b) Verify and explain:
 
// The computer log the answer below it seems to be the same answer as mine, but the arrays are formatted different. I wonder if this matters? 🤔💭

// [
//   'E', 'c', 'h',
//   'o', ' ', '2',
//   '0', '2', '2'
// ]


// QUESTION-TWO
// --------------------2) What will this log?

//  const greeter = (name) => {
//   `Hello, ${name}!`
// }
//  console.log(greeter("LEARN Student"))

// a) Your answer: 

// I think it will log undefined because for this particular function I will need a return. As states above there is no return so you will get an undefined answer. Undefined answers usually stem from Anything that lacks a description or is not declared is considered undefined.


// b) Verify and explain: 

// As you can see below I added my return statment and now the code is running perfectly. Now that i have told my computer what to return it is now able to execute the code in the browser.

// const greeter = (name) => {
//   return `Hello, ${name}!`
// }
//  console.log(greeter("LEARN Student"))




// QUESTION-THREE
// // --------------------3) What will this log?

//  const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
//  console.log(multipliedByTwo)

// // a) Your answer:

// [8, 10, 12, 14, 16 ] I think it will console log a new array but in this new array it will be a new set off numbers and the numbers willbe Multiplied by two.

// // b) Verify and explain:

// My answer was correct it was able to itterate over all the numbers in the array using the .map() method and it was also able to do something with every element in the array which was times every number by 2 and pushing a new array out with the amswers.
// [8, 10, 12, 14, 16 ]



// QUESTION-FOUR
// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// // a) Your answer: 

// [ 11, 13, 15 ] I believe it will filter through the array and only log the odd numbers


// // b) Verify and explain: 

// [ 11, 13, 15 ]
// My answer was correct. It only logged the odd numbers. In the code above gave me an array of numbers and asked us to display and array of only odds. For this code you would use the .filter() method to be able to fiter through and array and return a shorter array of only the odd numbers. we then created a function to let the computer know that if the numbers in the array is divided 2 and does not egual 0 its an odd number.
// (number % 2 ! == 0)



// QUESTION-FIVE
// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// // a) Your answer:

// It will log the word Javascript

// // b) Verify and explain: 

// My answer was correct yet again 😊 It console logged the word JavaScript becuase in the code above its asking the computer to console.log myCodingSills go to the value languages and grab whats at the 0 indexed. Whats at the 0 indes og languages is Javascrtipt so it logged the word Javascript.


// QUESTION-SISX
// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name,
//      this.cohort = "Echo",
//      this.year = 2022
//  }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// // a) Your answer: 

// { student: 'George', cohort: 'Echo', year: 2022 }
// It will update the student name to George and because we ask the computer to create a new variable called LearnStudents and update the old learn by adding the string george in the place of the woerd name. 
 

// // b) Verify and explain:

// Learn { student: 'George', cohort: 'Echo', year: 2022 }
// Well I feel like my answer was super close. However I wasnt expecting the word learn in front of of my returned array and I was expecting all the properties to show for example the cohort: "Echo" and year; 2022 but because they were not commented out, But when I tried to comment out those two lines to see if will just log the new student name "George" I recieve an error message saying wrong expression expected. I tried everything and now I am wondering why? Do you have any suggestion as to why? 💭

// class Learn {
//   constructor(name) {
//     this.student = name,
//     //  this.cohort = "Echo", tried to comment this line
//     //  this.year = 2022     tried to comment this line
//  }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

