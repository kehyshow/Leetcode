/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let sum = init;
    let len = nums.length;
    while(len !== 0) {
        sum = fn(sum, nums[nums.length - len]);
        len--;
    }
    return sum;
};