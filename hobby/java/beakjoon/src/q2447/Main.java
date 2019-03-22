package q2447;

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
    
    int k = (int) Math.round(Math.log10(n) / Math.log10(3));
    for (int x = 0; x < n; x++) {
      for (int y = 0; y < n; y++) {
        boolean flag = false;
        for(int i = k - 1; i >= 0; i--) {
          if ((int)(x / Math.pow(3, i)) % 3 == 1 && (int)(y / Math.pow(3, i)) % 3 == 1) {
            flag = true;
            break;
          }
        }
        if(flag) {
          bw.write(" ");
        }
        else {
          bw.write("*");
        }
      }
      bw.write("\n");
    }
    bw.flush();
    bw.close();
  }
}