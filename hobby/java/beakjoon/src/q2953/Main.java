package q2953;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    int first = 0;
    int max = 0;
    for(int i = 0; i < 5; i++) {
      String[] input = br.readLine().split(" ");
      int score = 0;
      for(int j = 0; j < 4; j++) {
        score += Integer.valueOf(input[j]);
      }
      if(score > max) {
        max = score;
        first = i + 1;
      }
    }
    br.close();
    bw.write(String.valueOf(first) + " " + String.valueOf(max));
    bw.flush();
    bw.close();
  }
}