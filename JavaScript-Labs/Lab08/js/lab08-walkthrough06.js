// Exercise 8.6: Built-in JavaScript objects
var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");
document.write("<p>stringOne = " + stringOne + "</p>");
document.write("<p>typeof stringOne = " + typeof stringOne + "</p>");
document.write("<p>typeof stringThree = " + typeof stringThree + "</p>");
if (stringOne == stringTwo) document.write("<p>stringOne == stringTwo</p>");
if (stringOne == stringFour) document.write("<p>stringOne == stringFour</p>");
if (stringOne === stringTwo) document.write("<p>stringOne === stringTwo</p>");
if (stringTwo === stringThree) document.write("<p>stringTwo === stringThree</p>");
if (stringTwo === stringFour) document.write("<p>stringTwo === stringFour</p>");
var dateOne = new Date();
document.write("<p>Current date: " + dateOne + "</p>");
document.write("<p>Math.PI = " + Math.PI + "</p>");
document.write("<p>Math.sqrt(4) = " + Math.sqrt(4) + "</p>");
document.write("<p>Random number = " + Math.random() + "</p>");
