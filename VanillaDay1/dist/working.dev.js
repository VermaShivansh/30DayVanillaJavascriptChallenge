"use strict";

function playing(e) {
  console.log(e);
  var audio = document.querySelector("audio[data-key=\"".concat(e.keyCode, "\"]"));
  var element = document.querySelector("div[data-key=\"".concat(e.keyCode, "\"]"));

  if (!audio) {
    return;
  } //returns the function if audio is null


  audio.play();
  audio.currentTime = 0;
  element.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName != 'transform') {
    return;
  }

  this.classList.remove("playing");
}

var keys = document.querySelectorAll(".key");
keys.forEach(function (keys) {
  return keys.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", playing);