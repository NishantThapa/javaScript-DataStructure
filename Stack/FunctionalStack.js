// last in first out 

const Stack = (data = [], max) => {
  return {
    push: (item) => {
      if (data.length < max) {
        data.push(item);
      }
    },
    pop: () => {
      if (data.length > 0) {
        data.pop();
      }
    },
    print: () => data,
    length: () => data.length,
  };
};

const StackOne = Stack([], 5);

StackOne.push(1);
StackOne.push(3);
console.log(StackOne.print()); // [1,3]
console.log(StackOne.length()); // 2
