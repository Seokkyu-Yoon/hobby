package q13137;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
  static int[] minCoin;

  public static void main(String[] args) throws IOException {
    int n = Integer.valueOf(br.readLine());
    String[] input = br.readLine().split(" ");
    br.close();

    int[] coin = new int[n];
    if (n < 3) {
      bw.write("Yes");
    } else {
      int maxPrice = Integer.valueOf(input[n - 2]) + Integer.valueOf(input[n - 1]) + 1;

      minCoin = new int[maxPrice];
      minCoin[0] = 0;
      for (int i = 0; i < n; i++) {
        coin[i] = Integer.valueOf(input[i]);
        minCoin[coin[i]] = 1;
      }
      
      boolean checker = true;
      for (int i = 1; i < maxPrice; i++) {
        if (minCoin[i] != 0)
          continue;

        int greedCount = 0;
        int temp = i;
        for(int j = n - 1; temp > 0; j--) {
          greedCount += temp / coin[j];
          temp = temp % coin[j];
        }

        int minCount = Integer.MAX_VALUE;
        for (int j = 0; j < n; j++) {
          if (i > coin[j]) {
            if (minCount > minCoin[i - coin[j]] + 1) {
              minCount = minCoin[i - coin[j]] + 1;
            }
          }
        }
        minCoin[i] = minCount;
        if (greedCount > minCount) {
          checker = false;
          break;
        }
      }
      if(checker) {
        bw.write("Yes");
      }
      else {
        bw.write("No");
      }
    }
    bw.flush();
    bw.close();
  }
}