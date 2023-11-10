let numbers = [5, 3];

function Minicalculator(numbers) {
  let sum = 0;
  let dif = 0;
  let result = "";
  if (numbers.length !== 2) return console.log("ta 2 too oruulah bolomjtoi");
  sum = numbers[0] + numbers[1];
  dif = numbers[0] - numbers[1];
  result = `Нэмсэн үр дүн ${sum} ; Хассан үр дүн ${dif}`;
  return result;
}

console.log(Minicalculator(numbers));
