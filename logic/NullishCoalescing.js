let name = null; // or undefined
let age = 25;

let user = {
    name: name ?? "Unknown", // If name is null or undefined, use "Unknown" 
    age: age ?? 0 // If age is null or undefined, use 0
};


console.log(user); // Output: { name: 'Unknown', age: 25 }
// Explanation:

// The nullish coalescing operator (??) is used to provide default values for variables that may be null or undefined.
// In this example, since 'name' is null, the expression 'name ?? "Unknown"' evaluates to "Unknown".
// The 'age' variable is 25, so 'age ?? 0' evaluates to 25.
// Thus, the resulting 'user' object has 'name' set to "Unknown" and 'age' set to 25.