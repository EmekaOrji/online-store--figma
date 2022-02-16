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
mic.onclick = activateMicButton;
mic.onblur = deActivateMic;
handleSpeech();

function handleSpeech() {
  document.onkeydown = (e) => {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key === 83){
      activateMic();
    }
  }
  document.onkeyup = (e) => {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key === 83){
      deActivateMic();
    }
  }
}
function activateMic() {
  mic.classList.add("mic_active");
}
function activateMicButton() {
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