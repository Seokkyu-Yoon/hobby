package q6986;

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
    int k = Integer.valueOf(input[1]);

    double[] scores = new double[n];
    for(int i = 0; i < n; i++) {
      scores[i] = Double.valueOf(br.readLine());
    }
    br.close();
    
    Arrays.sort(scores);
    bw.write(getTrimmedMean(scores, n, k) + "\n");
    bw.write(getAdjustMean(scores, n, k) + "\n");
    bw.flush();
    bw.close();
  }

  //절사 평균
  public static String getTrimmedMean(double[] scores, int n, int k) {
    double accScores = 0;
    for(int i = k; i < n - k; i++) {
      accScores += scores[i];
    }
    return String.format("%.2f", accScores / (n - k * 2));
  }

  //보정 평균
  public static String getAdjustMean(double[] scores, int n, int k) {
    double accScores = scores[k] * k;
    for(int i = k; i < n - k; i++) {
      accScores += scores[i];
    }
    accScores += scores[n - k - 1] * k;
    return String.format("%.2f", accScores / n);
  }
}