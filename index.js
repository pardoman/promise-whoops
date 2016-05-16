module.exports = function(Promise){
    if (typeof Promise === 'function' && !Promise.prototype.whoops) {
        Promise.prototype.whoops = function() {
            Promise.prototype['catch'].apply(this, arguments);
        };
    }
    return Promise;
}
