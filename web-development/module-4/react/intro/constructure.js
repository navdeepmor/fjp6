function bank(Name, NoOfCustomer, Balance) {
    this.name = Name;
    this.noOfCustomer = NoOfCustomer;
    this.balance = Balance;

    this.checkBalance = function () {
        console.log(`${ this.name } curr balance is  ${ this.balance }`);
    }
}

let bank1 = new bank('Bank Of Badoda', 5456711, 34519273);
console.log(bank1);
bank1.checkBalance();

let bank2 = new bank('Bank Of America', 452103, 67231292);
bank2.checkBalance();