package q2588;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    int firstNum = Integer.valueOf(br.readLine());
    int secondNum = Integer.valueOf(br.readLine());
    br.close();

    int thirdNum =  firstNum * (secondNum % 10);
    bw.write(String.format("%d\n", thirdNum));
    int fourthNum = firstNum * ((secondNum % 100) / 10);
    bw.write(String.format("%d\n", fourthNum));
    int fifthNum = firstNum * (secondNum / 100);
    bw.write(String.format("%d\n", fifthNum));
    int sixthNum = firstNum * secondNum;
    bw.write(String.format("%d", sixthNum));
    bw.flush();
    bw.close();
  }
}