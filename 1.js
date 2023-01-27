function reverseString(string) {
  const numChars = string.match(/\d/g);
  const chars = string.match(/\D/g);

  console.log("numChars", numChars);
  console.log("chars", chars);

  for (let i = 0; i < Math.floor(chars.length / 2); i++) {
    if (chars[i].match(/\d/)) {
      continue;
    }

    const temp = chars[chars.length - (1 + i)];

    chars[chars.length - (1 + i)] = chars[i];
    chars[i] = temp;
  }

  return chars.join("") + numChars.join("");
}

const output = reverseString("123NEGIE1");

console.log("123NEGIE1", output);
