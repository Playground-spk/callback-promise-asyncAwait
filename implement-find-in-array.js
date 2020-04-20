function filter(array, callback) {
  let target;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      target = array[i];
      break;
    }
  }
  return target;
}

let array = [
  { id: 1, task: "a" },
  { id: 2, task: "b" },
  { id: 3, task: "c" },
];

let targetEle = filter(array, (ele) => {
  return ele.id == 3;
});

console.log(targetEle);
