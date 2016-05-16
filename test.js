require('./index.js')(Promise);

describe('Promise-Whoops', function() {

    this.timeout(100);

    it('inline-resolve', function (done) {
        Promise.resolve().then(function(){
            done();
        });
    });
    it('inline-reject-catch', function (done) {
        Promise.reject()['catch'](function(){
            done();
        });
    });
    it('inline-reject-whoops', function (done) {
        Promise.reject().whoops(function(){
            done();
        });
    });
    it('timeout-resolve', function (done) {
        var prom = new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve();
            }, 1);
        });
        prom.then(function(){
            done();
        });
    });
    it('timeout-reject', function (done) {
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
    it('timeout-catch', function (done) {
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
    it('timeout-whoops', function (done) {
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
