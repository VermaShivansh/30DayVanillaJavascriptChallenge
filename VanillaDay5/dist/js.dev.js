"use strict";

var panels = document.querySelectorAll(".panel");

function activetoggle() {
  this.classList.toggle("openactive");
}

panels.forEach(function (panel) {
  return panel.addEventListener("click", activetoggle);
});