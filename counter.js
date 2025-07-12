document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const display = document.getElementById("value");
  document.getElementById("increase").addEventListener("click", () => {
    display.textContent = ++count;
  });
  document.getElementById("decrease").addEventListener("click", () => {
    display.textContent = --count;
  });
  document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    display.textContent = count;
  });
});
