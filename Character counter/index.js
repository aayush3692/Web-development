const textAreaEl = document.getElementById("textarea");
const totalCharacterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");


textAreaEl.addEventListener("keyup", ()=> {
    updateCounter();
})

updateCounter()

function updateCounter(){
    totalCharacterEl.innerText = textAreaEl.value.length;
    remainingCounterEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}