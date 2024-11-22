const toggleBtn= document.querySelector(".toggle_btn")
const toggleBtnIcon= document.querySelector("#icon")
const toggleoff= document.querySelector("#off")
const dropDownMenu= document.querySelector(".dropdown_menu")

var check=0
toggleBtnIcon.addEventListener("click", function(){
  if(check==0){
    dropDownMenu.style.display="block"
    check=1
  }else{
    dropDownMenu.style.display="none"
    check=0
  }
})