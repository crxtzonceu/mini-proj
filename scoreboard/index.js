let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let home = 0
let guest = 0


function homeAddOne() {
  home += 1
  homeScore.textContent = home 
}

function homeAddTwo() {
  home += 2
  homeScore.textContent = home 
}

function homeAddThree() {
  home += 3
  homeScore.textContent = home
}

function guestAddOne() {
  guest += 1
  guestScore.textContent = guest
}

function guestAddTwo() {
  guest += 2
  guestScore.textContent = guest
}

function guestAddThree() {
  guest += 3
  guestScore.textContent = guest
}

function reset() {
  home = 0
  guest = 0
  guestScore.textContent = guest
  homeScore.textContent = home
}