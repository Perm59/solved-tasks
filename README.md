# solved-tasks

* Find the divisors!
```javascript
function divisors(int) {
  const arr = [];
    for(let i = 2; i < int; i++){
      if (int % i === 0){
        arr.push(i);
      } 
    }
    if(arr.length < 1){
      return int + ' is prime';
    } else { return arr;}
}
```

