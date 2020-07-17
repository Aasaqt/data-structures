/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {};
    for(let i = 0; i< nums.length; i++){
        if(hash[nums[i]]){
            hash[nums[i]] += 1;
        }else{
            hash[nums[i]] = 1;
        }
    }
    hash = Object.entries(hash).sort(function(a,b) {
        return b[1] - a[1];
    })
    let result = [];
    for(let i = 0 ; i < k ; i++){
        result.push(hash[i][0])
    }
    return result;
};