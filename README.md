# solved-tasks

* Sum of two lowest positive integers
```javascript
function sumTwoSmallestNumbers(n) {  
  let x = Math.min(...n);
  let arr = n.filter((el,i) => i !== n.indexOf(x));
  let y = Math.min(...arr);
  return x + y;
}
```

