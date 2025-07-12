document.addEventListener("DOMContentLoaded", () => {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const btnCalc = document.getElementById("calculate");
  const resultDiv = document.getElementById("bmi-result");

  btnCalc.addEventListener("click", () => {
    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    if (!weight || !heightCm) {
      resultDiv.textContent = "!!!";
      return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const bmiRounded = bmi.toFixed(1);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obesity";

    resultDiv.textContent = `BMI: ${bmiRounded} — ${category}`;
  });
});
