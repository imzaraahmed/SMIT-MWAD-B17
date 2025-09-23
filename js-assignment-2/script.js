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

//3. Write a function `reverseString` that takes a string and returns it reversed (e.g., "hello" becomes "olleh").

function reverseString(str) {
    var reverse = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
alert(reverseString("hello"));

//4. Create a function `findMax` that takes an array of numbers and returns the largest number.

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

//12. Create a function `toUpperCase` that takes a string and returns it in uppercase.

function toUpperCase(str){
    return str.toUpperCase();
}
alert(toUpperCase("maryum"));

//13. Write a function `capitalizeFirstLetter` that capitalizes the first letter of each word in a string.

function capitalizeFirstLetter(str) {
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.substring(1);
}

// Example
console.log(capitalizeFirstLetter("hello world from javascript"));
// Output: "Hello world from javascript"

//14. Create a function `mergeArrays` that takes two arrays and merges them into one.

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Example
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// Output: [1, 2, 3, 4, 5, 6]


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

console.log(isPrime(2));  
console.log(isPrime(7));  
console.log(isPrime(10));

//16. Create a function `countWords` that counts the number of words in a string.

function countWords(str) {
  let words = str.split(" ");
  return words.length;
}

// Example
console.log(countWords("Hello world from JavaScript")); // 4


