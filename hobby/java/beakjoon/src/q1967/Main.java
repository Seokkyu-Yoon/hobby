package q1967;

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
    Node[] tree = new Node[n+1];
    for(int i = 1; i <= n; i++) {
      tree[i] = new Node();
    }
    for(int i = 0; i < n - 1; i++) {
      String[] input = br.readLine().split(" ");
      int pIndex = Integer.valueOf(input[0]);
      int cIndex = Integer.valueOf(input[1]);
      int weight = Integer.valueOf(input[2]);
      
      tree[cIndex].addParent(tree[pIndex], weight);
    }
    br.close();

    int maxDiameter = 0;
    for(int i = n; i > 1; i--) {
      int diameter = tree[i].getDiameter();
      if(diameter > maxDiameter) {
        maxDiameter = diameter;
      }
    }
    bw.write(String.valueOf(maxDiameter));
    bw.flush();
    bw.close();
  }
}

class Node {
  Edge parentTo;
  int maxWeight;

  public void addParent(Node parent, int weight) {
    this.parentTo = new Edge(parent, weight);
  }
  public Node getParent() {
    return parentTo.parent;
  }
  public void updateMaxWeight(int weight) {
    getParent().maxWeight = weight;
  }
  public int getDiameter() {
    int pWeight = getParent().maxWeight;
    int toWeight = maxWeight + parentTo.weight;
    updateMaxWeight(Math.max(pWeight, toWeight));
    return toWeight + pWeight;
  }
}

class Edge {
  Node parent;
  int weight;
  public Edge(Node parent, int weight) {
    this.parent = parent;
    this.weight = weight;
  }
}