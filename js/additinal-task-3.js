const fruits = ["apple", "cherry", "bananas", "strawberry"];
const find = "cherry";

const result = fruits.includes(find) ? "yes" : "no";


const fruitToRemove = "cherry";
const index = fruits.indexOf(fruitToRemove);

fruits.splice(index, 1);

console.log(result);
console.log(fruits);