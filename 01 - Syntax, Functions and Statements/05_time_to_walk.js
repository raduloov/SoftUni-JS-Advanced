function solve(steps, meters, speed) {
  const distance = steps * meters;
  const mps = speed / 3.6;
  const time = distance / mps;
  const additional = Math.floor(distance / 500);

  const min = Math.floor(time / 60);
  const sec = Math.round(time - min * 60);
  const hour = Math.floor(time / 3600);

  const total =
    (hour < 10 ? '0' : '') +
    hour +
    ':' +
    (min + additional < 10 ? '0' : '') +
    (min + additional) +
    ':' +
    (sec < 10 ? '0' : '') +
    sec;

  console.log(total);
}

solve(4000, 0.6, 5);
