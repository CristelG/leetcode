//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//using two pointer approach, to iterate the array with one, and the non zero values with the other
//O(n) time complexity (depends on the length of the array) and O(1) space complexity (moves in-place, only variable is index)
var moveZeroes = function(nums) {
    let index = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[index] = nums[i]
            index++
        }
    }
    //Had to get a little help for this, the above is made by me completely
    while(index < nums.length){
        nums[index] = 0;
        index++
    }
};