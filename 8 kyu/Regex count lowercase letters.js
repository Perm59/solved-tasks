// Regex count lowercase letters
/*
Your task is simply to count the total number of lowercase letters in a string.
 */

function lowercaseCount(str){
    let abs = "abcdefghijklmnopqrstuvwxyz";
    let res = str.split('').filter(el => ~abs.indexOf(el));
    return res.length;
}


