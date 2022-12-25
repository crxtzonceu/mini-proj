const hourEl = document.getElementById("hours")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById('seconds')
const ampmEl = document.getElementById('am-pm')

// function
const updateClock = () => {
  // dates
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM"

  // fixing the format
  h = h < 10 ? `0${h}` : h
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s

  if(h > 12) {
    h -= 12
    ampm = "PM"
  }

  hourEl.innerText = h
  minuteEl.innerText = m
  secondEl.innerText = s
  ampmEl.innerText = ampm
  setTimeout(() => {
    updateClock()
  }, 1000)
}

updateClock()