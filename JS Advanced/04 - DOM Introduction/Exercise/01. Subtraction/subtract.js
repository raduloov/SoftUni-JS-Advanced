function subtract() {
  const num1 = Number(document.getElementById('firstNumber').value);
  const num2 = Number(document.getElementById('secondNumber').value);
  const result = document.getElementById('result');

  result.innerText = num1 - num2;
}
