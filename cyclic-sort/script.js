function CyclicSort(i = 0, nums) {
  while (i < nums.length) {
    let j = nums[i] - 1;
    nums[i] !== nums[j] ? ([nums[i], nums[j]] = [nums[j], nums[i]]) : (i += 1);
  }
  return nums;
}

console.log([3, 1, 5, 4, 2]);
