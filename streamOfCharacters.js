/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
    this.dict = {};
    for(let word of words){
        this.dict[word]=1;
    }
    console.log(this.dict);
    this.current = '';
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    this.current+=letter;
    for(let word in this.dict){
        if(this.current.length<word.length){
            continue;
        }
        if(this.current.substring(this.current.length-word.length,this.current.length)===word){
            return true;
        }
    }
    return false;
};

/** 
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */