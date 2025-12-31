let colors = ['red', 'green', 'blue'];
console.log(colors[0]); // Output: 'red'
console.log(colors[1]); // Output: 'green'
console.log(colors[2]); // Output: 'blue'   

//push - adds an element to the end of the array
colors.push("yellow");
console.log("Push:",colors);  // Output: ['red', 'green', 'blue', 'yellow']

// pop - removes the last element from the array
colors.pop();
console.log("Pop:",colors);  // Output: ['red', 'green', 'blue']

// shift - removes the first element from the array
colors.shift();
console.log("Shift:",colors);  // Output: ['green', 'blue']

// unshift - adds an element to the beginning of the array
colors.unshift("purple");
console.log("Unshift:",colors);  // Output: ['purple', 'green', 'blue']

console.log("Index of green:", colors.indexOf("green")); // returns 1

// splice - removes elements from an array and optionally adds new elements
colors.splice(1, 1, "orange");  
console.log("Splice:",colors);  // Output: ['purple', 'orange', 'blue']

// slice - returns a shallow copy of a portion of an array
let newColors = colors.slice(0, 2); // copies elements from index 0 to 2 (not including 2)
console.log("Slice:",newColors);  // Output: ['purple', 'orange']

// length - returns the number of elements in the array
console.log("Length:",colors.length);  // Output: 3

 