function InsertionSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let key = numbers[i],
      j = i - 1;

    while (numbers[j] >= key && j >= 0) {
      numbers[j + 1] = numbers[j];
      j--;
    }

    numbers[j + 1] = key;
  }
  return numbers;
}

console.log(InsertionSort([66, 23, 43, 29]));
