package q2579;

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
    int[] dp = new int[n + 1];
    int[] stairs = new int[n + 1];
    dp[1] = stairs[1] = Integer.valueOf(br.readLine());
    if(n >= 2) {
      stairs[2] = Integer.valueOf(br.readLine());
      dp[2] = dp[1] + stairs[2];
    }
    for(int i = 3; i <= n; i++) {
      stairs[i] = Integer.valueOf(br.readLine());
      dp[i] = Math.max(dp[i-2] + stairs[i], dp[i-3] + stairs[i-1] + stairs[i]);
    }
    br.close();
    bw.write(String.format("%d", dp[n]));
    bw.flush();
    bw.close();
  }
}