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