let myList = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn").addEventListener("click", saveInput)
const listEl = document.getElementById("list-el")


function saveInput() {
  myList.push(inputEl.value)
  inputEl.value = ""
  renderList()
}

function renderList() {
  let listItems = ""
  for(let i = 0;i < myList.length;i++) {
    listItems += `<li>${myList[i]}</li>`
  }
  listEl.innerHTML = listItems
}