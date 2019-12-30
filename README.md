# solved-tasks

* Descending Order
```javascript
const descendingOrder = n => n.toString().split('').sort((a, b) => b - a).join('') * 1;

```
* Credit Card Mask
```javascript
function maskify(cc) {
let str = '#';
  if (cc.length < 5) return cc;
  else {
    let res = str.repeat(cc.length - 4) + cc.slice(-4);
    return res;
  }
}
```


