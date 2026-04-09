const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  links.classList.toggle("open");
});

links.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    toggle.classList.remove("active");
    links.classList.remove("open");
  });
});

document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !links.contains(e.target)) {
    toggle.classList.remove("active");
    links.classList.remove("open");
  }
});
