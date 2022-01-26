function solve(data, criteria) {
  const parsedData = JSON.parse(data);
  const criteriaKey = criteria.split('-')[0];
  const criteriaValue = criteria.split('-')[1];

  let count = -1;
  parsedData.forEach(obj => {
    if (obj[criteriaKey] === criteriaValue) {
      count++;
      console.log(
        `${count}. ${obj['first_name']} ${obj['last_name']} - ${obj.email}`
      );
    }
  });
}

solve(
  `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  'last_name-Johnson'
);
