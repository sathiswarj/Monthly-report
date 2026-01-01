// fighter
//   └── name: "Hulk"
//   └── [[Prototype]] → character
//                          └── attack()



function Character(name){
    this.name= name
    this.attack =  function(){
        console.log(`${this.name}`)
    }
}

function Fighter(name){
    this.name = name
}
//__proto__ is how one object can use another object’s properties and methods.


Fighter.prototype = new Character()
const fighter = new Fighter("Javascript")
fighter.attack()
//fighter does NOT have its own attack method
// Its prototype ([[Prototype]]) points to character



 

 