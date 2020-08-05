/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    word.split('').forEach((char)=>{
        if (!node[char]) node[char] = {};
        node = node[char];
    })
    node.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
     var search = function(current, level) {
        // Cannot search for the word
        if (!current || (level === word.length && !current.isEnd)) {
            return false;
        }
        
        if (level === word.length && current.isEnd) {
            return true;
        }
        
        if (word[level] === '.') {
            for (let i = 0; i < 26; i++) {
                var ch = String.fromCharCode(97 + i);
                
                if (search(current[ch], level + 1)) {
                    return true;
                }
            }
            
            return false;
        }
        
        return search(current[word[level]], level + 1);
    };
    
    return search(this.root, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */