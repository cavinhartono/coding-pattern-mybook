function CyclicSort(nums) {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
    else i += 1;
  }
  return nums;
}

CyclicSort([3, 1, 5, 4, 2]); // [1, 2, 3, 4, 5]

// Find the Missing Number

function FindMissingNumber(nums) {
  let i = 0;
  while (i < nums.length) {
    let j = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[j])
      [nums[i], nums[j]] = [nums[j], nums[i]];
    else i += 1;
  }

  for (let i = 0; i < nums.length; i++) if (nums[i] !== i) return i;

  return nums;
}

FindMissingNumber([5, 2, 1, 3, 0]); // 4

// Find All Numbers Disappeared in Array

function FindNumbersDisappeared(nums) {
  let i = 0;
  let MissingNumbers = [];

  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) [nums[i], nums[j]] = [nums[j], nums[i]];
    else i += 1;
  }

  for (let i = 0; i < nums.length; i++)
    if (nums[i] !== i + 1) MissingNumbers.push(i + 1);

  return MissingNumbers;
}

FindNumbersDisappeared([5, 6, 3, 2, 1, 8, 8, 9]); // [ 4, 7 ]
