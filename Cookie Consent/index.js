// get elements on the DOM
const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")
const modalChoiceBtns = document.getElementById("modal-choice-btns")

// 1.5 seconds for pop up to appear
setTimeout(function () {
  modal.style.display = "inline"
}, 1500)

// Hide the modal when the x button is clicked
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none"
})

// flex row reverse the 2 button when hovered on the decline btn
declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("modal-btns-reverse")
})

// function to run when the user clicked the submit button
consentForm.addEventListener("submit", function (e) {
  // prevent the form from submitting on default
  e.preventDefault()
  // create a formData() to get the form's object key value pairs
  const consentFormData = new FormData(consentForm)
  const fullName = consentFormData.get("fullName")
  // Render the modal with this premade html elements
  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`
  // Add a delay for 1.5secs clear the modal and render new text
  setTimeout(function () {
    document.getElementById("upload-text").innerText = `
        Making the sale...`
  }, 1500)

  // After 3 seconds render the modal again with new template with the user's name on it
  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
    // make the close button available-
    modalCloseBtn.disabled = false
  }, 3000)
})
