// Idea = simulate a loading bar
/* 
  Got stucked but got helped by chatgpt ai

  = My first idea is use setTimeout but the correct is setInterval
  = I learned element.disabled and clearInterval here
*/


const percent = document.getElementById("percent")
const bar = document.getElementById('inner-bar')
const startBtn = document.getElementById("start-btn")

startBtn.addEventListener('click', function() {
  startBtn.disabled = true
  let width = 0
  let interval = setInterval(function(){
    width += Math.floor(Math.random() * 10) + 1
    bar.style.width = `${width}%`
    percent.textContent = `${width}%`
    if(width >= 100) {
      startBtn.disabled = false
      bar.style.width = `100%`
      percent.textContent = `100%`
      document.getElementById('text').textContent = 'Complete!'
      clearInterval(interval)
    }
  }, 300)
})