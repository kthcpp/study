let button = document.querySelector(".quest-button")

button.onclick = function() {

    alert("Quest Started; <good luck>")

}

let stars = document.querySelector(".stars")

let colors = [

    "#FFFFFF",
    "#CFFBFF",
    "#FFE8A3",
    "#A5B4FF"

]

let sosao = Math.random()*50 + 50 

for(let i = 0; i < sosao; i++) {

    let star = document.createElement("div")

    star.classList.add("star")

    let size = Math.random() * 3 + 1

    star.style.width = size + "px"

    star.style.height = size + "px"

    star.style.top = Math.random() * 100 + "%"

    star.style.left = Math.random() * 100 + "%"

    star.style.animationDelay =

    Math.random() * 3 + "s, " +

    Math.random() * 8 + "s"

    star.style.background = colors[Math.floor(Math.random() * colors.length)]

    star.style.boxShadow = "0 0 8px #CFFBFF"

    stars.appendChild(star)

}
