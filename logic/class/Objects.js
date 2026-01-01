// let person = {
//     firstName:"John", // property - firstName
//     lastName:"Doe",
//     age:24, 
//     isStudent: false
// }


// Object.entries(obj) returns an array of [key, value] pairs (keys are strings). For your obj it logs: [["42","a"],["22","b"],["72","c"]].


// let obj = {42:"a", 22:'b', 72:'c'}

// console.log(Object.entries(obj))  


// this is a special keyword in JavaScript that refers to the object that is currently executing the function
// In your example, this points to the object before the dot (.) when a method is called.
// this = the object that calls the function 

//Why this is useful

// 1. Access their own object’s properties
// 2. Be reused for different objects

// function createCharacter(name){
//     return{
//         name,
//         greet: function(){
//             console.log(`${this.name}`)
//         }
//     }
// }

// //
// const character= createCharacter("John") 
// character.greet() 

//Whatever is BEFORE the dot (.), that becomes this


// ## Complete Flow Diagram:
// ```
// 1. character.greet() 
//    └─> JavaScript checks: yaar call panraanga? 
//        └─> character call panudhu
//            └─> this = character nu set panudhu

// 2. Function kulla entry
//    greet: function() {
//        // this = character (already set!)
//    }

// 3. Execute: console.log(`${this.name}`)
//    └─> this → character
//        └─> this.name → character.name
//            └─> "John"

// 4. Print: John

// 5. Function mudiyudhu, return


// =============================================================================================

