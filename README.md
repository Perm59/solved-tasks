# solved-tasks

* Binary Addition 
```javascript
function addBinary(a,b) {
  return (a+b).toString(2);
}
```
* Formatting decimal places #1
```javascript
function twoDecimalPlaces(number) {
  return (Math.trunc(number * 100)) / 100;
}
```
* How many times should I go?
```javascript
function howManyTimes(annualPrice, individualPrice) {
  return Math.ceil(annualPrice / individualPrice);
}
```
* Find the next perfect square!
```javascript
function findNextSquare(sq) {
  let res = Math.sqrt(sq);
  return res % 1 === 0 ? (res + 1) ** 2 : -1;
}
```