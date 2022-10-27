// array to store links
let myList = []
// get the html elements
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const listEl = document.getElementById("list-el")
const tabBtn = document.getElementById("tab-btn")
// get the items from localStorage and change it to array
const listFromLocalStorage = JSON.parse(localStorage.getItem("myList"))

// check localStorage if there is a value 
if(listFromLocalStorage) {
  // If yes, assign it to empty array and render it
  myList = listFromLocalStorage
  render(myList)
}

// render the array to the dom
function render(arr) {
  let listItems = ""
  for(let i = 0;i < arr.length;i++){
    listItems += `
    <li>
      <a target="_blank" href="${arr[i]}">
        ${arr[i]}
      </a>
    </li>
    `
  }
  // only used innerHTML one time for performance
  listEl.innerHTML = listItems
}

saveBtn.addEventListener("click", function(){
  myList.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myList", JSON.stringify(myList)) // change array to string and store to localStorage
  render(myList)
})

tabBtn.addEventListener("click", function(){
  // chrome api to get the current active tab and window link
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myList.push(tabs[0].url)
    localStorage.setItem("myList", JSON.stringify(myList))
    render(myList)
  })
})

deleteBtn.addEventListener("dblclick", function(){
  // clear the array, localStorage and empty the dom
  myList = []
  localStorage.clear()
  render(myList)
})

