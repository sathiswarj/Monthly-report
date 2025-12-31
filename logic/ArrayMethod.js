

// forEach - executes a provided function once for each array element
// forEach does not return a new array
  
let numbers = [1,2,3,4,5]

numbers.forEach(function(num){ // iterating through each element
    console.log(num * 2); // Output: 2, 4, 6, 8, 10
})

//-------------------------------------------------------------------------------------

// map - creates a new array by applying a function to each element
// map returns a new array

 
const discountPrices = [20, 30, 40, 50];
const salePrices = discountPrices.map(function(price){ 
    return price * 0.8; // applying 20% discount
});

console.log("Sale Prices:", salePrices);   

//-------------------------------------------------------------------------------------

// Filter - creates a new array with all elements that pass the test implemented by the provided function
// Filter returns a new array

let creatures =  [
    {name: 'Lion', type: 'Mammal'},
    {name: 'Fish', type: 'Ocean'},
    {name: 'Dolphin', type: 'Ocean'},
    {name: 'Eagle', type: 'Bird'}
]

const filteredCreatures = creatures.filter((creature)=>{
    return creature.type == "Ocean";
})

console.log("Filtered Creatures:", filteredCreatures);

//-------------------------------------------------------------------------------------


// find - returns the value of the first element that satisfies the provided testing function
// find returns a single value

let nums = [10, 15, 20, 25, 30];

 
console.log("First number greater than 18:", nums.find((num) => num > 18));
//-------------------------------------------------------------------------------------

let words = ['apple', 'banana', 'cherry', 'date'];

// some - tests whether at least one element in the array passes the test implemented by the provided function
// some returns a boolean value

console.log("Some:", words.some((word) => word.length > 2)); // Output: true

//-------------------------------------------------------------------------------------

let num = [16, 21, 25, 30];

num.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // Output: 92


console.log("Total:", num.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)); // Output: 92



// reduce - executes a reducer function on each element of the array, resulting in a single output value
// reduce returns a single value

//-------------------------------------------------------------------------------------


let arr =[2,[3,4,[7,8]],5,6];

console.log("Flattened Array:", arr.flat(2)); // Output: [2, 3, 4, 7, 8, 5, 6]
// flat - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
// flat returns a new array

//-------------------------------------------------------------------------------------

const sentences = ['Hello world', 'JavaScript is fun', 'I love coding'];

const wordsArray = sentences.flatMap(sentence => sentence.split(' '));

console.log("Words Array:", wordsArray); // Output: ['Hello', 'world', 'JavaScript', 'is', 'fun', 'I', 'love', 'coding']

// flatMap - first maps each element using a mapping function, then flattens the result into a new array
// flatMap returns a new array

//-------------------------------------------------------------------------------------

const values = [1, 2, 3, 4, 5];

everyValue = values.every((value) => value > 1);

console.log("Every Value > 0:", everyValue); // Output: true
// every - tests whether all elements in the array pass the test implemented by the provided function
// every returns a boolean value