let selectedGameMode = "rgb";
document.querySelectorAll(".colorCodeBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("selectedColorCode")) return;
    btn.parentElement
      .querySelector(".selectedColorCode")
      .classList.remove("selectedColorCode");
    btn.classList.add("selectedColorCode");
    selectedGameMode = btn.getAttribute("gameMode");
    
  });
});
