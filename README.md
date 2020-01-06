# solved-tasks

* What is my name score? #1
```javascript
function nameScore(name){
  const obj = {};
  let count = 0;
  for (let i = 0; i < name.length; i++){
    for (let key in alpha){
      if(key.indexOf(name[i].toUpperCase()) !== -1) count += alpha[key];
    }
  }
  obj[name] = count;
  return obj;
}
```



