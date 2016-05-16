
### How to install
```
    npm install --save promise-whoops
```

### How to use
```javascript
require('promise-whoops')(Promise);

var prom = Promise.reject();
prom.whoops(function(){
    console.warn('whoops!');
});
```

### Chaining
```javascript
require('promise-whoops')(Promise);

var prom = new Promise(function(resolve, reject){
    reject('example rejection.');
});
prom.then(function(){

}).whoops(function(why){
    console.warn('Promise rejected: ' + why);
});
```
