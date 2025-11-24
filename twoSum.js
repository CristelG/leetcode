//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//O(n2) time solution, fastest to come up with (O(1) space complexity)
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            }
        }
    }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//O(n) time solution using a hash map, had to get some help for this (O(n) space complexity)
var twoSum = function(nums, target) {
    let hash = new Map()
    for(let i = 0; i < nums.length; i++){
       hash.set(nums[i], i)
    }
    for(let i = 0; i < nums.length; i++){
        let desired = target - nums[i]
        if(hash.has(desired) && i != hash.get(desired)){
            return [i, hash.get(desired)]
        }
    }
};

