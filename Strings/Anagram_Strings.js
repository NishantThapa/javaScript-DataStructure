const checker = (a, b) => {
  if (
    [...a.toLowerCase()].sort().join("") ===
    [...b.toLowerCase()].sort().join("")
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(checker("listen", "silent"));
// output true
console.log(checker("listen", "silentt"));
// output false
console.log(checker("listen", "Silent"));
// output true
