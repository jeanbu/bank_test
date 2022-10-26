const Transaction = require('./transaction')
const Account = require('./account')

describe('account', () => {

    xit('gives the date of the transaction, the amount and the balance', () => {
      const transaction_1 = new Transaction()
      transaction_1.deposit(1000)
      account = new Account();
      account.addTransaction(transaction_1)
      account.addDateToTransaction(transaction_1)
      expect(account.printStatement()).toBe("26/10/2022 || 1000 || || 1000")
    })

    xit('gives the date of two transaction, the amount and the balance', () => {
      const transaction_1 = new Transaction()
      transaction_1.deposit(1000)
      account = new Account();
      account.addTransaction(transaction_1)
      account.addDateToTransaction(transaction_1)
      const transaction_2 = new Transaction()
      transaction_2.deposit(2000)
      account.addTransaction(transaction_2)
      account.addDateToTransaction(transaction_2)
      const transaction_3 = new Transaction()
      transaction_3.withdraw(500)
      account.addTransaction(transaction_3)
      account.addDateToTransaction(transaction_3)
      expect(account.printStatement()).toMatch("26/10/2022 || 1000 || || 1000")
    })
})