package q2475;

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
    br.close();

    int checkNumber = 0;
    for(int i = 0; i < 5; i++) {
      checkNumber += (int)Math.pow(Integer.valueOf(input[i]), 2);
    }
    bw.write(String.valueOf(checkNumber % 10) + "\n");
    bw.flush();
    bw.close();
  }
}