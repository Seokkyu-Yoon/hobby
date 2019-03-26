package q2263;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;
 
public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
  public static int[] postOrder;
  public static int[] inOrder;
  public static int[] inOrderIndex;
  public static void main(String[] args) throws IOException{
    int n = Integer.parseInt(br.readLine());
    
    inOrder = new int[n+1];
    inOrderIndex = new int[n+1];
    postOrder = new int[n+1];
    
    StringTokenizer st = new StringTokenizer(br.readLine());
    for(int i = 1; i <= n; i++) {
      inOrder[i] = Integer.parseInt(st.nextToken());
    }
    
    st = new StringTokenizer(br.readLine());
    for(int i = 1; i <= n; i++) {
      postOrder[i] = Integer.parseInt(st.nextToken());
    }
    br.close();
    
    for(int i = 1; i <= n; i++) {
      inOrderIndex[inOrder[i]] = i;
    }
    getPreOrder(1, n, 1, n);
    bw.flush();
    bw.close();
  }
  
  public static void getPreOrder(int startIn, int endIn, int startPost, int endPost) throws IOException {
    if(startIn > endIn || startPost > endPost) return;
    int root = postOrder[endPost];
    int rootIdx = inOrderIndex[root];
    int left = rootIdx - startIn;
  
    bw.write(String.format("%d ", root));
    
    getPreOrder(startIn, rootIdx - 1, startPost, startPost + left - 1);
    getPreOrder(rootIdx + 1, endIn, startPost + left, endPost - 1);
  }
}