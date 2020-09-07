/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let strArray = str.split(" ");
    if(pattern.length !== strArray.length){
        return false;
    }
    if(pattern.length ===1){
        return true;
    }
    let hash = {};
    for(let i =0 ; i < pattern.length;i++){
        if(!hash.hasOwnProperty(pattern[i])){
            hash[pattern[i]] = i;
        }
    }
    for(let i =1 ;i < pattern.length; i++){
        if(hash.hasOwnProperty(pattern[i])){
            let location = hash[pattern[i]];
            if(location !== i){
                if(strArray[i] !== strArray[location]){
                    return false;
                }
            }else{
                
                if(strArray[i] === strArray[i-1]){
                    return false;
                }
                let index = strArray.indexOf(strArray[i]);
                if(index !== i){
                    return false;
                }
            }
        }else{
            if(strArray[i] === strArray[i-1]){
                return false;
            }
        }
    }
    return true;
};