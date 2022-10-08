let va_input = document.querySelectorAll('.va_input');
let placeholder = document.querySelectorAll('.placeholder');

let c = 0;
for (let x = 0; x < va_input.length; x++) {
  for (let x = 0; x < placeholder.length; x++) {
    va_input[x].addEventListener('blur', function () {
      if (va_input[x].value != '') {
        placeholder[x].style.top = '0px';
      } else {
        placeholder[x].style.top = '';
      }
    });
  }
}

let full_view = document.querySelectorAll('.full_view');
let view_image = document.querySelector('.view_image');
let property_img = document.querySelectorAll('.property_img');

for (let x = 0; x < full_view.length; x++) {
  for (let x = 0; x < property_img.length; x++) {
    full_view[x].addEventListener('click', function () {
      $('.view_img_cont').css('display', 'flex');
      view_image.src = property_img[x].getAttribute('src');
    });
  }
}

$('.x').click(function () {
  $('.view_img_cont').css('display', 'none');
});

let windowHeight = window.innerHeight;

let navItem = document.querySelector('.nav-list :nth-child(3) .nav_line');
let body = document.querySelector('body');


function p_listnavline(){
    let revealTop = body.getBoundingClientRect().top;
    let revealPoint = 200;
    if(revealTop < windowHeight - revealPoint){
        navItem.classList.add('nav_line_expand')
    }
};p_listnavline()