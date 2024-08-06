// const { add, person } = require("./module1");

// add(3, 7);

// person.greet();
// person.birthday();

// import { Hello, Hi, num } from "./module1.js";

// Hello();
// Hi();
// console.log(num(546354));

const _ = require("lodash");

const numbers = [1, 2, 3, 4, 5];

let sum = _.sum(numbers);

// console.log(sum);

const axios = require("axios");

const fetch = "https://jsonplaceholder.typicode.com/posts";

async function Answer() {
  try {
    const res = await axios.get(fetch);
    console.log(res);
  } catch (error) {
    console.log(error.stack);
  }
}
Answer();
