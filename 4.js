function sumDiagonal(matrix) {
  const ordo = matrix.length;

  let left = 0;
  let right = 0;

  for (let i = 0; i < ordo; i++) {
    const minIndex = ordo - (1 + i);

    left += matrix[i][i];
    right += matrix[i][minIndex];
  }

  return left - right;
}

const input = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const output = sumDiagonal(input);

console.log("input: ", input, ", output: ", output);
