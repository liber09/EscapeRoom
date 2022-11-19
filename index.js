const hamburger = document.querySelector(".burgerIcon");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");

hamburger.addEventListener("click", showMenu);

function showMenu(){
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  header.classList.toggle("active");
  const style = getComputedStyle(menu);
  if (style.display === "none"){
    hamburger.setAttribute("aria-expanded",false);
  } else{
    hamburger.setAttribute("aria-expanded",true);
  }
  
}