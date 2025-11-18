//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let index = 1;
    nums.sort();
    for(let i=0; i < nums.length; i++){
        if(nums[i] == nums[index]){
            return true
        }
        index++;
    }
    return false
    
};