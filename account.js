const Transaction = require('./transaction')


class Account {
  constructor() {
    this.transactions = [];
    this.floatingBalance = 0;
  }

  addTransaction = (transaction) => {
    this.transactions.push(transaction);
    this.floatingBalance += transaction.amount;
    transaction.balance = this.floatingBalance;
    this.addDateToTransaction(transaction);
  }


  addDateToTransaction = (transaction) => {
    let ts = Date.now();
    let date_ob = new Date(ts);
    this.date = `${date_ob.getDate()}/${date_ob.getMonth()+1}/${date_ob.getFullYear()}`;
    transaction.date = this.date
  }

  printStatement = () => {
    console.log('date || credit || debit || balance') 
    this.transactions.reverse().forEach(transaction => {
      if (transaction.amount < 0) {
        console.log(`${transaction.date} || || ${Math.abs(transaction.amount).toFixed(2)} || ${transaction.balance.toFixed(2)}`);
      }
      else 
      { console.log(`${transaction.date} ||  ${transaction.amount.toFixed(2)}  || || ${transaction.balance.toFixed(2)}`);
    };
    });
  }

  


}

module.exports = Account;

const transaction_1 = new Transaction()
transaction_1.deposit(1000)
account = new Account();
account.addTransaction(transaction_1)
// account.addDateToTransaction(transaction_1)
const transaction_2 = new Transaction()
transaction_2.deposit(2000)
account.addTransaction(transaction_2)
const transaction_3 = new Transaction()
transaction_3.withdraw(500)
account.addTransaction(transaction_3)
console.log(account.printStatement())
