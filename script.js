let menu = document.getElementById('menu');
let nav = document.getElementById('nav');

menu.addEventListener('click', toggleDisplay)

function toggleDisplay() {
    if (nav.style.display === "none") {
        nav.style.display = "flex";
      } else {
        nav.style.display = "none";
      }
}