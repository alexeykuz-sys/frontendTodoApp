const SUN = document.getElementById("sun");
const MOON = document.getElementById("moon");
const BGIMGLIGHT = document.getElementById("bg-image-light");
const BGIMGDARK = document.getElementById("bg-image-dark");
const CROSS = document.querySelectorAll(".cross");
const checkboxes = document.querySelectorAll("input[name=checkbox]");
const CLEAR = document.getElementById("clear-completed");
const ALL = document.querySelector("#all");
const ACTIVE = document.getElementById("active");
const COMPLETED = document.getElementById("completed");
const TODOLIST = document.querySelectorAll(".todo-list");

function lightDarkModeChanger() {
  if (MOON.classList.contains("show")) {
    MOON.classList.remove("show");
    SUN.classList.toggle("show");
    bgImgHandler();
    bodyColorChange();
    darkCardMode();
    changeTextColors();
  } else if (SUN.classList.contains("show")) {
    SUN.classList.remove("show");
    MOON.classList.toggle("show");
    bgImgHandler();
    bodyColorChange();
    lightCardMode();
    changeTextColors();
  }
}

MOON.addEventListener("click", lightDarkModeChanger);
SUN.addEventListener("click", lightDarkModeChanger);

function bgImgHandler() {
  if (MOON.classList.contains("show")) {
    BGIMGLIGHT.classList.remove("show");
    BGIMGDARK.classList.remove("none");
    BGIMGDARK.classList.add("show");
  } else if (SUN.classList.contains("show")) {
    BGIMGDARK.classList.add("none");
    BGIMGDARK.classList.remove("show");
    BGIMGLIGHT.classList.add("show");
  }
}

function bodyColorChange() {
  if (MOON.classList.contains("show")) {
    document.body.style.backgroundColor = "var(--VeryLighGrayishBlue)";
  } else if (SUN.classList.contains("show")) {
    document.body.style.backgroundColor = "var(--VeryDarkrayishBlue2)";
  }
}

function changeColors(selectors, color) {
  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = color;
    }
  });
}

function changeTextColors(selectors, color) {
  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    for (i = 0; i < elements.length; i++) {
      elements[i].style.color = color;
    }
  });
}

function darkCardMode() {
  changeColors(
    [".new-todo", ".todo-list", ".todo-list-completed", ".todo-menu"],
    ["var(--VeryDarkrayishBlueLM)"]
  );
  changeTextColors([".todo-txt"], ["var(--VeryLightGray"]);
}

function lightCardMode() {
  changeColors(
    [".new-todo", ".todo-list", ".todo-list-completed", ".todo-menu"],
    ["var(--VeryLightGray)"]
  );
  changeTextColors([".todo-txt"], ["var(--DarkrayishBlueLM"]);
}

////checkbox mark completed TODOs///
let completedToDO = 0;
function clickedBoxes() {
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("change", (event) => {
      const parent = checkbox.parentElement.nextElementSibling;
      if (checkbox.checked) {
        parent.style.textDecoration = "line-through";
        completedToDO = document.querySelectorAll(
          'input[type="checkbox"]:checked'
        ).length;
        elementCount();
      } else parent.style.textDecoration = "none";
      completedToDO = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      ).length;
      elementCount();
    })
  );
}
clickedBoxes();

// remove elements to DOM////////

removedToDo = [];
function remove() {
  this.parentNode.parentNode.removeChild(this.parentNode);
  removedToDo.push(this.parentNode);
  console.log(this.parentNode, removedToDo);
  elementCount();
}

for (let i = 0; i < TODOLIST.length; i++) {
  CROSS[i].addEventListener("click", remove);
}

// //Elements counts//

function elementCount() {
  let number = document.getElementById("items-left");

  let todoItemsCount = document.getElementById("central-elements")
    .childElementCount;
  number.childNodes[0].textContent = todoItemsCount - completedToDO;
}
elementCount();

function clearCompleted() {
  completedToDO = document.querySelectorAll('input[type="checkbox"]:checked');
  console.log(completedToDO);
}

CLEAR.addEventListener("click", remove);
