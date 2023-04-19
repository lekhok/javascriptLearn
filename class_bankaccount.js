/*Create a BankAccount class with a constructor that takes in 
accountNumber, accountHolder, and balance 
as parameters and sets them as properties on the object.
 Add methods deposit(amount) and withdraw(amount) 
 that allow deposits and withdrawals to/from the account, respectively,
  and update the balance accordingly. Also, add a method getBalance() that 
  returns the current balance of the account. */

  class BankAccount {
    constructor (accountNumber, accountHolder, balance){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount){
        this.balance = this.balance + amount
        return "Amount of " +amount + " has been credited. Updated balance is " + this.balance +"/- INR";
    }

    withdraw(amount){
        this.balance = this.balance - amount
        return "Amount of Rs " +amount + "/- has been debited. Updated balance is " + this.balance +"/- INR";
    }

    getBalance(){
        return "Your current account Balance is Rs:"+this.balance+"/- INR"
    }

  }

  const cust1 = new BankAccount (4512 , "Sahil" , 2000);
  console.log(cust1.getBalance());

  console.log(cust1.withdraw(500));
  console.log(cust1.deposit(50000));