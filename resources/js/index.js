AOS.init();

const myNav = document.getElementById("nav");
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 140 || document.documentElement.scrollTop >= 140) {
      myNav.classList.add("bg-white");
    } else {
      myNav.classList.remove("bg-white");
    }
  };