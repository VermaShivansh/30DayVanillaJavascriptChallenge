"use strict";

var uinput = document.querySelectorAll("input");
uinput.forEach(function (input) {
  return input.addEventListener("change", update);
});
uinput.forEach(function (input) {
  return input.addEventListener("change", update);
});

function update() {
  console.log(this.name);
  console.log(this.value);
  var suffix = this.dataset.sizing || '';
  console.log(suffix);

  if (this.name == 'colorpicker') {
    document.documentElement.style.setProperty("--base", "".concat(this.value).concat(suffix));
    return;
  }

  document.documentElement.style.setProperty("--".concat(this.name), "".concat(this.value).concat(suffix));
}