package q1038;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    int[] value = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    int[] cursor = new int[10];
    int n = Integer.valueOf(br.readLine());
    br.close();

    int cIndex = 0;
    while(n-- > 0) {
      cursor[0]++;
      for(int i = 0; i < 9; i++) {
        if(i < cIndex) {
          if(cursor[i] >= cursor[i+1]) {
            cursor[i] = i;
            cursor[i+1]++;
          }
        }
      }
      if(cursor[cIndex] == 10) {
        cIndex++;
        if(cIndex == 10) break;
        for(int i = cIndex; i >= 0; i--) {
          cursor[i] = i;
        }
      }
    }
    if(cIndex > 9) bw.write("-1");
    else {
      String result = "";
      for(int i = 9; i >= 0; i--) {
        result += value[cursor[i]];
      }
      int index = 9;
      char[] resultCharArr = result.toCharArray();
      for(int i = 0; i < 10; i++) {
        if(resultCharArr[i] != '0') {
          index = i;
          break;
        }
      }
      bw.write(result.substring(index));
    }
    bw.flush();
    bw.close();
  }
}