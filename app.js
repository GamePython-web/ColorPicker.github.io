
let color = document.body.style.backgroundColor = rgb(0, 179, 255);
function container1(){
    let container1 = document.getElementById("container1")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    container1.style.backgroundColor = "#" + randomColor
    console.log(randomColor)
    container1.innerText = randomColor
}

function container2(){
    // console.log("Clicked")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let container2 = document.getElementById("container2")
    container2.style.backgroundColor = "#" + randomColor
    console.log(randomColor)
    container2.innerText = randomColor

}

function container3(){
    // console.log("Clicked")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let container3 = document.getElementById("container3")
    container3.style.backgroundColor = "#" + randomColor
    console.log(randomColor)
    container3.innerText = randomColor

}

function container4(){
    // console.log("Clicked")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let container4 = document.getElementById("container4")
    container4.style.backgroundColor = "#" + randomColor
    console.log(randomColor)
    container4.innerText = randomColor

}
