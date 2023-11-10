let input = "A man, a plan, a canal, Panama";

function revert(input) {
  let adjustedInput = input
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .toLowerCase();

  let revertedInput = adjustedInput.split("").reverse().join("");

  if (adjustedInput === revertedInput) return "True";
  return "False";
}

console.log(revert(input));
