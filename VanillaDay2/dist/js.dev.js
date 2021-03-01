"use strict";

var second = document.querySelector('.second');
var minute = document.querySelector('.minute');
var hour = document.querySelector('.hour');
var now = new Date();
var seco = now.getSeconds() * 6;
var minuto = now.getMinutes() * 6 + seco / 360 * 6;
var houro = now.getHours() * 30 + minuto / 360 * 30;

function clock() {
  var now = new Date();
  seco = seco + 6;
  minuto = minuto + 0.1;
  houro = houro + 6 / 360;
  second.style.transform = "rotate(".concat(seco + 90, "deg)");
  minute.style.transform = "rotate(".concat(minuto + 90, "deg)");
  hour.style.transform = "rotate(".concat(houro + 90, "deg)");
}

setInterval(clock, 1000);