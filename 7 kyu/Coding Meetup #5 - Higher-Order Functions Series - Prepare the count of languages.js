// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.
your function should return the following object (associative array in PHP):

{ C: 2, JavaScript: 1, Ruby: 1 }
 */
function countLanguages(list) {
    let obj = {};
    for (let i = 0; i < list.length; i++){
        if(!obj[list[i]['language']]) obj[list[i]['language']] = 1;
        else obj[list[i]['language']] += 1;
    }
    return obj;
}