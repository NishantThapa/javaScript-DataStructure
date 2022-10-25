var lengthOfLastWord = function (s) {
  let words = s.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== "") {
      return words[i].length;
    }
  }
  return 0;
};

lengthOfLastWord("   fly me   to   the moon  ");
// output 4