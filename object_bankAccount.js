const bankAccount = {
    accHolder : "Vimal",
    accNumber : 54526,
    accBal    : 25000,
    accType   : "Savings",

    accDeposit(credit){
        this.accBal = this.accBal + credit;
        return "Your account credited with " +credit+ " updated account balance is Rs " +this.accBal + "/-"
    },

    accWithdraw(debit){
        this.accBal = this.accBal - debit;
        return "Your account debited for " +debit+ " updated account balance is Rs " +this.accBal + "/-"
    },

    accStatus(){
        return "Your accont balance is Rs "  + this.accBal + "/-";
    }
}
console.log(bankAccount.accWithdraw(5000));
console.log(bankAccount.accDeposit(10000));
console.log(bankAccount.accStatus());