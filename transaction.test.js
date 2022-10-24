const Transaction = require('./transaction')

describe('transaction', () => {
  it('adds 1000', () => {
    transaction = new Transaction();
    transaction.deposit(1000);
    expect(transaction.balance).toBe(1000);
  });

  it('add 1000 and 2000', () => {
    transaction = new Transaction();
    transaction.deposit(1000);
    transaction.deposit(2000);
    expect(transaction.balance).toBe(3000);;
  });


  it('withdraws 500 after adding 3000', () => {
    transaction = new Transaction();
    transaction.deposit(1000);
    transaction.deposit(2000);
    transaction.withdraw(500);
    expect(transaction.balance).toBe(2500);;

  })


});