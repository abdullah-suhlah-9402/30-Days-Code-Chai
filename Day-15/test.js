// ---------------------------- closures -------------------------------
function outer() {
  let name = "abdullah";
  function inner() {
    console.log(name);
  }
  return inner();
}

// outer();

// ---------------------------- closures -------------------------------
// ---------------------------- task 2 -------------------------------

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(` update : ${count}`);
  };
}

const a = counter();
// a();
// a();
// a();

// ---------------------------- practical closures -------------------------------
// ---------------------------- task 3 -------------------------------

function generateID() {
  let ID = 0;
  return function () {
    ID = Math.floor(Math.random() * 9000 + 1000);
    console.log(`${ID}`);
  };
}

const result = generateID();
result();

// ---------------------------- task 4 -------------------------------

// function User(name) {
//   this.name = name;
//   return function greet() {
//     console.log(` happy holiday me dear ${name} ${name}`);
//   };
// }

// let Ans = User("suhaima");
// let Ans2 = User("abdullah");
// Ans();
// Ans2();

// ---------------------------- closurea in loops -------------------------------
// ---------------------------- task 4 -------------------------------

function CreateArray(n) {
  const fn = [];

  for (let i = 0; i < n; i++) {
    fn.push(
      (function (i) {
        return function () {
          console.log(i);
        };
      })(i)
    );
  }
  return fn;
}
const answer = CreateArray(7);
// answer[0]();
// answer[1]();
// answer[2]();
// answer[3]();
// answer[4]();

// ---------------------------- module pattterns -------------------------------
// ---------------------------- task 4 -------------------------------

// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (key in cache) {
//       return cache[key];
//     }

//     const result = fn(...args);
//     cache[key] = result;
//     return result;
//   };
// }

// function slowfunction(num) {
//   console.log("computing.....");
//   return num * 2;
// }

// const memoizedFunction = memoize(slowfunction);
// console.time();
// console.log(memoizedFunction(5));
// console.timeEnd();

// ---------------------------- fCTORIAL In Mmemoixes-------------------------------

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const memoixeFact = memoize(factorial);

console.time();
console.log(memoixeFact(5));
console.log(memoixeFact(3));
console.timeEnd();
