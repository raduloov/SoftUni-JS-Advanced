function attachGradientEvents() {
  const gradientBox = document.getElementById('gradient-box');
  const gradient = document.getElementById('gradient');
  const result = document.getElementById('result');

  gradient.addEventListener('mousemove', gradientMove);
  gradient.addEventListener('mouseout', gradientOut);

  function gradientMove(event) {
    let power = event.offsetX / (event.target.clientWidth - 1);
    power = Math.trunc(power * 100);
    result.textContent = power + '%';
  }

  function gradientOut(event) {
    result.textContent = '';
  }
}
