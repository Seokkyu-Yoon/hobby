package q1463;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    int x = Integer.valueOf(br.readLine());
    br.close();
    if(x < 4) {
      bw.write(String.format("%d", x == 1 ? 0 : 1));
      bw.flush();
      bw.close();
      System.exit(0);
    }
    int[] dp = new int[x + 1];
    dp[2] = dp[3] = 1;
    for(int i = 4; i <= x; i++) {
      dp[i] = dp[i - 1];
      if(i % 2 == 0) {
        dp[i] = Math.min(dp[i], dp[i / 2]);
      }
      if(i % 3 == 0) {
        dp[i] = Math.min(dp[i], dp[i / 3]);
      }
      dp[i] += 1;
    }

    bw.write(String.format("%d", dp[x]));
    bw.flush();
    bw.close();
  }
}