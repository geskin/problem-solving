// receives an array of integers and a number
// finds the number of pairs of integers in the array whose sum is equal to the second parameter
// assume no duplicate values in the array
function countPairs(nums, target, left = 0, right = nums.length - 1, count = 0) {
    if (right === 0) return count;

    let sum = nums[left] + nums[right];

    if (left === right) {
        left = 0;
        right--;
        return countPairs(nums, target, left, right, count)
    }

    // check the sum of the right most number with each number to the left of it
    if (sum === target) {
        count++;
        left++;
        return countPairs(nums, target, left, right, count);
    } else {
        return countPairs(nums, target, left + 1, right, count);
    }

}
