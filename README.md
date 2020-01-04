# solved-tasks

* Numbers to Objects
```javascript
function numObj(s){
  let arr = [];
  for (let i = 0; i < s.length; i++){
   let obj = {};
    obj[s[i]] = String.fromCodePoint(s[i]);
    arr.push(obj);
  }
    return arr;
}

```



