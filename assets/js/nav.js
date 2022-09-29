const nav = document.querySelector(".nav-list");
const navToggle = document.querySelector(".toggler");
const close = document.querySelector(".bx-menu-alt-right");

const sr = ScrollReveal ({
  distance: '25px',
  duration: 1000,
  reset: true
});

sr.reveal ('.page-wrapper, .views, .animate, footer',{
	delay:100, origin:'bottom'
});

// When someone clicks on the hamburger menu
navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  // If the menu is closed, open it
  if(visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
     // If the menu is open, close it
     nav.setAttribute("data-visible", false);
     navToggle.setAttribute("aria-expanded", false);
  }
});

navToggle.addEventListener("click", () => {
  close.classList.toggle("bx-menu-alt-right");
  close.classList.toggle("bx-x");
});

// let btn_effect = document.querySelectorAll('.btn_effect');
// let btn_ripple = document.querySelectorAll('.btn_ripple');

// for (let x = 0; x < btn_effect.length; x++) {
//   for (let x = 0; x < btn_ripple.length; x++) {
//     btn_effect[x].addEventListener('click', () => {
//       btn_ripple[x].classList.add('ripple_ani')
//       setTimeout(() => {
//         btn_ripple[x].style.display = 'none'
//       }, 700);
//       setTimeout(() => {
//         btn_ripple[x].classList.remove('ripple_ani')
//       }, 710);
//       setTimeout(() => {
//         btn_ripple[x].style.display = 'flex'
//       }, 720);
//     });
//   }
// }


// program for the scroll to top btn
let scroll_top = document.querySelector('.scroll_top')



if (scroll_top != null) {
  $('.scroll_top').click(function () {
    window.scrollTo(0, 10)
  })
  

  window.addEventListener('scroll', function () {
    let windowHeight = window.innerHeight;
    let body = document.querySelector('body')
    let revealTop = body.getBoundingClientRect().top;
    let revealPoint = 1100;
    if(revealTop < windowHeight - revealPoint){
      scroll_top.classList.add('scroll_top_show')
    } else {
      scroll_top.classList.remove('scroll_top_show')
    }
  });
}