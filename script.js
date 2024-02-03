// choosing random number b/w 0 to 2
let game = Math.floor(Math.random() * 3);
console.log(game);


let choose = ["Snake", "Water", "Gun"][game];
console.log(choose);


let input = document.getElementById("input");
let popUp = document.querySelector(".pop-up");
let para = document.querySelector(".para");

//event handler on snake
let snake = document.querySelector(".snake");

snake.onclick = function () {
    popUp.style.display = "flex";
    input.value = "Snake";
    console.log(input.value);
    if (input.value === choose) {
        para.innerHTML = `<h4 style = "font-size: 23px;">It's a TIE !!!</h4>`;
    } else if (input.value && choose == "Water") {
        para.innerHTML = `<h4 style = "font-size: 23px;">The winner is USER !!!</h4> <br>
        <span style = "font-weight: 700; font-size: 19px">USER: </span>${input.value} <br><span style = "font-weight: 700; font-size: 19px">SYSTEM: </span>${choose} `;
    } else if (input.value && choose == "Gun") {
        para.innerHTML = `<h4 style = "font-size: 23px;">The winner is SYSTEM !!!</h4> <br>
        <span style = "font-weight: 700; font-size: 19px">USER: </span>${input.value} <br><span style = "font-weight: 700; font-size: 19px">SYSTEM: </span>${choose}`;
    }
}

//event handler on water
let water = document.querySelector(".water");

water.onclick = function () {
    popUp.style.display = "flex";
    input.value = "Water";
    console.log(input.value);
    if (input.value === choose) {
        para.innerHTML = `<h4 style = "font-size: 23px;">It's a TIE !!!</h4> <br>`;
    } else if (input.value && choose == "Snake") {
        para.innerHTML = `<h4 style = "font-size: 23px;">The winner is SYSTEM !!!</h4> <br>
        <span style = "font-weight: 700; font-size: 19px">USER: </span>${input.value} <br><span style = "font-weight: 700; font-size: 19px">SYSTEM: </span>${choose}`;
    } else if (input.value && choose == "Gun") {
        para.innerHTML = `<h4 style = "font-size: 23px;">The winner is USER !!!</h4> <br>
        <span style = "font-weight: 700; font-size: 19px">USER: </span>${input.value} <br><span style = "font-weight: 700; font-size: 19px">SYSTEM: </span>${choose}`;
    }
}

// event handler on gun
let gun = document.querySelector(".gun");

gun.onclick = function () {
    popUp.style.display = "flex";
    input.value = "Gun";
    console.log(input.value);
    if (input.value === choose) {
        para.innerHTML = `<h4 style = "font-size: 23px;">It's a TIE !!!</h4> <br>`;
    } else if (input.value && choose == "Snake") {
        para.innerHTML = `<h4 style = "font-size: 23px;">The winner is USER !!!</h4><br>
        <span style = "font-weight: 700; font-size: 19px">USER: </span>${input.value} <br> <span style = "font-weight: 700; font-size: 19px">SYSTEM: </span>${choose}`;
    } else if (input.value && choose == "Water") {
        para.innerHTML = `<h4 style = "font-size: 23px;">The winner is SYSTEM !!!</h4> <br>
        <span style = "font-weight: 700; font-size: 19px">USER: </span>${input.value} <br><span style = "font-weight: 700; font-size: 19px">SYSTEM:</span> ${choose}`;
    }
}
