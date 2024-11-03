const main = document.querySelector('.main')
const crsr = document.querySelector('.cursor')
const h1 = document.querySelector("h1")

main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})


main.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "H1") {
      crsr.style.width = "100px";
      crsr.style.height = "100px";
    } else {
      crsr.style.width = "20px";
      crsr.style.height = "20px";
    }
  });