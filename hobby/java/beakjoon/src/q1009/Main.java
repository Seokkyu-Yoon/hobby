package q1009;

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
    while(t-- > 0) {
      String[] input = br.readLine().split(" ");
      int a = Integer.valueOf(input[0]);
      int b = Integer.valueOf(input[1]);
      int value = 1;
      for(int i = 0; i < b; i++) {
        value = value * a % 10;
      }
      if(value == 0) {
        bw.write("1");
      }
      bw.write(String.valueOf(value));
      if(t > 0) {
        bw.write("\n");
      }
    }
    br.close();
    bw.flush();
    bw.close();
  }
}