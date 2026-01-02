class Character{
    constructor(name){
        this.name = name
    }

    attack(){
        console.log(`Name: ${this.name}`)
    }
}

class Fighter extends Character{
    constructor(name){
        super(name)
    }
}

const fighter = new Fighter("John")
fighter.attack()
