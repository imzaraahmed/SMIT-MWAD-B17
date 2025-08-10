// question-1 take two nos from user and display their sum

function q1 () {
var q1num1 = parseInt(prompt("Enter the first integer"));
var q1num2 = parseInt(prompt("Enter the second integer"));
var q1totalSum = q1num1 + q1num2;
alert("The sum of two integers is " + q1totalSum);
}

// Write a program to add three numbers entered by the user.

function q2 () {
var q2num1 = parseInt(prompt("Enter the first integer"));
var q2num2 = parseInt(prompt("Enter the second integer"));
var q2num3 = parseInt(prompt("Enter the third integer"));
var q2totalSum = q2num1 + q2num2 + q2num3;
alert("The sum of three integers is " + q2totalSum);
}

//Ask the user for two numbers, add them, and show the result using alert().

function q3 () {
var q3num1 = parseInt(prompt("Enter the first integer"));
var q3num2 = parseInt(prompt("Enter the second integer"));
var q3totalSum = q3num1 + q3num2;
alert("The sum of two integers is " + q3totalSum);
}

//Take two numbers and display their sum, difference, product, and quotient.
function q4 () {
var q3num1 = parseInt(prompt("Enter the first integer"));
var q3num2 = parseInt(prompt("Enter the second integer"));
var q3totalSum = q3num1 + q3num2;
var q4difference = q3num1 - q3num2;
var q4quotient = q3num1 / q3num2;
console.log("The sum of two integers is " + q3totalSum + "\nThe difference of two integers is " + q4difference+ "\nThe quotient of two integers is " + q4quotient);
}

//Take the user’s name and two numbers, then greet the user with the message and result of addition.

function q5 () {
var q5name = prompt("Enter your name");
var q5num1 = parseInt(prompt("Enter the first integer"));
var q5num2 = parseInt(prompt("Enter the second integer"));
var q5totalSum = q5num1 + q5num2;
alert("Hello " + q5name + " the sum of two integers is " + q5totalSum);
}

// Take two numbers as input, convert them to integers, then add them and show the result in the console.

function q6 () {
var str1 = prompt("Enter your first number");
var str2 = prompt("Enter your second number");
var q6num1 =Number(str1);
var q6num2 = Number(str2);
var q6totalSum = q6num1 + q6num2;
console.log("the sum of two integers is " + q6totalSum);
}

//Take two numbers as input using prompt(), check if both are numbers, then add them. If not, show an error message.


function q7 () {
var q7num1 =  parseInt(prompt("Enter the first Number"));
var q7num2 =  parseInt(prompt("Enter the second Number"));



if(!isNaN(q7num1) && !isNaN(q7num2) ){
    
    var q7totalSum = q7num1 + q7num2;
    console.log("The sum of two integers is " + q7totalSum);
}
else{
    console.log("The numbers are not valid");
}

}

//Create a program where the user inputs a number and the program adds 10 to it and displays the result.

function q8 () {
var q8num = parseInt(prompt("Enter your  number"));
var result = Number(q8num) + 10;
alert("The result is " + result);
}

//Take two numbers and display whether their sum is even or odd.

function q9 () {
var q9num1 =  parseInt(prompt("Enter the first Number"));
var q9num2 =  parseInt(prompt("Enter the second Number"));
var sum=q9num1 + q9num2;
if (sum % 2 == 0){
    alert("The sum is even");
}
else{
    alert("The sum is odd");

}
}

// Create a simple calculator using prompt() that takes two numbers and an operator (+, -, , /), and performs the correct operation.

function q10 () {
var q10num1 =  parseInt(prompt("Enter the first Number"));
var q10num2 =  parseInt(prompt("Enter the second Number"));
var q10ope =  prompt("Enter + for sum, - for difference, / for division");
var sum=q10num1 + q10num2 ;
var sub=q10num1 - q10num2 ;
var div=q10num1 / q10num2 ;



if(q10ope == "+"){
    alert("The sum is:" + sum);
}
 else if (q10ope == "-") {
    alert("The difference is:" + sub);
}  
    
   else if (q10ope == "/") {
    alert("Division is:" + div);
}    
else {
    alert("invalid operator");
}

}