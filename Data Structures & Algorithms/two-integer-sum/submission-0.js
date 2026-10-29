class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const solutions = {};
        // nums = [1, 2, 3], target = 4

        for(let i = 0; i < nums.length; i++){
            let complement = target - nums[i];

            if (solutions[complement] !== undefined) {
                return [solutions[complement], i]
            }
            solutions[nums[i]] = i;
        }
    }
}
