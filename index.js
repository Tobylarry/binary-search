/**

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 //very simple approach
var search = function(nums, target) {
    if(!nums.includes(target)) return -1;
    return nums.indexOf(target);
};

//using binary search
var search = function(num, target){
    let l = 0, r = num.length - 1;
    while(l <= r){
        let mid = Math.floor((l+r)/2);
        if(num[mid] === target){
            return mid;
        }
        else if(num[mid] < target){
            l = mid + 1;
        }
        else{
            r = mid - 1;
        }
    }
    return -1;
}
