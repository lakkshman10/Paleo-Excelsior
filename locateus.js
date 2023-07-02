const nav1 =  document.querySelector("#nav1")
const nav2 =  document.querySelector("#nav2");
const nav3 =  document.querySelector("#nav3");
const nav4 =  document.querySelector("#nav4");
const nav5 =  document.querySelector("#nav5");

nav1.addEventListener('click' , function() {
    window.location.href = "NavigationBar.html";

});
nav2.addEventListener('click' , function() {
    window.location.href = "About.html";
});
nav3.addEventListener('click' , function() {
    window.location.href = "menu.html";
});
nav5.addEventListener('click' , function() {
    window.location.href = "";
});
nav4.addEventListener('click' , function() {
    window.location.href = "feedbackform.html";
});