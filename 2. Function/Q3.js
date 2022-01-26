// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3
var number = (a)=>{ 
var len = a.split(" ")
return len};

//trim removes the starting and ending space;
const number1 = a => a.trim().split(" ").length ;

console.log(number("what is your name").length);
console.log(number1("Hello myself Siddhesh bhosale! "));
