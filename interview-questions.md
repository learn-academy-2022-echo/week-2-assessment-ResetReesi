# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: 

The difference betweeen a parameter an a argument is a paramter is a variable passed into a function. Parameters are basically the scope of instructions that you want the computer to execute. Arguments are self-standing items and variables that you place inside parameters and is used to customize a program. For example if I wanted to create an function that created a 3 by 3 box (x = 3 y = 3) well every time I use this fuction it will stay in the parameters of 3 by 3 box. Now lets say I wanted to crerate a 4 by 4 box (x = 4 y = 4 ) well now im creating an argument and creating an argument will allow me to modify the paramters of a function.


Researched answer:

* Parameters:

-Parameters are the name within the function definition. 
-Parameters don’t change when the program is running
-Parameters are names for Arguments like a variable
-Parameters  usually have a value when it gets called if it does not have a value we will get an Error. When the value of that function gets called it's argument and function can accessed by it's parameters.

* Arguments:
-Arguments are probably going to be different every time the function is called.
-Arguments are the values passed in when the function is called.
-Arguments are the values of parameters

https://www.quora.com/What-is-the-difference-between-arguments-and-parameters-in-JavaScript


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: 

The built in method .map() tkaes in three different types of predefined parameters. Those predefined parameters are the current value, an array, an index, and thisValue. There is only one predefined parameter that .map() requires in its parameter, and thats the currentValue method. The currentValue is required because it holds a value of a current element. All of the rest of the parameters are optional. Unfortunatly I have not had alot of experience with using predefined parameters, however I have extensive knowledge when it comes to predefined parameters and can not wait for the opportunity to show case ny skills.

Researched answer:

To avoid this undesirable outcome, we use Predefined Parameters also known as default paramters. Default parameters are the parameters that have defined their default values in case they are missing from the invoking function call. The .map() method is used to iterate over an array and calling function on every element of array.

* FUNCTION:(currentValue, index, arr): It is required parameter and it runs on each element of array. It contains three parameters which are listed below:

* CURRENT VALUE: It is required parameter and it holds the value of current element.

*INDEX: It is optional parameter and it holds the index of current element.

* ARRAY: It is optional parameter and it holds the array.
thisValue: It is optional parameter and used to hold the value of passed to the function.

* THIS VALUE: It is optional parameter and used to hold the value of passed to the function.

https://www.geeksforgeeks.org/map-in-javascript/



3. What is the difference between map and filter?

Your answer: 

he biggest difference between .map() and .filter() is .map() generates a new array based on its existing array which means it will always try to return to us an array with the same length of your original array. .Filter is one of my favorite array methods of all times. Whenever you have to use the .filter() method it allows you to filter through and array. Basically filtering through the array allows you to summon every element in you array and it will return a filtered array, meaning it will remove values from an array. the .filter method would be that built in method you looking for. I enjoy filtering through array and using other methods as well such as .push() to push elements to the end of an array. 😊


Researched answer:

.map() helps create and return a new array. Use .map() whenever you need to update data inside an array (by mapping over it!).  For example, perhaps you have a list of names and you want to capitalise this is when you would us your .map() method. .map() will always return a new array of the same length as the original! Now .filter() on the other hand will iterate through data, and filters out data that doesn't match the criteria that we set. We define what those criteria through a truth test inside a function. For example, If we want to filter through an array to create a new array with only odd numbers you will us the .filter()method. For every element in the array, the function will be called. The function should return all the odd numbers that are set in the array, to tell JavaScript whether that element should be included in the resulting array or not.

https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d



4. What is the DOM?

Your answer: 

DOM stands for Document object Model and it beasicaly defines the logical structure of documents. It allows languages such as Javascript to cross platforms and update the content, structure and style on you website. Basically having the ability to udate html using jacascript. I remember when I first started teaching myself to code I would always have 3 separate files one for html, one for css and one for Javascript. I remember there was a <script></script> tag that allowed you to emmbed javascript into your html file. When I use this script tag, I used it to identify a section on my html document or use it to refrence a javascript file. Since Learn Academy I found out about Dom and Dom is and amazing translator. The DOM translates all the javascript into one html file. It basically tricks my computer into thinking that Javascript is Html.

	


Researched answer: 

Websites have progressed dramatically. What used to be a network of basic text-based pages has developed into a network of carefully created experiences, complete with responsive buttons, parallax scrolling, and tailored information. These website design aspects don't pop up out of anywhere. These strategies can be difficult to execute, and they frequently require the collaboration of multiple files and programming languages in order to create a unified experience.Your website's files must be able to communicate with one another in order to create well-designed, engaging web pages or application, and the Document Object Model (or DOM) makes this possible.


5. What is React? Why would you use it?
	
Your answer:

 React is basically looking for human reactions. Its a Javascript libary Introduced by Facebook. React job is to make my job as a junior developer a little easier 😎 , instead of writing a million lines of code for the same feature it allows you to reuse different components of my code. The question is Why would I use react? Why not use React? Any tool that will help me stay organized, generate clean code, and work from a virtual browser is the application for me. The virtual browser allows me to work and make changes to a webpage or application in a live or isolated enviorment. It also protects my work from hackers and web based virus, Due to the nature of its isolated envoirment. I will be able access the back end of the virtual browser while the front end remains live. I remember back in the days when a website was under comstruction you would have to take it down and to fix the issue now we have react who provides virtual browsers and now your able to fix you web page or application right then and there while its live or in it isolates enviorment. 
 
 

Researched answer:

React Is Used By 75% Of All IT Companies Leaving Far Behind Angular and Vue. React.js intergrated advanced tech concepts like VR and 360 views. I can name 5 Key Reasons Why You Should Use React for Web Development...

1.JSX syntax for extended HTML
With React.js, you may utilize the declarative HTML syntax directly in JavaScript code.Developers may build tidy, maintainable code by passing HTML and React.js components into the browser's tree structures. React.js apps are faster and more efficient thanks to JSX and the Virtual DOM.

2.Ultimate flexibility and compatibility
Using React.js for web development may be extremely convenient because React is one of those cases where you get the hang of a single technology to easily reuse it across a range of platforms

3.High performance reinforced by Virtual DOM
 My favorite thing about React Is that by virtualizing and keeping DOM in memory, React grants outstandingly fast rendering capacities with all view changes being readily reflected in the virtual DOM. 

 4.The powers of React Native
 React Native is a true game-changer it is an open-source JavaScript framework, designed for building apps on multiple platforms like iOS, Android, and also web applications, utilizing the very same code base. 
 
 5.React Has a Large Development Community
React has a massive following of JavaScript developers who develop new solutions and tools regularly. A lot of user-developed applications have been included in the official library.You can get access to a large community of experts to solve any problems. Plus, this is a great way to keep yourself updated. As of January 2022, React has more than 180K stars on Github and around 10 million npm downloads weekly.

https://www.techmagic.co/blog/why-we-use-react-js-in-the-development/#:~:



6. STRETCH: What is hoisting in JavaScript?

Your answer:
 
Hoisting in JavaScript is basically the behavior of which the declaration of variables and functions are moved to the top of your scope before execution. Hoisting will happen only if var is used for declaration and not with const or let declarations. Hoisting allows functions to be safely used in code before they are declared. I usually use this practice becauce during my creation phase hoisting allows functions to be safely used in my code before they are declared.



Researched answer:

Most develpers use Javascript hoisting because you are able to test you variables and function before there declaration.The code may return Undefined but thats because your testing the code and no variable had been declared. check out the example below.. Do you notice the console.log() is above the variable declaration this is called hoisting.One of my favorite things about hoisting is that it lets you use a function before you declare it in your code. Hoisting was thought up as a general way of thinking about how execution contexts (specifically the creation and execution phases) work in JavaScript. So, Basically Javascript hoisting gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

console.log(counter); // undefined
var counter = 1;

https://www.google.com/search?q=hoisting+is+great+for+keeping+code+neat+


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories:

The user story is a way to improve software and to improve contnet.
The user story are usually short and informal descriptions simply because user stories help articulate what value a product feature can bring and have a better understanding of why users want a certain functionality. Since our applications or web pages are usually meant to be made user friendly. If you want to place yourself in the user shoes below is an example of what some of the developers use to put there self in the users shoes.

Example:
As a <user role> I want <goal> so that <benefit>




2. Spread operator: 

The spread operator (...) takes an exsisting array and it expands its diffrent elements. The spread operator also allows you to copy all or part of an exsiting array into another array. 

Example:
const highHeels = [burberry, prada, gucci ];
conts sneakers = [nike, airmax95, addidas]
const waredrobe = [...highHeels, ...sneakers

console.log(waredrobe)


3. React props:
 
 React props are aruguments passed into react components. Props are a good way to use reusable code. React props are basically objects that contain all the properties passed to the component. Believe it or not Props is just a shorter way of saying properties.


4. Conditional rendering:

 React conditional rendering to me sounds like it could be related to conditional statements in javascript. Conditional rendering is 
 the process of changing behavior of and webpage or an app depending on it state. for example you if you change the header message from black to purlple once you hover over it. In this situation you will have a diffrent display message depending on when the user hovers over the header.


5. DOM events: 

To me DOM events are actions or event handlers  that javascript take in on an html documents. for example events are normally expressed when the user clicks a button, hover over something and the color changes. Events are normally used in combined with the function that we create. lets remember the function will not execute before the even occurs. Below are a list of example of some Dom events followed by brief description of what the event does, and when we will use the event. The computer will look out up for these events that we tell it to do so it can executr properly once Action is completed 

Example:

Event: AnnimationStart 
Descripition: The event occurs when a CSS animation has started
Event Family: AnnimationEvent

Event: PageShow
Description: The event occurs when the user navigates to a webpage
Event Family: PageTransitionEvent