# solved-tasks

* Remove the minimum
```javascript
function removeSmallest(n) {
  let x = Math.min(...n);
  let arr = n.slice();
  arr.splice(n.indexOf(x), 1);
  return arr;
}
```

