function CalculateSeriesSum(n) {
  let total = 0,
    term = 2; // dimulai dari 2

  for (let i = 1; i <= n; i++) {
    total += term; // menjumlahkan `total` dari variable `term` yang sekarang
    term = term * 10 + 2; // menambahkan seri `term` berikutnya
    // dimulai dari 2 + ((2 * 10) + 2) = 22 + 222 + 2222 + 22222
  }

  return total;
}

console.log(CalculateSeriesSum(5));
