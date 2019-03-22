package q2740;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    String[] input = br.readLine().split(" ");
    int n = Integer.valueOf(input[0]);
    int m = Integer.valueOf(input[1]);
    int[][] a = new int[n][m];
    for(int x = 0; x < n; x++) {
      input = br.readLine().split(" ");
      for(int y = 0; y < m; y++) {
        a[x][y] = Integer.valueOf(input[y]);
      }
    }
    int k = Integer.valueOf(br.readLine().split(" ")[1]);
    int[][] b = new int[m][k];
    for(int x = 0; x < m; x++) {
      input = br.readLine().split(" ");
      for(int y = 0; y < k; y++) {
        b[x][y] = Integer.valueOf(input[y]);
      }
    }
    br.close();

    for(int x = 0; x < n; x++) {
      if(x > 0) bw.write("\n");
      for(int y = 0; y < k; y++) {
        if(y > 0) bw.write(" ");
        int value = 0;
        for(int i = 0; i < m; i++) {
          value += a[x][i] * b[i][y];
        }
        bw.write(String.format("%d", value));
      }
    }
    bw.flush();
    bw.close();
  }
}