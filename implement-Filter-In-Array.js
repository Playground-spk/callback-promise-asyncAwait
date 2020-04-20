function filter(array, callback) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      arr.push(array[i]);
    }
  }
  return arr;
}

let array = [1, 2, 3, 4, 5, 6, 7];

let newArray = filter(array, (ele) => {
  return ele > 3;
});

console.log(newArray);
