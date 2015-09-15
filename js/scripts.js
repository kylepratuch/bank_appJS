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

function resetFields() {
    $("input#new-user-name").val("");
    $("input#new-balance").val("");
    $("input#deposit-amount").val(0);
    $("input#withdraw-amount").val(0);
}

//jQuery starts here
$(document).ready(function() {
    var newAccount;

    $("form#new-account").submit(function(event) {
        event.preventDefault();

        var inputtedUserName = $("input#new-user-name").val();
        var inputtedBalance = parseInt($("input#new-balance").val());

        newAccount = new Account(inputtedUserName, inputtedBalance);

        $("#show-balance").show();
        $(".current-balance").text(newAccount.balance);
    });

    $("form#update-balance").submit(function(event) {
        event.preventDefault();

        var inputtedDepositAmount = parseInt($("input#deposit-amount").val());
        var inputtedWithdrawAmount = parseInt($("input#withdraw-amount").val());
        console.log(inputtedDepositAmount);

        //var count = inputtedDepositAmount.
        if(inputtedDepositAmount >= 1000000) {
            for(var i = 0; i <= 50; i++) {
                $("#dance-banana").append(
                    "<img src='http://images5.fanpop.com/image/photos/30600000/Banana-gif-bananas-30667445-140-140.gif'>"
                );
            }
            newAccount.deposit(inputtedDepositAmount);
            $("#dance-banana").fadeIn("slow");
        } else {
            newAccount.deposit(inputtedDepositAmount);
            $("#dance-banana").fadeOut("slow");
        }

        if(inputtedWithdrawAmount > newAccount.balance) {
            alert("Insufficient Bananas!");
        } else {
            newAccount.withdraw(inputtedWithdrawAmount);
        }

        $("#show-balance").show();
        $(".current-balance").text(newAccount.balance);

    resetFields();
    });
});
