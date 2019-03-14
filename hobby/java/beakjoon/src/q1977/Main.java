package q1977;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    int m = Integer.valueOf(br.readLine());
    int n = Integer.valueOf(br.readLine());
    br.close();
    int sum = 0;
    int minRoot = Integer.MAX_VALUE;
    for(int i = m; i <= n; i++) {
      double root = Math.sqrt(i);
      if(root == (int)root) {
        sum += i;
        if(minRoot > i) {
          minRoot = i;
        }
      }
    }
    if(sum > 0) {
      bw.write(String.format("%d\n%d", sum, minRoot));
    }
    else {
      bw.write("-1");
    }
    bw.flush();
    bw.close();
  }
}