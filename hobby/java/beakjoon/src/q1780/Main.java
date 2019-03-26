package q1780;

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
    int[][] paper = new int[n][n];
    for(int x = 0; x < n; x++) {
      String[] input = br.readLine().split(" ");
      for(int y = 0; y < n; y++) {
        paper[x][y] = Integer.valueOf(input[y]);
      }
    }
    
    int[] accCount = devide(paper, n, 0, 0);
    bw.write(String.format("%d\n%d\n%d", accCount[0], accCount[1], accCount[2]));
    br.close();
    bw.flush();
    bw.close();
  }

  public static int[] devide(int[][] paper, int size, int sX, int sY) throws IOException{
    int[] count = new int[3];
    if(size == 1) {
      count[paper[sX][sY]+1]++;
      return count;
    }
    for(int x = sX; x < sX+size; x++) {
      for(int y = sY; y < sY+size; y++) {
        if(paper[x][y] != paper[sX][sY]) {
          for(int mX = 0; mX < 3; mX++) {
            for(int mY = 0; mY < 3; mY++) {
              int[] dividedCount = devide(paper, size/3, sX+mX*size/3, sY+mY*size/3);
              for(int i = 0; i < 3; i++) {
                count[i] += dividedCount[i];
              }
            }
          }
          return count;
        }
      }
    }
    count[paper[sX][sY]+1]++;
    return count;
  }
}