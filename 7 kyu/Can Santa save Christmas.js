// Can Santa save Christmas?
/*
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.
But he has only 24 hours left. Can he do it?
Your job is to determine if Santa can distribute all the presents in 24 hours.

Your Task:
You will get an array as input with time durations as string in the following format:
"hh:mm:ss"

Each duration is a present Santa has to distribute.

Return true or false whether he can do it in 24 hours or not.
 */
function determineTime(d){
    if(d.length < 1) return true;
    let arr = d.join(':').split(':');
    let h = 0;
    let m = 0;
    let s = 0;
    for (let i = 0, j = 1, k = 2; i < arr.length || j < arr.length || k < arr.length; i += 3, j += 3, k += 3){
        h += +arr[i];
        m += +arr[j];
        s += +arr[k];
    }
    return h * 3600 + m * 60 + s <= 24 * 3600;
}