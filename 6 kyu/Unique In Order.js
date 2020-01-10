// Unique In Order
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list
of items without any elements with the same value next to each other and preserving the original
order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */
//1
const uniqueInOrder = iterable => [...iterable].filter((el, i) => el !== iterable[i-1]);

//2
var uniqueInOrder=function(it){
    let arr = [];
    if(it.length < 1) return arr;
    arr.push(it[0]);
    for (let i = 1; i < it.length; i++){
        if(it[i] !== it[i-1]) arr.push(it[i]);
    }
    return arr;
}