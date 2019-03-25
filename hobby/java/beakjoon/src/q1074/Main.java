package q1074;

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

    int n = (int)Math.pow(2, Integer.valueOf(input[0]));
    int r = Integer.valueOf(input[1]);
    int c = Integer.valueOf(input[2]);
    bw.write(String.format("%d", calculateMatrix(n, r, c, 0, 0, 0)));
    bw.flush();
    bw.close();
  }

  public static int calculateMatrix(int size, int r, int c, int leftUpX, int leftUpY, int basedNum) {
    if(leftUpX == r && leftUpY == c) return basedNum;
    int resize = size/2;
    int flag = 0;
    int mX = leftUpX;
    int mY = leftUpY;
    if(r >= mX + resize) {
      flag+=2;
      mX += resize;
    }
    if(c >= mY + resize) {
      flag++;
      mY += resize;
    }
    int newBaseNum = basedNum + flag*(int)Math.pow(resize, 2);
    return calculateMatrix(resize, r, c, mX, mY, newBaseNum);
  }
}