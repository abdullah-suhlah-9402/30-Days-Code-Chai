// ******************************** object creation and access ************************************
//  task 1

const books = {
  title: "Ertugrul Gahzi",
  author: "Haleema Sultana",
  year: 1200,

  //   greet() {
  //     console.log(`${this.author}`);
  //   },

  //   greets: function () {
  //     console.log(`${this.title}`);
  //   },

  updateyear: function (newYear) {
    this.title = newYear;
  },
  updatetitle: function (newtitle) {
    this.title = newtitle;
  },
};
//  task 2 ------------------------------------------------------
// console.log(books);
// console.log(books.title);
// console.log(books.author);
// books.updateyear(2009);
// books.updatetitle("SUHLAH");
// console.log(books.title);

// ******************************** object methods************************************
//  task 1

// books.greet();
// books.greets();

books.greet = function () {
  return this.title;
};

// console.log(books.greet());

// ******************************** object nested************************************
const library = {
  name: "city library",
  books: [
    {
      title: "suhlah",
      author: "abaima",
      year: 2002,
      getdetails: function () {
        return (
          `title : ${this.title}`,
          `author : ${this.author}`,
          `year : ${this.year}`
        );
      },
    },
    {
      title: "Subaima",
      author: "suima",
      year: 2094,
      getdetails: function () {
        return (
          `title : ${this.title}`,
          `author : ${this.author}`,
          `year : ${this.year}`
        );
      },
    },
    {
      title: "suhllah",
      author: "abaimlah",
      year: 9402,
      getdetails: function () {
        return (
          `title : ${this.title}`,
          `author : ${this.author}`,
          `year : ${this.year}`
        );
      },
    },
  ],
};

// console.log(library);

// library.books.map((x) => console.log(x.title));
// library.books.map((x) => console.log(x.year));
// library.books.map((x) => console.log(x.author));

// library.books.forEach((t) => console.log(t.year));

// ******************************** object this keyword************************************

// library.books.map((s) => console.log(s.getdetails()));

// ******************************** object iteration************************************

for (const key in books) {
  if (Object.hasOwnProperty.call(books, key)) {
    const element = books[key];
    // console.log(element);
  }
}

const keys = Object.keys(books);
// console.log("keys", keys);

const values = Object.values(books);
// console.log(values);

keys.forEach((key) => console.log(`: ${books[key]}`));
