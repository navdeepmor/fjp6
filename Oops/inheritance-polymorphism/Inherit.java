import java.util.*;

public class Inherit {

    static class P1 {
        int d1 = 1;
        int d2 = 11;

        void fn1() {
            System.out.println("P1's fn1");
        }

        void fn2() {
            System.out.println("P1's fn2");
        }
    }

    static class C1 extends P1 {
        int d1 = 2;                                                                                         // it not override as C will contain both d1 it's own & as well as P's d1
        int d3 = 20;

        void fn1() {
            System.out.println("C1's fn1");
        }

        void fn3() {
            System.out.println("C1's fn2");
        }
    } 

    public static void main(String[] args) {
        P1 obj1 = new P1();

        System.out.println(obj1.d1);
        System.out.println(obj1.d2);
        // System.out.println(obj1.d3);                                                                        // compile time error, because ref is of P & P don't have d3 
        // obj1.fun1();
        // obj1.fun2();
        // obj1.fun3();                                                                                        // compile time error, because ref is of P & don't have fun3
    }
}

/*
    Inheritance & Ploymorphism:
        - P & C all cases
            1. P ref, P instance
            2. C ref, C instance
            3. P ref, C instance    (1 & 3 are polymorphism eg, fn overriding)
            4. C ref, P instance    not allowed
         - Rules
            1. Compiler see LHS, reference 
            2. JRE see's RHS, instance then runs functions
            3. Conflict resolved by reference   


            |-------------------|        inherit        |-------------------|
       10K  |   d1   :          |         ---->    20K  |   d1   :          |
            |   d2   :          |                       |   d3   :          |
            | P fun1 :          |                       | C fun2 :          |
            | P fun2 :          |                       | C fun3 :          |
    P       |                   |                C      |                   |
            |                   |                       |                   |
            |                   |                       |                   |
            |                   |                       |                   |
            |-------------------|                       |-------------------|


            |               |                                               |---------------|
            |               |                                           10K |   d1   :      |    
            |               |               |---------------|               |   d2   :      |
            |               |           4K  |   d1   : 1    |    --->  P    | P fun1 :      |
            |               |               |   d2   : 11   |               | P fun2 :      |
            |               |               |               |               |               |
            |               |               |---------------|               |---------------|
            |               |                     Heap                              |
            |               |                                                       v       
            |---------------|                                               |---------------|
       obj1 |      4K       |                                           20K |   d2   :      |    
             ---------------                                                |   d3   :      |
                  Stack                                                C    | C fun1 :      |
                                                                            | C fun2 :      |
                                                                            |               |
                                                                            |---------------|

 */                                                                     