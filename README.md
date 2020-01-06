# solved-tasks

* The Office II - Boredom Score
```javascript
function boredom(staff){
  const obj = {
    accounts : 1,
    finance : 2,
    canteen : 10,
    regulation : 3,
    trading : 6,
    change : 6,
    IS : 8,
    retail : 5,
    cleaning : 4,
    'pissing about' : 25,
  };
  let count = Object.values(staff).reduce((a, b) => a + obj[b], 0);
  return count <= 80 ? 'kill me now' : count < 100 ? 'i can handle this' : 'party time!!'; 
}
```



