// Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

// let myArray1 = [1, 2, 3, 6, 4, 8];
// let myArray2 = [0, 1, 2, 3, 4];
// let getOnlyEvens = (myArray1) => {
//   let result = [];
//   for (let i = 0; i < myArray1.length; i++) {
//     if (i % 2 == 0 && myArray1[i] % 2 === 0) {
//       result.push(myArray1[i]);
//     }
//   }
//   console.log(result);
// };

// getOnlyEvens(myArray1);
// getOnlyEvens(myArray2);

// Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

// let reverseCompare = (str) => {
//     let num1 = " ";
   
//     let num = str.toString().split("");
//     if (num.length > 2){
//         console.log("It is not two digit number!");
//     }
//     else { 
//     let num2 = str + " ";
//     num1 = num2.charAt(1) + num2.charAt(0);
//    num1 = 
//     if (parseInt(num2) > parseInt(num1)){
//         console.log("Ok");
//     }
//     else
//     {
//         console.log("Not ok");
//     }
// }
// };
// reverseCompare(72);
// reverseCompare(23);
// reverseCompare(233);

// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

// let returnFactorial = (num) =>{
//     let factorial = 1;
//     if (num < 0){
//         return "invalid input!";
//     }
//     if (num == 1 || num == 0) {
//         return 1;
//     }
//     else {
//        for(let i = num; i >=1; i--){
//           factorial*= i;
//        }
//     }
//     return factorial;
// }
// console.log(returnFactorial(5));
// console.log(returnFactorial(6));
// console.log(returnFactorial(0));

// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6
// let array1 = [10, 4, 0, 5];
// let array2 = [7, 4, 9];
// let array3 = [1, -6, 4, -3];
// let checkMeera =(array) => {
//     let count=0;
//     for (let i= 0; i < array.length; i++) {
//         if(array.includes(array[i]*2)){
//            console.log("I am NOT a Meera array");
//            return 0;
//         }
//        }
//         console.log("I am a Meera array");
//     
// }
// checkMeera(array1);
// checkMeera(array2);
// checkMeera(array3);

// Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.
// let Dualarray = [1, 2, 1, 3, 3, 2,2,2];
// function isDual(Dualarray){
//    let count = 0 , result=0;
//    for ( let i= 0; i < Dualarray.length; i++ ){
//        for(let j= i+1; j < Dualarray.length; j++ ){
//         if( Dualarray[i] == Dualarray[j]){
//             count++;
//         }
//        }
//        if(count ==1){
//         result++;
//         count=0;
//        }
//    }
//    if(result ==(Dualarray.length/2)){
//     return 1;
//    }
//    else
//    {
//     return 0;
//    }
// }
// console.log(isDual(Dualarray));

// Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
// let digitalClock = (seconds) =>{
//    let second = seconds%60 + "";
//    let num1 =  parseInt(seconds/60);
//    let minute = num1 % 60 + "";
//    let num2 =  parseInt(num1 / 60 );
//    let hour = num2  + "";
//    if (hour >= 24){
//     hour = 0;
//    }   
//    console.log(hour + ":" + minute+":" + second);
// }
// digitalClock(5025);
// digitalClock(61201);
// digitalClock(87000);


// Bubble sort
// let array = [34, 45, 12, 60, 40];
// let myFunction = (array) =>{
//     for(let i = 0; i < array.length; i++){
//         for(let j = i+1; j < array.length; j++){
//             if(array[i]>array[j])
//             {
//                 let temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }
//     return array;
// }
// console.log(myFunction(array));

// crowd function
// let myArray1 = "GHJJJcHJKJKaHHJJt";
// let myFunction = (myArray1) => {
//     let array="";
//       myArray1 =  myArray1.split('');
//       for(let i = 0; i < myArray1.length; i++){
//         if(myArray1[i] === myArray1.charAt(i)){

//         }
//         else{
//             array += myArray1[i];
//         }
//       }

//       console.log(array);
// }
// myFunction(myArray1);

// Q1) create a function that capitalize every first latter of the string, for example myFunction(“meteku woldemichael") should return — Meteku Woldemichael.
// function capitalize(latter) {
//     let arr = latter.split(" ");
//     for(let i=0; i<arr.length; i++){
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
//   let message = arr.join(" ");
//   return message;
// }
//  console.log(capitalize("heoo new demo"));


// Q2) Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

// function Fibonacci(num){
//     let n1 = 0, n2 = 1, nextTerm;
//    console.log("Fibonacci series: ");
//   for(let i=1; i<=num; i++){
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;

//   }

// }
// Fibonacci(5);

// Q3) Write a JavaScript program to check whether a given string is Palindrome or not using recursion.  Note:
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama".
// Test Data:
// ("madam") -> true
// ("abdb") -> false
// ("ab") -> false
// (test("a") -> true3

// function palindrome(str) {
//     let len = str.length;
//     let mid = Math.floor(len / 2);

//     for(let i = 0; i < mid; i++){
//         if(str[i] !== str[len - 1 - i]){
//             return false;
//         } 
//     }
//     return true;
// }
// if (palindrome("dood"))
// console.log("it is palindrome!");
// else
// console.log("not palindrome!");