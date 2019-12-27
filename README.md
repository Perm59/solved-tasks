# solved-tasks

* Find the capitals
```javascript
let capitals = function (w) {
	let arr =[];
    for (let i = 0; i < w.length; i++){
      if(w[i] === w[i].toUpperCase()) arr.push(i);
    }
    return arr;
};

```


