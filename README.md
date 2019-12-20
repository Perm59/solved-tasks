# solved-tasks

* Array.diff
```javascript
function array_diff(a, b) {
  const arr = [];
    for(let i = 0; i < a.length; i++){
      if(b.indexOf(a[i]) < 0) arr.push(a[i]);
    }
    return arr;
}
```
* Find Duplicates
```javascript
const duplicates = arr =>
arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el));
```
* Train to remove duplicates from an array with filter()
```javascript
const unique = arr => arr.filter((el, i) => i === arr.indexOf(el));
```


