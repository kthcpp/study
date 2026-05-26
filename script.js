let button = document.querySelector(".quest-button")

button.onclick = function() {

    alert("Quest Started; <good luck>")

}

let cat = document.querySelector(".cat")

let cattap = document.querySelector(".cattap")

cattap.onclick = function() {

    cat.style.transform = "translateY(-50px)"

    setTimeout(function() {

        cat.style.transform = "translateY(0px)"

    }, 300)
}