// Check three and two
/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
 */
//1
function checkThreeAndTwo(arr) {
    const obj = {};
    for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i]]) obj[arr[i]] = 1;
        else obj[arr[i]] += 1;
    }
    return ((obj['a'] == 3 || obj['b'] == 3 || obj['c'] == 3) &&
        (obj['a'] == 2 || obj['b'] == 2 || obj['c'] == 2));
}

//2
function checkThreeAndTwo(array) {
    let as = array.filter(x =>x === 'a').length;
    let bs = array.filter(x =>x === 'b').length;
    let cs = array.filter(x =>x === 'c').length;
    return (as === 3 || bs === 3 || cs=== 3)
        && (as === 2 || bs === 2 || cs === 2);
}

//3
function checkThreeAndTwo(array) {
    let a = 0, b = 0, c = 0;
    for (let i = 0; i < array.length; i++){
        if(array[i] === "a") a++;
        if(array[i] === "b") b++;
        if(array[i] === "c") c++;
    }
    return (a === 2 || b === 2 || c === 2) &&
        (a === 3 || b === 3 || c === 3);
}