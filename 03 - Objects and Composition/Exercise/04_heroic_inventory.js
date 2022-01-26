function solve(input) {
  const output = [];
  for (const line of input) {
    const info = line.split(' / ');
    let [name, level, items] = info;

    level = Number(level);
    items = items ? items.split(', ') : [];

    output.push({ name, level, items });
  }

  console.log(JSON.stringify(output));
}

solve([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
