function calc() {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const result = document.getElementById('sum');

  result.value = Number(num1) + Number(num2);
}
