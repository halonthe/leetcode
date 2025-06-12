/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let maxDiff = 0
    const n = nums.length

    for(let i = 0; i < n; i++){
        let nextIndex = (i + 1) % n
        let diff = Math.abs(nums[i] - nums[nextIndex]);
        maxDiff = Math.max(maxDiff, diff);
    }

    return maxDiff
};