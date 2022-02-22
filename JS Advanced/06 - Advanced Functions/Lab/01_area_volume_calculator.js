function solve(area, vol, input) {
  const arr = JSON.parse(input);
  function calc(object) {
    return { area: area.call(object), volume: vol.call(object) };
  }
  return arr.map(calc);
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

solve(
  area,
  vol,
  `[
  {"x":"1","y":"2","z":"10"},
  {"x":"7","y":"7","z":"10"},
  {"x":"5","y":"2","z":"10"}
  ]`
);
