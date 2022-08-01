const findRow = (words = []) => {
  return words.filter((word) => checkWord(word));
};

const checkWord = (word) => {
  const row1 = "qwertyuiop";
  const row2 = "asdfghjkl";
  const row3 = "zxcvbnm";
  // counter for each row
  let row1Counter = 0;
  let row2Counter = 0;
  let row3Counter = 0;

  word = word.toLowerCase();
  let N = word.length;

  // loop through each letter in the word
  for (let i = 0; i < word.length; i++) {
    // check if the letter is in the row
    if (row1.includes(word[i])) {
      row1Counter++;
    } else if (row2.includes(word[i])) {
      row2Counter++;
    } else if (row3.includes(word[i])) {
      row3Counter++;
    }
  }
  return row1Counter === N || row2Counter === N || row3Counter === N;
};

console.log(findRow(["Hello", "Alaska", "Dad", "Peace"]));
