class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (!name || !salary || !position || !department || salary <= 0) {
      throw new Error('Invalid input!');
    }

    if (!this.departments[department]) {
      this.departments[department] = [];
      this.departments[department].push({
        name,
        salary,
        position,
      });
    } else {
      this.departments[department].push({
        name,
        salary,
        position,
      });
    }

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let bestAvgSalary = 0;
    let bestDep = '';
    Object.keys(this.departments).forEach(dep => {
      let salaries = [];
      this.departments[dep].forEach(emp => {
        salaries.push(emp.salary);
      });

      if (this.getAverage(salaries) > bestAvgSalary) {
        bestAvgSalary = this.getAverage(salaries);
        bestDep = dep;
      }
    });

    const bestEmployees = this.departments[bestDep]
      .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
      .map(emp => `${emp.name} ${emp.salary} ${emp.position}`);

    return `Best Department is: ${bestDep}\nAverage salary: ${bestAvgSalary.toFixed(
      2
    )}\n${bestEmployees.join('\n')}`.trim();
  }

  getAverage(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
