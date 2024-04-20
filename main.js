const menu = document.querySelector(".hamburger");
const newNav = document.querySelector(".newnav")
const banner = document.querySelector(".monito");
const hero = document.querySelector("#heroleft");
const cancel = document.querySelector(".close");
const searchIcon = document.querySelector("#inputimg");
const searchArea = document.querySelector(" #hright input");



menu.addEventListener("click", function(){
  newNav.style.display = "block"
  newNav.style.transition = "all 5s ease";
  menu.style.display = "none"
  newNav.classList.toggle("active");
  console.log("active");
 
})




cancel.addEventListener("click", function(){
  newNav.style.display = "none"
  menu.style.display = "block"
})

searchIcon.addEventListener("click", function(){
  searchArea.style.display = "block"
  searchArea.style.position = "absolute"
  searchArea.style.right = "0"
  searchArea.style.width = "300px"
  searchArea.style.transition = "all 5s ease";
  searchIcon.style.zIndex = "5"
})