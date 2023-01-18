const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const loader_Div = document.querySelector(".loader");
const body = document.querySelector(".content");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});



menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    });
});


window.addEventListener("load", function() {
    loader_Div.fadeOut = '1000'
});


$(window).on('load',function(){
    $(".loader").fadeOut(1000);
    $(".content").fadeIn(1000);
});