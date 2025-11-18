/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverseNumbers = (array, start, end) => {
    while(start < end){
        [ [array[start]], [array[end]] ] = [[array[end]], [array[start]] ]
        start++
        end--
    }
}

var rotate = function(nums, k) {
    //nums = [1,2,3,4,5,6,7] 
    //k = 3

    k = k % nums.length
    // 3
    
    //[1,2,3,4,5,6,7]
    nums.reverse()
    //[7,6,5,4,3,2,1]
    
    reverseNumbers(nums, 0, k - 1)
    //[5,6,7,  4,3,2,1]
    reverseNumbers(nums, k, nums.length - 1)
    //[5,6,7,  1,2,3,4]
    
};