let nav = document.querySelector('.navbar');
window.onscroll = function (){
    if(document.documentElement.scrollTop > 30){
        nav.classList.add('header-scrolled');
    } else{
        nav.classList.remove('header-scrolled');
    }
}
// remove the list on clicking the nav-links
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collaspse.collapse');
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})