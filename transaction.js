class Transaction {

  constructor() {
    this.amount = 0;
    this.balance = 0;
  }

  deposit = (n) => {
    this.balance += n;
    return n;
  }

  withdraw = (n) => {
    this.balance -= n;
    return -n;
  }

  balance = () => {
    return this.balance
  }
}

module.exports = Transaction;