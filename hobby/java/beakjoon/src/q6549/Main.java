package q6549;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
  public static StringBuilder sb = new StringBuilder();
  public static StringTokenizer st;
  public static long[] histogram;
  public static void main(String[] args) throws IOException {
    int n = 0;
    do {
      st = new StringTokenizer(br.readLine());
      n = Integer.valueOf(st.nextToken());
      if(n > 0) {
        initHistogram(n);
        append(getMaxArea(n));
      }
    } while(n > 0);
    br.close();
    bw.write(sb.toString());
    bw.flush();
    bw.close();
  }

  public static void initHistogram(int n) {
    histogram = new long[n];
    for(int i = 0; i < n; i++) {
      histogram[i] = Integer.valueOf(st.nextToken());
    }
  }
  public static void append(long maxArea) {
    if(!sb.toString().isEmpty()) {
      sb.append("\n");
    }
    sb.append(String.valueOf(maxArea));
  }
  public static long getMaxArea(int n) {
    long maxArea = 0;
    for(int i = 0; i < n; i++) {
      if(histogram[i] == 0) continue;
      if(histogram[i] * n <= maxArea) continue;

      int count = 1;
      for(int left = i - 1; left >= 0; left--) {
        if(histogram[i] > histogram[left]) break;
        count++;
      }
      for(int right = i + 1; right < n; right++) {
        if(histogram[i] > histogram[right]) break;
        count++;
      }
      long area = count * histogram[i];
      if(area > maxArea) maxArea = area;
    }
    return maxArea;
  }
}