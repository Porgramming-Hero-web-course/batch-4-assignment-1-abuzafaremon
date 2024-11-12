"use strict";
// Problem - Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
const sumArray = (arr) => {
    return arr.reduce((sum, currentElement) => sum + currentElement);
};
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
