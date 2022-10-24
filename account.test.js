const Transaction = require('./transaction')
const Account = require('./account')

describe('account', () => {
  it('gives the date of the transaction', () => {
    transaction = new Transaction();
    transaction_1 = transaction.deposit(1000);
    account = new Account();
    account.addTransaction(transaction_1)
    expect(account.statement()).toBe("24/10/2022")
  })
})