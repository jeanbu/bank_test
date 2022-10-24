const Transaction = require('./transaction')

class Account {
  constructor() {
    this.transactions = []
  }

  addTransaction = (transaction) => {
    this.transactions.push(transaction)
  }

  statement = () => {
    let ts = Date.now();
    let date_ob = new Date(ts);
    return `${date_ob.getDate()}/${date_ob.getMonth()+1}/${date_ob.getFullYear()}`;
  }

}

module.exports = Account;