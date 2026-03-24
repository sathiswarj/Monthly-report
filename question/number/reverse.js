// Reverse a number

function reverseNum(num){
    let nums = num.toString()
    let reversedNum = ''
    for(let i=nums.length-1;i>=0;i--){
        reversedNum += nums[i]
    }
    return reversedNum
}
console.log(reverseNum(321))

