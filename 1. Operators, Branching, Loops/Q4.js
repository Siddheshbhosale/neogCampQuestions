
// Write a Program to take a number input from user and find if the number is Prime or not.

const readline = require('readline-sync');
const num= readline.question("Enter the no. to be check : ");

var flag=1;
for(i=2;i*i<num;i++){
    if(num%i==0){
        console.log(num + " is a non-Prime number");
        flag=0;
        break;
    }
}
if(flag) console.log(num + " is a Prime number");

