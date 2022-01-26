function solve(input) {
  function createEngine(hp) {
    const engine = {};
    if (hp <= 90) {
      engine.power = 90;
      engine.volume = 1800;
    } else if (hp <= 120) {
      engine.power = 120;
      engine.volume = 2400;
    } else if (hp <= 200) {
      engine.power = 200;
      engine.volume = 3500;
    }
    return engine;
  }

  let wheel = 0;
  if (input.wheelsize % 2 === 0) {
    wheel = input.wheelsize - 1;
  } else {
    wheel = input.wheelsize;
  }
  const wheels = [wheel, wheel, wheel, wheel];

  return {
    model: input.model,
    engine: createEngine(input.power),
    carriage: {
      type: input.carriage,
      color: input.color,
    },
    wheels,
  };
}

const output = solve({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17,
});

console.log(output);
