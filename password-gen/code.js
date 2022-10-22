let lengthEl = document.getElementById("length")
let warningEl = document.getElementById("warning")
let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")
let passThreeEl = document.getElementById("pass-three")
let passFourEl = document.getElementById("pass-four")
let hiddenEl = document.querySelector(".hide")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
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
  }
}

function addLength() {
  if(length < 20) {
    length += 1
    lengthEl.textContent = length
  } else if (length == 20) {
    lengthEl.textContent = length
  }
}


function displayPass() {
  passOneEl.textContent = "test1"
  passTwoEl.textContent = "test2"
  passThreeEl.textContent = "test3"
  passFourEl.textContent = "test4"
  if(hidden) {
    hiddenEl.style.visibility = "visible"
  }
}


function getRandomChar() {

}