
function playing(e){
    console.log(e)
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let element=document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!audio){return;}//returns the function if audio is null
    audio.play()
    audio.currentTime=0;
    element.classList.add("playing")
}
function removeTransition(e)
{if(e.propertyName!='transform'){return;}
this.classList.remove("playing")
}
let keys=document.querySelectorAll(`.key`)
keys.forEach(keys=>keys.addEventListener("transitionend",removeTransition))
window.addEventListener("keydown", playing)