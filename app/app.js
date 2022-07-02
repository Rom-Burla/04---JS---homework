let suitNames = ["Spade", "Club", "Heart", "Diamond"];

for (y = 0; y < suitNames.length; y++) {
  for (let x = 1; x <= 13; x++) {
    console.log(x.toString(), suitNames[y]);
  }
}
