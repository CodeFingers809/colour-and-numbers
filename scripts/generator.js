let selectedGeneratorMode = "rgb";
document.querySelectorAll(".colorCodeBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("selectedColorCode")) return;
    btn.parentElement
      .querySelector(".selectedColorCode")
      .classList.remove("selectedColorCode");
    btn.classList.add("selectedColorCode");
    selectedGeneratorMode = btn.getAttribute("generatorMode");

    if (selectedGeneratorMode === "rgb") {
      document.querySelector(".hslGenerator").style.display = "none";
      document.querySelector(".rgbGenerator").style.display = "block";
    } else if (selectedGeneratorMode === "hsl") {
      document.querySelector(".hslGenerator").style.display = "block";
      document.querySelector(".rgbGenerator").style.display = "none";
    }
  });
});

document.querySelectorAll(".rgbSlider").forEach((input) => {
  input.addEventListener("input", () => {
    refreshColors("rgb");
  });
});

function refreshColors(color) {
  if (color === "rgb") {
    let redVal = parseInt(red.value);
    let greenVal = parseInt(green.value);
    let blueVal = parseInt(blue.value);
    rgbValue.innerHTML = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
    hexValue.innerHTML = `#${
      redVal.toString(16).padStart(2, "0") +
      greenVal.toString(16).padStart(2, "0") +
      blueVal.toString(16).padStart(2, "0")
    }`;
  }
}
