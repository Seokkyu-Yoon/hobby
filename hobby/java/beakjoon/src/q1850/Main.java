package q1850;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	public static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	public static void main(String[] args) throws IOException {
		String[] input = br.readLine().split(" ");
		br.close();
		long min = Math.min(Long.valueOf(input[0]), Long.valueOf(input[1]));
		long max = Math.max(Long.valueOf(input[0]), Long.valueOf(input[1]));
		while(min > 0) {
			long temp = max;
			max = min;
			min = temp % min;
		}
		for(long i = 0; i < max; i++) {
			bw.write("1");
		}
		bw.flush();
		bw.close();
	}
}