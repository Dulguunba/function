let text = "The quick brown fox jumps over the lazy dog";

function findlong(text) {
  let textarray = [];
  let sublength = [];

  textarray = text.split(" ");

  for (let i = 0; i < textarray.length; i++) {
    let subarray = textarray[i].split("");
    sublength += subarray.length;
  }

  let maxlength = Math.max(...sublength);
  let maxindex = sublength.indexOf(maxlength);
  return textarray[maxindex];
}

console.log(findlong(text));
