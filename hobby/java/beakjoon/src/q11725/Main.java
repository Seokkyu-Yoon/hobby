package q11725;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
  public static void main(String[] args) throws IOException {
    int n = Integer.valueOf(br.readLine());
    Node[] tree = new Node[n + 1];
    for(int i = 0; i <= n; i++) {
      tree[i] = new Node(i);
    }
    tree[0].addLink(1);
    tree[1].parent = tree[0];

    for(int i = 0; i < n - 1; i++) {
      String[] input = br.readLine().split(" ");
      int link1 = Integer.valueOf(input[0]);
      int link2 = Integer.valueOf(input[1]);

      tree[link1].addLink(link2);
      tree[link2].addLink(link1);
    }
    br.close();
    
    setParent(tree, tree[1]);
    for(int i = 2; i <= n; i++) {
      bw.write(String.format("%d\n", tree[i].parent.num));
    }
    bw.flush();
    bw.close();
  }

  public static void setParent(Node[] tree, Node node) {
    for(int link : node.links) {
      if(tree[link].num != node.parent.num) {
        tree[link].addParent(node);
        setParent(tree, tree[link]);
      }
    }
  }
}
class Node {
  int num;
  Node parent;
  ArrayList<Integer> links = new ArrayList<Integer>();
  public Node(int num) {
    this.num = num;
  }
  public void addLink(int link) {
    links.add(link);
  }
  public void addParent(Node pNode) {
    parent = pNode;
  }
}