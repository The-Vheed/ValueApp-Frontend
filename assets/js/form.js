var prevBtns = document.querySelectorAll(".btn-prev");
var nextBtns = document.querySelectorAll(".btn-next");
var progress = document.getElementById("progress");
var formSteps = document.querySelectorAll(".form-step");
var progressSteps = document.querySelectorAll(".progress-step");
var navBar = document.getElementById("navbar-nav");

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
  progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1) * 100 + "%");
}