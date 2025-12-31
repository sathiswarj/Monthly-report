function codeHoistingExample() {    
     a = 10;
     let b = 20;
}
codeHoistingExample();

console.log(a);
console.log(b);

// Output:
// 10
// ReferenceError: b is not defined

// Explanation:

//a is assigned without var, let, or const

// JavaScript automatically makes a a global variable

// In JavaScript, variable declarations using 'var' are hoisted to the top of their scope, meaning they can be accessed before their declaration. However, variables declared with 'let'  and 'const' are not hoisted in the same way and cannot be accessed before their declaration.
// In this example, 'a' is implicitly declared as a global variable (not recommended), 
// so it is accessible outside the function. On the other hand, 'b' is declared with 'let' 
// inside the function scope, making it inaccessible outside the function, resulting in a ReferenceError.