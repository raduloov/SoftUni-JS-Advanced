function generateReport() {
  let headRowArray = Array.from(document.getElementsByTagName('input'));

  let bodyRowArray = Array.from(document.querySelectorAll('tbody tr'));

  let textArea = document.getElementById('output');

  let indices = [];

  let employees = [];

  for (let i = 0; i < headRowArray.length; i++) {
    if (headRowArray[i].checked === true) {
      indices.push(i);
    }
  }

  for (let i = 0; i < bodyRowArray.length; i++) {
    let eInfo = {};

    let tdArray = Array.from(bodyRowArray[i].children);

    for (let j = 0; j < indices.length; j++) {
      let key = headRowArray[indices[j]].name.toLowerCase();

      let value = tdArray[indices[j]].textContent;

      eInfo[key] = value;
    }

    employees.push(eInfo);
  }

  let str = JSON.stringify(employees);

  textArea.textContent = str;
}
