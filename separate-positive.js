// accepts an array of non-zero integers
/** separates the positive integers to the left and the negative integers to the right
 * does NOT make a copy of the input array
 * the numbers do NOT need to be sorted
 */

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivVal = arr[start];
    let pivIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivVal < arr[i]) {
            pivIdx++;

            [arr[i], arr[pivIdx]] = [arr[pivIdx], arr[i]];
        }
    }

    [arr[start], arr[pivIdx]] = [arr[pivIdx], arr[start]];

    return pivIdx
}

function separatePositive(arr, i = 0, pivIdx = pivot(arr)) { //
    if (i === arr.length) return arr;

    if (arr[i] > 0 && i > pivIdx) { //if the value is to the right of the pivIdx and greater than 0 swap those values
        [arr[i], arr[pivIdx]] = [arr[pivIdx], arr[i]];
        return separatePositive(arr, i + 1, pivIdx);
    } else if (arr[i] < 0 && i < pivIdx) {
        [arr[i], arr[pivIdx]] = [arr[pivIdx], arr[i]];
        return separatePositive(arr, i + 1, pivIdx);
    } else {
        return separatePositive(arr, i + 1, pivIdx);
    }

    // let end = arr.length - 1;

    // if (arr[i] < 0) {
    //     [arr[i], arr[end]] = [arr[end], arr[i]];
    //     return separatePositive(arr, i + 1);
    // } else if (arr[i] > 0) {
    //     [arr[0], arr[i]] = [arr[i], arr[0]];
    //     return separatePositive(arr, i + 1);
    // } else {
    //     return separatePositive(arr, i + 1);
    // }

}
