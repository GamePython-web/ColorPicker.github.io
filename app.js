
let color = document.body.style.backgroundColor = rgb(0, 179, 255);

function container1(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let container1 = document.getElementById("container1")
    container1.style.backgroundColor = "#" + randomColor
    console.log(randomColor)
    container1.innerText = randomColor
}

function container2(){
    // console.log("Clicked")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let container1 = document.getElementById("container2")
    container1.style.backgroundColor = "#" + randomColor
    console.log(randomColor)
    container1.innerText = randomColor

}

function container3(){
    // console.log("Clicked")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let container1 = document.getElementById("container3")
    container1.style.backgroundColor = "#" + randomColor
    console.log(randomColor)
    container1.innerText = randomColor

}

function container4(){
    // console.log("Clicked")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let container1 = document.getElementById("container4")
    container1.style.backgroundColor = "#" + randomColor
    console.log(randomColor)
    container1.innerText = randomColor

}