//JavaScript specs go here.
describe('Account', function() {

    it("creates a new user with a name and initial deposit amount", function() {
        var testAccount = new Account("Lucile Bluth", 100);
        expect(testAccount.userName).to.equal("Lucile Bluth");
        expect(testAccount.balance).to.equal(100);
    });

    it("checks the balance of the account", function() {
        var testAccount = new Account("Lucile Bluth", 100);
        expect(testAccount.balance).to.equal(100);
    });

    it("checks the account balance after a deposit is made", function() {
        var testAccount = new Account("Lucile Bluth", 100);
        var depositAmount = 150;
        expect(testAccount.deposit(depositAmount)).to.equal(250);
    });

    it("checks the account balance after a withdrawal is made", function() {
        var testAccount = new Account("Lucile Bluth", 100);
        var withdrawAmount = 50;
        expect(testAccount.withdraw(withdrawAmount)).to.equal(50);
    });

});
