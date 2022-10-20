formStep.classList.add("hide");

btnActive.addEventListener("click", () => {
  formStep.classList.remove("hide");
  document.getElementById("postal-code").classList.remove("hide");

  for (var property of propertyHide) {
    property.classList.remove("hide");
  }
});
btnFullActive.addEventListener("click", () => {
  if (formStep.classList.contains("hide")) {
    formStep.classList.remove("hide");
  }

  document.getElementById("postal-code").classList.add("hide");

  for (var property of propertyHide) {
    property.classList.add("hide");
  }
});
