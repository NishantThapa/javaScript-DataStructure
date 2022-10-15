let g = "12";
let v = "13";
let find = "3";

function check(g, v, find) {
  let gs = [[...g], [...v]];
  let pos = [0, 0];
  gs.some((res, indexX) => {
    res.some((y, indexY) => {
      if (y === find) {
        pos = [indexX, indexY];
      }
    });
  });
  return pos;
}

console.log(check(g, v, find));
// output [1,1]
