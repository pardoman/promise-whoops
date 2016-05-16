require('./index.js')(Promise);

describe('Promise-Whoops', function() {

    this.timeout(100);

    it('Promise-resolve', function (done) {
        var prom = new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve();
            }, 1);
        });
        prom.then(function(){
            done();
        });
    });
    it('Promise-reject', function (done) {
        var prom = new Promise(function(resolve, reject){
            setTimeout(function(){
                reject();
            }, 1);
        });
        prom.then(function(){
            // Timeout here
        }, function(){
            done();
        });
    });
    it('Promise-catch', function (done) {
        var prom = new Promise(function(resolve, reject){
            setTimeout(function(){
                reject();
            }, 1);
        });
        prom.then(function(){
            // Timeout here
        })['catch'](function(){
            done();
        });
    });
    it('Promise-whoops', function (done) {
        var prom = new Promise(function(resolve, reject){
            setTimeout(function(){
                reject();
            }, 1);
        });
        prom.then(function(){
            // Timeout here
        }).whoops(function(){
            done();
        });
    });
});
