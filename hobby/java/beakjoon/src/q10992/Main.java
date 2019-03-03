package q10992;

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

    for(int i = 0; i < n - 1; i++) {
      for(int j = 0; j < n - 1 - i; j++) {
        bw.write(" ");
      }
      bw.write("*");
      if(i > 0) {
        for(int j = 0; j < 2 * i - 1; j++) {
          bw.write(" ");
        }
        bw.write("*");
      }
      bw.write("\n");
    }
    for(int i = 0; i < n * 2 - 1; i++) {
      bw.write("*");
    }
    bw.flush();
    bw.close();
  }
}