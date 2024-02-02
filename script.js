//event handler on snake
let snake = document.querySelector(".snake");
snake.onclick = function () {
    document.getElementById("input").value = "Snake";
}

//event handler on water
let water = document.querySelector(".water");
water.onclick = function () {
    document.getElementById("input").value = "Water";
}

//event handler on gun
let gun = document.querySelector(".gun");
gun.onclick = function () {
    document.getElementById("input").value = "Gun";
}
