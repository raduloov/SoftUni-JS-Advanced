function solve(input) {
  input.shift();
  const output = [];
  for (const line of input) {
    let [town, latitude, longitude] = line.split(' | ');
    town = town.replace('|', '').trim();
    latitude = Number(latitude.trim()).toFixed(2);
    longitude = Number(longitude.replace('|', '').trim()).toFixed(2);

    output.push({
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    });
  }
  console.log(JSON.stringify(output));
}

solve([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |',
]);
