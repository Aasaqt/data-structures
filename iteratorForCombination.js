/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.chars = characters;
    this.len = combinationLength;
    this.comb = this.permute('',0).reverse();
    
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    return this.comb.pop();
};

CombinationIterator.prototype.permute = function(str, idx) {
        if(str.length === this.len) return [str];

        const arr = []
        
        for(let i = idx; i < this.chars.length; i++) {
            arr.push(...this.permute(str + this.chars[i], i+1))
        }
        return arr;
}
/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.comb.length > 0
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
