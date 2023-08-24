function NumberPattern(num) {
  for (let i = num; i >= 1; i--) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += j + " ";
    }
    console.log(row);
  }
}

NumberPattern(5);
