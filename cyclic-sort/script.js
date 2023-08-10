function CyclicSort(nums) {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    nums[i] !== nums[j] ? ([nums[i], nums[j]] = [nums[j], nums[i]]) : (i += 1);
  }
  return nums;
}

CyclicSort([3, 1, 5, 4, 2]); // [1, 2, 3, 4, 5]

// Find the Missing Number

function FindMissingNumber(nums) {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i];
    nums[i] < nums.length && nums[i] !== nums[j]
      ? ([nums[i], nums[j]] = [nums[j], nums[i]])
      : (i += 1);
  }

  for (let i = 0; i < nums.length; i++) if (nums[i] !== i) return i;

  return nums;
}

FindMissingNumber([4, 0, 3, 1]); // 2
