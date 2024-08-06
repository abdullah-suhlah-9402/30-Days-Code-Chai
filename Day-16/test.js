//  recursion ----------------------------------------
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
// console.log(factorial(5));
// console.log(factorial(2));
// console.log(factorial(4));

// ---------------------------- fibonacci -------------------------------

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// console.log(fibonacci(12));
// console.log(fibonacci(4));
// console.log(fibonacci(6));
