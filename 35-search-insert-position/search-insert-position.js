/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    let j = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            j = i
        }else{
            if(target > nums[i]){
                j = i + 1
            }
        }
    }

    return j
};