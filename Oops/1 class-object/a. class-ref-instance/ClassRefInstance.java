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
                                                                                           Person class 
                            |               |              |---------------|           |--------------------|
                            |               |              |   20K         |           |  sayHi() {         |   
                            |---------------|          4K  |   age : 10    |       20K |    ..              |               |---------------|                  
                            |               |              |   name: 1K    |           |  }                 |            1K |       A       | 
                            |               |              |---------------|           |--------------------|               |---------------| 
                            |---------------|                                          
          sayHi             |               |                  instance                     
                      this  |      4K       |                               
                            |---------------|                       
          Main    p1        |      4K       |
                            |               |
                             ---------------           

    line 25 Execution diag: 

                            |---------------|              |---------------|            |-------------------|
                            |               |              |   20K         |            |                   |  
                            |               |          5k  |   age : 20    |        20K |  sayHi() { .. }   |               |---------------|
                            |---------------|              |   name: 2K    |            |                   |            2K |       B       |
                    p3      |      5K       |              |---------------|            |-------------------|               |---------------| 
                            |               |                                                              
          Main              |---------------|              |---------------|     
                    p2      |      5K       |              |   20K         |         
                            |               |          4k  |   age : 10    |                                                |---------------|
                            |---------------|              |   name: 1K    |                                             1K |       A       |
                    p1      |      4K       |              |---------------|                                                |---------------|
                            |               |                                     
                             ---------------                   instance
                   

    int i = 10;                                                                                         // primitive data type  FASTER                        
    Integer j = 20;                                                                                     // Integer is a class

                            |---------------|              |----------------|  
                        j   |      3K       |         3K   |      20        |
                Main        |---------------|              |----------------| 
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

    In c++:
        line 17
                            |---------------|
                            |               |
                            |               |                               
                            |---------------|                       
            Main    p1      |  age  :  10   |
                            |  name :  "A"  |
                             ---------------        
                                 Stack

    Ref:
        why variable decalred outside main menthod live in heap, not in stack ?
            - If we decalre a variable outside main method then it's created in heap because it's a data member of Main class.

    JAVA: 
        JRE 
            loader 
                - Would get an bit code. In which it scan & searchs that class which has psvm fn in it. 
 */