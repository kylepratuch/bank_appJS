//JavaScript goes here

function Account(userName, balance) {
    this.userName = userName;
    this.balance = balance;
}

Account.prototype.deposit = function(depositAmount) {
     parseInt(this.balance += depositAmount);
    return this.balance;
}

Account.prototype.withdraw = function(withdrawAmount) {
     parseInt(this.balance -= withdrawAmount);
     return this.balance;
}
