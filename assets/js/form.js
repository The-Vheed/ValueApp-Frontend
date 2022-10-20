var prevBtns = document.querySelectorAll(".btn-prev");
var nextBtns = document.querySelectorAll(".btn-next");
var progress = document.getElementById("progress");
var formSteps = document.querySelectorAll(".form-step");
var progressSteps = document.querySelectorAll(".progress-step");
var navBar = document.getElementById("navbar-nav");
var btnActive = document.getElementById("btn-active");
var btnFullActive = document.getElementById("btn-full-active");
var formStep = document.getElementById("form-step");
var propertyHide = document.getElementsByClassName("property");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressBar();
  });
});
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressBar();
  });
});

function updateFormSteps() {
  formSteps.forEach(formStep => { 
    formStep.classList.contains("form-step-active") == formStep.classList.remove("form-step-active");
  });
  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressBar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  var progressActive = document.querySelectorAll(".progress-step-active");
  progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1) * 95 + "%");
}

// QuillJS Customization
function selectLocalImage() {}

const quill = new Quill("#text-editor", {
  modules: {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline"],
        ["link", "image", "blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }]
      ],
      handlers: {
        image: selectLocalImage
      },
    },
  },
  placeholder: "",
  theme: "snow"
});

let windowHeight = window.innerHeight;

let navItem = document.querySelector('.nav-list :nth-child(2) .nav_line');
let body = document.querySelector('body');


function valnavline(){
    let revealTop = body.getBoundingClientRect().top;
    let revealPoint = 200;
    if(revealTop < windowHeight - revealPoint){
        navItem.classList.add('nav_line_expand')
    }
};valnavline()
