const sidemenu = document.getElementsByClassName("sidemenu");
const menubars = document.getElementById("menubars");
const menuclose = document.getElementById("menuclose");

const calender = document.getElementById("Calender");
const calenderfield = document.getElementsByClassName("calender-field");
const calenderclose = document.getElementById("calenderclose");

menubars.addEventListener("click", () => {
  sidemenu[0].classList.remove("hideSidemenu");
});

menuclose.addEventListener("click", () => {
  sidemenu[0].classList.add("hideSidemenu");
});

// calender-field-close --> calender-field (toggle)
calender.addEventListener("click", () => {
  calenderfield[0].classList.remove("calender-field-close");
});

calenderclose.addEventListener("click", ()=>{
  calenderfield[0].classList.add("calender-field-close")
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
