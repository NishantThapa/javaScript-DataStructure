// first in first out

const Queue = (data = [], max) => {
  return {
    enQueue: (item) => {
      if (data.length < max) {
        data.push(item);
      }
    },
    print: () => data,
    deQueue: () => {
      if (data.length > 0) {
        data.shift();
      }
    },
  };
};
let newQ = Queue([], 10);
newQ.enQueue(1);
newQ.enQueue(2);
newQ.enQueue(3);
newQ.deQueue();
console.log(newQ.print());
