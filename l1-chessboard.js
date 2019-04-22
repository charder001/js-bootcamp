var line = "";
var size = 8;
for (e = 0; e < size; e++) {
  for (i = 0; i < (size + 1); i++) {
    if (e % 2 === 0) {
      if (i === size) {
        line = line + "\n";
      } else if (i % 2 === 0) {
        line = line + "#";
      } else if (i % 2 !== 0) {
        line = line + " ";
      }
    } else {
      if (i === size) {
        line = line + "\n";
      } else if (i % 2 === 0) {
        line = line + " ";
      } else if (i % 2 !== 0) {
        line = line + "#";
      }
    }
  }
}
console.log(line);
