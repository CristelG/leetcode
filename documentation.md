# Documentation

## [Contains Duplicate](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578)

| Space Complexity | Time Complexity |
| ---------------- | --------------- |
| O(1)             | O(n log n)      |

Array.sort has a time complexity of n log n, because it is based on [Merge sort algorithm](https://www.geeksforgeeks.org/dsa/merge-sort), which recursively divides the array in smaller chunks.

```js
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
```

This solution can be further enhanced by using a Set to catch the duplicates:

```javascript
let containsDuplicate = function(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
};
```

## [Single Number](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549)

| Space Complexity | Time Complexity |
| ---------------- | --------------- |
| O(1)             | O(n)            |

```js
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
```

This function uses the XOR (^) bitwise operation, which has the property that a ^ a = 0 and a ^ 0 = a, so XORing all numbers in the array causes every pair of identical numbers to cancel out (become 0), leaving only the single number that appears once.

Example:

```
let a = 4 = 0010 (Binary)
let b = 4 = 0010 (Binary)
let c = 5 = 0101 (Binary)

a XOR b = 0000

a XOR c = 0101 = 5

```

So knowing that there is only one single number, we can assume that 5 is the single number.

### Issues

* By not initializing number to 0, it is coerced to undefined, which turns into 0, it works, but it's implicit and needs to be clearer.
* We can short hand `number = number ^ nums[i]` to `number ^= nums[i]`
