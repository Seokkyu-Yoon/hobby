package q1003;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    int t = Integer.valueOf(br.readLine());
    int[][] fibonacci_memo = new int[41][2];
    fibonacci_memo[0][0] = 1;
    fibonacci_memo[1][1] = 1;

    for(int i = 2; i < 41; i++) {
      fibonacci_memo[i][0] = fibonacci_memo[i - 1][0] + fibonacci_memo[i - 2][0];
      fibonacci_memo[i][1] = fibonacci_memo[i - 1][1] + fibonacci_memo[i - 2][1];
    }
    while(t-- > 0) {
      int n = Integer.valueOf(br.readLine());
      bw.write(String.format("%d %d\n", fibonacci_memo[n][0], fibonacci_memo[n][1]));
    }
    br.close();
    bw.flush();
    bw.close();
  }
}