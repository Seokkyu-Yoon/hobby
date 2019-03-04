package q1001;

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
    bw.write(String.format("%d\n", Integer.valueOf(input[0]) - Integer.valueOf(input[1])));
    bw.flush();
    bw.close();
  }
}