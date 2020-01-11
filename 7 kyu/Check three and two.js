// Check three and two
/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
 */
function checkThreeAndTwo(arr) {
    const obj = {};
    for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i]]) obj[arr[i]] = 1;
        else obj[arr[i]] += 1;
    }
    return ((obj['a'] == 3 || obj['b'] == 3 || obj['c'] == 3) &&
        (obj['a'] == 2 || obj['b'] == 2 || obj['c'] == 2));
}