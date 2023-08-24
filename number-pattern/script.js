function NumberPattern() {
  for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += j + " ";
    }
    console.log(row);
  }
}

NumberPattern();
