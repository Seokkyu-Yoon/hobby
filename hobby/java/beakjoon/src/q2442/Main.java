package q2442;

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
    for(int i = 0; i < n; i++) {
      if(i > 0) {
        bw.write("\n");
      }
      for(int fs = 0; fs < n - 1 - i; fs++) {
        bw.write(" ");
      }
      for(int s = n - 1 - i; s < n + i; s++) {
        bw.write("*");
      }
    }
    br.close();
    bw.flush();
    bw.close();
  }
}