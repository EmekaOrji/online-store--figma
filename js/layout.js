var speechText = document.getElementById("speechText");
var input = document.querySelector("input");

speechText.onclick = () => {
  input.focus();
}

var theme = document.querySelector(".message");
theme.onclick = () => {
  document.body.classList.toggle("darkmode");
}
window.onload = () => {
  document.body.classList.toggle("darkmode");
}

var historyIcon = document.getElementById("historyIcon");
var mainContent = document.querySelector(".main-content");
historyIcon.onclick = () => {
  mainContent.classList.toggle("history-expanded");
}