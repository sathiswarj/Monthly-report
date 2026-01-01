function Character(name){
    this.name = name
}

const character = new Character("javascript") //new is a JavaScript operator used to create an object from a constructor function or class.
//new creates a new object and assigns values to it.
console.log(character)

// ==================================================================================================

// without new 

// function createCharacter(name) {
//   //  Here we manually create a new object using { }
//   return {
//     name: name,          // property
//     attack() {           // method
//       console.log(this.name + " swings!")
//     }
//   }
// }

// const c1 = createCharacter("Hulk")
// const c2 = createCharacter("Thor")

// c1.attack() // Hulk swings!
// c2.attack() // Thor swings!


// 1. they are NOT the same object
// console.log(c1 === c2) // false

// createCharacter("Hulk") → creates ONE new object

// createCharacter("Thor") → creates ANOTHER new object //  


// 1. c1 has its own attack function

// 2. c2 has its own attack function

// 3. Memory inefficient if you create lots of objects


 
// Without new, no new object is created. Data goes into the global object, polluting memory and potentially overwriting other variables.
// ==================================================================================================


// function Character(name) {
//   //  No { } here! JavaScript does it automatically
//   this.name = name
//   this.attack = function() {
//     console.log(this.name + " swings!")
//   }
// }

// const c1 = new Character("Hulk")
// const c2 = new Character("Thor")

// c1.attack() // Hulk swings!
// c2.attack() // Thor swings!

// console.log(c2.name) // Thor


// Normally, new would create a new object to store name.
// But we forgot new, so there is no new object.
// Instead, this points to the global object.
// In browsers → window
// In Node.js → global


// ==================================================================================================



// | Feature / Aspect      | Without `new` (Factory Function)                     | With `new` (Constructor Function)                                    |
// | --------------------- | ---------------------------------------------------- | -------------------------------------------------------------------- |
// | **Object creation**   | You manually create it using `{ }` and `return` it   | JavaScript automatically creates a new object                        |
// | **Return value**      | Must explicitly `return` the object                  | Automatically returns the new object                                 |
// | **Methods**           | Each object gets its own copy of functions           | Methods can be shared via `prototype` → memory efficient             |
// | **Type checking**     | `instanceof` does **not work**                       | `instanceof` works → you can check object type                       |
// | **Ease of use**       | Simple and easy to understand for small objects      | Slightly more “magic” due to `this`                                  |
// | **Memory efficiency** | Less efficient if many objects have the same methods | More efficient using prototype for shared methods                    |
// | **Scalability**       | Harder to scale for large apps                       | Easier to scale, closer to OOP style                                 |
// | **Mistakes / errors** | Forgetting `return` → object is `undefined`          | Forgetting `new` → may assign properties to global object (`window`) |
