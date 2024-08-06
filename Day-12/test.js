//   ====================== error handling ------------------------------\
//  ----------------------------- tsdk 1 ==============================

// function intentionally() {
//   throw new Error("ERROR IS AN ERROR");
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// }

// intentionally();

//  ----------------------------- tsdk 2 ==============================

// function Dividetwo(a, b) {
//   try {
//     if (a == 0) {
//       throw new Error("NUMBER IS ZERO");
//     }
//     return a / b;
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// console.log(Dividetwo(0, 6));

//  ----------------------------- finally block ==============================
//  -----------------------------  tyask 3 ==============================

// try {
//   console.log("thgis is try block");
//   // throw new Error("kya likh diya hai ye tune ");
// } catch (error) {
//   console.log("error is here ", error);
// } finally {
//   console.log("i willl have to run at any cost");
// }

//  ----------------------------- custom error object ==============================
//  -----------------------------  tyask 4 ==============================

// class CustomError extends Error {
//   constructor(mess) {
//     super(mess);
//     this.name = "ye ek custom error haiu bhaiu jaan";
//   }
// }

// function throwError() {
//   console.log("throw eeeeeeeerorrrrrr");
// }

// try {
//   throwError();
// } catch (error) {
//   console.log(error.stack);
// }

//  ----------------------------- validation function ==============================
//  -----------------------------  tyask 5 ==============================

// function valid(str) {
//   if (str == "") {
//     throw new CustomError("input is empty");
//   }
//   console.log(str);
// }

// valid("");

//  ----------------------------- cerror handling uing promises ==============================
//  -------------------------------------  tyask 6  =======================================

// function Rndom() {
//   const RanPro = new Promise((res, rej) => {
//     const Random = Math.floor(Math.random() * 2);
//     console.log(Random);
//     if (Random == 1) {
//       res("success");
//     } else {
//       rej("rejected");
//     }
//   });

//   RanPro.then((data) => {
//     console.log("data", data);
//   }).catch((err) => {
//     console.log(err);
//   });
// }

// Rndom();

//  ----------------------------- cerror handling uing async await ==============================
//  -----------------------------  tyask 6 ==============================

// function Rndom() {
//   const RanPro = new Promise((res, rej) => {
//     const Random = Math.floor(Math.random() * 2);
//     console.log(Random);
//     if (Random == 1) {
//       res("success");
//     } else {
//       rej("rejected");
//     }
//   });

//   async function handle() {
//     try {
//       const data = await RanPro;
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   handle();
// }

// Rndom();

//  ----------------------------- grace fully handling fetch API ==============================
//  -----------------------------  tyask 7 ==============================

// function fetch() {
//   fetch("https://jsonplaceholder.typicode.com/ojojposts")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err.stack);
//     });
// }

// fetch();

//  ----------------------------- async fn ==============================
//  -----------------------------  tyask 8 ==============================

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("ye kya hai", err.stack);
  }
}
fetchData();
