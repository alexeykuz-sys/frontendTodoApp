const SUN = document.getElementById('sun');
const MOON = document.getElementById('moon');
const BGIMGLIGHT = document.getElementById('bg-image-light');
const BGIMGDARK = document.getElementById('bg-image-dark')

function changeMoonSun (){
    if(MOON.classList.contains('show')){
        MOON.classList.remove('show')
        SUN.classList.remove('none')
        SUN.classList.add('show')
        BGIMGLIGHT.classList.remove('show')
        BGIMGDARK.classList.remove('none')
        BGIMGDARK.classList.add('show')
        bodyColorChange()
    } else if (SUN.classList.contains('show')){
        SUN.classList.remove('show')
        MOON.classList.remove('none')
        MOON.classList.add('show')
        BGIMGDARK.classList.add('none')
        BGIMGDARK.classList.remove('show')
        BGIMGLIGHT.classList.add('show')
        bodyColorChange()
    }
}

MOON.addEventListener('click', changeMoonSun)
SUN.addEventListener('click', changeMoonSun)

function bodyColorChange(){
    if(MOON.classList.contains('show')){
        document.body.style.backgroundColor = 'var(--VeryDarkesaturatedBlue)';
        darkCardMode()
        
    } else if (SUN.classList.contains('show')){
        document.body.style.backgroundColor = 'var(--DarkGrayishBlueLM)';
       lightCardMode
    }
}

function changeColors(selectors, color){
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        for(let i=0; i<elements.length; i++)
        elements[i].style.backgroundColor = color
        
    });

}

function darkCardMode(){
    changeColors(['.todo-list', '.todo-list-completed', '.todo-menu'], ['var(--DarkGrayishBlue)'])
   
}

function lightCardMode(){
    changeColors(['.todo-list', '.todo-list-completed', '.todo-menu'], ['var(--LightGrayishBlue)'])
   
}