const nav1 =  document.querySelector("#nav1")
const nav2 =  document.querySelector("#nav2");
const nav3 =  document.querySelector("#nav3");
const nav4 =  document.querySelector("#nav4");
const nav5 =  document.querySelector("#nav5");
const login = document.querySelector("#button");
console.log( nav2 );

nav2.addEventListener('click' , function() {
    window.location.href = "menu.html";

});
nav3.addEventListener('click' , function() {
    window.location.href = "About.html";
});
nav4.addEventListener('click' , function() {
    window.location.href = "Contact.html";
});
nav5.addEventListener('click' , function() {
    window.location.href = "feedbackform.html";
});
nav1.addEventListener('click' , function() {
    window.location.href = "locateus.html";
});
login.addEventListener('click' , function() {
    window.location.href = "menu.html";
});



const toggleBtn=document.querySelector('.toggle-btn')
const toggleBtnIcon=document.querySelector('.toggle-btn i')
const dropDownMenu=document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen =dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList=isOpen
  ?'fa-solid fa-xmark'
  :'fa-solid fa-bars'
}

