// ASSESSMENT 2: Coding Practical Questions with Jest

// const { workerData } = require("worker_threads")
// const { string } = require("yargs")

// const { equal } = require("assert")
// const { array, number, string } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.


// QUESTION-ONE
// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// PSUEDO CODE
// FUNCTION: OBJECT(dividedBy3)
// INPUT: An Object as an argument
// OUTPUT: A decistion on wheter the number is divisible by 3 or not
// for this code problem I will create a for loop and a conditional statement.stating if the number inside it is evenly divisible by three or not.

 const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
 const object2 =  { number: 0 }
// // Expected output: "0 is divisible by three"
 const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"


// a) Create a test with expect statements for each of the variables provided.
  
// FAIL  week-2-assessment-ResetReesi/code-challenges.test.js
// ● Test suite failed to run

// const dividedByThree = [15, 0, -7]
// const remainderValue = dividedByThree//.map(number => number / 3)
// for (var i = 0; i < dividedByThree.length; i++) {
//     if(i % 3 == 0 ){
//         console.log(dividedByThree[i] + " is divisible by 3");
//     }
// else(
//     console.log(dividedByThree[i] + " is not divisible by 3")
// )
// };


// b) Create the function that makes the test pass.

// My code is correct. I got the correct output but I have tried everything to get that Green pass 😢. Please help me understand what I am doing wrong.

// ● Test suite failed to run

// Your test suite must contain at least one test.

//   at onResult (node_modules/@jest/core/build/TestScheduler.js:172:18)
//   at node_modules/@jest/core/build/TestScheduler.js:300:17
//   at node_modules/emittery/index.js:311:13
//       at Array.map (<anonymous>)
//   at Emittery.emit (node_modules/emittery/index.js:309:23)

// Test Suites: 1 failed, 1 total

// const dividedByThree = [15, 0, -7]
// const remainderValue = dividedByThree//.map(number => number / 3)
// for (var i = 0; i < dividedByThree.length; i++) {
//     if(i % 3 == 0 ){
//         console.log(dividedByThree[i] + " is divisible by 3");
//     }
// else(
//     console.log(dividedByThree[i] + " is not divisible by 3")
//   )
//  };


// QUESTION-TWO
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// PSUEDO CODE
// FUNCTION: Created a function that turns the array to a string and the capitalize the first letter of every word in a string and then concatenates with the remainder of the letters of the word. Then create anpther variable that calls on the orginakl array but passes the function as an argument.
// INPUT: Array of words
// OUTPUT: returns an array with all the words capitalized.
//    ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// 

 const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
 const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// FIRST ARRAY ANSWER

//  var randomNouns1 =["streetlamp", "potato", "teeth", "conclusion", "nephew"];
//  var capitalizeArr = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
//  var words = randomNouns1.map(capitalizeArr);

//  console.log(words);

//  /SECOUND ARRAY ANSWER

//  let randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
//  let capitalizeArr = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
//  let words = randomNouns2.map(capitalizeArr);

//   console.log(words);

// $ /Users/learnacademy/node_modules/.bin/jest
//  FAIL  week-2-assessment-ResetReesi/code-challenges.test.js
//   ● Test suite failed to run

//     Your test suite must contain at least one test.

//       at onResult (node_modules/@jest/core/build/TestScheduler.js:172:18)
//       at node_modules/@jest/core/build/TestScheduler.js:300:17
//       at node_modules/emittery/index.js:311:13
//           at Array.map (<anonymous>)
    //   at Emittery.emit (node_modules/emittery/index.js:309:2

//  var randomNouns1 =["streetlamp", "potato", "teeth", "conclusion", "nephew"];
//  var capitalizeArr = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
// var words = randomNouns1.map(capitalizeArr);

// console.log(words);

// /SECOUND ARRAY ANSWER
//  let randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
//  let capitalizeArr = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
//  let words = randomNouns2.map(capitalizeArr);

//  console.log(words);

// b) Create the function that makes the test pass.

 // My code is correct. I got the correct output but I have tried everything to get that Green pass 😢. Please help me understand what I am doing wrong. Also the question is a little bit different from the expected output. I just went with the expected output which was ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"].

//  $ /Users/learnacademy/node_modules/.bin/jest
//  FAIL  week-2-assessment-ResetReesi/code-challenges.test.js
//   ● Test suite failed to run

//     Your test suite must contain at least one test.

//       at onResult (node_modules/@jest/core/build/TestScheduler.js:172:18)
//       at node_modules/@jest/core/build/TestScheduler.js:300:17
//       at node_modules/emittery/index.js:311:13
//           at Array.map (<anonymous>)
//       at Emittery.emit (node_modules/emittery/index.js:309:2


// QUESTION-THREE
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// PSUEDO CODE
// INPUT: takes in a string and logs the index of the first vowel.
// OUTPUT: Expected output: 1, Expected output: 0, Expected output: 2
// PROCESS: Create a new variable name vowels and allow the vowels to be equal to an array of vowels ['a', 'e', 'i', 'o', 'u', ]/i]. The I after the array is to let you know that we are looking for the index. Once you console.log you will use the .search method to filter through the sting and find the values at it index.

// FAIL  week-2-assessment-ResetReesi/code-challenges.test.js
// ● Test suite failed to run

//   Your test suite must contain at least one test.

//     at onResult (node_modules/@jest/core/build/TestScheduler.js:172:18)
//     at node_modules/@jest/core/build/TestScheduler.js:300:17
//     at node_modules/emittery/index.js:311:13
//         at Array.map (<anonymous>)
//     at Emittery.emit (node_modules/emittery/index.js:309:23)



const vowelTester1 = "learn"
// // // Expected output: 1
 const vowelTester2 = "academy"
// // // Expected output: 0
  const vowelTester3 = "challenges"
// // // Expected output: 2

// vowels = /['a', 'e', 'i', 'o', 'u', ]/i;

// console.log(vowelTester1.search(vowels));
// console.log(vowelTester2.search(vowels));
// console.log(vowelTester3.search(vowels));



// b) Create the function that makes the test pass.

// FAIL  week-2-assessment-ResetReesi/code-challenges.test.js
// ● Test suite failed to run

//   Your test suite must contain at least one test.

//     at onResult (node_modules/@jest/core/build/TestScheduler.js:172:18)
//     at node_modules/@jest/core/build/TestScheduler.js:300:17
//     at node_modules/emittery/index.js:311:13
//         at Array.map (<anonymous>)
//     at Emittery.emit (node_modules/emittery/index.js:309:23)


// My code is correct. I got the correct output but I have tried everything to get that Green pass 😢. Please help me understand what I am doing wrong.


// const vowelTester1 = "learn"
// // // Expected output: 1
//  const vowelTester2 = "academy"
// // // Expected output: 0
//  const vowelTester3 = "challenges"
// // // Expected output: 2

// vowels = /['a', 'e', 'i', 'o', 'u', ]/i;

// console.log(vowelTester1.search(vowels));
// console.log(vowelTester2.search(vowels));
// console.log(vowelTester3.search(vowels));