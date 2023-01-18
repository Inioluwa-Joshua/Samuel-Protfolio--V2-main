const hamburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");
const header = document.querySelector('.header.container');
const loader_Div = document.querySelector(".loader");
const body = document.querySelector(".content");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',() => {
        var scroll_position = window.scrollY;
        if (scroll_position > 150){
            header.style.backgroundColor = '#29323c';
        } else{
            header.style.backgroundColor = 'transparent';
        }
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