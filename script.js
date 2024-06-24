let displaypro = document.querySelector("#display");
let decreasepro = document.querySelector("#decrease")
let resetpro = document.querySelector("#reset")
let increasepro = document.querySelector("#increase")

let counter = 0;

decreasepro.addEventListener('click', function () {
    counter -= 1;
    displaypro.textContent = counter;
})

increasepro.addEventListener('click', function () {
    counter += 1;
    displaypro.textContent = counter;
})

reset.addEventListener('click', function () {
    displaypro.textContent = counter = 0;
})