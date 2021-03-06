function solve(speed, area) {
  let limit = 0;
  switch (area) {
    case 'motorway':
      limit = 130;
      break;
    case 'interstate':
      limit = 90;
      break;
    case 'city':
      limit = 50;
      break;
    case 'residential':
      limit = 20;
      break;
  }

  if (speed <= limit) {
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  } else {
    const differance = speed - limit;

    let status = '';
    if (differance <= 20) status = 'speeding';
    else if (differance <= 40) status = 'excessive speeding';
    else status = 'reckless driving';

    console.log(
      `The speed is ${differance} km/h faster than the allowed speed of ${limit} - ${status}`
    );
  }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
