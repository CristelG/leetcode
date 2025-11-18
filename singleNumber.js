//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let number;
    for(let i = 0; i < nums.length; i++){
        number = number ^ nums[i]
        
    }
    return number;
};