const SUN = document.getElementById('sun');
const MOON = document.getElementById('moon');
const BGIMGLIGHT = document.getElementById('bg-image-light');
const BGIMGDARK = document.getElementById('bg-image-dark')
const CROSS = document.querySelectorAll('.cross')
const checkboxes = document.querySelectorAll("input[name=checkbox]");




function lightDarkModeChanger (){
    if(MOON.classList.contains('show')){
        MOON.classList.remove('show')
        SUN.classList.toggle('show')
        bgImgHandler()
        bodyColorChange()
        darkCardMode()
        changeTextColors()
        
    } else if (SUN.classList.contains('show')){
        SUN.classList.remove('show')
        MOON.classList.toggle('show')
        bgImgHandler()
        bodyColorChange()
        lightCardMode()
        changeTextColors()
    }
}

MOON.addEventListener('click', lightDarkModeChanger)
SUN.addEventListener('click', lightDarkModeChanger)

function bgImgHandler(){
    if(MOON.classList.contains('show')){
        BGIMGLIGHT.classList.remove('show')
        BGIMGDARK.classList.remove('none')
        BGIMGDARK.classList.add('show')
        
    } else if (SUN.classList.contains('show')){
        BGIMGDARK.classList.add('none')
        BGIMGDARK.classList.remove('show')
        BGIMGLIGHT.classList.add('show')
       
    }
}


function bodyColorChange(){
    if(MOON.classList.contains('show')){
        document.body.style.backgroundColor = 'var(--VeryLighGrayishBlue)';
       
        
    } else if (SUN.classList.contains('show')){
        document.body.style.backgroundColor = 'var(--VeryDarkrayishBlue2)';
      
    }
}

function changeColors(selectors, color){
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        for(let i=0; i<elements.length; i++){
        elements[i].style.backgroundColor = color
        }
    });

}


function changeTextColors(selectors, color){
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        for( i=0; i<elements.length; i++){
        elements[i].style.color = color
        }
    })

}

function darkCardMode(){
    changeColors(['.new-todo','.todo-list', '.todo-list-completed', '.todo-menu'], ['var(--VeryDarkrayishBlueLM)'])
   changeTextColors(['.todo-txt'], ['var(--VeryLightGray'])
}

function lightCardMode(){
    changeColors(['.new-todo','.todo-list', '.todo-list-completed', '.todo-menu'], ['var(--VeryLightGray)']);
    changeTextColors(['.todo-txt'],['var(--DarkrayishBlueLM']);
}

// // remove elements to DOM////////


function remove() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

  var element = document.querySelectorAll('.todo-list');  
  for (var i = 0; i < element.length; i++) {
    CROSS[i].addEventListener('click', remove);
    
  }

////checkbox mark completed TODOs///
let count = 0
function clickedBoxes(){
checkboxes.forEach(checkbox => checkbox.addEventListener('change', event => {

  const parent = checkbox.parentElement.nextElementSibling;
  if (checkbox.checked) {
    parent.style.textDecoration = 'line-through';
    
  count = document.querySelectorAll('input[type="checkbox"]:checked').length
  elementCount()
   console.log(count)
    }
  
  else parent.style.textDecoration = 'none';  
  count = document.querySelectorAll('input[type="checkbox"]:checked').length
  elementCount() 

}));
}
clickedBoxes()
// alert(document.querySelectorAll('input[type="checkbox"]:checked').length)

// //Elements counts//   


function elementCount(){    
    let number = document.getElementById('items-left');
    let todoItemsCount = document.getElementById('central-elements').childElementCount;
    let x = count
    console.log(x, count)
    number.childNodes[0].textContent = todoItemsCount - count

}
elementCount()

// function elementCount(){
  
//     checkboxes.forEach(checkbox => checkbox.addEventListener('click', event => {
//         let checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
//         console.log(checkbox.checked)
//         let number = document.getElementById('items-left');
//         let todoItemsCount = document.getElementById('central-elements').childElementCount;
//     let count = 0
    
//     for(i=0; i< checkedBoxes.length; i++){
//         count++ 
//     }
//     console.log( count)
//     console.log(todoItemsCount)
//     number.childNodes[0].textContent = todoItemsCount-count
// }))

// }
// elementCount()

// function newTodo(){
// // add new elements to DOM////////
// // Get the element you want to add your new element before or after
// var tree = document.createDocumentFragment();
// var target = document.querySelector('#new-todo');

// // Create the new element
// // This can be any valid HTML element: p, article, span, etc...
// var div = document.createElement('div');
// var classAtr = div.setAttribute("class", "todo-list");
// var div


// // Add content to the new element
// div.innerHTML = 'Your content, markup, etc.';

// // You could also add classes, IDs, and so on
// // div is a fully manipulatable DOM Node

// // Insert the element before our target element
// target.parentNode.insertBefore( div, target );

// // Insert the element after our target element
// // target.parentNode.insertBefore( div, target.nextSibling );

// }
// // delete elements marked as a complete //




   

