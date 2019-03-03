package q13900;

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
    String[] input = br.readLine().split(" ");
    br.close();

    long result = 0;
    long acc = 0;
    for(int i = 0; i < n; i++) {
      acc += Integer.valueOf(input[i]);
    }
    for(int i = 0; i < n - 1; i++) {
      int value = Integer.valueOf(input[i]);
      acc -= value;
      result += value * acc;
    }
    bw.write(String.format("%d", result));
    bw.flush();
    bw.close();
  }
}