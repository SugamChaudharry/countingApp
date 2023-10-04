let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let timeGlole = document.getElementById("time_gole")
let count = 0;

function rendomTime (){
    let min = Math.floor(Math.random() * 100);
    timeGlole.textContent = min 
}

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    timeGlole.textContent = "count ="
}
