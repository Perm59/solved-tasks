# solved-tasks

* You're a square!
```javascript
const isSquare = n => Number.isInteger(Math.sqrt(n));
```
* Squares sequence
```javascript
function squares(x, n) {
const arr = [];
  for (let i = 0; i < n; i++){
    arr.push(x);
    x *= x;
  }
  return arr;
}
```