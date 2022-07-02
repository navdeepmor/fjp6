function bankAccount(CustomerName, AccType, Balance) {
    this.customerName = CustomerName;                                                                               // here this refers to empty object  with . notation we can access property of an object, we can read a property or we can set a property  on this new empty object we can add property and we set that to arg, that we receive in function args. So in JS object are dynamic once we create them, we can always additional properies & methods to them   
    this.accType = AccType;                                                                                          
    this.balance = Balance;                                                                                         

    this.checkBalance = function() {
        console.log(`${ this.customerName } curr balance is ${ this.balance }`);
    }
}

let customer1 = new bankAccount('Navdeep', 'Saving', 0);
customer1.checkBalance();

let customer2 = new bankAccount('Jaideep', 'Current', 30000);
customer2.checkBalance();




