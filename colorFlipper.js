// khe khe
function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeC() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.getElementById("color").textContent = newColor;
}
