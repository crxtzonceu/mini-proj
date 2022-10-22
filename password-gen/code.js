let lengthEl = document.getElementById("length")
let warningEl = document.getElementById("warning")
let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")
let passThreeEl = document.getElementById("pass-three")
let passFourEl = document.getElementById("pass-four")
let hiddenEl = document.querySelector(".hide")
let copyEl = document.getElementById("copy-clipboard")
const char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let hidden = true
let generatedPass = []
let length = 8


// Functions
// Warning!! this code is bad and not dry
// i just wanted to do something from basic before moving on to 
// next lesson

function minusLength() {
  if(length > 5) {
    length -= 1
    lengthEl.textContent = length
  } else if (length == 5) {
    lengthEl.textContent = length
    warningEl.textContent = "Minimum of 5 characters only!"
  }
}

function addLength() {
  if(length < 20) {
    length += 1
    lengthEl.textContent = length
  } else if (length == 20) {
    lengthEl.textContent = length
    warningEl.textContent = "Maximum of 20 characters only!"
  }
}


function displayPass() {
  let one = getRandomChar()
  let two = getRandomChar()
  let three = getRandomChar()
  let four = getRandomChar()
  passOneEl.textContent = one
  passTwoEl.textContent = two
  passThreeEl.textContent = three
  passFourEl.textContent = four
  if(hidden) {
    hiddenEl.style.visibility = "visible"
  }
  copyEl.textContent = "Click password to copy"
}


function getRandomChar() {
  let rng = ""
  for(let i = 0; i < length;i++) {
    rng += char[Math.floor(Math.random() * char.length)]
  }
  return rng
}

const copy1 = () => {
  navigator.clipboard.writeText(passOneEl.innerText)
  copyEl.textContent = "Copied!"
}
const copy2 = () => {
  navigator.clipboard.writeText(passTwoEl.innerText)
  copyEl.textContent = "Copied!"
}
const copy3 = () => { 
  navigator.clipboard.writeText(passThreeEl.innerText)
  copyEl.textContent = "Copied!"
}
const copy4 = () => {
  navigator.clipboard.writeText(passFourEl.innerText)
  copyEl.textContent = "Copied!"
}