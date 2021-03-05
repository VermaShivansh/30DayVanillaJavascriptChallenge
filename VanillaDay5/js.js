let panels=document.querySelectorAll(`.panel`)
function activetoggle()
{this.classList.toggle("openactive")
}
panels.forEach(panel=>panel.addEventListener("click",activetoggle))