// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// const newArr = [...arr1,...arr2,7,8,9,10]
// console.log(newArr)

// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
 

const obj1 = {
    name:"John",
    age:24
}
const obj2 = {
    ...obj1,
    city:"Delhi",
 }

 console.log(obj2)