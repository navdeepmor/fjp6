import java.util.*;


public class StaticDataMember {
    static class BankAccount {
        int accNo;
        int balance;
        static double rateOfIntr;                                                                                   // static belong to class

        void accInfo() {
            System.out.println(this.accNo + " balance is " + this.balance + " Rate of Interest: " + rateOfIntr);    // this - object for which it is called | we don't use this before static
        }
    }

    public static void main(String[] args) {
        BankAccount acc1 = new BankAccount();                                                                   
        acc1.accNo = 10001;
        acc1.balance = 200;
        // acc1.rateOfIntr                                                                                          // we should set rateOfIntr with acc1 because it doesn't belong to acc1, since rateOfIntr is STATIC therefore it should be set with CLASSNAME. Thus accNo & balance to acc1, while static belong to class.
        BankAccount.rateOfIntr = 4;

        acc1.accInfo();

        BankAccount acc2 = new BankAccount();
        acc2.accNo = 10011;
        acc2.balance = 330;
        acc2.rateOfIntr = 4.2;                                                                                      // since we have change rateOfIntr thus it will also change for acc1
        
        acc1.accInfo();
        acc2.accInfo();
    }
}

/*
    before main:
                    |               |                                   |                       |
                    |---------------|                                   |-----------------------|
                    |               |                    BankAccount    | rateOfIntr :          |    
                    |               |                                   | accInfo () :          |
                    |---------------|                                   |                       |
                    |               |                                   |-----------------------|
                    |               |                                   |                       |
                    |---------------|
                    |               |
                    |               |  
                    |---------------|
                    |               |        

 */