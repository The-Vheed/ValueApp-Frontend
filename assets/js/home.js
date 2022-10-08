let windowHeight = window.innerHeight;

let navItem = document.querySelector('.nav-list :nth-child(1) .nav_line');
let body = document.querySelector('body');


function homenavline(){
    let revealTop = body.getBoundingClientRect().top;
    let revealPoint = 200;
    if(revealTop < windowHeight - revealPoint){
        navItem.classList.add('nav_line_expand')
    }
};homenavline()