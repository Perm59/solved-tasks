// Remove all exclamation marks from the end of sentence
/*
Description:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.
 */
// 1
function remove(s){
    let str = '';
    for (let i = 0; i < s.length; i++){
        if (s[i] === '!' && (i === s.length - 1 || s[i + 1] === '!')) {
            str += '';
        } else {str += s[i];}
    }
    return str;
}

// 2
const remove = s => s.replace(/!+$/, '');