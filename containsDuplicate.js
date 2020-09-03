/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let found = false;
    for(let i = 0; i < nums.length; i++){
        for (let j= i; j < nums.length; j++){
            if(i !== j){
                if(Math.abs(nums[j] - nums[i]) <= t){
                    if(Math.abs(j - i) <= k){
                        return true;
                    }
                }
            }
        }
    }
    return false;
};