// -----------------------IF ELSE  --------------------------------
// -----------------------TASK 1 --------------------------------
let number = "yyfydtghchd4";
if (number >= 1) {
  console.log("positive");
} else if (number <= -1) {
  console.log("negative");
} else if (number === 0) {
  console.log("zero");
} else {
  console.log("enter valid number");
}

// -----------------------TASK 2 --------------------------------
let age = 108;
if (age < 18) {
  console.log("NO! YOU ARE ALLOWED TO CAST VOTE AT THIS AGE ");
} else if (age >= 18) {
  console.log("YES! YOU CAN CAST YOUR VOTE");
}
// ----------------------- NESTED IF ELSE ---------------------------
// -----------------------TASK 1 --------------------------------

let x = 12;
let y = 21;
let z = 25;

if (x > y && x > z) {
  console.log(x + "is the greatest");
} else if (y > z) {
  console.log(y + "is the greatest");
} else {
  console.log(z + "is the greatest");
}

let num = 2;
if (num > 999 && num < 1000) {
  if (condition) {
  }
}

// ----------------------- SWITCH CASE---------------------------
// -----------------------TASK 1 --------------------------------
let day = 51;
switch (day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURAY");
    break;
  case 7:
    console.log("SUNDAY");
    break;

  default:
    console.log("ERROR ERROR ERROR");
    break;
}

// -----------------------TASK 2 --------------------------------
var grades = "B";
switch (grades) {
  case "A":
    console.log("DISTINCTION ! EXCELLENT (A+) ");
    break;
  case "B":
    console.log("VERY GOOD (B+)");
    break;
  case "C":
    console.log("NICE , CAN DO BETTER (C)");
    break;
  case "D":
    console.log("WORK HARD (D)");
    break;
  case "E":
    console.log("PAY ATTENTION WORK VERY HARD (E)");
    break;
  case "F":
    console.log("FAILED FAILED FAILED");
    break;

  default:
    console.log("TRY TO FIND YOUR ROLL NO CORRECTLY ");
    break;
}

// ----------------------- TERNARY OPERATOR---------------------------
// --------------------------- TASK 1--------------------------------
let Values = 15;
let response = Values % 2 == 0 ? "EVEN" : "ODD";
console.log(response);

// ----------------------- COMBINING CONDITIONS---------------------------
// ----------------------------- TASK 1 ------------------------------
let year = 2025;
if ((year % 400 == 0 || year % 4 == 0) && year % 100 != 0) {
  console.log("The Year You Chose is a LEAP YEAR");
} else {
  console.log("The Year You Chose is NOT a LEAP YEAR");
}
