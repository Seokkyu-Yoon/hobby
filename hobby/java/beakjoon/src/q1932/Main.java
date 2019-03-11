package q1932;

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
    int[][] triangle = new int[n][];
    for(int i = 0; i < n; i++) {
      triangle[i] = new int[i+1];
      String[] input = br.readLine().split(" ");
      for(int j = 0; j < i+1; j++) {
        triangle[i][j] = Integer.valueOf(input[j]);
      }
    }
    br.close();

    for(int i = n-1; i > 0; i--) {
      for(int j = 0; j < i; j++) {
        triangle[i-1][j] += Math.max(triangle[i][j], triangle[i][j+1]);
      }
    }
    bw.write(String.valueOf(triangle[0][0]));
    bw.flush();
    bw.close();
  }
}