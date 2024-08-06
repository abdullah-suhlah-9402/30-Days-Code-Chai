//  ------------------------------ task 1 ----------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `hello ${this.name} is ${this.age} old and student ID is ${this.studentID} `;
  }
  //  ----------------------------- task 2 ---------------------------------------
  updatedage(newAGE) {
    this.age = newAGE;
    return `updated age :  ${newAGE}`;
  }
}

const Person1 = new Person("SUHLAH", 22);

// console.log(Person1.greet());
// console.log(Person1.updatedage(454));

class students extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }
  getStudentID() {
    return `${this.studentID}`;
  }

  getStudentID() {
    return `my name is ${this.name} of age ${this.age} having the ${this.studentID}`;
  }
}

// const student = new students("suhlah", 22, "AQ1234");
const student2 = new students("suhlah", 22, "98bvf65");

// console.log(student2.getStudentID());
// console.log(student2.greet());
// console.log(student2 instanceof Person);

//  ---------------------------------- task 3 ----------------------------------------------
//  ------------------------ static methods and properties ---------------------------------

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    // static greet(){
    //     return `my name is ${this.name} & ${this.age}`
    // }
  }
}

class USER extends person {
  constructor(name, age, user) {
    super(name, age);
    this.user = user;
  }
}
const user1 = new person("a", 21, "uyuy");

// console.log(user1)

//  -----------------------------------------------------
class employee {
  static count = 0;

  constructor(name) {
    this.name = name;
    employee.count++;
    console.log(`${employee.count}`);
  }
}

// let a = new employee("abdullah");
// let b = new employee("hiba");
// let c = new employee("suhaima");

//  ------------------- getters and setters ---------------------------------

// class person2 {
//   constructor(FNAME, LNAME) {
//     this.FNAME = FNAME;
//     this.LNAME = LNAME;
//   }
//   get fullname() {
//     return `${this.FNAME} & ${this.LNAME}`;
//   }
//   set fullname(name) {
//     this.fname = fname;
//     this.lname = lname;
//   }
// }

// const perosn1 = new person2("abaima", "suhaima");
// perosn1.fullname = "hello bb";

// console.log(perosn.fullname);

// ---------------------- private property ---------------------

class account {
  // private field
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`deposited : ${this.#balance}`);
    } else {
      console.log("nothing deposited");
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`withdraw: ${amount} new balance ${this.#balance}`);
    } else if (amount > this.#balance) {
      console.log("insufficient balance");
    } else {
      console.log("nothing withdrawn");
    }
  }

  get balance() {
    return this.#balance;
  }
}

// instance of

const Account = new account(1000);
Account.deposit(500);
Account.withdraw(1499);
