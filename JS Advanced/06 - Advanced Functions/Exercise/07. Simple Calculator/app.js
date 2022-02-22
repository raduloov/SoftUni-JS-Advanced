function calculator() {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const resultEl = document.getElementById('result');

  return {
    init(selector1, selector2, resultSelector) {},
    add() {
      resultEl.value = Number(num1.value) + Number(num2.value);
    },
    subtract() {
      resultEl.value = Number(num1.value) - Number(num2.value);
    },
  };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
