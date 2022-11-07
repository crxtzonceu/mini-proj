// import the array of objects from another file
import { catsData } from "./data.js"
// get the elements from the dom
const emotionRadios = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")
const gifsOnlyOption = document.getElementById("gifs-only-option")
const memeModalInner = document.getElementById("meme-modal-inner")
const memeModal = document.getElementById("meme-modal")
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn")

// Event Listeners
// listen for change/select on the radio buttons
emotionRadios.addEventListener("change", highlightCheckedOption)
// listen for the modal close button
memeModalCloseBtn.addEventListener("click", closeModal)
// listen for submit button to render the cars
getImageBtn.addEventListener("click", renderCat)

// Function to remove and add the highlight class (only one can be highlighted) 
function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName("radio")
  for (let radio of radios) {
    radio.classList.remove("highlight")
  }
  // add the css style on the parent div of the selected element
  document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

// hide/close the modal to be reused again
function closeModal() {
  memeModal.style.display = "none"
}

// render the cat on the modal
function renderCat() {
    // get the single cat object and render it
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML = `
        <img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >
        `
    // show the modal to the screen
    memeModal.style.display = "flex"
}

// get only one cat on the array
function getSingleCatObject() {
    // get the matching cats array
    const catsArray = getMatchingCatsArray()

    if (catsArray.length === 1) {
        return catsArray[0]
    } else {
        // use rng to choose only one and return it
    const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
}

// get mathing cats array
function getMatchingCatsArray() {
    // get the value of the radio button that have been selected
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value
    // store a boolean for the gif checkbox
    const isGif = gifsOnlyOption.checked
    
    // filter the array depending on the selected emotion and if the checkbox is selected
    const matchingCatsArray = catsData.filter(function (cat) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif
      } else {
        return cat.emotionTags.includes(selectedEmotion)
      }
    })
    return matchingCatsArray
  }
}

// function to filter the emotions on list
function getEmotionsArray(cats) {
  const emotionsArray = []
  // filter the list and remove the duplicates
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion)
      }
    }
  }
  // return the non duplicated list
  return emotionsArray
}

// function to render the  cat emotion list
function renderEmotionsRadios(cats) {
  let radioItems = ``
  // call that function to get the filtered list
  const emotions = getEmotionsArray(cats)
  for (let emotion of emotions) {
    radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
  }
  emotionRadios.innerHTML = radioItems
}
// function call with the array data on its argument
renderEmotionsRadios(catsData)