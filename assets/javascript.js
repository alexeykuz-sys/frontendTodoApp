const SUN = document.getElementById('sun');
const MOON = document.getElementById('moon');
const BGIMGLIGHT = document.getElementById('bg-image-light');
const BGIMGDARK = document.getElementById('bg-image-dark')

function lightDarkModeChanger (){
    if(MOON.classList.contains('show')){
        MOON.classList.remove('show')
        SUN.classList.remove('none')
        SUN.classList.add('show')
        bgImgHandler()
        bodyColorChange()
        darkCardMode()
        changeTextColors()
        
    } else if (SUN.classList.contains('show')){
        SUN.classList.remove('show')
        MOON.classList.remove('none')
        MOON.classList.add('show')
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
        console.log(elements)
        for(let i=0; i<elements.length; i++){
        elements[i].style.backgroundColor = color
        }
    });

}


function changeTextColors(selectors, color){
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        console.log(elements)
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