const questionEl = document.getElementById('question')
const formEl = document.getElementById('form')
const inputEl = document.getElementById('input')
const scoreEl = document.getElementById('score')
const num1 = Math.floor(Math.random() * 10) + 1
const num2 = Math.floor(Math.random() * 10) + 1
const correctAns = num1 * num2

let score = JSON.parse(localStorage.getItem('score'))

if(!score) {
  score = 0
}

questionEl.innerText = `What is ${num1} multiply by ${num2}?`
scoreEl.innerText = `score: ${score}`

formEl.addEventListener('submit', () => {
  const userAns = +inputEl.value
  if(userAns == correctAns) {
    score++
    updateLocalStorage()
  } else {
    score--
    updateLocalStorage()
  }
})


function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score))
}