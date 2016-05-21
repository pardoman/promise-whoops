module.exports = function(Promise){
    if (typeof Promise === 'function' && !Promise.prototype.whoops) {
        Promise.prototype.whoops = Promise.prototype['catch'];
    }
    return Promise;
}
