var speechText = document.getElementById("speechText");
var input = document.querySelector("input");

speechText.onclick = () => {
  input.focus();
}

var navBar = document.querySelector(".nav");
var navItems = document.querySelectorAll(".nav_item:not(#profile)");
var profile = document.getElementById("profile");
var theme = document.getElementById("themeSwitch");


profile.addEventListener("click", () => {
  navBar.classList.toggle("nav_expanded");
});


// profile.addEventListener("blur", () => {
//   profile.focus();
// });
// navItems.forEach(e => e.addEventListener("click", () => {
//   console.log("profile is focused");
//   if (document.activeElement === profile) {
//     profile.focus();
//   }
// }));





var theme = [document.getElementById("themeButton"), document.getElementById("themeButtonPC")];
theme.forEach(e => e.onclick = () => {
  document.body.classList.toggle("darkmode");
});
window.onload = () => {
  document.body.classList.toggle("darkmode");
}

const history = document.querySelector(".history_header");
var mainContent = document.querySelector(".main-content");
history.addEventListener("click", () => {
  mainContent.classList.toggle("history_expanded");
  history.parentElement.classList.toggle("history_active")
});