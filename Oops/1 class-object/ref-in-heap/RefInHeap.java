import java.util.*;

public class RefInHeap {

    static class Point {
        int x;
        int y;
    }

    static class Rectangle {
        Point tl;
        Point rb;
    }
    
    public static void main(String[] args) {
        Rectangle r1 = new Rectangle();
        r1.tl = new Point();
        r1.rb = new Point();
        
        r1.tl.x = 2;
        r1.tl.y = 4;

        r1.rb.x = 6;
        r1.rb.y = 1;

        System.out.println("x1: " + r1.tl.x + " | y1: " + r1.tl.y);
        System.out.println("x2: " + r1.rb.x + " | y2: " + r1.rb.y);

    }
}

/* 

    line 24 Execution diag:
                                                                            |---------------|
                                                                            | 30K           |                      Pt. class
                                                                       11K  |  x : 6        |                   |---------------|
                                                                            |  y : 1        |                   |  class's fn & |
                                                                            |---------------|               30K |  static menb. |
                                                                                                                |               |
                            |---------------|                               |---------------|                   |---------------|
                            |               |                               |  30K          | 
                            |               |                          10K  |   x : 2       |              
                            |---------------|                               |   y : 4       |                
                            |               |                               |---------------|                      Rect. class
                            |               |                                                                   |---------------|
                            |---------------|                               |---------------|                   |  Here class's |   
                            |               |                               |   20K         |                   |  fn. & static |
                            |               |                           7K  |   tl :  10K   |              20K  |  members lives|
                            |---------------|                               |   rb :  11K   |                   |               |
          Main      r1      |      7K       |                               |---------------|                   |---------------|
                            |               |                                     
                             ---------------                                     instance
 
*/
