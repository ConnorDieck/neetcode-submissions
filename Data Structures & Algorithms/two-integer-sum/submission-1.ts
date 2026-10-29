class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let complementMap = {};

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let c = target - num;
            
            if (complementMap[c] !== undefined) {
                return [complementMap[c], i]
            } else {
                complementMap[num] = i;
            }
        }
    }
}

/**
 * nums = [3, 4, 5, 6], target = 7
 * 
 * complementMap = {
 *  3: 0,
 *  
 * }
 * i = 1
 * num = 4
 * complementMap[3] = [0]
 */