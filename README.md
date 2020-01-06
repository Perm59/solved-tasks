# solved-tasks

* How many days are we represented in a foreign country?
```javascript
function daysRepresented(t){
let arr = [];
  for (let i = 0; i < t.length; i++){
    for (let j = t[i][0]; j <= t[i][1]; j++){
      if (arr.indexOf(j) === -1) arr.push(j);
    }
  }
  return arr.length;
}
```



