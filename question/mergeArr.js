// Merge two arrays without duplicates.

// const arr1 = [1,2,3,4]
// const arr2 = [4,5,6,7,1]

// const newArr = [new Set([...arr1,...arr2])]
// console.log(newArr)

function mergeArr(arr1,arr2){
    const seen ={}
    const merged = []

    for(let i=0;i<arr1.length;i++){
        if(!seen[arr1[i]]){
            seen[arr1[i]] = true
            merged.push(arr1[i])
        }
    }

     for(let i=0;i<arr2.length;i++){
        if(!seen[arr2[i]]){
            seen[arr2[i]] = true
            merged.push(arr2[i])
        }
    }
    return merged
}
const arr1 = [1,2,3,4]
const arr2 = [4,5,6,7,1]
console.log(mergeArr(arr1,arr2))