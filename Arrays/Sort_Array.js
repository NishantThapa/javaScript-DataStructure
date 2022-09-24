// Sort the array in ascending order if signgle digit
const unsortedArray = [1, 3, 2, 5, 4];
let sort = unsortedArray.sort();

console.log(sort);
// Output: [ 1, 2, 3, 4, 5 ]

// Sort the array in ascending order if multiple digits
const unsortedArray2 = [1, 3, 11, 22, 2, 5, 4];
let sort2 = unsortedArray2.sort((a, b) => a - b);

console.log(sort2);
// Output: [ 1, 2, 3, 4, 5, 11, 22 ]


// Sort the array in descending order if multiple digits
const unsortedArray3 = [1, 3, 11, 22, 2, 5, 4];
let sort3 = unsortedArray3.sort((a, b) => b - a);

console.log(sort3);
// Output: [ 22, 11, 5, 4, 3, 2, 1 ]
