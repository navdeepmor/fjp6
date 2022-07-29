import java.util.*;

public class SwapGame2 {

    static class Person {                                                                               // Class - 
        int age;
        String name;

        void sayHi() {
            System.out.println(this.name + "[" + this.age + "] says hi");
        }
    }

    public static void main(String[] args) {
        Person p1 = new Person();                                                                       // p1 - ref to object | new Person() - instance / object
        p1.age = 10;
        p1.name = "A";
        p1.sayHi();

        Person p2 = new Person();
        p2.age = 20;
        p2.name = "B";
        p2.sayHi();
        
        Person temp = p1;
        p1 = p2;
        p2 = temp;
        
        p1.sayHi();
        p2.sayHi();
    }
}

/*
 
    line 23 Execution diag: 

                            |               |                               |---------------|   
                            |---------------|                           5k  |   age : 20    |                   |---------------|
                            |               |                               |   name: 2K    |                2K |       B       |
                            |               |                               |---------------|                   |---------------| 
                            |---------------|                               
          Main      p2      |      5K       |                               |---------------|           
                            |               |                           4k  |   age : 10    |                   |---------------|
                            |---------------|                               |   name: 1K    |                1K |       A       |
                    p1      |      4K       |                               |---------------|                   |---------------|
                            |               |                                     
                             ---------------                                     instance

    line 27 Execution diag: 

                            |               |                               |---------------|   
                            |---------------|                           5k  |   age : 20    |                   |---------------|
                  temp      |      4K       |                               |   name: 2K    |                2K |       B       |
                            |               |                               |---------------|                   |---------------| 
                            |---------------|                               
                    p2      |      4K       |                               |---------------|           
          Main              |               |                           4k  |   age : 10    |                   |---------------|
                            |---------------|                               |   name: 1K    |                1K |       A       |
                    p1      |      5K       |                               |---------------|                   |---------------|
                            |               |                                     
                             ---------------                                     instance 
                             
 */