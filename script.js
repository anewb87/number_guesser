var userInput = document.querySelector(".user-input")
var submitBtn = document.querySelector(".submit-btn")
var youGuessed = document.querySelector(".you-guessed")
var userFeedback = document.querySelector("#user-feedback")
var generatedNumber = Math.floor(Math.random() * 100) + 1

console.log("generatedNumber", generatedNumber)

submitBtn.addEventListener("click", handleSubmit)
userInput.addEventListener("keyup", disableSubmitBtn)

//disableSubmitBtn()

function handleSubmit() {
  if (userInput.value > generatedNumber) {
    youGuessed.innerText = `You guessed ${userInput.value}.`
    userFeedback.innerText = "This is too high. Guess again!";
  } else if (userInput.value < generatedNumber){
    youGuessed.innerText = `You guessed ${userInput.value}.`
    userFeedback.innerText = "This is too low. Guess again!";
  } else {
    youGuessed.innerText = `You guessed ${userInput.value}.`
    userFeedback.innerText = "You're a rockstar! Way to guess the right number!";
  }
  clearInput()
}

function disableSubmitBtn() {
  if (userInput === "") {
    submitBtn.disabled = true
  } else {
    submitBtn.disabled = false
  }
}

function clearInput() {
  userInput.value = ""
}
