var anim = false
var canPlay = true

window.addEventListener("DOMContentLoaded", (event) => {

    const pencil = document.getElementsByClassName("pencil")


    pencil[0].addEventListener("animationend", (event) => {
        canPlay = true
    });

    pencil[0].addEventListener("mouseover", (event) => {
        if (canPlay) {
            canPlay = false
            pencil[0].classList.remove((anim) ? "animated2" : "animated1")
            pencil[0].classList.add((anim) ? "animated1" : "animated2")
            anim = !anim
        }
    })
})

// onmouseover =  (event) => {
//     pencil[0].classList.add("animated")
// }