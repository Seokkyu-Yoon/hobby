package q1002;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
  public static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  public static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  public static void main(String[] args) throws IOException {
    int t = Integer.valueOf(br.readLine());
    while(t-- > 0) {
      String[] input = br.readLine().split(" ");
      bw.write(String.format("%d\n", check(
        Integer.valueOf(input[0]), Integer.valueOf(input[1]), Integer.valueOf(input[2]),
        Integer.valueOf(input[3]), Integer.valueOf(input[4]), Integer.valueOf(input[5])
        )));
    }
    br.close();

    bw.write("\n");
    bw.flush();
    bw.close();
  }

  public static int check(int x1, int y1, int r1, int x2, int y2, int r2) {
    double distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    if ((distance == 0) && (r1 == r2))
		  return -1;
	  if ((distance < r1 + r2) && (distance > Math.abs(r1 - r2)))
		  return 2;
	  if ((r1 + r2 == distance) || (Math.abs(r1 - r2) == distance))
		  return 1;
    return 0;
  }
}