//1. Write a function `isEven` that takes a number as an argument and returns true if the number is even and false if it is odd.

function isEven(num) {

    var result;
    if (num % 2 == 0) {
        alert("the no is even" + num);
        result = true;
    }
    else {
        alert("the no is odd" + num);
        result = false;
    }
    return result;
}
isEven(12);

//2. Create a function `countVowels` that takes a string and returns the number of vowels in that string.

function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            count++;
        }
     }
    return count;
}
alert(countVowels("elephant"));



//3. Create a function `findMax` that takes an array of numbers and returns the largest number.

function findMax(array){
    var largestNum = [0];
    for(var i=1; i<array.length; i++){
        if(array[i]>largestNum){
            largestNum = array[i];
         }
    }
    return largestNum;
}
alert(findMax([3,4,6,8,9]));


//4. Write a function `reverseString` that takes a string and returns it reversed .

function reverseString(str) {
    var reverse = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
alert(reverseString("hello"));


//5. Write a function `isPalindrome` that checks if a given string is a palindrome (reads the same backward as forward).

function isPalindrome(str){
    let reversestr="";
    for(let i=str.length-1; i>=0; i--){
        reversestr += str[i];
    }
    if(str === reversestr){
        return true;
    }
    else{
        return false;
    }
}
alert(isPalindrome("level"));

//6. Create a function `fibonacci` that returns the nth Fibonacci number.
//The Fibonacci sequence is a special number sequence in mathematics where each number is the sum of the two numbers before it.

function fibonacci(num){
    let a = 0, b = 1;
    if (num === 0)
        return a;
    if (num ===1)
        return b;

    for(let i = 2; i<=num; i++){
        let nextNum = a+b;
        a = b;
        b = nextNum;
    } 
    return b;
}
alert(fibonacci(7));

//7. Write a function `factorial` that calculates the factorial of a given number.

function factorial(num){
    if(num === 0 || num ===1){
        return 1;
    }
    return num * factorial(num - 1);
}
alert(factorial(7));

//8. Create a function `removeDuplicates` that takes an array and returns a new array without duplicates.

function removeDuplicates(arr){
    return [...new Set(arr)];

}
alert(removeDuplicates([1,1,2,3,4,5,5,7,7]));

//9. Write a function `sumArray` that takes an array of numbers and returns the sum.

function sumArray(arr){
    let sum=0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
alert(sumArray([1,3,5,6,8,9]));

//10. Create a function `sortArray` that takes an array of numbers and returns it sorted in ascending order.

function sortArray(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j= i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
alert(sortArray([1,3,6,8,9,5]));

//11. Write a function `stringLength` that returns the length of a given string.

function stringLength(str){
   
    return str.length;
}
alert(stringLength("zara"));


//12. Write a function `capitalizeFirstLetter` that capitalizes the first letter of each word in a string.

function capitalizeFirstLetter(str) {
    let words = str.split(" ");   // split string into array of words
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {  // check if word is not empty
            word = word[0].toUpperCase() + word.slice(1);
        }
        result += word + " ";   // add space after each word
    }

    return result.trim();  // remove extra space at the end
}

alert(capitalizeFirstLetter("this is my assignment")); 



//13. Create a function `toUpperCase` that takes a string and returns it in uppercase.

function toUpperCase(str){
    return str.toUpperCase();
}
alert(toUpperCase("maryum"));


//14. Create a function `mergeArrays` that takes two arrays and merges them into one.

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

alert(mergeArrays([1, 2, 3], [4, 5, 6]));



//15. Write a function `isPrime` that checks if a number is prime.

function isPrime(num) {
  if (num <= 1) return false; 

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; 
    }
  }

  return true;
}
 
alert(isPrime(7));  
alert(isPrime(10));

//16. Create a function `countWords` that counts the number of words in a string.

function countWords(str) {
  let words = str.split(" ");
  return words.length;
}

alert(countWords("Hello world from JavaScript")); 

//17. Write a function `arrayContains` that checks if an array contains a specific value.

function arrayContains(arr, value) {
    return arr.includes(value); //includes a builtin function it checks the value in arry.
}

alert(arrayContains([1, 2, 3, 4, 5], 3)); 
alert(arrayContains([1, 2, 3, 4, 5], 7));  

//18.  Create a function `uniqueElements` that returns an array of unique elements from a given array.

function uniqueElements(arr) {
    return [...new Set(arr)]; //set is a builtin functon which removes duplicates
}

alert(uniqueElements([1, 2, 2, 3, 4, 4, 5]));

//19.Create a function `average` that calculates the average of an array of numbers.

function average(arr) {
    if (arr.length === 0) return 0;  
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];   
    }

    return sum / arr.length; 
}

alert(average([10, 20, 30, 40])); 
             
//20.. Write a function `removeSpaces` that removes all spaces from a string.

function removeSpaces(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {  
            result += str[i];
        }
    }
    return result;
}

alert(removeSpaces("java script"));  

//21. Write a function `swap` that swaps the values of two variables.

function swap(a, b) {
    [a, b] = [b, a];  
    return [a, b];
}

alert(swap(7,5)); 

//22.  Create a function `combineStrings` that concatenates two strings with a space in between.

function combineStrings(str1, str2) {
    return `${str1} ${str2}`;
}

alert(combineStrings("Zara", "Ahmed")); 

//23. Create a function `sumOfDigits` that returns the sum of the digits of a number.

function sumOfDigits(num) {
    let str = num.toString();   
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);  
    }

    return sum;
}
alert(sumOfDigits(1234));  

//24.  Write a function `findIndex` that returns the index of a specific value in an array.

function findIndex(arr, value) {
    return arr.indexOf(value);
}

alert(findIndex([10, 20, 30, 40], 30)); 


//25.Write a function `getAge` that calculates the age of a person based on their birth year.

function getAge(birthYear) {
    let currentYear = new Date().getFullYear(); 
    return currentYear - birthYear;
}

alert(getAge(2002));  
 

//26. Write a function `countUppercase` that counts the number of uppercase letters in a string.

function countUppercase(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            count++;
        }
    }
    return count;
}
alert(countUppercase("Zara Ahmed"));   

//27.Write a function `isAdult` that takes an age and returns true if the age is 18 or older, and false otherwise.

function isAdult(age) {
    return age >= 18;
}

alert(isAdult(20));  
alert(isAdult(15)); 

//28.Create a function `squareNumber` that takes a number and returns its square.

function squareNumber(num) {
    return Math.pow(num, 2);
}
alert(squareNumber(4));  
alert(squareNumber(9));  

//29.  Write a function `countChars` that counts the number of characters in a string.

function countChars(str) {
    return str.length;
}
alert(countChars("JavaScript"));  

//30.Write a function `removeLastElement` that takes an array and returns a new array with the last element removed.

function removeLastElement(arr) {
    return arr.slice(0, -1);  
}

alert(removeLastElement([1, 2, 3, 4])); 


