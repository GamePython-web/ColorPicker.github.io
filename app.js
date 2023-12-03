
// let color = document.body.style.backgroundColor = rgb(0, 179, 255);
let container_1 = document.querySelector("#container-1 p")
let container_2 = document.querySelector("#container-2 p")
let container_3 = document.querySelector("#container-3 p")
let container_4 = document.querySelector("#container-4 p")


function container1(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    container_1.style.backgroundColor = "#" + randomColor
    container_1.innerText = randomColor
}

function container2(){
    // console.log("Clicked")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    container_2.style.backgroundColor = "#" + randomColor
    container_2.innerText = randomColor

}

function container3(){
    // console.log("Clicked")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    container_3.style.backgroundColor = "#" + randomColor
    container_3.innerText = randomColor

}

function container4(){
    // console.log("Clicked")
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    container_4.style.backgroundColor = "#" + randomColor
    container_4.innerText = randomColor

}
container1()
container2()
container3()
container4()
container_1.addEventListener("click", container1)
container_2.addEventListener("click", container2)
container_3.addEventListener("click", container3)
container_4.addEventListener("click", container4)

