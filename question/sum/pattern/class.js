class Person{
    constructor(name){
        this.name = name
    }
    displayName(){
        console.log(`Name is : ${this.name}`)
    }
    }
    class age extends Person{
        constructor(name){
            super(name)
        }
    }


const name = new Person("sathis")
 
name.displayName()

 