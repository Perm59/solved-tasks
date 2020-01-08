// Permute a Palindrome
/*
Write a function that will check whether the permutation of an input string is a palindrome.
Bonus points for a solution that is efficient and/or that uses only built-in language functions.
Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.
 */
function permuteAPalindrome (inp) {
    const obj = {};
    for (let i = 0; i < inp.length; i++){
        if(!obj[inp[i]]) obj[inp[i]] = 1;
        else delete obj[inp[i]];
    }
    return Object.keys(obj).length < 2;
}