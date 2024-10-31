const adviceID = document.getElementById("adviceID");
const advice = document.getElementById("quote");
const button = document.querySelector(".dice");

document.addEventListener("DOMContentLoaded", function () {
  fetchQuote();
});

function fetchQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response not ok");
      }
      return res.json();
    })
    .then((data) => {
      adviceID.textContent = data.slip.id;
      advice.textContent = data.slip.advice;
    })
    .catch((error) => console.log(error));
}

button.addEventListener("click", fetchQuote);
