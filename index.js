const sidemenu = document.getElementsByClassName("sidemenu");
const menubars = document.getElementById("menubars");
const menuclose = document.getElementById("menuclose");

menubars.addEventListener("click", () => {
  sidemenu[0].classList.remove("hideSidemenu");
});

menuclose.addEventListener("click", () => {
  sidemenu[0].classList.add("hideSidemenu");
});

let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const ToggleDarkMode = () => {
  var element = document.body;
  element.classList.toggle("dark");
};

if (isDarkMode) {
  console.log("Currently in dark mode");
  ToggleDarkMode();
} else {
  console.log("Currently not in dark mode");
}
