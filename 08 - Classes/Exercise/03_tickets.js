function solve(ticketsArr, criteria) {
  let output = [];

  ticketsArr.forEach(ticketData => {
    const [destination, price, status] = ticketData.split('|');

    output.push({ destination, price: Number(price), status });
  });

  switch (criteria) {
    case 'destination':
      return output.sort((a, b) => a.destination.localeCompare(b.destination));

    case 'price':
      return output.sort((a, b) => a.price - b.price);

    case 'status':
      return output.sort((a, b) => a.status.localeCompare(b.status));

    default:
      break;
  }
}

console.log(
  solve(
    [
      'Philadelphia|94.20|available',
      'New York City|95.99|available',
      'New York City|95.99|sold',
      'Boston|126.20|departed',
    ],
    'destination'
  )
);
