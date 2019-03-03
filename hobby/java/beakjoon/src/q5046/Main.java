package q5046;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    String[] input = br.readLine().split(" ");
    int n = Integer.valueOf(input[0]);
    int b = Integer.valueOf(input[1]);
    int h = Integer.valueOf(input[2]);
    int w = Integer.valueOf(input[3]);
    int min = b + 1;
    while(h-- > 0) {
      int price = Integer.valueOf(br.readLine()) * n;
      input = br.readLine().split(" ");
      if(price < min) {
        for(int i = 0; i < w; i++) {
          if(n <= Integer.valueOf(input[i])) {
            min = price;
            break;
          }
        }
      }
    }
    br.close();
    if(min > b) {
      bw.write("stay home");
    }
    else {
      bw.write(String.format("%d\n", min));
    }
    bw.flush();
    bw.close();
  }
}