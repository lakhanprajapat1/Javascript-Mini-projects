bulb=document.querySelector("#img")
body = document.querySelector("body")
btnOn=document.querySelector("#on")
btnOff=document.querySelector("#off")
h1=document.querySelector("h1")


btnOn.addEventListener("click", ()=>{
    body.style.backgroundColor="#0f0d0d"
    h1.innerHTML="Bulb ON"
    h1.style.color="white"
    bulb.style.backgroundImage="url(/assets/on.png)"
})

btnOff.addEventListener("click", ()=>{
    body.style.backgroundColor="white"
    bulb.style.backgroundImage="url(/assets/of.png)"
    h1.innerHTML="Bulb OFF"
    h1.style.color="black"
})