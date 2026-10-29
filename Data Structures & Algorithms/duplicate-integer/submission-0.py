class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        valMap = {};
        for num in nums:
            if num in valMap:
                return True;
            else:
                valMap[num] = 1;
        return False

        