let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle('ri-close-circle-fill');
  navbar.classList.toggle('open');
}
