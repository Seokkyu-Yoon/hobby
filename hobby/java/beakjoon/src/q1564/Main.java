package q1564;

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
    br.close();
    long factorial = 1;
    for(int i = 1; i <= n; i++) {
      factorial *= i;
      while(factorial % 10 == 0) {
        factorial /= 10;
      }
      factorial = factorial % 1000000000000L;
    }

    String fact = String.valueOf(factorial % 100000);
    for(int i = fact.length(); i < 5; i++) {
      bw.write("0");
    }
    bw.write(fact);
    bw.flush();
    bw.close();
  }
}