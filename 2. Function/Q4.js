// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

var min=(...input)=>{
    // for(let i of input){
    // }
    let minimum=input[0];
    for(i=1;i<input.length;i++){
        if(minimum>input[i]){
            minimum=input[i];
        }
    }
    return minimum;
}

console.log(` The minimum no. of 1, 2, 3, 4, 5 is "${min(1, 2, 3, 4, 5)}"`);
console.log(` The minimum no. of 85, 15, 14, 20, 45 is "${min(85, 15, 14, 20)}"`);