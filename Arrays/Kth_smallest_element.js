const ary = [1, 3, 11, 22, 2, 5, 4];
const k = 4;

const kthSmallest = (ary, k) => {
    ary.sort((a, b) => a - b);
    return ary[k - 1];
}

console.log(kthSmallest(ary, k));
// output 5
