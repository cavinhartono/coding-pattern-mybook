function InsertionSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let key = numbers[i],
      j = i - 1;

    console.log("Key awal: ", key);
    console.log("Index: ", j);

    while (numbers[j] >= key && j >= 0) {
      console.log(`Numbers[${j}] Sebelum`);
      numbers[j + 1] = numbers[j];
      console.log(`Numbers[${j}] Sesudah`);
      j--;
    }

    numbers[j + 1] = key;
    console.log(`Key akhir: ${key}`);
  }
  return numbers;
}

console.log(InsertionSort([66, 23, 43, 29]));
