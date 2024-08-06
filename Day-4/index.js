// --------------------- FOR LOOPS ---------------------------
// -----------------------TASK 1 --------------------------

for (i = 1; i <= 10; i++) {
  //   console.log(i);
}

// --------------------- FOR LOOPS ---------------------------
// -----------------------TASK 2 --------------------------
let num = 5;
for (i = 1; i <= 10; i++) {
  //   console.log(i * num);
}

function Multiply(num) {
  for (let index = 1; index <= 10; index++) {
    // console.log(num * index);
  }
}

Multiply(5);

// --------------------- WHILE LOOPS ---------------------------
// -----------------------TASK 1 --------------------------

var i = 1;
var sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}

// console.log(sum);

// --------------------- WHILE LOOPS ---------------------------
// -----------------------TASK 2 --------------------------

var number = 10;
while (number >= 1) {
  //   console.log(number);
  number--;
}

// ---------------------DO WHILE LOOPS ---------------------------
// -----------------------TASK 1--------------------------
let j = 1;
do {
  //   console.log(j);
  j++;
} while (j <= 5);

// ---------------------FACTORIAL OF NUMBER DO WHILE LOOPS ---------------------------
// -----------------------TASK 2--------------------------

let fact = 1;
let value = 5;
do {
  fact = fact * value;
  value--;
} while (value > 0);
// console.log(fact);

// ---------------------NESTED  LOOPS ---------------------------
// -----------------------TASK 1--------------------------
let raw = 5;
for (l = 1; l <= raw; l++) {
  let column = "";
  for (let h = 1; h <= l; h++) {
    column += "*";
  }
  //   console.log(column);
}

// ---------------------  LOOPS CONTROL STATEMENTS---------------------------
// ----------------------------- TASK 1 --------------------------

for (let m = 0; m < 10; m++) {
  if (m == 5) {
    continue;
  }
  //   console.log(m);
}

// ---------------------  LOOPS CONTROL STATEMENTS---------------------------
// ----------------------------- TASK 2 --------------------------

for (let m = 0; m < 10; m++) {
  if (m == 5) {
    break;
  }
  console.log(m);
}
