// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

//arrow function
var arraylength=(...arr) => arr.length;

var arr=[2,3,5,6,7];
console.log(" lenght of array is : "+ arraylength(...arr) );
console.log(" lenght of array is : "+ arraylength.apply(null,[2,3,5,6,7]));

var definelength = numbers => numbers.length;
console.log(" lenght of array is : "+ definelength([2,3,5,6,7]));

//normal function
function length(){
    return arguments.length;
}
console.log("lenght of array is : "+ length(2,4,9,5,4));
console.log("lenght of array is : "+ length([2,4,9,5,4])); //return 1
console.log("lenght of array is : "+ length(arr)); //return 1 because argument will treat this as single object.
