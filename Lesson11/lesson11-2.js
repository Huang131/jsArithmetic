const CArry=require("./lesson11-1.js");

let numElement=10000;
let nums=new CArry(numElement);
nums.setData();

let a=nums;
a.dataStore=nums.dataStore.slice();

let b=nums;
b.dataStore=nums.dataStore.slice();

console.time("bubbleSort");
nums.bubbleSort();
// console.log(nums.toString());
console.timeEnd("bubbleSort");

console.log("-------------");
console.time("selectionSort");

a.selectionSort();
// console.log(nums.toString());
console.timeEnd("selectionSort");

console.log("-------------");
console.time("insertionSort");
b.insertionSort();
// console.log(nums.toString());
console.timeEnd("insertionSort");






