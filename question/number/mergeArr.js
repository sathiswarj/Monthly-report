// Merge two arrays without duplicates.

// const arr1 = [1,2,3,4]
// const arr2 = [4,5,6,7,1]

// const newArr = [new Set([...arr1,...arr2])]
// console.log(newArr)



function mergedArr(arr1, arr2){
    let seen = {}
    let merged = []
    for(let i=0;i<arr1.length;i++){
        if(!seen[arr1[i]]){
            seen[arr1[i]] = true
            merged.push(arr1[i])
        }
    }
    for(let j=0;j<arr2.length;j++){
        if(!seen[arr2[j]]){
            seen[arr2[j]] = true
            merged.push(arr2[j])
        }
    }
    return merged
}
const arr1 = [1,2,3,4]
const arr2 = [4,5,6,7,1]
console.log(mergedArr(arr1,arr2))