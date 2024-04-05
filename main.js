const menu = document.querySelector(".hamburger");
const newNav = document.querySelector(".newnav")
const banner = document.querySelector(".monito");
const hero = document.querySelector("#heroleft");
const cancel = document.querySelector(".close");



menu.addEventListener("click", function(){
  newNav.style.display = "block"
  menu.style.display = "none"
})

cancel.addEventListener("click", function(){
  newNav.style.display = "none"
  menu.style.display = "block"
})