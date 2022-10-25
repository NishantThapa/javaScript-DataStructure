let removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      count++;
    }
  }
  return count;
};
removeElement([3, 2, 2, 3], 3);
// output 2
