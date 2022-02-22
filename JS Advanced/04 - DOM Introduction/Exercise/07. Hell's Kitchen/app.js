function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  function onClick() {
    const input = JSON.parse(document.querySelector('textarea').value);
    const bestRestaurant = document.querySelector('#bestRestaurant p');
    const workers = document.querySelector('#workers p');

    const restaurants = {};

    for (const line of input) {
      const info = line.split(' - ');
      const rest = info.shift();

      if (!restaurants.hasOwnProperty(rest)) {
        restaurants[rest] = {};
      }

      const employees = info.shift().split(', ');
      for (const employee of employees) {
        const worker = employee.split(' ')[0];
        const salary = Number(employee.split(' ')[1]);

        restaurants[rest][worker] = salary;
      }
    }

    const getAverage = rest => {
      const arr = Object.values(restaurants[rest]);
      return arr.reduce((a, b) => a + b) / arr.length;
    };

    let bestAverageSalary = 0;
    let bestRest = '';
    for (const rest in restaurants) {
      if (getAverage(rest) > bestAverageSalary) {
        bestAverageSalary = getAverage(rest);
        bestRest = rest;
      }
    }

    const bestSalary = Math.max(...Object.values(restaurants[bestRest])).toFixed(2);

    const output1 = `Name: ${bestRest} Average Salary: ${getAverage(
      bestRest
    ).toFixed(2)} Best Salary: ${bestSalary}`;

    let output2 = '';
    Object.entries(restaurants[bestRest])
      .sort((a, b) => b[1] - a[1])
      .forEach(kvp => (output2 += `Name: ${kvp[0]} With Salary: ${kvp[1]} `));

    bestRestaurant.textContent = output1;
    workers.textContent = output2;
  }
}

// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
