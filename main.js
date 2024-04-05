const menu = document.querySelector(".hamburger");
const newNav = document.querySelector(".newnav")
const banner = document.querySelector(".monito");
const hero = document.querySelector("#heroleft");
const cancel = document.querySelector(".close");
const searchIcon = document.querySelector("#inputimg");
const searchArea = document.querySelector(" #hright input");



menu.addEventListener("click", function(){
  newNav.style.display = "block"
  menu.style.display = "none"
})

cancel.addEventListener("click", function(){
  newNav.style.display = "none"
  menu.style.display = "block"
})

searchIcon.addEventListener("click", function(){
  searchArea.style.display = "block"
  // searchIcon.style.display = "none"
})