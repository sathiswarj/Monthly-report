// Check if the Array is Sorted II
// Given an array of integers, return true if the array is sorted in ascending order, descending order, or if all elements are equal. Otherwise, return false.

// Example
// For arr = [1, 2, 3], the output should be true;
// For arr = [3, 2, 1], the output should be true;
// For arr = [1, 1, 1], the output should be true;
// For arr = [1, 2, 1], the output should be false.

function isSorted(arr){
    let isAscending = true;
    let isDescending = true;
    for(let i=1;i<arr.length;i++){
        if(arr[i] > arr[i-1]){ // If the current element is greater than the previous one, it cannot be descending
            //eg [1,2,3]
            isDescending = false;
        }
        else if(arr[i] < arr[i-1]){ // If the current element is less than the previous one, it cannot be ascending.
            // If the current element is equal to the previous one, it does not affect the order, so we do not change either flag.
            //eg [2,1,3]
            isAscending = false;
        }
    }
    return isAscending || isDescending;
}

console.log(isSorted([1, 2, 3]));
console.log(isSorted([3, 2, 1]));
console.log(isSorted([1, 1, 1]));
console.log(isSorted([1, 2, 1]));