// script.js
const toggleButton = document.getElementById("toggleButton");
const windowDiv = document.getElementById("window");

toggleButton.addEventListener("click", () => {
  if (windowDiv.classList.contains("active")) {
    windowDiv.classList.remove("active");
    toggleButton.textContent = "toggle window";
  } else {
    windowDiv.classList.add("active");
    toggleButton.textContent = "close window";
  }
});
