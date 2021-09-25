let selectedGameMode = "rgb";
let correctColor;
let gameWon;
gameRunner();
document.querySelectorAll(".colorCodeBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("selectedColorCode")) return;
    btn.parentElement
      .querySelector(".selectedColorCode")
      .classList.remove("selectedColorCode");
    btn.classList.add("selectedColorCode");
    selectedGameMode = btn.getAttribute("gameMode");
    gameRunner();
  });
});

function randomColorGenerator() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  if (selectedGameMode == "rgb") {
    return `rgb(${red}, ${green}, ${blue})`;
  } else if (selectedGameMode == "hex") {
    let hexRed = red.toString(16).padStart(2, "0");
    let hexGreen = green.toString(16).padStart(2, "0");
    let hexBlue = blue.toString(16).padStart(2, "0");
    return `#${hexRed + hexGreen + hexBlue}`;
  } else if (selectedGameMode == "hsl") {
    let h = Math.round(Math.random() * 360);
    let s = Math.round(Math.random() * 100) + "%";
    let l = Math.round(Math.random() * 100) + "%";
    return `hsl(${h}deg ${s} ${l})`;
  }
}

function gameRunner() {
  document.querySelector(".gameMessage").innerHTML = "Select from below!";
  correctColor = randomColorGenerator();
  let randomNumber = Math.floor(Math.random() * 6);
  document.querySelectorAll(".gameColorOption").forEach((btn) => {
    btn.setAttribute("style", "background-color: " + randomColorGenerator());
  });
  document
    .querySelectorAll(".gameColorOption")
    [randomNumber].setAttribute("style", "background-color: " + correctColor);

  document.querySelector(".gameQtsColor").innerHTML = correctColor;
  document.querySelectorAll(".gameColorOption").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (
        e.target.getAttribute("style").substr(18) === correctColor &&
        !gameWon
      ) {
        document.querySelector(
          ".gameMessage"
        ).innerHTML = `Correct!<br><button class="playAgainBtn">Play Again!</button>`;
        document.querySelectorAll(".gameColorOption").forEach((btn) => {
          btn.style.backgroundColor = correctColor;
        });
        gameWon = true;
        e.target.style.transform = "scale(1.2)";
        e.target.style.border = "4px solid chartreuse";
        document
          .querySelector(".playAgainBtn")
          .addEventListener("click", () => {
            gameRunner();
            gameWon = false;
          });
      } else if (
        e.target.getAttribute("style").substr(18) !== correctColor &&
        !gameWon
      ) {
        document.querySelector(".gameMessage").innerHTML = `Wrong!`;
        e.target.style.transform = "scale(1.2)";
        e.target.style.border = "4px solid red";
      }
    });
  });
}
