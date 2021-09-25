let selectedGameMode = "rgb";
gameRunner();
document.querySelectorAll(".colorCodeBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
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
  if (selectedGameMode === "rgb") {
    return `rgb(${red}, ${green}, ${blue})`;
  } else if (selectedGameMode === "hex") {
    let hexRed =
      red.toString(16).length === 2 ? red.toString(16) : "0" + red.toString(16);
    let hexGreen =
      green.toString(16).length === 2
        ? green.toString(16)
        : "0" + green.toString(16);
    let hexBlue =
      blue.toString(16).length === 2
        ? blue.toString(16)
        : "0" + blue.toString(16);
    return `#${hexRed + hexGreen + hexBlue}`;
  } else if (selectedGameMode === "hsl") {
    let h = Math.floor(Math.random() * 361);
    let s = Math.floor(Math.random() * 101) + "%";
    let l = Math.floor(Math.random() * 101) + "%";
    return `hsl(${h}, ${s}, ${l})`;
  }
}

function gameRunner() {
  let correctColor = randomColorGenerator();
  let randomNumber = Math.floor(Math.random() * 6);
  document.querySelectorAll(".gameColorOption").forEach((btn) => {
    btn.style.backgroundColor = randomColorGenerator();
  });
  document.querySelectorAll(".gameColorOption")[
    randomNumber
  ].style.backgroundColor = correctColor;

  document.querySelector(".gameQtsColor").innerHTML = correctColor;
  document.querySelectorAll(".gameColorOption").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.style.backgroundColor === correctColor) {
        document.querySelector(".gameMessage").innerHTML = "Correct!";
        document.querySelectorAll(".gameColorOption").forEach((btn) => {
          btn.style.backgroundColor = correctColor;
        });
      } else {
        document.querySelector(".gameMessage").innerHTML = "Wrong!";
        e.target.style.transform = "scale(1.2)";
        e.target.style.border = "4px solid red";
      }
    });
  });
}
