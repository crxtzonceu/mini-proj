const inputEl = document.getElementById("input-num")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-text")
const volumeEl = document.getElementById("volume-text")
const massEl = document.getElementById("mass-text")
const mToFt = 3.281 //
const ftToM = 0.304
const lToGal = 0.264 //
const galToL = 3.78541
const kgToLbs = 2.204 //
const lbsToKg = 0.454

convertBtn.addEventListener("click", function () {
  let num = inputEl.value
  lengthEl.innerHTML = `${num} meters = ${(num * mToFt).toFixed(3)} feet | 
  ${num} feet = ${(num * ftToM).toFixed(3)} meters`

  volumeEl.innerHTML = `${num} liters = ${(num * lToGal).toFixed(3)} gallons | 
  ${num} gallons = ${(num * galToL).toFixed(3)} liters`

  massEl.innerHTML = `${num} kilos = ${(num * kgToLbs).toFixed(3)} pounds | 
  ${num} pounds = ${(num * lbsToKg).toFixed(3)} kilos`
})
