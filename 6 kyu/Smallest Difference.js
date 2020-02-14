// Smallest Difference
/*
Given two arrays of integers, find the pair of values with the smallest difference and return that difference.

If both arrays are empty, return -1.

If one array is empty, return the smallest value from the non-empty array.
 */
function smallestDiff(arr1, arr2) {
    let min = +Infinity;
    if(!arr1.length && !arr2.length) return -1;
    if(!arr1.length || !arr2.length) return Math.min(...arr1.concat(arr2));

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            let dif = Math.abs(arr2[j] - arr1[i]);
            if(dif < min) min = dif;
        }
    }
    return min;
}