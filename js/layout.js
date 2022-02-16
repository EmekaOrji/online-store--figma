var speechText = document.getElementById("speechText");
var input = document.querySelector("input");
var navBar = document.querySelector(".nav");
var navItems = document.querySelectorAll(".nav_item:not(#profile)");
var profile = document.getElementById("profile");
var mainContent = document.querySelector(".main-content");
var mic = document.getElementById("speechIcon");
var theme = [document.getElementById("themeButton"), document.getElementById("themeButtonPC")];
const history = document.querySelector(".history_header");

speechText.onclick = () => {
  input.focus();
}
mic.onclick = activateMic;
mic.onblur = deActivateMic;
document.onkeydown = (e) => {
  e = e || window.event;
  var key = e.which || e.keyCode;
  if(key === 83){
      activateMic();
  }
}
function activateMic() {
  mic.classList.toggle("mic_active");
}
function deActivateMic() {
  mic.classList.remove("mic_active");
}

profile.addEventListener("click", () => {
  navBar.classList.toggle("nav_expanded");
});

theme.forEach(e => e.onclick = () => {
  document.body.classList.toggle("darkmode");
});
// window.onload = () => {
//   document.body.classList.toggle("darkmode");
// }

history.addEventListener("click", () => {
  mainContent.classList.toggle("history_expanded");
  history.parentElement.classList.toggle("history_active")
});