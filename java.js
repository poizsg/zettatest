function result(input) {
  if (input.length == 0) {
    return; // 0.
  }
  input.sort((a, b) => a - b);
  const midpoint = Math.floor(input.length / 2);
  const median = input.length % 2 === 1 ?
    input[midpoint] :
    (input[midpoint - 1] + input[midpoint]) / 2;
  return median;
}
console.log(result([8, 7, 7, 9, 5, 4, 2, 9]));