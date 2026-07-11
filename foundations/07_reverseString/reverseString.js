const reverseString = function(word) {
  let charactersOfWord = word.split("");
  charactersOfWord.reverse();

  word = charactersOfWord.join("");
  return word;
};

// Do not edit below this line
module.exports = reverseString;
