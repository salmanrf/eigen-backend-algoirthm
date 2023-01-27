function longest(string) {
  const words = string.split(" ");
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

const input = "Saya sangat senang mengerjakan soal algoritma";
const output = longest(input);

console.log("longest: ", output, " " + output.length + " characters");
