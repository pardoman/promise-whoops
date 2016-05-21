
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

### Testing
```
npm test
```

### Travis automation

Disabled QA on NodeJs version "0.10" because Promise is not defined.
Disabled QA on NodeJs versions "0.8" and "0.6" because Mocha is not compatible.
