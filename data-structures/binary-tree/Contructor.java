import java.util.*;

public class Contructor {

    public static class Node {
        int data;
        Node left;
        Node right;

        Node () {

        }

        Node(int newData) {
            this.data = newData;
        }
    }
    
    public static class Pair {
        Node node;
        int state;

        Pair() {

        }

        Pair(Node newNode, int newState) {
            this.node = newNode;
            this.state = newState;
        }
    }

    public static Node constructBT(Integer[] arr) {
        Node root = new Node(arr[0]);
        Stack<Pair> st = new Stack<>();
        st.push(new Pair(root, 1));

        int idx = 0;
        while(st.size() > 0) {
            Pair top = st.peek();

            if(top.state == 1) {
                top.state++;
                if(arr[++idx] != null) {
                    Node newLeftNode =  new Node(arr[idx]);
                    top.node.left = newLeftNode;
                    st.push(new Pair(newLeftNode, 1));
                }
            } else if(top.state == 2) {
                top.state++;
                if(arr[++idx] != null) {
                    Node newRightNode = new Node(arr[idx]);
                    top.node.right = newRightNode;
                    st.push(new Pair(newRightNode, 1));
                }
            } else {
                st.pop();
            }
        }

        return root;
    }

    public static void displayBT(Node root) {
        String str = "";
        str += root.left != null ? root.left.data + " <- " : ".  <- ";
        str += root.data;
        str += root.right != null ? " -> " + root.right.data : " ->  .";

        System.out.println(str);
        if(root.left != null) displayBT(root.left);
        if(root.right != null) displayBT(root.right);
    }

    public static void traversalBT(Node root) {
        StringBuilder preOrder = new StringBuilder("");
        StringBuilder inOrder = new StringBuilder("");
        StringBuilder postOrder = new StringBuilder("");

        Stack<Pair> st = new Stack<>();
        st.push(new Pair(root, 1));

        while(st.size() > 0) {
            Pair top = st.peek();
            if(top.state == 1) {
                preOrder.append(top.node.data + " ");
                top.state++;
                if(top.node.left != null) st.push(new Pair(top.node.left, 1));
            } else if(top.state == 2) {
                inOrder.append(top.node.data + " ");
                top.state++;
                if(top.node.right != null) st.push(new Pair(top.node.right, 1));
            } else {
                postOrder.append(top.node.data+" ");
                st.pop();
            }
        }

        System.out.println(preOrder);
        System.out.println(inOrder);
        System.out.println(postOrder);
    }

    public static void preOrderTraversalBT(Node root) {
        if(root == null) return;
        
        System.out.print(root.data + " ");
        preOrderTraversalBT(root.left);
        preOrderTraversalBT(root.right);
    }

    public static void inOrderTraversalBT(Node root) {
        if(root == null) return;

        inOrderTraversalBT(root.left);
        System.out.print(root.data + " ");
        inOrderTraversalBT(root.right);
    }

    public static void postOrderTraversalBT(Node root) {
        if(root == null) return;

        postOrderTraversalBT(root.left);
        postOrderTraversalBT(root.right);
        System.out.print(root.data + " ");
    }

    public static void main(String[] args) {
        // System.out.println("Enter no. of values");
        // Scanner scn = new Scanner(System.in);
        // int n = scn.nextInt();
        Integer[] arr = { 50, 25, 12, null, null, 37, 30, null, null, null, 75, 62, null, 70, null, null, 87, null, null };
        // int[] arr = new int[n];
        // for(int i = 0; i < n; i++){
        //     arr[i] = scn.nextInt();
        // }

        Node root = constructBT(arr);
        preOrderTraversalBT(root);
        System.out.println();
        inOrderTraversalBT(root);
        System.out.println();
        postOrderTraversalBT(root);
    }
}
