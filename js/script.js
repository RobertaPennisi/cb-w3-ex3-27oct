//Toggle darkMode

const darkModeBtn = document.querySelector(".toggleDarkMode");
const darkModeLogop = document.querySelector(".positive");
const darkModeLogon = document.querySelector(".negative");
const darkModeComp = document.querySelector(".competenze");
const darkModeHob = document.querySelector(".hobbies");
const darkModeTitles = document.querySelector("h2");



darkModeBtn.addEventListener(
  "click",
  () => {
    document.body.classList.toggle("darkMode");
    darkModeLogop.classList.toggle("hide");
    darkModeLogon.classList.toggle("show");
    darkModeComp.classList.toggle("darkestMode");
    darkModeHob.classList.toggle("darkestMode");
    darkModeTitles.classList.toggle("titles");

  }
);

const lightBtn = document.querySelector(".lightsOn");

lightBtn.addEventListener(
    "click",
    () => {
    darkModeHob.classList.add("light");    
    }
);

const paragraph = document.querySelectorAll("p");
document.body.onclick = () => console.log(paragraph.length);

