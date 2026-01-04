// Reverse an array without using reverse()

function revStr(str){
    let string = str.split('')
    let revString = ''
    for(let i=string.length - 1 ;i>=0;i--){
        revString += string[i]
    }
    return revString
}

const str ="javascript"
console.log(revStr(str))