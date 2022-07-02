import java.util.*;

public class Oops {

    static class Person {
        int age;
        String name;

        void sayHi() {
            System.out.println(this.name + "[" + this.age + "]" + "says hi");
        }
    }

    static class Point {
        int x;
        int y;
    }

    static class Rectangle {
        Point tl;
        Point rb;
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
    line 5 Execution diag:

                            |               |                               |               |   
                            |               |                           5k  |   age: 10     |
                            |               |                               |   name: 2K    |                2K   A
                        p3  |      5K       |                               |               |
                   ----     |               |                                   instance  
                  |     p2  |      5K       |                               
          Main -- |         |               |                       
                  |     p1  |      4K       |
                   ----     |               |

                   

    int i = 10;                         
    Integer j = 20;

                            |               |                              |                |  
                        j   |      3K       |                         3K   |      20        |
                Main        |               |                              |                | 
                        i   |      10       |
                            |               |

    Q1. 

    static class Person {
        int age;
        String name;

        void sayHi() {
            int age = 20;
            System.out.println(this.name + "[" + age + "]" + "says hi");
        }
    }

                        |               |
    p1.sayHi    this    |      5K       |                               
                        |               |                       
            Main    p1  |      4K       |
                        |               |


 */