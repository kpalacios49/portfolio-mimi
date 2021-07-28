AOS.init();

const myNav = document.getElementById("nav");
const menu_btn = document.getElementById("menu-btn");
const menu = document.querySelector("#menu");
const menu_btn_close = document.querySelector("#menu-btn-close");



window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 140 || document.documentElement.scrollTop >= 140) {
      myNav.classList.add("bg-white");
    } else {
      myNav.classList.remove("bg-white");
    }
  };

menu_btn.addEventListener('click', () => menu.style.width == '80%' ? menu.style.width = '0' : menu.style.width = '80%')
menu_btn_close.addEventListener('click', () => menu.style.width == '80%' ? menu.style.width = '0' : menu.style.width = '80%')
