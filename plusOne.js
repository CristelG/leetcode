//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559
/**
 * @param {number[]} digits
 * @return {number[]}
 */
//Time: O(n), space = O(1)
var plusOne = function (digits) {

	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] === 9) {
			digits[i] = 0;
		} else {
			digits[i] += 1;
			return digits
		}

	}
    digits.unshift(1)
	return digits;
};