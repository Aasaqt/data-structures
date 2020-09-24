/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let hash = {};
    for(let i = 0 ; i < s.length; i++){
        if(hash[s[i]]){
            hash[s[i]] += 1;
        }else{
            hash[s[i]] = 1;
        }
    }
    for(let i =0 ; i < t.length;i++){
        if(hash[t[i]]){
            hash[t[i]] -= 1;
            continue;
        }
        if(hash[t[i]] < 0 || !hash[t[i]]){
            return t[i];
        }
    }
};