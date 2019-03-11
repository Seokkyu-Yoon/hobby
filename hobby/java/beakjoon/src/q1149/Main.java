package q1149;

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
    int[][] house = new int[n][3];
    int[][] draw = new int[n][3];

    String[] input = br.readLine().split(" ");
    for(int j = 0; j < 3; j++) {
      house[0][j] = Integer.valueOf(input[j]);
      draw[0][j] = house[0][j];
    }
    
    for(int i = 1; i < n; i++) {
      input = br.readLine().split(" ");
      for(int j = 0; j < 3; j++) {
        house[i][j] = Integer.valueOf(input[j]);
        draw[i][j] = Math.min(draw[i-1][(j+1)%3], draw[i-1][(j+2)%3]) + house[i][j];
      }
    }

    bw.write(String.valueOf(Math.min(Math.min(Integer.valueOf(draw[n-1][0]), Integer.valueOf(draw[n-1][1])),Integer.valueOf(draw[n-1][2]))));
    br.close();
    bw.write("\n");
    bw.flush();
    bw.close();
  }
}