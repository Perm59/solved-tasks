# solved-tasks

* Don't give me five!
```javascript
function dontGiveMeFive(start, end)
{
let res = 0;
  for (let i = start; i <= end; i++){
      if(!i.toString().includes('5')) res++;
  }
return res;
}

```


