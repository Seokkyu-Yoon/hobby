package q7568;

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
    int[][] people = new int[n][2];
    int[] ranks = new int[n];
    for(int i = 0; i < n; i++) {
      String[] input = br.readLine().split(" ");
      people[i][0] = Integer.valueOf(input[0]);
      people[i][1] = Integer.valueOf(input[1]);
      ranks[i] = 1;
      for(int j = 0; j < i; j++) {
        if(people[i][0] > people[j][0] && people[i][1] > people[j][1]) {
          ranks[j]++;
        }
        if(people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
          ranks[i]++;
        }
      }
    }
    br.close();

    String result = "";
    for(int rank : ranks) {
      result += String.format("%d ", rank);
    }
    bw.write(result);
    bw.flush();
    bw.close();
  }
}