/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const vals = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (vals.has(complement)) {
            return [vals.get(complement), i];
        }
        
        vals.set(nums[i], i);
    }
    
    return [];
};