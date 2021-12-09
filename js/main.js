"use strict"

let menu = document.querySelector('#menu_btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// kursor cdn js

new kursor({
    type: 1
});

// scroll cdn js

AOS.init({
    offset: 20,
    duration: 1000,
});

