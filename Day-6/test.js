// ================================ array creation and access ======================================
// ************************************      task 1       ************************************

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);

// ================================ array creation and access ======================================
// ************************************      task 2      ************************************

// const res = arr[0];
// console.log(res);

// ================================ array methods basics ======================================
// ************************************  basics  method     *********************************

// arr.push(55);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(43);
// console.log(arr);

// ================================ array methods  ======================================
// ******************************  intermediate  method *********************************

const result = arr.map((item) => item * 3);
// console.log(result);

const output = arr.filter((item) => item > 5);
// console.log(output);

const reduce = arr.reduce((curr, acc) => curr / acc);
// console.log(reduce);

// ================================ array iteration  ======================================
// *****************************************for loop *************************************

for (let i = 0; i <= arr.length; i++) {
  //   console.log(arr[i]);
}

// ================================ array iteration  ======================================
// *****************************************for each *************************************

// arr.forEach((x) => console.log(x));

// ================================ array multi dimensional   ======================================
// ******************************************************************************

let items = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
];

// console.log(items[0][0]);
// console.log(items[0][1]);
// console.log(items[1][0]);
// console.log(items[1][1]);
// console.log(items[2][0]);
// console.log(items[2][1]);

for (let i = 0; i < items.length; i++) {
  for (j = 0; j < items[i].length; j++) {
    console.log(items[i][j]);
  }
}
