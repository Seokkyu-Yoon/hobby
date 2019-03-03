package q10818;

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
    String[] numbers = br.readLine().split(" ");
    br.close();
    int min = 1000000;
    int max = -1000000;
    for(String number : numbers) {
      int value = Integer.valueOf(number);
      if(value < min)
        min = value;
      if(value > max)
        max = value;
    }
    bw.write(String.format("%d %d", min, max));
    bw.flush();
    bw.close();
  }
}