function RandomNumber(callback) {
  const randomNumber = Math.floor(Math.random() * 10);
  callback(randomNumber);
}

RandomNumber((input) => {
  console.log(input);
});

function calculateNumber(number, calculateFn) {
  return calculateFn(number);
}

let result = calculateNumber(5, (input) => input * 5);

let result4 = calculateNumber(5, (input) => input ** 3);

let result5 = calculateNumber(5, (input) => (input - 1) ** 2);

let result6 = calculateNumber(5, (input) => [input]);

let result7 = calculateNumber(5, (input) => [input, input + 1, input + 2]);

let result8 = calculateNumber(7, (input) => {
  let arr = [];
  for (let i = 0; input >= i; input--) {
    arr.push(input);
  }
  return arr;
});

function generateToArray(number, limit, callbackFn) {
  return callbackFn(number, limit);
}

function generateToArray3para(number, limit, plus, callbackFn) {
  return callbackFn(number, limit, plus);
}

let result9 = generateToArray(5, 5, (start, count) => {
  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(start);

    start++;
  }
  return arr;
});

let result10 = generateToArray3para(5, 5, 3, (start, count, plus) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(start);

    start += plus;
  }
  return arr;
});
