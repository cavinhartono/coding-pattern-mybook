function IsSum(nums, x) {
  let i = 0,
    j = nums.length - 1;
  while (i < nums.length - 1) {
    if (nums[i] + nums[j] === x) return true;
    else if (nums[i] + nums[j] < x) i++;
    else j--;
  }
  return false;
}

const arr = [2, 3, 5, 8, 9, 10, 11];
arr.sort((a, b) => a - b);
console.log(IsSum(arr, 17));
