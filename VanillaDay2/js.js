let second=document.querySelector('.second')
let minute=document.querySelector('.minute')
let hour=document.querySelector('.hour')
let now=new Date();
let seco=now.getSeconds()*6;
let minuto=now.getMinutes()*6+(seco/360)*6;
let houro=now.getHours()*30 + (minuto/360)*30;
function clock(){
    let now=new Date();
    seco=seco+6
    minuto=minuto+0.1
    houro=houro+(6/360)
    second.style.transform=`rotate(${seco+90}deg)`
    minute.style.transform=`rotate(${minuto+90}deg)`
    hour.style.transform=`rotate(${houro+90}deg)`
}
setInterval(clock,1000)