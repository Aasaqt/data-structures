/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.list = [];
    this.last = 0;

    for (let i of w) {
        if (this.list.length === 0) {
            this.list.push(i);
        } else {
            this.list.push(i + this.list[this.list.length - 1]);
        }
    }
    this.last = this.list[this.list.length - 1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let selectNumber = Math.random() * this.last;
    return this.list.findIndex((number) => {
        return number >= selectNumber;
    });
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */





console.log(
Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.

Note:

1 <= w.length <= 10000
1 <= w[i] <= 10^5
pickIndex will be called at most 10000 times.
Example 1:

Input: 
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]
Example 2:

Input: 
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output: [null,0,1,1,1,0]
Explanation of Input Syntax:

The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array w. pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.

)