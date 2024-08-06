//--------------------------------btn click events -------------------------------------------
// task 1
function change() {
  let para = document.getElementById("heading");
  let btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    para.textContent = "hello coders my dears";
  });
}

//task 2

function toggle() {
  let checked = document.getElementById("check");
  let image = document.getElementById("image");

  checked.addEventListener("dblclick", () => {
    image.style.visibility =
      image.style.visibility === "visible" ? "hidden" : "visible";
  });
}
//--------------------------------mouse events -------------------------------------------
// task 3

function mouseover() {
  let target = document
    .getElementById("heading")
    .addEventListener("mouseover", () => {
      let val = document.getElementById("heading");
      val.style.backgroundColor =
        val.style.backgroundColor === "white" ? "pink" : "white";
      val.style.color = val.style.color === "blue" ? "green" : "blue";
    });
}

//task 4

function resetcolor() {
  const res = document
    .getElementById("head")
    .addEventListener("mouseout", () => {
      const set = document.getElementById("head");
      set.style.backgroundColor =
        set.style.backgroundColor === "white" ? "gray" : "white";
    });
}

//--------------------------------keyboard events -------------------------------------------
// task 5
function keydown() {
  const input = document.getElementById("input");
  input.addEventListener("keydown", (event) => {
    console.log(event.key);
  });
}

// task 6
function keyup() {
  const input = document.getElementById("input1");
  input.addEventListener("keyup", (event) => {
    const val = document.getElementById("input1").value;
    console.log(val);
  });
}

//--------------------------------form events -------------------------------------------
// task 7

function verify() {
  let btn = document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(`${email} & ${password}`);
}

//--------------------------------form events  selct and shoe in paragh-------------------------------------------
// task 8

function showParah() {
  document.getElementById("select").addEventListener("change", (e) => {
    const selectedOption = e.target.value;
    document.getElementById(
      "selectedVal"
    ).textContent = `selected  : ${selectedOption}`;
  });
}

//--------------------------------event delegation-------------------------------------------
// task 9

function List() {
  document.getElementById("list").addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "LI") {
      console.log(e.target.textContent);
    }
  });
}

//task 10

function parent() {
  let parent = document
    .getElementById("parent")
    .addEventListener("click", (e) => {
      if (e.target.matches(".childelem")) {
        e.target.textContent;
      }
    });

  let child = document.createElement("div");
  child.textContent = "i am new btn";
  parent.appendChild(child);
}
