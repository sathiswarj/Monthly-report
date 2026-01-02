const person = {
    firstName:"John",
    lastName:"doe",
    // A getter runs code when you read a property.
    get fullName(){
       return `${this.firstName} ${this.lastName}`
    },
    // A setter runs code when you assign a value to a property.
    set fullName(value){
        const [fname,lname] = value.split(' ')
        this.firstName = fname
        this.lastName =  lname

    }
}
person.fullName ="Ravi raj"
console.log(person.fullName);
