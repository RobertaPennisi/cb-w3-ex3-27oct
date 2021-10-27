//Toggle darkMode

const darkModeBtn = document.querySelector(".toggleDarkMode");
darkModeBtn.addEventListener(
  "click",
  () => {
    document.body.classList.toggle("darkMode");
    
  }
);

