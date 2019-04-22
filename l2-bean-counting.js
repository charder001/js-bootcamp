 var charCount = 0
// Your code here.
function countChar(value, char) {
  for (i = 0; i < value.length; i++) {
    if (value[i] === char) {
     charCount++
    }
  }
  return charCount
}

console.log(countChar("kakkerlak", "k"));
// → 4
