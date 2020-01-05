# solved-tasks

* Permute a Palindrome
```javascript
function permuteAPalindrome (inp) { 
const obj = {};
  for (let i = 0; i < inp.length; i++){
    if(!obj[inp[i]]) obj[inp[i]] = 1;
    else delete obj[inp[i]];
  }
  return Object.keys(obj).length < 2;
}
```



