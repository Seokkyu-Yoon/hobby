package q1547;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	public static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	public static void main(String[] args) throws IOException {
		int m = Integer.valueOf(br.readLine());
		int cup = 1;
		while(m-- > 0) {
			String[] input = br.readLine().split(" ");
			int x = Integer.valueOf(input[0]);
			int y = Integer.valueOf(input[1]);
			if(x == cup) {
				cup = y;
			}
			else if(y == cup) {
				cup = x;
			}
		}
		br.close();
		bw.write(String.valueOf(cup) + "\n");
		bw.flush();
		bw.close();
	}
}