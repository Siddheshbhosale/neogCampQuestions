/*
Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
*/
var indexOf=(item,arr)=>{ 
    // for(i=0;i<arr.length;i++){
    //     if(arr[i]==item)
    //     return i;
    // }
    return arr.indexOf(item);
}
console.log("index of given number is : "+indexOf(3,[1,6,3,5,8,9]));