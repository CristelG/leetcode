//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    
    let a = nums;
    
    for(let i = 0; i < k; i++){
        let lastEl = a.pop()
        a.unshift(lastEl as number)
        
    }
    

};
