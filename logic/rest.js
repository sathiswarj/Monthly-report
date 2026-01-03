// const [first, ...rest]  = [1,2,3,4,5]
// console.log(first)
// console.log(rest)

// The JavaScript Rest parameter allows a function to accept an indefinite number of arguments as an array. It is represented by three dots (...) followed by the parameter name and must be the last parameter in the function, enabling flexible and dynamic argument handling.

const {a,...rest} = {a:1,b:2,c:3}
console.log(a)
console.log(rest)