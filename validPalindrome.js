/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let p = '', t = '';
    for(let i= 0; i < s.length; i++){
        var char1 = s.toLowerCase().charAt(i);
        var cc = char1.charCodeAt(0);
        if((cc>47 && cc<58) || (cc>64 && cc<91) || (cc>96 && cc<123)){
            t += s[i].toLowerCase();
        }
    }
    for(let i= t.length -1; i >= 0; i--){
        p += t[i];
    }
    if(p === t){
        return true;
    }else{
        return false;
    }
};