let uinput=document.querySelectorAll("input")
uinput.forEach(input=>input.addEventListener("change",update))
uinput.forEach(input=>input.addEventListener("change",update))
function update()
{console.log(this.name)
    console.log(this.value);
    let suffix=this.dataset.sizing || '';console.log(suffix)
    if(this.name=='colorpicker')
    {   document.documentElement.style.setProperty(`--base`,`${this.value}${suffix}`);return;}
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${suffix}`)
}

