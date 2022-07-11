import java.util.*;

class NonStaticInnerClass {

    class Person {

    }

    static class Student {
        int age;
        String name;
    }

    public static void main(String[] args) {
        Student s1 = new Student();
        //Person p1 = new Person(); // error, Person class is non-static 
        NonStaticInnerClass obj1 = new NonStaticInnerClass();
        Person p1 = obj1.new Person(); 
    }
}