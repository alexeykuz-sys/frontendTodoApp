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




// Create a new list item when clicking on 'Enter' button
function newElement() {
    let divToDo = document.createElement("div");
   
    let divTxt = document.createElement('div');
    let labelRef = document.createElement('label');
    let inputRef = document.createElement('input');
    let spanRef = document.createElement('span');
    let divCross = document.createElement('div');
    divToDo.className = 'todo-list'
    divTxt.className = 'todo-txt'
    divCross.className = 'cross'
    labelRef.className = 'checkbox-container'
    spanRef.className = 'checkmark'
    inputRef.type = 'checkbox'
    inputRef.name = 'checkbox'
    let inputValue = document.getElementById("todo-txt").value;
    let t = document.createTextNode(inputValue);
    divToDo.appendChild(labelRef)
    labelRef.appendChild(inputRef)
    labelRef.appendChild(spanRef)
    divToDo.appendChild(divTxt)
    divToDo.appendChild(divCross)
    divTxt.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("central-elements").appendChild(divToDo);
    }    
  }
  document.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && (document.activeElement.tagName.toLowerCase() !== 'button')) {
    newElement();
      console.log("New item created!");
    }
  });

////checkbox mark completed TODOs///
let completedToDO = 0;

function clickedBoxes() {
  checkboxes.forEach(checkbox =>
    checkbox.addEventListener("change", (event) => {
      const todoText = checkbox.parentElement.nextElementSibling;
      if (checkbox.checked) {
        todoText.style.textDecoration = "line-through";
        completedToDO = document.querySelectorAll(
          'input[type="checkbox"]:checked'
        ).length;
        elementCount();
      } else todoText.style.textDecoration = "none";
      completedToDO = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      ).length;
      elementCount();
    })
  );
}
clickedBoxes();


//remove elements to DOM//


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function removeToDo() {
   let div = this.parentElement;
    div.style.display = "none";
}

for (let i = 0; i < TODOLIST.length; i++) {
  CROSS[i].addEventListener("click", removeToDo);
}

//Elements counts//

function elementCount() {
    let number = document.getElementById("items-left");
    let todoItemsCount = document.getElementById("central-elements").childElementCount;
      const TODOLIST = document.querySelectorAll(".todo-list");
      let removeToDoCount = 0
      for(let i=0; i<TODOLIST.length; i++){
              if(TODOLIST[i].style.display  == 'none'){
                   removeToDoCount++
                }
            }

  number.childNodes[0].textContent = todoItemsCount-removeToDoCount - completedToDO;
console.log(todoItemsCount, removeToDoCount, completedToDO)
}


elementCount();

//-----Clear Completed Button ----//
function ClearCompleted(){
    for(let i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            checkboxes[i].parentElement.parentElement.style.display = 'none';
            console.log(checkboxes.length)
        }
    }   
}

CLEAR.addEventListener('click',ClearCompleted )