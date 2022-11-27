let g = "12";
let v = "13";
let find = "3";

function check(g, v, find) {
  let gs = [[...g], [...v]];
  let pos = [0, 0];
  gs.some((res, indexX) => {
    return res.some((y, indexY) => {
      if (y === find) {
        pos = [indexX, indexY];
        return true;
      }
    });
  });
  return pos;
}

console.log(check(g, v, find));
