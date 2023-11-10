let input = "I like Pinecone";
let letters = ["a", "e", "u", "i", "o"];
let text = input;

function adjustedText(input) {
  for (let n = 0; n < letters.length; n++) {
    text = text.replaceAll(letters[n], "");
    text = text.replaceAll(letters[n].toUpperCase(), "");
  }
  return text;
}

console.log(adjustedText(input));
