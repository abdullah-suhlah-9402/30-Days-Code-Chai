//  --------------------- TEMPLATE LITERALS ----------------------------------
// **************************   ES -6   *************************************

// TASK 1

let name = "suhlah";
let age = 30;

// console.log(`my name is : ${name} with the ${age} of `);

//  task 2

let multiline = `hellow how are you
 doing these days and how
 is your study is going on ?`;

// console.log(multiline);

//  --------------------- DE STRUCTURING  ----------------------------------
// **************************   ES -6   *************************************

const names = ["suh", "lah", "abai", "suhlah", "9402"];
const [first, last] = [names[0], names[names.length - 1]];
// console.log(`${first} &  ${last}`);

// task 2

const books = {
  author: "jk rowlings",
  title: "harry potter",
};

const { author, title } = books;
// console.log(`${author} is ${title}`);

//  --------------------- SPREAD AND REST OPERATORS  ----------------------------------
// **************************   ES -6   *************************************

const addElems = ["suha", "maabd", "suhlah"];

const newArray = [...names, ...addElems];

// console.log(newArray);

//  task 2

function sum(...num) {
  return num.reduce((acc, curr) => acc + curr, 0);
}

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

//  --------------------- DEFAULT PARAMETRES  ----------------------------------

function Params(s, a = 1) {
  return s * a;
}

// console.log(Params(5));
// console.log(Params(5, 6));

//  --------------------- enhanced object literals  ----------------------------------

let o = "abaima";
let p = 32;
let q = "love is life";

let person = {
  o,
  p,
  q,
  greet() {
    return `helo ${o}`;
  },

  getinfo() {
    return `${o} is ${p} year old`;
  },
};

// console.log(person);
// console.log(person.greet());
// console.log(person.getinfo());

//  task 2

key1 = "name";
key2 = "age";

const guy = {
  [key1]: "suhlah",
  [key2]: 22,
};

console.log(guy);
