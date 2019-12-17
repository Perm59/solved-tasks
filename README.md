# solved-tasks

* Tortoise racing
```javascript
function race(v1, v2, g) {
    if(v1 >= v2) return null;
    let time = Math.floor(g / (v2 - v1) * 3600);
    let h = Math.floor(time / 3600);
    let m = Math.floor((time - h * 3600) / 60);
    let s = Math.floor(time - h * 3600 - m * 60);
    return [h, m, s];
}
```
