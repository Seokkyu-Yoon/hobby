package q1094;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	public static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	public static void main(String[] args) throws IOException {
		int x = Integer.valueOf(br.readLine());
		int stick = 64, count = 0, value = 0;
		while(value < x) {
			if(stick + value > x) {
				stick /= 2;
			}
			else {
				value += stick;
				count++;
			}
		}
		br.close();
		bw.write(String.valueOf(count) + "\n");
		bw.flush();
		bw.close();
	}
}