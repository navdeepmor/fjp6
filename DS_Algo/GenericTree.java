import java.util.*;

public class Main{

    public static class Node{
        int data;
        ArrayList<Node> children = new ArrayList<>();
    }

    public static void main(String[] args){
        int[] inputArr = {10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1, -1};

        Stack<Node> st = new Stack<>();
        Node root;

        for(int i = 0; i < inputArr.length; i++){
            if(inputArr[i] == -1){
                st.pop();
            } else {
                Node child = new Node();
                child.data = inputArr[i];
                if(st.size() > 0){
                    st.peek().children.add(child);
                } else {
                    root = child;
                }
                st.push(child);
            }
        }
    }

}