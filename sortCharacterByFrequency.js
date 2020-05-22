/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var hash = {};
    for(let i = 0; i < s.length; i++){
        hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
    }
    return Object.entries(hash).sort(function(a,b){return b[1]-a[1]}).map(value => value[0].repeat(value[1])).join('');
};
