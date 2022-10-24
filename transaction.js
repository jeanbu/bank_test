class Transaction {

  constructor() {
    this.balance = 0;
  }

  deposit = (n) => {
    this.balance += n
  }

  withdraw = (n) => {
    this.balance -= n
  }

  balance = () => {
    return this.balance
  }
}

module.exports = Transaction;