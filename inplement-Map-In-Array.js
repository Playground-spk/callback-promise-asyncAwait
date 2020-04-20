function map(array, callbackFn) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    arr[i] = callbackFn(array[i], i, array);
  }
  return arr;
}

let arrayTest = [5, 2, 3, 4, 5];

let newArray = map(arrayTest, (ele) => {
  return ele * 2;
});
console.log(newArray);
