import java.util.*;

public class ObjectCreation {

    static class Student {
        // During space allocation all data members are set to JAVA given default values
        // Parsing sets data members to class creator's defaults eg: maxScore and schoolName here and growthMultiple in ArrayList 
        int age;
        String name;
        String house;
        String shoolName = "DAV";                                                                   // static final String schoolName = "DAV";  because of static all object would share schoolName. 
        int maxScore = 100;                                                                         // static final int maxScore = 100;  because of final we wouldn't be able to change the value of maxScore later on
        // DBConnection dbconnection;
        // Directory studentFolder;
        int fees;

        // non-dynamic, non-static properties

        // non-dynamic static we would set here itself
        static int num1 = 10;                                                                            
        static String str1;
        // inside static block we would set dynamic static properties  
        static {                                                                                    // static block - kind of default constructor for static properties
            // str1 = read from database and set;
        }

        // For class creator to initialize data members which are dynamic eg: reading from a file or a db
        Student() {
            // this(0, "")                                                                          // it would make call to parameterized constructor                                                
            // dnconnetion = new DBConnection("<ip address>");
            // studentFolder = Files.read("..");
            // fees = dbconnection.getFees();
        }

        // For class user to set values to data members 
        Student(int age, String name) {
            // this();                                                                              // it would makes a call to default constructor, if make a call to default constru. them it has to be always first line. 
                                                                                                    // CONSTRUCTOR CHAINING: here inside parameterized constructor calling default const. 
            this.age = age;
            this.name = name;
        }
    }

    public static void main(String[] args) {
        Student s1 = new Student(10, "Sonu");
    }
}

/*

    
    Object creation [Line 21]:
        1. Space allocation & this assignment.
            - Space is allocated for all non-static data members.
            - Data members are assigned a default values (JAVA). this is set equal to the new object's address.  
                eg: 
                    byte   :  0                char    : '\0'  
                    int    :  0                boolean : false   
                    short  :  0                
                    long   :  0          
                    float  :  0.0        
                    double :  0.0        

                    Note: 
                        - Other then above mentioned datatype default value assign to them is null
        2. Parsing
            - Line 9 
                Class creator's default values are assigned to data members but only such values which are non-dynamic
                eg: 
                    growth multiple is set to 1.5 in ArrayList
                    rehashing threshold set in HashMap to 0.5
        3. static block
            - line 23
        4. Constructor fires (default or parameterised)
            - Default
                Class creator's default values are assigned to data members but only which are dynamic such as studentFolder or dbconnection 
            - Parametrized
                For class user to set values which he requires 
            Note:
                - If no constructor is provided then JAVA would adds the default constructor by itself.
                - If class creator provides a parameterized constructor then JAVA wouldn't add default constructor.
                
            1.         
                    |               |                         |---------------------|                   |-------------------|
                    |               |               this  4K  | age        : 0      |                   |                   |                   
                    |               |                         | name       : null   |             10K   |                   |
                    |               |                         | house      : null   |                   |                   |
                    |               |                         | schoolName : null   |                   |                   |
                    |               |                         |---------------------|                   |                   |
                    |               |                         |                     |                   |-------------------|    
                    |               |                         |                     |                       student class
                s1  |      4K       |                         |                     |               
                     ---------------                            
                          Stack                                        Heap       

            2.         
                    |               |                         |---------------------|                   |-------------------|
                    |               |               this  4K  | age        : 0      |                   |                   |                   
                    |               |                         | name       : null   |             10K   |                   |
                    |               |                         | house      : null   |                   |                   |
                    |               |                         | schoolName : "DAV"  |                   |                   |
                    |               |                         |---------------------|                   |                   |
                    |               |                         |                     |                   |-------------------|    
                    |               |                         |                     |                       student class
                s1  |      4K       |                         |                     |               
                     ---------------                            
                          Stack                                        Heap    

            4.         
                    |               |                         |---------------------|                   |-------------------|
                    |               |               this  4K  | age        : 0      |                   |                   |                   
                    |               |                         | name       : null   |             10K   |                   |
                    |               |                         | house      : null   |                   |                   |
                    |---------------|                         | schoolName : "DAV"  |                   |                   |
    Student()       |               |                         |---------------------|                   |                   |
              this  |      4K       |                         |                     |                   |-------------------|    
                    |---------------|                         |                     |                       student class
       main()       |               |                         |                     |               
                s1  |      4K       |
                     ---------------
                          Stack                                         Heap    

            
                                                                Property
                                                                   |
                                                     ------------------------------
                                                    |                              |
                                                 [shared]                      [separate]
                                                  static                       non-static  
                                                    |                              |
                                               ------------                  ---------------  
                                              |            |                |               |
                                        [non-dynamic]   [dynamic]         [user]        [class creator]
                                    eg: pi - Parsing    static block   parameterized        |
                                                                          constru.      ----------
                                                                                       |          |
                                                                                   [dynamic]   [non-dynamic]
                                                                                    default     Parsing
                                                                                                  eg: AL - gm
 */