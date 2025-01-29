// given a sorted array of integers and a target average determines if there is a pair of values in the array where the average of the pair equals the target average
// there may be more than one pair that matches the average target

function averagePair(nums, target, left = 0, right = nums.length - 1) {
    if (left >= right) return false;

    let average = (nums[left] + nums[right]) / 2;

    if (average === target) {
        return true;
    } else if (average < target) {
        left++;
        return averagePair(nums, target, left, right);
    } else {
        right--;
        return averagePair(nums, target, left, right);
    }
}
