AOS.init();

const myNav = document.getElementById("nav");
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 140 || document.documentElement.scrollTop >= 140) {
      myNav.classList.remove("bg-gradient-1");
    } else {
      myNav.classList.add("bg-gradient-1");
    }
  };