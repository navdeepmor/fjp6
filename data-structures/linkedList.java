import java.util.*;

public class linkedList{

    public class Node{
        int data;
        Node next;

        Node(){};

        Node(int data){
            this.data = data;
        }
    }

    public static int noNodeInCycle(Node head){
        Node fast = head;
        Node slow = head;

        while(fast != null && fast.next != null){
            fast = fast.next.next;
            slow = slow.next;

            if(fast == slow){
                int count = 0;
                Node remember = slow;
                while(slow != remember){
                    slow = slow.next;
                    count++;
                }
                return count;
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        
    }
}
