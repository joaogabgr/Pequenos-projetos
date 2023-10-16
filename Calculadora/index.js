let button = document.querySelectorAll('.numero');
let display = document.querySelector('#display');

button.forEach(element => {
    element.addEventListener("click", () => {
        display.innerHTML += element.innerText;
    })
    }
);

let somar = document.querySelector('#igual');
somar.addEventListener("click", () => {
    display.innerHTML = eval(display.innerHTML);
})

let clear = document.querySelector('#clear');
clear.addEventListener("click", () => {
    display.innerHTML = "";
})

let apagar = document.querySelector("#apagar");
apagar.addEventListener("click", () => {
    display.innerHTML = display.innerHTML.slice(0,-1)
})