package q11004;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    String[] input = br.readLine().split(" ");
    int n = Integer.valueOf(input[0]);
    int k = Integer.valueOf(input[1]) - 1;
    input = br.readLine().split(" ");
    br.close();
    int[] a = new int[n];
    while(n-- > 0) {
      a[n] = Integer.valueOf(input[n]);
    }
    Arrays.sort(a);
    bw.write(String.valueOf(a[k]));
    bw.flush();
    bw.close();
  }
}