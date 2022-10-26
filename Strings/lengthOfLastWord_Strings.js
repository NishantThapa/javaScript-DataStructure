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

// option 2   ================>>>>>>>>>>>>>>>

var lengthOfLastWord = function (s) {
  let words = s.trim().split(" ");
  return words[words.length - 1].length;
};
lengthOfLastWord("   fly me   to   the moon  ");
// output 2