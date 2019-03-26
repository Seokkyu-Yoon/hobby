package q1991;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    int n = Integer.valueOf(br.readLine());
    Node[] tree = makeTree(n);
    while(n-- > 0) {
      char[] input = br.readLine().toCharArray();
      int index = input[0] - 'A';
      int leftIndex = input[2];
      leftIndex = leftIndex == '.' ? -1 : leftIndex - 'A';
      int rightIndex = input[4];
      rightIndex = rightIndex == '.' ? -1 : rightIndex - 'A';
      if(leftIndex > -1) {
        tree[index].left = tree[leftIndex];
      }
      if(rightIndex > -1) {
        tree[index].right = tree[rightIndex];
      }
    }
    br.close();

    bw.write(String.format("%s\n", preOrder(tree[0])));
    bw.write(String.format("%s\n", inOrder(tree[0])));
    bw.write(String.format("%s", postOrder(tree[0])));
    bw.flush();
    bw.close();
  }

  public static Node[] makeTree(int n) {
    Node[] tree = new Node[n];
    for(int i = 0; i < n; i++) {
      tree[i] = new Node(String.format("%c", 'A' + i));
    }
    return tree;
  }
  public static String preOrder(Node node) {
    StringBuilder sb = new StringBuilder();
    sb.append(node.name);
    if(node.left != null) {
      sb.append(preOrder(node.left));
    }
    if(node.right != null) {
      sb.append(preOrder(node.right));
    }
    return sb.toString();
  }
  public static String inOrder(Node node) {
    StringBuilder sb = new StringBuilder();
    if(node.left != null) {
      sb.append(inOrder(node.left));
    }
    sb.append(node.name);
    if(node.right != null) {
      sb.append(inOrder(node.right));
    }
    return sb.toString();
  }
  public static String postOrder(Node node) {
    StringBuilder sb = new StringBuilder();
    if(node.left != null) {
      sb.append(postOrder(node.left));
    }
    if(node.right != null) {
      sb.append(postOrder(node.right));
    }
    sb.append(node.name);
    return sb.toString();
  }
}

class Node {
  String name;
  Node left;
  Node right;

  public Node(String name) {
    this.name = name;
  }
}