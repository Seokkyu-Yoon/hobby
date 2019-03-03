package q10101;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    int a = Integer.valueOf(br.readLine());
    int b = Integer.valueOf(br.readLine());
    int c = Integer.valueOf(br.readLine());
    if(a + b + c != 180) {
      bw.write("Error\n");
    }
    else {
      if(a == b || a == c || b == c) {
        if(a == b && b == c) {
          bw.write("Equilateral\n");
        }
        else {
          bw.write("Isosceles\n");  
        }
      }
      else {
        bw.write("Scalene\n");
      }
    }
    bw.write("\n");
    br.close();
    bw.flush();
    bw.close();
  }
}