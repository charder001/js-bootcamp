let hash = 0;

for (i = 0; i < 100; i++) {
  hash++;
  if (hash % 3 === 0 && hash % 5 === 0) {
    console.log("fizzbuzz")
  } else if (hash % 3 === 0) {
    console.log("fizz")
  } else if (hash % 5 === 0) {
    console.log("buzz")
  } else {
    console.log(hash);
  }
}
