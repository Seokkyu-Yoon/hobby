package q3046;

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
    int r1 = Integer.valueOf(input[0]);
    int s = Integer.valueOf(input[1]) * 2;
    bw.write(String.format("%d", s - r1));
    bw.flush();
    bw.close();
  }
}