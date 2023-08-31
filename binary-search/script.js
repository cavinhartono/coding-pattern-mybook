const BinarySearch = (arr, get) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (get === arr[mid]) return console.log(`Ditemukan pada indeks ke ${mid}`);

    if (get > arr[mid]) {
      console.log("Mencari pada sisi kanan");
      start = mid + 1;
    }

    if (get < arr[mid]) {
      console.log("Mencari pada sisi kiri");
      end = mid - 1;
    }
  }
  console.log("Nilai tidak ditemukan");
};

let numbers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
BinarySearch(numbers, 37); // Ditemukan pada index 11
BinarySearch(numbers, 2); // Nilai tidak ditemukan
