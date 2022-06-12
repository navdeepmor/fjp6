import java.io.*;

import java.util.*;

public class Main {
  private static class Node {
    int data;
    ArrayList< Node> children = new ArrayList<>();
  }

  public static void display(Node node) {
    String str = node.data + " -> ";
    for (Node child : node.children) {
      str += child.data + ", ";
    }
    str += ".";
    System.out.println(str);

    for (Node child : node.children) {
      display(child);
    }
  }

  public static Node construct(int[] arr) {
    Node root = null;

    Stack< Node> st = new Stack< >();
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == -1) {
        st.pop();
      } else {
        Node t = new Node();
        t.data = arr[i];

        if (st.size() > 0) {
          st.peek().children.add(t);
        } else {
          root = t;
        }

        st.push(t);
      }
    }

    return root;
  }

  public static int size(Node node) {
    if (node == null) {
      return 0;
    }

    int sz = 1;
    for (Node child : node.children) {
      sz += size(child);
    }
    return sz;
  }

  public static class Pair{
    Node node;
    int level;

    Pair() {

    }

    Pair(Node newNode, int newLevel) {
        this.node = newNode;
        this.level = newLevel;
    }
  }

  public static void traversal3(Node root){
    Queue<Pair> que = new ArrayDeque<>();
    Pair rootPair = new Pair(root, 1);
    que.add(rootPair);
    int preLevel = 1;
    
    while(que.size() > 0) {
        Pair pair = que.remove();
        if(pair.level != preLevel) {
            System.out.println();
            preLevel++;
        }

        System.out.print(pair.node.data+" ");
        for(Node child: pair.node.children) {
            Pair newPair = new Pair(child, pair.level + 1);
            que.add(newPair);
        }
    }
  }

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int n = Integer.parseInt(br.readLine());
    int[] arr = new int[n];
    String[] values = br.readLine().split(" ");
    for (int i = 0; i < n; i++) {
      arr[i] = Integer.parseInt(values[i]);
    }

    Node root = construct(arr);
    // int sz = size(root);
    // System.out.println(sz);
    traversal3(root);
  }
}