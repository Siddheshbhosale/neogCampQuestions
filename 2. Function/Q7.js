/*
Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
Example:
Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
*/

var replace=(array, num1, num2)=> {
    array[array.indexOf(num1)]=num2;
    return array;
}
console.log("array before replacing [1,5,3,5,6,8] \narray after replacing "+replace([1,5,3,5,6,8], 5, 10));

console.log(replace([1,5,3,5,6,8], 5, 10));