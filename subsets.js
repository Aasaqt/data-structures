/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result =[] ;
    return recursive(nums, result);
};

var recursive = function(nums, result, i = 0, curr = []){
    result.push(curr);
    for(; i< nums.length; i++){
        recursive(nums, result, i+1, curr.concat(nums[i]));
    }
    return result;
}