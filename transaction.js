class Transaction {

  deposit = (n) => {
    this.amount = n;
    this.isWithdrawl = false;

  }

  withdraw = (n) => {
    this.isWithdrawl = true;
    this.amount = -n;
  }
  
}

module.exports = Transaction;

