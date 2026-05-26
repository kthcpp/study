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

let sosao = Math.random()*100 + 50 

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

const img = new Image();
img.src = "assets/chu.png";

// kích thước mỗi ký tự trong sprite
const SIZE = 13;

// bảng ký tự trong ảnh sprite (PHẢI đúng thứ tự trong font.png)
const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

img.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const s = "HELLO WORLD";

    canvas.width = s.length * SIZE;
    canvas.height = SIZE;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawText(ctx, s, 0, 0);
};

// lấy vị trí ký tự trong sprite
function getPos(ch) {
    const index = charset.indexOf(ch);

    if (index === -1) {
        // nếu không có ký tự thì bỏ qua (space hoặc ký tự lạ)
        return null;
    }

    return {
        x: index * SIZE,
        y: 0
    };
}

// vẽ 1 ký tự
function drawChar(ctx, ch, x, y) {
    const pos = getPos(ch);
    if (!pos) return;

    ctx.drawImage(
        img,
        pos.x, pos.y,
        SIZE, SIZE,
        x, y,
        SIZE, SIZE
    );
}

// vẽ cả string
function drawText(ctx, text, startX, startY) {
    let x = startX;

    for (let i = 0; i < text.length; i++) {
        drawChar(ctx, text[i], x, startY);
        x += SIZE;
    }
}
