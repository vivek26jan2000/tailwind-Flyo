const main = document.getElementById("main");
const lightModeBtn = document.getElementById("lightModeBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

const mode = localStorage.getItem("mode");
if (mode === "darkMode") {
  main.classList.add("dark");
  lightModeBtn.classList.remove("hidden");
  darkModeBtn.classList.add("hidden");
} else {
  main.classList.remove("dark");
  lightModeBtn.classList.add("hidden");
  darkModeBtn.classList.remove("hidden");
}

lightModeBtn.addEventListener("click", (e) => {
  localStorage.removeItem("mode");
  main.classList.remove("dark");
  lightModeBtn.classList.add("hidden");
  darkModeBtn.classList.remove("hidden");
});
darkModeBtn.addEventListener("click", (e) => {
  localStorage.setItem("mode", "darkMode");
  main.classList.add("dark");
  lightModeBtn.classList.remove("hidden");
  darkModeBtn.classList.add("hidden");
});
