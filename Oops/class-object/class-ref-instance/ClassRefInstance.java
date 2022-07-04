import java.util.*;

public class ClassRefInstance {

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
        
        Person p3 = p2;
        p3.sayHi();

        p2.name = "C";
        p2.sayHi();
        p3.sayHi();
    }
}

/*  
    Line 18 Execution diag:

                            |               |                               |---------------|   
                            |---------------|                           4K  |   age : 10    |                   |---------------|
                            |               |                               |   name: 1K    |                1K |       A       |
                            |               |                               |---------------|                   |---------------| 
                            |---------------|
          sayHi             |               |                                   instance  
                      this  |      4K       |                               
                            |---------------|                       
          Main    p1        |      4K       |
                            |               |
                             ---------------           

    line 25 Execution diag: 

                            |               |                               |---------------|   
                            |---------------|                           5k  |   age : 20    |                   |---------------|
                    p3      |      5K       |                               |   name: 2K    |                2K |       B       |
                            |               |                               |---------------|                   |---------------| 
                            |---------------|                               
          Main      p2      |      5K       |                               |---------------|           
                            |               |                           4k  |   age : 10    |                   |---------------|
                            |---------------|                               |   name: 1K    |                1K |       A       |
                    p1      |      4K       |                               |---------------|                   |---------------|
                            |               |                                     
                             ---------------                                     instance
                   

    int i = 10;                         
    Integer j = 20;

                            |---------------|                              |----------------|  
                        j   |      3K       |                         3K   |      20        |
                Main        |---------------|                              |----------------| 
                        i   |      10       |
                            |---------------|

    ? incase. 

    static class Person {
        int age;
        String name;

        void sayHi() {
            int age = 20;
            System.out.println(this.name + "[" + age + "] says hi");
        }
    }

                        |---------------|
    sayHi        this   |      5K       |                               
                        |               |
                        |---------------|                       
    Main     p1         |      4K       |
                        |               |
                        |---------------|


 */