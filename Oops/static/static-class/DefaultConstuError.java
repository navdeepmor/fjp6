import java.util.*;

public class DefaultConstuError {

    static class Student {
        int age;
        String name;

        Student(int age, String name) {
            this.age = age;
            this.name = name;
        }
    }

    public static void main(String[] args) {
        //Student s1 = new Student(); // error, no default constructor is provided by JAVA itself if parametrized constructor is def. by class creator.
        Student s2 = new Student(17, "Lalu");
    }
}
