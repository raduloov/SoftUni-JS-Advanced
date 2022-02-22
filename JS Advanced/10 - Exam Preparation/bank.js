class Bank {
  constructor(bankName) {
    this._bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    if (this.allCustomers.find(cust => cust.personalId === customer.personalId)) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} is already our customer!`
      );
    }

    this.allCustomers.push(customer);
    return customer;
  }

  depositMoney(personalId, amount) {
    const customer = this.allCustomers.find(cust => cust.personalId === personalId);

    if (!customer) {
      throw new Error('We have no customer with this ID!');
    }

    if (!customer.totalMoney) {
      customer.totalMoney = 0;
    }

    if (!customer.transactions) {
      customer.transactions = [];
    }

    customer.totalMoney += amount;
    customer.transactions.unshift(
      `${customer.firstName} ${customer.lastName} made deposit of ${amount}$`
    );
    return `${customer.totalMoney}$`;
  }

  withdrawMoney(personalId, amount) {
    const customer = this.allCustomers.find(cust => cust.personalId === personalId);

    if (!customer) {
      throw new Error('We have no customer with this ID!');
    }

    if (customer.totalMoney < amount) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`
      );
    }

    if (!customer.totalMoney) {
      customer.totalMoney = 0;
    }

    if (!customer.transactions) {
      customer.transactions = [];
    }

    customer.totalMoney -= amount;
    customer.transactions.unshift(
      `${customer.firstName} ${customer.lastName} withdrew ${amount}$`
    );
    return `${customer.totalMoney}$`;
  }

  customerInfo(personalId) {
    const customer = this.allCustomers.find(cust => cust.personalId === personalId);

    if (!customer) {
      throw new Error('We have no customer with this ID!');
    }

    let count = customer.transactions.length;
    return `Bank name: ${this._bankName}\nCustomer name: ${customer.firstName} ${
      customer.lastName
    }\nCustomer ID: ${customer.personalId}\nTotal Money: ${
      customer.totalMoney
    }$\nTransactions:\n${customer.transactions
      .map(trans => {
        const str = `${count}. ${trans}!`;
        count--;
        return str;
      })
      .join('\n')}`;
  }
}

const bank = new Bank('SoftUni Bank');

console.log(
  bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 })
);
console.log(
  bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 })
);

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
