
let container_1 = document.querySelector("#container-1 p")
let container_2 = document.querySelector("#container-2 p")
let container_3 = document.querySelector("#container-3 p")
let container_4 = document.querySelector("#container-4 p")
const copy_1 = document.querySelector("#copy-1")
const copy_2 = document.querySelector("#copy-2")
const copy_3 = document.querySelector("#copy-3")
const copy_4 = document.querySelector("#copy-4")


function container1(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    container_1.style.backgroundColor = "#" + randomColor
    container_1.innerText = randomColor
}

function container2(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    container_2.style.backgroundColor = "#" + randomColor
    container_2.innerText = randomColor

}

function container3(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    container_3.style.backgroundColor = "#" + randomColor
    container_3.innerText = randomColor

}

function container4(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    container_4.style.backgroundColor = "#" + randomColor
    container_4.innerText = randomColor

}
function renderColor(){
    container1()
    container2()
    container3()
    container4()

}

function copy1(){
    navigator.clipboard.writeText(container_1.innerText)
    console.log(container_1.innerText)
}
function copy2(){
    navigator.clipboard.writeText(container_2.innerText)
    console.log(container_2.innerText)
}
function copy3(){
    navigator.clipboard.writeText(container_3.innerText)
    console.log(container_3.innerText)
}
function copy4(){
    navigator.clipboard.writeText(container_4.innerText)
    console.log(container_4.innerText)
}


renderColor()
container_1.addEventListener("click", container1)
container_2.addEventListener("click", container2)
container_3.addEventListener("click", container3)
container_4.addEventListener("click", container4)

window.addEventListener('keydown',function(e){
    if (e.key == " "){
        renderColor()
    }
})
copy_1.addEventListener('click',copy1)
copy_2.addEventListener('click',copy2)
copy_3.addEventListener('click',copy3)
copy_4.addEventListener('click',copy4)
