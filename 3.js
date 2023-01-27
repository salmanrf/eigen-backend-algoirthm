function countQueries(input, queries) {
  const counts = Array(queries.length).fill(0);

  for (const word of input) {
    const index = queries.findIndex((q) => q === word);

    if (index > -1) {
      counts[index]++;
    }
  }

  return counts;
}

const input = ["xc", "dz", "bbb", "dz"];
const queries = ["bbb", "ac", "dz"];

const output = countQueries(input, queries);

console.log("input: ", input, ", query", queries, ", output: ", output);
