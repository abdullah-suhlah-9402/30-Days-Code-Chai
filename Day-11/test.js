//----------------------------------async await ---------------------------------
// ------------------------------------promises ---------------------------------

// task 1

// const asyncPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("resolved");
//   }, 2000);
// });

// asyncPromise
//   .then((mess) => {
//     // console.log(mess);
//   })
//   .catch((error) => {
//     // console.log(error);
//   });

// ---------------------------------------- task 2 -------------------------------

// const asyncPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       res("complted");
//     } else {
//       rej("rejected");
//     }
//   }, 2000);
// });

// asyncPromise
//   .then((mess) => {
//     console.log(mess);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ---------------------- task 3 ---------------------------------------------------
// ---------------------- chaining promises ----------------------------------------

// const fetchdata = function (data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 3000);
//   });
// };

// fetchdata("data 1")
//   .then((data1) => {
//     console.log("received ", data1);
//     return fetchdata("data 2");
//   })
//   .then((data2) => {
//     console.log("received ", data2);
//     return fetchdata("data 3");
//   })
//   .then((data3) => {
//     console.log("received ", data3);
//     return fetchdata("data 4");
//   })
//   .then((data4) => {
//     console.log("received ", data4);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ---------------------- task 4 ---------------------------------------------------
// ---------------------- async await ----------------------------------------

// const promiseNew = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve("resolved");
//     } else {
//       reject("failed");
//     }
//   }, 1000);
// });

// async function consumeNew() {
//   try {
//     const response = await promiseNew;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumeNew();

// ---------------------- task 5 ---------------------------------------------------
// ---------------------- fetcg data from api ----------------------------------------

// async function getUsers() {
//   try {
//     const result = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await result.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUsers();

// ---------------------------- task 6 --------------------------
// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(fetch("https://jsonplaceholder.typicode.com/users"));
//   }, 1000);
// });

// p.then(function (resolve) {
//   console.log(resolve);
// }).catch(function () {
//   console.log("error");
// });

// ---------------------------- task 6 --------------------------

// async function fetchdata() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (res.ok) {
//       const data = await res.json();
//       console.log(data);
//     } else {
//       throw new Error("res not ok");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchdata();

// ---------------------------- concurrent Promise --------------------------
// ---------------------------- task 7 --------------------------

let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise one");
  }, 5000);
});

let p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("promise Two");
  }, 2000);
});

let p3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("promise Three");
  }, 3000);
});

// let promise_all = Promise.all([p1, p2, p3]);
// let promise_all = Promise.allSettled([p1, p2, p3]);
// let promise_all = Promise.race([p1, p2, p3]);
promise_all.then((x) => {
  console.log(x);
});
