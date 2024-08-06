// task 1 change TExt by Id
function changeText() {
  const result = document.getElementById("heading");
  result.innerText = "Java Script with CHAI";
  console.log(result);
}

// task 2 change BG by class name
function changebg() {
  var change = document.getElementsByClassName("body");
  change[0].style.backgroundColor = "red";
  console.log(change);
}

//task 3 Append elemnt
function appendchild() {
  let createDiv = document.createElement("div");
  createDiv.innerText = "i am a new div ";
  document.body.appendChild(createDiv);
  createDiv.style.backgroundColor = "green";

  let newLI = document.createElement("li");
  newLI.innerText = "suhaima";
  document.getElementsByTagName("ul")[0].appendChild(newLI);
}

// task 4 removing elemwnts

function RemoveElem() {
  let removeelem = document.getElementsByTagName("ul")[0];
  removeelem.removeChild(removeelem.childNodes[0]);
}

function RemoveLast() {
  let removeelem = document.getElementsByTagName("ul")[0];
  removeelem.removeChild(removeelem.lastChild);
}

// task 7 8
function setAttribute() {
  let removeelem = document.getElementsByTagName("ul")[0];
  removeelem.setAttribute("style", "list-style-type:circle");
}
setAttribute();

function setBGcolor() {
  let elem = document.getElementsByTagName("p")[0];
  elem.style.backgroundColor = "blue";
  elem.removeAttribute("class");
}
setBGcolor();

let changewithadd = document.getElementById("heading");
changewithadd.addEventListener("click", () => {
  changewithadd.innerText = "changed";
});

let changewithMouse = document.getElementsByClassName("para")[0];
changewithMouse.addEventListener("mouseover", () => {
  let any = document.getElementsByClassName("para")[0];
  any.style.backgroundColor = "red";
});
