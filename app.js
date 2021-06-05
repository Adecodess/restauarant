const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();

// top-link
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;

  if (scrollHeight > 1000) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// toggle nav
let toggleMenu = () => {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};
