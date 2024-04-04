const menu = document.querySelector(".hamburger");
const newNav = document.querySelector(".newnav")



menu.addEventListener("click", function(){
  newNav.style.display = "block"
  menu.style.display = "none"
})