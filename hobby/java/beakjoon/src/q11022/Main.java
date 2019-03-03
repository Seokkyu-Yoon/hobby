package q11022;

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
    int testCase = 0;
    while(testCase++ < t) {
      String[] input = br.readLine().split(" ");
      int a = Integer.valueOf(input[0]);
      int b = Integer.valueOf(input[1]);
      int c = a + b;
      bw.write(String.format("Case #%d: %d + %d = %d\n", testCase, a, b, c));
    }
    br.close();
    bw.flush();
    bw.close();
  }
}