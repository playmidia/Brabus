let body = document.querySelector('body');
let contain = document.querySelector('.container');
let header = document.querySelector('.header');
let nav = document.querySelector('.nave');
let menu = document.querySelector('.menu');
let lines = document.querySelectorAll('.line');

menu.onclick = () => {
    nav.classList.toggle('nave-toggle');
    contain.classList.toggle('container-toggle');
    menu.classList.toggle('menu-toggle');
    for(let line of lines){
        line.classList.toggle('line-toggle');
    }
}

body.onscroll = () => {
         if(scrollY >= 75){
            header.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
        }
        else{
            header.style.backgroundColor = "rgba(255, 255, 255, 1)";
        }
    
    
}