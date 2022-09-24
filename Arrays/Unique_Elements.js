let nums = [1, 1, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9];
var removeDuplicates = function (nums) {
  return [...new Set(nums)];
};

console.log(removeDuplicates(nums));
