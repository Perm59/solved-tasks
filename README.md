# solved-tasks

* Unique In Order
```javascript
1.
var uniqueInOrder=function(it){
  let arr = [];
  if(it.length < 1) return arr;
  arr.push(it[0]);
    for (let i = 1; i < it.length; i++){
      if(it[i] !== it[i-1]) arr.push(it[i]);
    }
  return arr;
}
2.
const uniqueInOrder = iterable => [...iterable].filter((el, i) => el !== iterable[i-1]);
```


