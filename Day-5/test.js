//---------------------------- FUNCTION DECLARATION ------------------------
// -------------------------------- TASK 1 ---------------------------------

function evenORodd(num) {
  if (num % 2 == 0) {
    return "EVEN NUMBER";
  } else {
    return "ODD NUMBER";
  }
}

// console.log(evenORodd(5090));

// -------------------------------- TASK 2 ---------------------------------

function SquareRoot(num) {
  return Math.sqrt(num);
}
console.log(SquareRoot(196));

// ----------------------------FUNCTION EXPRESSION ---------------------------------
// -------------------------------- TASK 1 ---------------------------------

function MaxNumbers(x, y) {
  if (x > y) {
    console.log(x);
  } else if (y > x) {
    console.log(y);
  }
}

MaxNumbers(112, 10);

// ----------------------------FUNCTION EXPRESSION ---------------------------------
// -------------------------------- TASK 2 ---------------------------------

function Concatenate(a, b) {
  return a + " & " + b;
}

console.log(Concatenate("HI", "HELLO"));

// ----------------------------FUNCTION ARROW ---------------------------------
// -------------------------------- TASK 1 ---------------------------------

const SUM = (a, b) => a + b;
console.log(SUM(23, 54));

// -------------------------------- TASK 2 ---------------------------------

const FindValue = (str, index) => {
  return str.includes(index);
};

console.log(FindValue("SUHLAH", "S"));

// ----------------------------FUNCTION PARAMETRES ---------------------------------
// -------------------------------- TASK 1 ---------------------------------

function Default(a, b = 3) {
  return a * b;
}

console.log(Default(3));

// ----------------------------FUNCTION EXPRESSION ---------------------------------
// -------------------------------- TASK 2 ---------------------------------

function DefaultAge(name, age = 30) {
  return `${name} , YOU ARE PERFECT ${age}`;
}
console.log(DefaultAge("SUHLAH"));

// ----------------------------FUNCTION HIGHER ORDER ---------------------------------
// -------------------------------- TASK 1 ---------------------------------

function logic(fnc, times) {
  return function () {
    for (let i = 1; i < times; i++) {
      fnc();
    }
  };
}

function command() {
  console.log("SuhLah");
}

const execute = logic(command, 6);
execute();

//---------------------other examplr -----------------------------------
const radius = [2, 3, 4, 5];
function area(radius) {
  return 2 * Math.PI * radius * radius;
}

const logics = function (radius, area) {
  let output = [];
  for (i = 1; i < radius.length; i++) {
    output.push(area(radius[i]));
  }
  return output;
};

console.log(logics(radius, area));
